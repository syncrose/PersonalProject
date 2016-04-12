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

        public void AddPost(int id, Post post)
        {
            _repo.Add(post);
           var disc = _repo.Query<Discussion>().Where(d => d.Id == id).Include(d => d.LinkedPosts).FirstOrDefault();
            disc.LinkedPosts.Add(post);
            _repo.SaveChanges();
          
        }
        public void UpdatePost(Post post)
        {
            _repo.Update(post);
        }

        public void DeletePost(int id)
        {
            var data = _repo.Query<Post>().Where(p => p.Id == id).Include(p => p.LinkedMessages).FirstOrDefault();
            _repo.Delete<Post>(data);
            _repo.SaveChanges();
        }
    }
}
