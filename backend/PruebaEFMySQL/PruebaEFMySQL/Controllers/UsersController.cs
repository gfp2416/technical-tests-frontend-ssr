using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaEFMySQL.Data;
using PruebaEFMySQL.Dto;
using PruebaEFMySQL.Models;
using PruebaEFMySQL.Services;

namespace PruebaEFMySQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public readonly IUserService userService;
        private readonly IMapper mapper;

        public UsersController(IUserService _userService, IMapper _mapper) {
            userService = _userService;
            mapper = _mapper;
        }

        [HttpPost]
        public async Task<UserDto> AddUser(User user)
        {
            var response = await userService.AddUser(user);
            return mapper.Map<UserDto>(response);
        }

        [HttpGet]
        public async Task<List<UserDto>> GetAll()
        {
            var response = await userService.GetAll();
            return mapper.Map<List<UserDto>>(response);
        }


        [HttpGet("id: int")]
        public async Task<UserDto> GetById(int id)
        {
            var response = await userService.GetById(id);
            return mapper.Map<UserDto>(response);
        }

        [HttpPut]
        public async Task<UserDto> Update(User user)
        {
            var response = await userService.Update(user);
            return mapper.Map<UserDto>(response);
        }

        [HttpDelete]
        public async Task<UserDto> Delete(int id)
        {
            var response = await userService.Delete(id);
            return mapper.Map<UserDto>(response);
        }

    }
}
