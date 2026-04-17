using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Services;
using DowlatGlobal.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace DowlatGlobal.Infrastructure.Services
{
    public class PortalService : IPortalService
    {
        private readonly AppDbContext _context;

        public PortalService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PortalItem>> GetAllItemsAsync() => 
            await _context.PortalItems.ToListAsync();

        public async Task<IEnumerable<PortalItem>> GetItemsByPortalKeyAsync(string portalKey) => 
            await _context.PortalItems.Where(p => p.PortalKey == portalKey).ToListAsync();

        public async Task<PortalItem> GetItemByIdAsync(Guid id) => 
            await _context.PortalItems.FindAsync(id);

        public async Task<PortalItem> AddItemAsync(PortalItem item)
        {
            item.Id = Guid.NewGuid();
            _context.PortalItems.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task UpdateItemAsync(PortalItem item)
        {
            _context.PortalItems.Update(item);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteItemAsync(Guid id)
        {
            var item = await _context.PortalItems.FindAsync(id);
            if (item != null)
            {
                _context.PortalItems.Remove(item);
                await _context.SaveChangesAsync();
            }
        }
    }
}
