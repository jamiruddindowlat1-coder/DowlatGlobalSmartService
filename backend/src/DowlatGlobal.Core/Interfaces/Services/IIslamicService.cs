using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface IIslamicService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task<IEnumerable<object>> GetByTypeAsync(string type);
    }
}
