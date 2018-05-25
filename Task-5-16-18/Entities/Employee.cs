using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public  class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public long? Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-mm-yyyy}", ApplyFormatInEditMode = true)]

        public DateTime DOB { get; set; }
        public bool? MaritalStatus { get; set; }
        public string Country { get; set; }
    }
}
