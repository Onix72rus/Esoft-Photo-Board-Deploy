const { Sequelize } = require('sequelize');

const pg = require('pg');
pg.defaults.ssl = true;

module.exports = new Sequelize({
   database: "d5p32b5f96c73a",
   username: "sqqtjjenzsdwjy",
   password: "8a48fa0c16516a302a58484cdf4862cf55f4f5befa54134e0ebcf07d096d5ca8",
   host: "ec2-3-226-134-153.compute-1.amazonaws.com",
   port: 5432,
   dialect: "postgres",
   dialectOptions: {
     ssl: {
       require: true,
       rejectUnauthorized: false
     }
   },
 });

