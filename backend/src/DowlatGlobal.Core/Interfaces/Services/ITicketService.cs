using System.Collections.Generic;
using System.Threading.Tasks;
namespace DowlatGlobal.Core.Interfaces.Services
{
    public interface ITicketService
    {
        Task<IEnumerable<object>> GetAllAsync();
        Task<object> GetByIdAsync(int id);
        Task DeleteAsync(int id);
    }
}
