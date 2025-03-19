using Microsoft.AspNetCore.Mvc;
using PruebaEFMySQL.Models;

namespace PruebaEFMySQL.Services
{
    public interface IUserService
    {
        public Task<List<User>> GetAll();
        public Task<User> GetById(int id);
        public Task<User> AddUser(User user);
        public Task<User> Update(User user);
        public Task<User> Delete(int id);
    }
}
