﻿using System;
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
    public class UserRolesController : ControllerBase
    {
        private readonly DBContext _context;

        public UserRolesController(DBContext context)
        {
            _context = context;
        }

        // GET: api/UserRoles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRole>>> GetUserRole()
        {
          if (_context.UserRole == null)
          {
              return NotFound();
          }
            return await _context.UserRole.ToListAsync();
        }

        // GET: api/UserRoles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserRole>> GetUserRole(int id)
        {
          if (_context.UserRole == null)
          {
              return NotFound();
          }
            var userRole = await _context.UserRole.FindAsync(id);

            if (userRole == null)
            {
                return NotFound();
            }

            return userRole;
        }

        // PUT: api/UserRoles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserRole(int id, UserRole userRole)
        {
            if (id != userRole.Id)
            {
                return BadRequest();
            }

            _context.Entry(userRole).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRoleExists(id))
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

        // POST: api/UserRoles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserRole>> PostUserRole(UserRole userRole)
        {
          if (_context.UserRole == null)
          {
              return Problem("Entity set 'DBContext.UserRole'  is null.");
          }
            _context.UserRole.Add(userRole);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserRole", new { id = userRole.Id }, userRole);
        }

        // DELETE: api/UserRoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserRole(int id)
        {
            if (_context.UserRole == null)
            {
                return NotFound();
            }
            var userRole = await _context.UserRole.FindAsync(id);
            if (userRole == null)
            {
                return NotFound();
            }

            _context.UserRole.Remove(userRole);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserRoleExists(int id)
        {
            return (_context.UserRole?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
