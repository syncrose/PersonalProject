using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Services
{
    public class PostService : IPostService
    {
        IGenericRepository _repo;

        public PostService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public List<Post> GetPosts()
        {
            var data = _repo.Query<Post>().ToList();
            return data;
        }

        public Post getPost(int Id)
        {
            var data = _repo.Query<Post>().Where(p => p.Id == Id).Include(p => p.LinkedMessages).FirstOrDefault();
            return data;
        }

        public void AddPost(Post post)
        {
            _repo.Add(post);
        }
        public void UpdatePost(Post post)
        {
            _repo.Update(post);
        }
    }
}
