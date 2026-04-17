using DowlatGlobal.Infrastructure.Data;
using System.Threading.Tasks;
namespace DowlatGlobal.Infrastructure.Data.SeedData
{
    public static class UserSeed
    {
        public static Task SeedAsync(AppDbContext db) => Task.CompletedTask;
    }
    public static class ServiceSeed
    {
        public static Task SeedAsync(AppDbContext db) => Task.CompletedTask;
    }
}
