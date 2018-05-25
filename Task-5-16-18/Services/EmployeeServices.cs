using Entities;
using Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class EmployeeService : IEmployeeServices
    {

        private IRepository<Employee> employeeRepository;
        EmployeeContext context = new EmployeeContext();

       public EmployeeService(EmployeeContext context)
        {
            this.context = context;
        }
        public EmployeeService(IRepository<Employee> employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        public void Delete(Employee model)
        {
            if (model == null)
                throw new ArgumentNullException("Employee");
            employeeRepository.Delete(model);
        }

        public List<Employee> GetAll()
        {
            return employeeRepository.GetAll().ToList();
        }

        public Employee GetById(long id)
        {
            if (id == 0)
                return null;
            return employeeRepository.GetById(id);
        }

        public Employee Insert(Employee model)
        {
            if (model == null)
                throw new ArgumentNullException("Employee");
            employeeRepository.Insert(model);
            return model;
        }
        public void Save()
        {
            employeeRepository.Save();
        }

        public bool Update(Employee model)
        {
            if (model == null)
                throw new ArgumentNullException("Employee");
            context.Entry(model).State = EntityState.Modified;
            context.SaveChanges();
                employeeRepository.Update(model);
            return true;
        }
    }
}
