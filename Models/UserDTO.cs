using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace TheCompanyWebsite.Models
{
    public class UserDTO
    {

        public string? PhoneNumber { get; set; }

    
        public string? Email { get; set; }

        public string? UserName { get; set; }

   
        public string? Password { get; set; }
    }
}
