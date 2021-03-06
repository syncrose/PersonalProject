﻿using System.Collections.Generic;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IMsgService
    {
        void addMsg(int Id, string userId, Message msg);
        Message GetMsg(int Id);
        List<Message> GetMsgs();
        void UpdateMsg(Message msg);
        void DeleteMsg(int id);
    }
}