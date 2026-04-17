using System;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class EntertainmentController : ControllerBase
    {
        private readonly IPortalService _portalService;

        public EntertainmentController(IPortalService portalService)
        {
            _portalService = portalService;
        }

        [HttpGet("bd_games")]
        public async Task<IActionResult> GetBdGames() => Ok(await _portalService.GetItemsByPortalKeyAsync("bd_games"));

        [HttpGet("mobilepc_games")]
        public async Task<IActionResult> GetMobileGames() => Ok(await _portalService.GetItemsByPortalKeyAsync("mobilepc_games"));

        [HttpGet("physical_games")]
        public async Task<IActionResult> GetPhysicalGames() => Ok(await _portalService.GetItemsByPortalKeyAsync("physical_games"));

        [HttpGet("bdtv")]
        public async Task<IActionResult> GetBdTv() => Ok(await _portalService.GetItemsByPortalKeyAsync("bdtv"));

        [HttpGet("worldtv")]
        public async Task<IActionResult> GetWorldTv() => Ok(await _portalService.GetItemsByPortalKeyAsync("worldtv"));

        [HttpGet("worldcup")]
        public async Task<IActionResult> GetWorldCup() => Ok(await _portalService.GetItemsByPortalKeyAsync("worldcup"));

        [HttpGet("comedy")]
        public async Task<IActionResult> GetComedy() => Ok(await _portalService.GetItemsByPortalKeyAsync("comedy"));

        [HttpPost]
        public async Task<IActionResult> AddItem([FromBody] PortalItem item) =>
            Ok(await _portalService.AddItemAsync(item));
    }
}
