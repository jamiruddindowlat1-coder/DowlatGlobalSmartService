using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers.v1;

[ApiController]
[Route("api/v1/[controller]")]
public class ServicesController : ControllerBase
{
    private readonly IServiceRepository _serviceRepository;
    public ServicesController(IServiceRepository serviceRepository) { _serviceRepository = serviceRepository; }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _serviceRepository.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) => Ok(await _serviceRepository.GetByIdAsync(id));

    [HttpGet("category/{category}")]
    public async Task<IActionResult> GetByCategory(string category) => Ok(await _serviceRepository.GetByCategoryAsync(category));
}