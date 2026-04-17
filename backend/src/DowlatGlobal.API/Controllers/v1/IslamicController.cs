using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers.v1;

[ApiController]
[Route("api/v1/[controller]")]
public class IslamicController : ControllerBase
{
    private readonly IIslamicService _islamicService;
    public IslamicController(IIslamicService islamicService) { _islamicService = islamicService; }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _islamicService.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) => Ok(await _islamicService.GetByIdAsync(id));

    [HttpGet("type/{type}")]
    public async Task<IActionResult> GetByType(string type) => Ok(await _islamicService.GetByTypeAsync(type));
}
