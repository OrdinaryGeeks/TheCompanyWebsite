using FluentValidation;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using TheCompanyWebsite.Models;

namespace OrdinaryGeeksLegends.Models
{
    
    public class User 
    {
        [Required]
        public string? PhoneNumber { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }

        [Required]
        public string? Email { get; set; }

        [Required]
        public string? UserName { get; set; }

        [Required]
        [PasswordPropertyText]
        public string? Password { get; set; }
        

    }


    public class UserValidator : AbstractValidator<User>
    {
        DBContext _dbContext;
     
        public UserValidator(DBContext dbContext)
        {
            _dbContext = dbContext;

            RuleFor(x => x.Email).Must(BeUniqueEmail).WithMessage("User Email must be Unique");
            RuleFor(x => x.UserName).Must(BeUniqueUserName).WithMessage("User Name already exists");
            
        }


        private bool BeUniqueEmail(string? userName)
        {
            return _dbContext.Users.FirstOrDefault(x => x.Email == userName) == null;
        }
        private bool BeUniqueUserName(string? userName)
        {
            return _dbContext.Users.FirstOrDefault(x => x.UserName == userName) == null;
        }
    }
}
