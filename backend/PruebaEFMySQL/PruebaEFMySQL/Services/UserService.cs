using Microsoft.AspNetCore.Mvc;
using PruebaEFMySQL.Data;
using PruebaEFMySQL.Models;
using PruebaEFMySQL.Repositories;

namespace PruebaEFMySQL.Services
{
    public class UserService: IUserService
    {
        public readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public Task<List<User>> GetAll()
        {
            return _userRepository.GetAll();
        }

        [HttpGet]
        public Task<User> GetById(int id)
        {
            return _userRepository.GetById(id);
        }

        [HttpPost]
        public Task<User> AddUser(User user)
        {
            return _userRepository.Add(user);
        }

        [HttpPut]
        public Task<User> Update(User user)
        {
            return _userRepository.Update(user);
        }

        [HttpDelete]
        public Task<User> Delete(int id)
        {
            return _userRepository.Delete(id);
        }

    }
}
