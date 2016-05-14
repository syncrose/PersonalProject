using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;


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

        public void DeleteDisc(int id)
        {
            var data = _repo.Query<Discussion>().Where(d => d.Id == id).Include(d => d.LinkedPosts).FirstOrDefault();
            _repo.Delete<Discussion>(data);
            _repo.SaveChanges();
           
        }

  

        public void UpDisc(Discussion disc)
        {
            var originalDisc = _repo.Query<Discussion>().Where(d => d.Id == disc.Id).FirstOrDefault();
            originalDisc.InterestName = disc.InterestName;
            originalDisc.ImageHeader = disc.ImageHeader;
            originalDisc.Headline = disc.Headline;
            originalDisc.Description = disc.Description;
            _repo.Update<Discussion>(originalDisc);
            //_repo.SaveChanges();
        }
    }
}
