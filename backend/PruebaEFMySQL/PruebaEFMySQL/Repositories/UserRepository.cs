using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaEFMySQL.Data;
using PruebaEFMySQL.Models;

namespace PruebaEFMySQL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _appDbContext;

        public UserRepository(AppDbContext appDbContext)
        {
            this._appDbContext = appDbContext;
        }

        public async Task<List<User>> GetAll()
        {
            var users = await _appDbContext.Users.ToListAsync();
            return users;
        }

        public async Task<User> GetById(int id)
        {
            var user = await _appDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
                user = new User();
            return user;
        }

        public async Task<User> Add(User user)
        {
            _appDbContext.Users.Add(user);
            await _appDbContext.SaveChangesAsync();
            return user;
        }

        public async Task<User> Delete(int id)
        {
            var toDelete = new User { Id = id};
            _appDbContext.Users.Remove(toDelete);
            await _appDbContext.SaveChangesAsync();
            return toDelete;
        }

        public async Task<User> Update(User user)
        {
            _appDbContext.Users.Update(user);
            await _appDbContext.SaveChangesAsync();
            return user;
        }
    }
}
