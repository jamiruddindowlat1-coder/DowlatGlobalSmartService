$infra = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Infrastructure"
$core = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Core"
$api = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.API"

# JWT Service
Set-Content "$infra\Services\JwtService.cs" @"
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using DowlatGlobal.Core.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DowlatGlobal.Infrastructure.Services;

public class JwtService
{
    private readonly IConfiguration _config;

    public JwtService(IConfiguration config)
    {
        _config = config;
    }

    public string GenerateToken(User user)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:SecretKey"]!));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.FullName),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var token = new JwtSecurityToken(
            issuer: _config["JwtSettings:Issuer"],
            audience: _config["JwtSettings:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(double.Parse(_config["JwtSettings:ExpiryMinutes"]!)),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
"@

# Auth DTOs
New-Item -ItemType Directory -Force -Path "$core\DTOs\Auth" | Out-Null

Set-Content "$core\DTOs\Auth\LoginRequestDto.cs" @"
namespace DowlatGlobal.Core.DTOs.Auth;

public class LoginRequestDto
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
"@

Set-Content "$core\DTOs\Auth\LoginResponseDto.cs" @"
namespace DowlatGlobal.Core.DTOs.Auth;

public class LoginResponseDto
{
    public string Token { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
}
"@

Set-Content "$core\DTOs\Auth\RegisterRequestDto.cs" @"
namespace DowlatGlobal.Core.DTOs.Auth;

public class RegisterRequestDto
{
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
"@

# Auth Controller
New-Item -ItemType Directory -Force -Path "$api\Controllers\v1" | Out-Null

Set-Content "$api\Controllers\v1\AuthController.cs" @"
using DowlatGlobal.Core.DTOs.Auth;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Exceptions;
using DowlatGlobal.Core.Interfaces.Repositories;
using DowlatGlobal.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers.v1;

[ApiController]
[Route("api/v1/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly JwtService _jwtService;

    public AuthController(IUserRepository userRepository, JwtService jwtService)
    {
        _userRepository = userRepository;
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDto dto)
    {
        var user = await _userRepository.GetByEmailAsync(dto.Email);
        if (user == null || !BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
            return Unauthorized(new { message = "Invalid email or password." });

        var token = _jwtService.GenerateToken(user);
        return Ok(new LoginResponseDto
        {
            Token = token,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role,
            ExpiresAt = DateTime.UtcNow.AddMinutes(60)
        });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequestDto dto)
    {
        if (await _userRepository.EmailExistsAsync(dto.Email))
            return BadRequest(new { message = "Email already exists." });

        var user = new User
        {
            FullName = dto.FullName,
            Email = dto.Email,
            Phone = dto.Phone,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            Role = "User",
            IsActive = true
        };

        await _userRepository.AddAsync(user);
        var token = _jwtService.GenerateToken(user);

        return Ok(new LoginResponseDto
        {
            Token = token,
            FullName = user.FullName,
            Email = user.Email,
            Role = user.Role,
            ExpiresAt = DateTime.UtcNow.AddMinutes(60)
        });
    }
}
"@

Write-Host "✅ JWT Authentication code add হয়েছে!" -ForegroundColor Green