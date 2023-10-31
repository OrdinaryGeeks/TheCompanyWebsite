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
    public class TWLUsersController : ControllerBase
    {
        private readonly DBContext _context;

        public TWLUsersController(DBContext context)
        {
            _context = context;
        }

        // GET: api/TWLUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TWLUser>>> GetTWLUser()
        {
          if (_context.TWLUser == null)
          {
              return NotFound();
          }
            return await _context.TWLUser.ToListAsync();
        }

        // GET: api/TWLUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TWLUser>> GetTWLUser(int id)
        {
          if (_context.TWLUser == null)
          {
              return NotFound();
          }
            var tWLUser = await _context.TWLUser.FindAsync(id);

            if (tWLUser == null)
            {
                return NotFound();
            }

            return tWLUser;
        }

        // PUT: api/TWLUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTWLUser(int id, TWLUser tWLUser)
        {
            if (id != tWLUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(tWLUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TWLUserExists(id))
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

        // POST: api/TWLUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TWLUser>> PostTWLUser(TWLUser tWLUser)
        {
          if (_context.TWLUser == null)
          {
              return Problem("Entity set 'DBContext.TWLUser'  is null.");
          }
            _context.TWLUser.Add(tWLUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTWLUser", new { id = tWLUser.Id }, tWLUser);
        }

        // DELETE: api/TWLUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTWLUser(int id)
        {
            if (_context.TWLUser == null)
            {
                return NotFound();
            }
            var tWLUser = await _context.TWLUser.FindAsync(id);
            if (tWLUser == null)
            {
                return NotFound();
            }

            _context.TWLUser.Remove(tWLUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TWLUserExists(int id)
        {
            return (_context.TWLUser?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
