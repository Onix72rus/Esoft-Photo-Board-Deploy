const { Sequelize } = require('sequelize');

const pg = require('pg');
pg.defaults.ssl = true;

module.exports = new Sequelize({
   database: "d5ac9auee5sp22",
   username: "gbahphvnudxcza",
   password: "a5a19758871473d41825c3b7ef013bd014dca64d05da36176908d582497db53d",
   host: "ec2-54-155-35-88.eu-west-1.compute.amazonaws.com",
   port: 5432,
   dialect: "postgres",
   dialectOptions: {
     ssl: {
       require: true,
       rejectUnauthorized: false
     }
   },
 });

