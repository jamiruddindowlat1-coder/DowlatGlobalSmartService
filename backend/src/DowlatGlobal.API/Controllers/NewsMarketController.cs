using System;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class NewsMarketController : ControllerBase
    {
        private readonly IPortalService _portalService;

        public NewsMarketController(IPortalService portalService)
        {
            _portalService = portalService;
        }

        [HttpGet("world_news")]
        public async Task<IActionResult> GetWorldNews() => Ok(await _portalService.GetItemsByPortalKeyAsync("world_news"));

        [HttpGet("bd_news")]
        public async Task<IActionResult> GetBdNews() => Ok(await _portalService.GetItemsByPortalKeyAsync("bd_news"));

        [HttpGet("share_market")]
        public async Task<IActionResult> GetShareMarket() => Ok(await _portalService.GetItemsByPortalKeyAsync("share_market"));

        [HttpGet("share_index")]
        public async Task<IActionResult> GetShareIndex() => Ok(await _portalService.GetItemsByPortalKeyAsync("share_index"));

        [HttpGet("share_news_bd")]
        public async Task<IActionResult> GetShareNewsBd() => Ok(await _portalService.GetItemsByPortalKeyAsync("share_news_bd"));

        [HttpPost]
        public async Task<IActionResult> AddItem([FromBody] PortalItem item) =>
            Ok(await _portalService.AddItemAsync(item));
    }
}
