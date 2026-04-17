using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Repositories
{
    public interface IServiceRepository
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<IEnumerable<object>> GetByCategoryAsync(string category);
    }
}
