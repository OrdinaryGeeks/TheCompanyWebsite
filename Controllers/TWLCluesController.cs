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
    public class TWLCluesController : ControllerBase
    {
        private readonly DBContext _context;

        public TWLCluesController(DBContext context)
        {
            _context = context;
        }

        // GET: api/TWLClues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TWLClue>>> GetTWLClue()
        {
          if (_context.TWLClue == null)
          {
              return NotFound();
          }
            return await _context.TWLClue.ToListAsync();
        }

        // GET: api/TWLClues/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TWLClue>> GetTWLClue(int id)
        {
          if (_context.TWLClue == null)
          {
              return NotFound();
          }
            var tWLClue = await _context.TWLClue.FindAsync(id);

            if (tWLClue == null)
            {
                return NotFound();
            }

            return tWLClue;
        }

        // PUT: api/TWLClues/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTWLClue(int id, TWLClue tWLClue)
        {
            if (id != tWLClue.Id)
            {
                return BadRequest();
            }

            _context.Entry(tWLClue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TWLClueExists(id))
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

        // POST: api/TWLClues
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TWLClue>> PostTWLClue(TWLClue tWLClue)
        {
          if (_context.TWLClue == null)
          {
              return Problem("Entity set 'DBContext.TWLClue'  is null.");
          }
            _context.TWLClue.Add(tWLClue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTWLClue", new { id = tWLClue.Id }, tWLClue);
        }

        // DELETE: api/TWLClues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTWLClue(int id)
        {
            if (_context.TWLClue == null)
            {
                return NotFound();
            }
            var tWLClue = await _context.TWLClue.FindAsync(id);
            if (tWLClue == null)
            {
                return NotFound();
            }

            _context.TWLClue.Remove(tWLClue);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TWLClueExists(int id)
        {
            return (_context.TWLClue?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
