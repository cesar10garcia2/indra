const mysql = require('mysql');

const configDB = {
  host: 'indradb.c9c0b80mg0bi.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'dsfasd789798$FDGDFG45',
  port: '3306',
  database: 'indradb',
  debug: true
};

function initializeConnection(config) {
  let connection;

  function handleDisconnect() {
    connection = mysql.createConnection(config);

    connection.connect(function(error) {
      if (error) {
        console.error('Error al conectar:', error);
        setTimeout(handleDisconnect, 2000); // Intentar reconectar después de 2 segundos
      } else {
        console.log('Conexión establecida');
      }
    });

    connection.on('error', function(error) {
      console.error('Error de conexión:', error);
      if (error.code === 'PROTOCOL_CONNECTION_LOST') {
        handleDisconnect(); // Intentar reconectar
      } else {
        throw error;
      }
    });
  }

  handleDisconnect();

  return connection;
}

const connection = initializeConnection(configDB);

module.exports = connection;