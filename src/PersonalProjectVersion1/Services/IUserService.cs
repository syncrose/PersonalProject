using System.Collections.Generic;
using PersonalProjectVersion1.ViewModels;
using PersonalProjectVersion1.ViewModels.Account;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IUserService
    {
        UserVM getUser(string id);
        List<ApplicationUser> getUsers();
        void UpdateUser(UserVM user);
    }
}