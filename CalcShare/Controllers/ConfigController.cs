using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace CalcShare.Controllers
{
    [Route("api/[controller]")]
    public class ConfigController : Controller
    {
        private IConfiguration config;

        [HttpGet("[action]")]
        public Config Get([FromServices] IConfiguration config, [FromServices] ILogger<ConfigController> logger)
        {
            logger.LogInformation("Config Loaded...");
            return new Config {
                StoreServiceUrl = config["StoreServiceUrl"],
                AuthDomain = config["AuthDomain"],
                AuthClientId = config["AuthClientId"],
                AuthRedirectUrl = config["AuthRedirectUrl"],
                AuthAudience = config["AuthAudience"]
            };
        }

        public class Config
        {
            public string StoreServiceUrl { get; set; }
            public string AuthDomain { get; internal set; }
            public string AuthClientId { get; internal set; }
            public string AuthRedirectUrl { get; internal set; }
            public string AuthAudience { get; internal set; }
        }
}}

