using System.Threading.Tasks;
using DowlatGlobal.Core.Entities;
namespace DowlatGlobal.Core.Interfaces.Repositories
{
    public interface IUserRepository
    {
        Task<User?> GetByEmailAsync(string email);
        Task<bool> EmailExistsAsync(string email);
        Task AddAsync(User user);
    }
}
