const config = {
    user: "sa", // sql user
    password: "ibiam", //sql user password
    server: "localhost", // if it does not work try- 127.0.0.1
    database: "Academic",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "SQLEXPRESS", // SQL Server instance name
    },
    port: 49888, //55892
  };
  
  module.exports = config;