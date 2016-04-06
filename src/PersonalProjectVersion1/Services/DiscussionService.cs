using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Services
{
    public class DiscussionService : IDiscussionService
    {
        IGenericRepository _repo;

        public DiscussionService(IGenericRepository repo)
        {
            this._repo = repo;
        }


        public List<Discussion> GetDiscussions()
        {
            var data = _repo.Query<Discussion>().ToList();
            return data;
        }

        public Discussion GetDiscussion(int Id)
        {
            var data = _repo.Query<Discussion>().Where(d => d.Id == Id).Include(d => d.LinkedPosts).FirstOrDefault();
            return data;
        }

        public void AddDisc(Discussion discussion)
        {
            _repo.Add(discussion);
            

        }

        public void UpDisc(Discussion discussion)
        {
            _repo.Update(discussion);
        }
    }
}
