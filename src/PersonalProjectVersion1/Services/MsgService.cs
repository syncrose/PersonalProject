﻿using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalProjectVersion1.Models;
using Microsoft.Data.Entity;


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
            data.OrderByDescending(d => d.TimeCreated);
            return data;
        }

        public Message GetMsg(int Id)
        {
            var data = _repo.Query<Message>().Where(m => m.Id == Id).FirstOrDefault();
            return data;
        }
        
        public void addMsg(int Id, string userId, Message msg)
        {
            var post = _repo.Query<Post>().Where(p => p.Id == Id).Include(p => p.LinkedMessages).FirstOrDefault();
            var user = _repo.Query<ApplicationUser>().Where(u => u.Id == userId).Include(u => u.UserMessages).FirstOrDefault();
            user.UserMessages.Add(msg);
            msg.TimeCreated = DateTime.Now;
            msg.MsgFirst = user.First;
            msg.MsgLast = user.Last;
            msg.MsgUserName = user.UserName;
            msg.MsgImage = user.Image;
            _repo.Add(msg);
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
