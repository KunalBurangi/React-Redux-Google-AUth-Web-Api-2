using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IEmployeeServices
    {
        List<Employee> GetAll();
        Employee GetById(Int64 id);
        Employee Insert(Employee model);
        bool Update(Employee model);
        void Delete(Employee model);
        void Save();

    }
}
