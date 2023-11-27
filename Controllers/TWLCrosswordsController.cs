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
    public class TWLCrosswordsController : ControllerBase
    {
        private readonly DBContext _context;

        public TWLCrosswordsController(DBContext context)
        {
            _context = context;
        }

        
        [HttpGet("Clues/{id}")]
        public async Task<ActionResult<IEnumerable<TWLClue>>> GetCluesFromCrosswordsID(int id)
        {
            TWLCrossword? crossword = await _context.TWLCrossword.FindAsync(id);

            if(crossword != null)

                return await _context.TWLClue.Where(clue => clue.TWLCrosswordId == crossword.Id).ToListAsync();

            else return NotFound();
        }

       /* [HttpGet("/{name}")]
        public async Task<ActionResult<IEnumerable<TWLClue>>> GetCluesFromCrosswordName(string name)
        {
            TWLCrossword? crossWord = _context.TWLCrossword.Where<TWLCrossword>(crossword => crossword.Name == name).FirstOrDefault();

            if (crossWord != null)
                return await  _context.TWLClue.Where(clue => clue.TWLCrosswordId == crossWord.Id).ToListAsync();

            else return NotFound();
        }*/
        // GET: api/TWLCrosswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TWLCrossword>>> GetTWLCrossword()
        {
          if (_context.TWLCrossword == null)
          {
              return NotFound();
          }
            return await _context.TWLCrossword.ToListAsync();
        }

        // GET: api/TWLCrosswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TWLCrossword>> GetTWLCrossword(int id)
        {
          if (_context.TWLCrossword == null)
          {
              return NotFound();
          }
            var tWLCrossword = await _context.TWLCrossword.FindAsync(id);

            if (tWLCrossword == null)
            {
                return NotFound();
            }

            return tWLCrossword;
        }

        // PUT: api/TWLCrosswords/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTWLCrossword(int id, TWLCrossword tWLCrossword)
        {
            if (id != tWLCrossword.Id)
            {
                return BadRequest();
            }

            _context.Entry(tWLCrossword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TWLCrosswordExists(id))
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

        // POST: api/TWLCrosswords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TWLCrossword>> PostTWLCrossword(TWLCrossword tWLCrossword)
        {
          if (_context.TWLCrossword == null)
          {
              return Problem("Entity set 'DBContext.TWLCrossword'  is null.");
          }

         
            _context.TWLCrossword.Add(tWLCrossword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTWLCrossword", new { id = tWLCrossword.Id }, tWLCrossword);
        }

        // DELETE: api/TWLCrosswords/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTWLCrossword(int id)
        {
            if (_context.TWLCrossword == null)
            {
                return NotFound();
            }
            var tWLCrossword = await _context.TWLCrossword.FindAsync(id);
            if (tWLCrossword == null)
            {
                return NotFound();
            }

            _context.TWLCrossword.Remove(tWLCrossword);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TWLCrosswordExists(int id)
        {
            return (_context.TWLCrossword?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
