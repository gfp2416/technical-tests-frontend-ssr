using AutoMapper;
using PruebaEFMySQL.Dto;
using PruebaEFMySQL.Models;

namespace PruebaEFMySQL.Profiles
{
    public class UserProfile: Profile
    {
        public UserProfile() {
            CreateMap<User, UserDto>()
                .ReverseMap();
        }
    }
}
