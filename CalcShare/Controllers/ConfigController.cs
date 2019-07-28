using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CalcShare.Controllers
{
    [Route("api/[controller]")]
    public class ConfigController : Controller
    {
        private IConfiguration config;

        [HttpGet("[action]")]
        public Config Get([FromServices] IConfiguration config)
        {
            return new Config {
                StoreUrl = config["storeServiceUrl"]
            };
        }

        public class Config
        {
            public string StoreUrl { get; set; }
        }
}}

