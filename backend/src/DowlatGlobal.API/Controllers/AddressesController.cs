using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AddressesController : ControllerBase
{
    private readonly IAddressService _addressService;

    public AddressesController(IAddressService addressService)
    {
        _addressService = addressService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() =>
        Ok(await _addressService.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) =>
        Ok(await _addressService.GetByIdAsync(id));

    [HttpGet("district/{district}")]
    public async Task<IActionResult> GetByDistrict(string district) =>
        Ok(await _addressService.GetByDistrictAsync(district));
}
