using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers.v1;

[ApiController]
[Route("api/v1/[controller]")]
public class TicketController : ControllerBase
{
    private readonly ITicketService _ticketService;
    public TicketController(ITicketService ticketService) { _ticketService = ticketService; }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await _ticketService.GetAllAsync());

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) => Ok(await _ticketService.GetByIdAsync(id));

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) { await _ticketService.DeleteAsync(id); return NoContent(); }
}
