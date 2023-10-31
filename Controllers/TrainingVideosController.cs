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
    public class TrainingVideosController : ControllerBase
    {
        private readonly DBContext _context;

        public TrainingVideosController(DBContext context)
        {
            _context = context;
        }

        // GET: api/TrainingVideos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrainingVideo>>> GetTrainingVideo()
        {
          if (_context.TrainingVideo == null)
          {
              return NotFound();
          }
            return await _context.TrainingVideo.ToListAsync();
        }

        // GET: api/TrainingVideos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingVideo>> GetTrainingVideo(int id)
        {
          if (_context.TrainingVideo == null)
          {
              return NotFound();
          }
            var trainingVideo = await _context.TrainingVideo.FindAsync(id);

            if (trainingVideo == null)
            {
                return NotFound();
            }

            return trainingVideo;
        }

        // PUT: api/TrainingVideos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingVideo(int id, TrainingVideo trainingVideo)
        {
            if (id != trainingVideo.Id)
            {
                return BadRequest();
            }

            _context.Entry(trainingVideo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingVideoExists(id))
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

        // POST: api/TrainingVideos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TrainingVideo>> PostTrainingVideo(TrainingVideo trainingVideo)
        {
          if (_context.TrainingVideo == null)
          {
              return Problem("Entity set 'DBContext.TrainingVideo'  is null.");
          }
            _context.TrainingVideo.Add(trainingVideo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingVideo", new { id = trainingVideo.Id }, trainingVideo);
        }

        // DELETE: api/TrainingVideos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrainingVideo(int id)
        {
            if (_context.TrainingVideo == null)
            {
                return NotFound();
            }
            var trainingVideo = await _context.TrainingVideo.FindAsync(id);
            if (trainingVideo == null)
            {
                return NotFound();
            }

            _context.TrainingVideo.Remove(trainingVideo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrainingVideoExists(int id)
        {
            return (_context.TrainingVideo?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
