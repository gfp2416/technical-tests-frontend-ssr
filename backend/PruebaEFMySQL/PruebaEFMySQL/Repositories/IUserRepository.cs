using Microsoft.AspNetCore.Mvc;
using PruebaEFMySQL.Data;
using PruebaEFMySQL.Models;

namespace PruebaEFMySQL.Repositories
{
    public interface IUserRepository
    {
        public Task<User> Add(User user);
        public  Task<List<User>> GetAll();
        public Task<User> GetById(int id);
        public  Task<User> Update(User user);
        public  Task<User> Delete(int id);
    }
}
