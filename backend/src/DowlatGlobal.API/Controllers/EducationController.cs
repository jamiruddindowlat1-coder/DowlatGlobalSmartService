using System;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class EducationController : ControllerBase
    {
        private readonly IPortalService _portalService;

        public EducationController(IPortalService portalService)
        {
            _portalService = portalService;
        }

        // Endpoint: api/v1/Education/coaching
        [HttpGet("coaching")]
        public async Task<IActionResult> GetCoaching() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("coaching"));

        [HttpGet("english_all")]
        public async Task<IActionResult> GetEnglish() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("english_all"));

        [HttpGet("hsc_subject")]
        public async Task<IActionResult> GetHsc() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("hsc_subject"));

        [HttpGet("ssc_subject")]
        public async Task<IActionResult> GetSsc() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("ssc_subject"));

        [HttpGet("tutorial")]
        public async Task<IActionResult> GetTutorials() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("tutorial"));

        [HttpGet("language")]
        public async Task<IActionResult> GetLanguage() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("language"));

        [HttpGet("alllanguage")]
        public async Task<IActionResult> GetAllLanguage() => 
            Ok(await _portalService.GetItemsByPortalKeyAsync("alllanguage"));

        [HttpPost]
        public async Task<IActionResult> AddItem([FromBody] PortalItem item) =>
            Ok(await _portalService.AddItemAsync(item));
    }
}
