using DowlatGlobal.Core.Interfaces.Services;
using DowlatGlobal.Core.DTOs.User;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Infrastructure.Services
{
    public class UserService : IUserService {
        public Task<IEnumerable<object>> GetAllAsync() => Task.FromResult<IEnumerable<object>>(new object[0]);
        public Task<object> GetByIdAsync(int id) => Task.FromResult(new object());
        public Task<object> CreateAsync(UserRequestDto dto) => Task.FromResult(new object());
        public Task UpdateAsync(int id, UserRequestDto dto) => Task.CompletedTask;
        public Task DeleteAsync(int id) => Task.CompletedTask;
    }
    public class TicketService : ITicketService {
        public Task<IEnumerable<object>> GetAllAsync() => Task.FromResult<IEnumerable<object>>(new object[0]);
        public Task<object> GetByIdAsync(int id) => Task.FromResult(new object());
        public Task DeleteAsync(int id) => Task.CompletedTask;
    }
    public class AddressService : IAddressService {
        public Task<IEnumerable<object>> GetAllAsync() => Task.FromResult<IEnumerable<object>>(new object[0]);
        public Task<object> GetByIdAsync(int id) => Task.FromResult(new object());
        public Task<IEnumerable<object>> GetByDistrictAsync(string district) => Task.FromResult<IEnumerable<object>>(new object[0]);
    }
    public class IslamicService : IIslamicService {
        public Task<IEnumerable<object>> GetAllAsync() => Task.FromResult<IEnumerable<object>>(new object[0]);
        public Task<object> GetByIdAsync(int id) => Task.FromResult(new object());
        public Task<IEnumerable<object>> GetByTypeAsync(string type) => Task.FromResult<IEnumerable<object>>(new object[0]);
    }
}
