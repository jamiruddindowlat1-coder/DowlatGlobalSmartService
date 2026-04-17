using System.Collections.Generic;
using System.Threading.Tasks;
using DowlatGlobal.Core.DTOs.User;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IUserService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<object> CreateAsync(UserRequestDto dto);
        Task UpdateAsync(int id, UserRequestDto dto);
        Task DeleteAsync(int id);
    }
}
