using System.Collections.Generic;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IPostService
    {
        void AddPost(int id, string userId, Post post);
        Post getPost(int Id);
        List<Post> GetPosts();
        void UpdatePost(Post post);
        void DeletePost(int id);
    }
}