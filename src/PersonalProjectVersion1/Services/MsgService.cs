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
            msg.TimeCreated = DateTime.Now;
            post.LinkedMessages.Add(msg);
            _repo.SaveChanges();
        }

        public void UpdateMsg(Message msg)
        {
            var originalMsg = _repo.Query<Message>().Where(m => m.Id == msg.Id).FirstOrDefault();
            originalMsg.Content = msg.Content;
            _repo.Update<Message>(originalMsg);
        }

        public void DeleteMsg(int id)
        {
            var data = _repo.Query<Message>().Where(m => m.Id == id).FirstOrDefault();
            _repo.Delete<Message>(data);
            _repo.SaveChanges();
        }
    }
}
