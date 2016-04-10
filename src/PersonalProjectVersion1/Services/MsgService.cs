using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public class MsgService : IMsgService
    {
        IGenericRepository _repo;

        public MsgService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public List<Message> GetMsgs()
        {
            var data = _repo.Query<Message>().ToList();
            return data;
        }

        public Message GetMsg(int Id)
        {
            var data = _repo.Query<Message>().Where(m => m.Id == Id).FirstOrDefault();
            return data;
        }
        
        public void addMsg(int Id, Message msg)
        {
            _repo.Add(msg);
            var post = _repo.Query<Post>().Where(p => p.Id == Id).Include(p => p.LinkedMessages).FirstOrDefault();
            post.LinkedMessages.Add(msg);
            _repo.SaveChanges();
        }

        public void UpdateMsg(Message msg)
        {
            _repo.Update(msg);
        }
    }
}
