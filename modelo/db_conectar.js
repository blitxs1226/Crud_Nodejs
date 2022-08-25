//https://www.npmjs.com/package/mysql
import mysql from 'mysql2' // o tambien const mysql = require('mysql');
var conectar = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '1226',
      database : 'db_empresa'
  });

  conectar.connect(function(err) {
      if (err) {
          console.error('Error en la conexion: ' + err.stack);
      return;
    }
 
        console.log('conexion exitosa ID: ' + conectar.threadId);
  });

  export {conectar}

