$corePath = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Core"
$infraPath = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Infrastructure"

New-Item -ItemType Directory -Force "$corePath\DTOs\Auth" | Out-Null
New-Item -ItemType Directory -Force "$corePath\DTOs\User" | Out-Null
New-Item -ItemType Directory -Force "$corePath\Entities" | Out-Null
New-Item -ItemType Directory -Force "$corePath\Exceptions" | Out-Null
New-Item -ItemType Directory -Force "$corePath\Interfaces\Repositories" | Out-Null
New-Item -ItemType Directory -Force "$corePath\Interfaces\Services" | Out-Null

New-Item -ItemType Directory -Force "$infraPath\Data" | Out-Null
New-Item -ItemType Directory -Force "$infraPath\Repositories" | Out-Null
New-Item -ItemType Directory -Force "$infraPath\Services" | Out-Null

# DTOs
@"
namespace DowlatGlobal.Core.DTOs.Auth
{
    public class LoginRequestDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
"@ | Out-File -Encoding utf8 "$corePath\DTOs\Auth\LoginRequestDto.cs"

@"
namespace DowlatGlobal.Core.DTOs.Auth
{
    public class RegisterRequestDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
"@ | Out-File -Encoding utf8 "$corePath\DTOs\Auth\RegisterRequestDto.cs"

@"
using System;
namespace DowlatGlobal.Core.DTOs.Auth
{
    public class LoginResponseDto
    {
        public string Token { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public DateTime ExpiresAt { get; set; }
    }
}
"@ | Out-File -Encoding utf8 "$corePath\DTOs\Auth\LoginResponseDto.cs"

@"
namespace DowlatGlobal.Core.DTOs.User
{
    public class UserRequestDto
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}
"@ | Out-File -Encoding utf8 "$corePath\DTOs\User\UserRequestDto.cs"

# Entities
@"
namespace DowlatGlobal.Core.Entities
{
    public class User
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public bool IsActive { get; set; }
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Entities\User.cs"

@"
using System;
namespace DowlatGlobal.Core.Exceptions
{
    public class ApiException : Exception
    {
        public ApiException() { }
        public ApiException(string message) : base(message) { }
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Exceptions\Exceptions.cs"

# Interfaces
@"
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IAddressService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<IEnumerable<object>> GetByDistrictAsync(string district);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Services\IAddressService.cs"

@"
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IIslamicService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<IEnumerable<object>> GetByTypeAsync(string type);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Services\IIslamicService.cs"

@"
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface ITicketService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task DeleteAsync(int id);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Services\ITicketService.cs"

@"
using System.Collections.Generic;
using System.Threading.Tasks;
using DowlatGlobal.Core.DTOs.User;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IUserService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<object> CreateAsync(UserRequestDto dto);
        Task UpdateAsync(int id, UserRequestDto dto);
        Task DeleteAsync(int id);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Services\IUserService.cs"

@"
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Repositories
{
    public interface IServiceRepository
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<IEnumerable<object>> GetByCategoryAsync(string category);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Repositories\IServiceRepository.cs"

@"
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
namespace DowlatGlobal.Core.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<User?> GetByEmailAsync(string email);
        Task<bool> EmailExistsAsync(string email);
        Task AddAsync(User user);
    }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Repositories\IUserRepository.cs"

# Infrastructure Services
@"
using DowlatGlobal.Core.Entities;
namespace DowlatGlobal.Infrastructure.Services
{
    public class JwtService
    {
        public string GenerateToken(User user)
        {
            return "mock-jwt-token";
        }
    }
}
"@ | Out-File -Encoding utf8 "$infraPath\Services\JwtService.cs"

@"
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Repositories;
using System.Threading.Tasks;
namespace DowlatGlobal.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        public Task<User?> GetByEmailAsync(string email) => Task.FromResult((User?)null);
        public Task<bool> EmailExistsAsync(string email) => Task.FromResult(false);
        public Task AddAsync(User user) => Task.CompletedTask;
    }
}
"@ | Out-File -Encoding utf8 "$infraPath\Repositories\UserRepository.cs"

@"
using Microsoft.EntityFrameworkCore;
namespace DowlatGlobal.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
"@ | Out-File -Encoding utf8 "$infraPath\Data\ApplicationDbContext.cs"

@"
namespace DowlatGlobal.Core.Interfaces.Repositories {}
"@ | Out-File -Encoding utf8 "$infraPath\Repositories\PlaceHolder.cs"
