const { Sequelize } = require('sequelize');

const pg = require('pg');
pg.defaults.ssl = true;

module.exports = new Sequelize({
   database: "df99b9vk9u4fos",
   username: "jpobrsewlmheat",
   password: "16eb1bf61b9d9a40828f33a5bd9802e32a8bf2aa812a83856b3681e15644761b",
   host: "ec2-34-251-245-108.eu-west-1.compute.amazonaws.com",
   port: 5432,
   dialect: "postgres",
   dialectOptions: {
     ssl: {
       require: true,
       rejectUnauthorized: false
     }
   },
 });

