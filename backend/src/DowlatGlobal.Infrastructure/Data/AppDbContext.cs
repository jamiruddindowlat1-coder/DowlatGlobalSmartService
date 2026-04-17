using Microsoft.EntityFrameworkCore;
using DowlatGlobal.Core.Entities;

namespace DowlatGlobal.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // আপনার ফ্রন্টএন্ডের সমস্ত পোর্টাল ডেটা এই একটি টেবিলেই থাকবে
        public DbSet<PortalItem> PortalItems { get; set; }
    }
}
