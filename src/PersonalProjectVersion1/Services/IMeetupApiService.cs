using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IMeetupApiService
    {
        Task<List<MeetUpApi.Result>> findMeetups(int zipCode);
        Task<List<MeetUpApi.Result>> getListMeetups(int zipCode);
    }
}