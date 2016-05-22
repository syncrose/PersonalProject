using System.Collections.Generic;
using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.ViewModels;

namespace PersonalProjectVersion1.Services
{
    public interface IUserService
    {
        UserVM getUser(string id);
        List<Message> getUserMessages(string userName, int page);
        List<Message> getUserMessagesCount(string userName);
        List<Post> getUserPosts(string userName, int page);
        List<Post> getUserPostsCount(string userName);
        List<ApplicationUser> getUsers();
        void UpdateUser(UserVM user);
    }
}