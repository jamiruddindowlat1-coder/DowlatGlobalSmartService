using DowlatGlobal.Core.Interfaces.Repositories;
using DowlatGlobal.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Infrastructure.Repositories
{
    public class TicketRepository : ITicketRepository { }
    public class AddressRepository : IAddressRepository { }
    public class ServiceRepository : IServiceRepository {
        public Task<IEnumerable<object>> GetAllAsync() => Task.FromResult<IEnumerable<object>>(new object[0]);
        public Task<object> GetByIdAsync(int id) => Task.FromResult(new object());
        public Task<IEnumerable<object>> GetByCategoryAsync(string category) => Task.FromResult<IEnumerable<object>>(new object[0]);
    }
    public class BaseRepository<T> : IBaseRepository<T> { }
}
