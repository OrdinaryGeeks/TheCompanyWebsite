using Azure;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrdinaryGeeksLegends.Models;
using System.Security.Claims;
using TheCompanyWebsite.Models;
using Microsoft.EntityFrameworkCore;

namespace TheCompanyWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly DBContext _context;

        public AuthController(DBContext context)
        {
            _context = context;
        }

        [HttpPost("getUserRoles/{id}")]
        public async Task<ActionResult> GetUserRoles([FromBody] int id)
        {

           
            List<UserRole> userRoles = _context.UserRole.Where(x => x.UserId == id).ToList<UserRole>();

            return CreatedAtAction("GetUserRoles",_context.Role.Where(role => userRoles.Any((userRole) => role.Id == userRole.RoleId)));
        }
        [HttpPost("signin")]
        public async Task<IActionResult> SignInAsync([FromBody] SignInRequest signInRequest)
        {
            var user = _context.Users.FirstOrDefault(x => x.Email == signInRequest.Email && x.Password == signInRequest.Password);

                                                
            if (user is null)
            {
                return BadRequest();
            }

         /*   var claims = new List<Claim>
        {
            new Claim(type: ClaimTypes.Email, value: signInRequest.Email),
            new Claim(type: ClaimTypes.Name,value: user.UserName)
        };
            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(identity),
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    AllowRefresh = true,
                    ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
                });
         */

            return CreatedAtAction("SignIn", user);
        }



    }
}
