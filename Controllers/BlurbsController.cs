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
    public class BlurbsController : ControllerBase
    {
        private readonly DBContext _context;

        public BlurbsController(DBContext context)
        {
            _context = context;
        }

        // GET: api/Blurbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blurb>>> GetBlurb()
        {
          if (_context.Blurb == null)
          {
              return NotFound();
          }
            return await _context.Blurb.ToListAsync();
        }

        // GET: api/Blurbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Blurb>> GetBlurb(int id)
        {
          if (_context.Blurb == null)
          {
              return NotFound();
          }
            var blurb = await _context.Blurb.FindAsync(id);

            if (blurb == null)
            {
                return NotFound();
            }

            return blurb;
        }

        // PUT: api/Blurbs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlurb(int id, Blurb blurb)
        {
            if (id != blurb.Id)
            {
                return BadRequest();
            }

            _context.Entry(blurb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlurbExists(id))
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

        // POST: api/Blurbs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Blurb>> PostBlurb(Blurb blurb)
        {
          if (_context.Blurb == null)
          {
              return Problem("Entity set 'DBContext.Blurb'  is null.");
          }
            _context.Blurb.Add(blurb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlurb", new { id = blurb.Id }, blurb);
        }

        // DELETE: api/Blurbs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlurb(int id)
        {
            if (_context.Blurb == null)
            {
                return NotFound();
            }
            var blurb = await _context.Blurb.FindAsync(id);
            if (blurb == null)
            {
                return NotFound();
            }

            _context.Blurb.Remove(blurb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlurbExists(int id)
        {
            return (_context.Blurb?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
