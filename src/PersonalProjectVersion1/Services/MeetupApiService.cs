using Newtonsoft.Json;
using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Repository;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using static PersonalProjectVersion1.Models.MeetUpApi;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.Entity;
using AutoMapper;

namespace PersonalProjectVersion1.Services
{
    public class MeetupApiService : IMeetupApiService
    {
        IGenericRepository _repo;
        IMapper _mapper;

        public MeetupApiService(IGenericRepository repo, IMapper mapper)
        {
            this._repo = repo;
            this._mapper = mapper;
        }


        public async Task<List<Result>> getListMeetups(int zipCode)
        {
            var data = await findMeetups(zipCode);
            return data;
        }

        public async Task<List<Result>> findMeetups(int zipCode)
        {
            string APIKey;
            string GroupURL;
            int ZipCode = zipCode;
            APIKey = "37a1d381a3e3165a366cb26232133";
            GroupURL = "Another test";
            string url = "https://api.meetup.com/find/groups?key=37a1d381a3e3165a366cb26232133&sign=true&photo-host=public&zip=" + ZipCode + "&order=members&page=20";
            RootObject Meetup;



            HttpClient hc = new HttpClient();
            var data = await hc.GetAsync(url);
            var dataString = await data.Content.ReadAsStringAsync();
            //var data = hc.GetAsync(url).ContinueWith((a) =>
            //{
            //    JsonConvert.DeserializeObject<RootObject>(a.Result.Content.ReadAsStringAsync().Result);

            //});
            if (dataString != null)
            {
                List<Result> result = JsonConvert.DeserializeObject<List<Result>>(dataString);
                var newResult = _mapper.Map<List<Result>>(result);
                return newResult;
                

            }

            return new List<Result>();
        }
    }
}
