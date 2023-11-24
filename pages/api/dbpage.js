import mysql from "mysql2";


export default async function handler(req, res) {
  const { method, body } = req; //Esto es una abstraccion del requiere

   // configurar conexion de la base de datos que usara para conectarse constantemente
   const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "pssword",
    database: "bibliotecacurso",
  });



  //Seleccion de metodos HTTPS
  switch (method) {

    //Hace Get a API
    case "GET":
     
      //realizar una consulta a la base de datos
      connection.query(
        "SELECT * FROM alumnos",
        function (err, results, fields) {
          if (err) {
            console.log(err);
            res.status(500).json({ error: err });
          } else {
            console.log(results);
            res.status(200).json(results);
          }
        }
      );

      //cerrar conexion
      connection.end();
      break;


        //Hacer post a API
    case "POST":
        console.log(body);
        connection.query(
        'INSERT INTO alumnos (nombre,apellidos,correo,matricula,edad) VALUES (?,?,?,?,?)',
        [body.nombre, body.apellidos, body.correo, body.matricula, body.edad],
        
        function (err, results, fields) {
          if (err) {
            console.log(err);
            res.status(500).json({ error: err });
          } else {
            console.log(results);
            res.status(200).json(results);
          }
        }
        )
      //cerrar conexion
      connection.end();
      break;

  case "DELETE":
    //console.log(query)
    connection.query(
    'DELETE FROM alumnos WHERE PKid=?',
    [query.id],
    function (err, results, fields) {
    if (err) {
          console.log(err);
           res.status(500).json({ error: err });
         } else {
          console.log(results);
           res.status(200).json(results);
        }
      }
      )
    //cerrar conexion
     connection.end();
     break;

    
    //hacer PUT a API
    case "PUT":
      console.log(body);
      connection.query(
        'UPDATE alumnos SET nombre=?, apellidos=?, correo=?, matricula=?,edad=? WHERE PKid=?',
        [body.nombre,body.apellidos,body.correo,body.matricula,body.edad,body.id],
        function (err, results, fields) {
          if (err) {
            console.log(err);
            res.status(500).json({ error: err });
          } else {
            console.log(results);
            res.status(200).json(results);
          }
        }
        )
      //cerrar conexion
      connection.end();
      break;
      
  };
    
   
    }
