$corePath = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Core"
$infraPath = "D:\DowlatGlobal Smart Service\backend\src\DowlatGlobal.Infrastructure"

New-Item -ItemType Directory -Force "$infraPath\Data\SeedData" | Out-Null

@"
namespace DowlatGlobal.Core.Entities
{
    public class IslamicContent { }
}
"@ | Out-File -Encoding utf8 "$corePath\Entities\IslamicContent.cs"

@"
using DowlatGlobal.Core.Entities;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Repositories
{
    public interface ITicketRepository { }
    public interface IAddressRepository { }
    public interface IBaseRepository<T> { }
}
"@ | Out-File -Encoding utf8 "$corePath\Interfaces\Repositories\MiscRepositories.cs"

@"
using Microsoft.EntityFrameworkCore;
namespace DowlatGlobal.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
"@ | Out-File -Encoding utf8 "$infraPath\Data\AppDbContext.cs"

@"
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
"@ | Out-File -Encoding utf8 "$infraPath\Data\SeedData\Seeders.cs"

@"
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
"@ | Out-File -Encoding utf8 "$infraPath\Repositories\MiscRepositories.cs"

@"
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
"@ | Out-File -Encoding utf8 "$infraPath\Services\MiscServices.cs"
