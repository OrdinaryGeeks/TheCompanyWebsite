using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrdinaryGeeksLegends.Models;
using TheCompanyWebsite.Models;

namespace TheCompanyWebsite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DBContext _context;

        public UsersController(DBContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int? id)
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int? id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser( UserDTO userDTO)
        {
            List<string> errorMessages = new List<string>();
          if (_context.Users == null)
          {
              return BadRequest("Entity set 'DBContext.Users'  is null.");
          }

          if(_context.Users.Where(contextUser => contextUser.UserName == userDTO.UserName).FirstOrDefault() != null)
            {
             
                errorMessages.Add("User Name" + userDTO.UserName + " is already taken");
            }

            if (_context.Users.Where(contextUser => contextUser.Email == userDTO.Email).FirstOrDefault() != null)
            {
                
                errorMessages.Add("Email" + userDTO.Email + " is already taken");
            }

            if (_context.Users.Where(contextUser => contextUser.PhoneNumber == userDTO.PhoneNumber).FirstOrDefault() != null)
            {
               
                errorMessages.Add("Phone Number" + userDTO.PhoneNumber+" is already taken");
            }

            if(errorMessages.Count > 0)
            {
                return BadRequest(errorMessages);
            }
            User user = new User();
            user.UserName = userDTO.UserName;
            user.PhoneNumber = userDTO.PhoneNumber;
            user.Email = userDTO.Email;
            user.Password = userDTO.Password;
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int? id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int? id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
