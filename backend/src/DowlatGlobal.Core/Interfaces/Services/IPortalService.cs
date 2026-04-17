using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;

namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IPortalService
    {
        Task<IEnumerable<PortalItem>> GetAllItemsAsync();
        Task<IEnumerable<PortalItem>> GetItemsByPortalKeyAsync(string portalKey);
        Task<PortalItem> GetItemByIdAsync(Guid id);
        Task<PortalItem> AddItemAsync(PortalItem item);
        Task UpdateItemAsync(PortalItem item);
        Task DeleteItemAsync(Guid id);
    }
}
