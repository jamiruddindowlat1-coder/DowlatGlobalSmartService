using System;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class IslamicController : ControllerBase
    {
        private readonly IPortalService _portalService;

        public IslamicController(IPortalService portalService)
        {
            _portalService = portalService;
        }

        // Endpoint: api/v1/Islamic/quran
        [HttpGet("quran")]
        public async Task<IActionResult> GetQuranData() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("quran"));

        // Endpoint: api/v1/Islamic/hadith
        [HttpGet("hadith")]
        public async Task<IActionResult> GetHadithData() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("hadith"));

        // Endpoint: api/v1/Islamic/waz
        [HttpGet("waz")]
        public async Task<IActionResult> GetWazData() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("waz"));

        // Admin: Add new islamic item
        [HttpPost]
        public async Task<IActionResult> AddIslamicItem([FromBody] PortalItem item) =>
            Ok(await _portalService.AddItemAsync(item));
    }
}
