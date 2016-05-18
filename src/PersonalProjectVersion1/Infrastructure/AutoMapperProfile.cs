using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static PersonalProjectVersion1.Models.MeetUpApi;
using Microsoft.AspNet.Mvc;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace PersonalProjectVersion1.Infrastructure
{
    public class AutoMapperProfile : Profile
    {
        protected override void Configure()
        {
            CreateMap<RootObject, Result>();
        }
    }
}
