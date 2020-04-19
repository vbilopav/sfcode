﻿using Microsoft.Extensions.Logging;
using Npgsql;

namespace Pgcode.ApiModels
{
    public class ConnectionData
    {
        public int? SchemaVersion { get; set; }
        public string ServerVersion { get; set; }
        public string Name { get; set; }
        public NpgsqlConnection Connection { get; set; }
        public ILogger Logger { get; set; }
    }
}