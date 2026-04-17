using DowlatGlobal.Core.Entities;
using DowlatGlobal.Core.Interfaces.Repositories;
using System.Threading.Tasks;
namespace DowlatGlobal.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        public Task<User?> GetByEmailAsync(string email) => Task.FromResult((User?)null);
        public Task<bool> EmailExistsAsync(string email) => Task.FromResult(false);
        public Task AddAsync(User user) => Task.CompletedTask;
    }
}
