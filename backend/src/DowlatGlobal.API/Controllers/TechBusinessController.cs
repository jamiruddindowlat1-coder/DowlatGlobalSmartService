using System;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace DowlatGlobal.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TechBusinessController : ControllerBase
    {
        private readonly IPortalService _portalService;

        public TechBusinessController(IPortalService portalService)
        {
            _portalService = portalService;
        }

        [HttpGet("business")]
        public async Task<IActionResult> GetBusiness() => Ok(await _portalService.GetItemsByPortalKeyAsync("business"));
        
        [HttpGet("software")]
        public async Task<IActionResult> GetSoftware() => Ok(await _portalService.GetItemsByPortalKeyAsync("software"));

        [HttpGet("software_learning")]
        public async Task<IActionResult> GetSoftwareLearning() => Ok(await _portalService.GetItemsByPortalKeyAsync("software_learning"));

        [HttpGet("social")]
        public async Task<IActionResult> GetSocial() => Ok(await _portalService.GetItemsByPortalKeyAsync("social"));

        [HttpGet("social_index")]
        public async Task<IActionResult> GetSocialIndex() => Ok(await _portalService.GetItemsByPortalKeyAsync("social_index"));

        [HttpGet("tourist")]
        public async Task<IActionResult> GetTourist() => Ok(await _portalService.GetItemsByPortalKeyAsync("tourist"));

        [HttpGet("tourist_communication")]
        public async Task<IActionResult> GetTouristCommunication() => Ok(await _portalService.GetItemsByPortalKeyAsync("tourist_communication"));

        [HttpGet("communication")]
        public async Task<IActionResult> GetCommunication() => Ok(await _portalService.GetItemsByPortalKeyAsync("communication"));

        [HttpGet("world_tel")]
        public async Task<IActionResult> GetWorldTel() => Ok(await _portalService.GetItemsByPortalKeyAsync("world_tel"));

        [HttpGet("share_world")]
        public async Task<IActionResult> GetShareWorld() => Ok(await _portalService.GetItemsByPortalKeyAsync("share_world"));

        [HttpPost]
        public async Task<IActionResult> AddItem([FromBody] PortalItem item) =>
            Ok(await _portalService.AddItemAsync(item));
    }
}
