const express = require("express");
const app = express();

// const x = 123; Se definio esto para probar eslint solamante, ua que es una variable que no se usa en ningun lado

app.get("/", (req, res) => {
    res.status(200).json({ message: "API Funcionando" });
})

app.get("/clients", (req, res) => {
    res.status(200).json({ message: "Ok", clients: ["uno","dos"]  });
})

app.get("/not_found", (req, res) => {
    res.status(404).json({ message: "Error not found" });
})

app.get("/city", (req, res) => {
    res.status(200).json({ message: "Ok", city: "Berlin"  });
})

/* Si descomento esto, se prueba la libreria slint, la cual hace fallar al workflow en el step Ejecutar Linters ya que realiza validaciones y corta porque 'foo' no esta definido
app.get("/city", (req, res) => {
    res.status(200).json(foo);
})
*/

app.get("/administradores", (req, res) => {
    res.status(200).json({ message: "Ok", administradores: [
        {
            "nombre": "Juan",
            "apellido": "Suarez",
            "edad":25
        },
        {
            "nombre": "Maria",
            "apellido": "Quintana",
            "edad":25
        },
        {
            "nombre": "Alvaro",
            "apellido": "Farias",
            "edad":32
        },
        {
            "nombre": "Anabel",
            "apellido": "Duquez",
            "edad":32
        },
        {
            "nombre": "Delia",
            "apellido": "Estefan",
            "edad":34
        }
    ],
    total: 5
});
})

module.exports = app;