import express from "express";
const app = express();

// Middleware global
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  });

// Rutas
app.get("/", (req, res) => res.send("Bienvenido a mi aplicación"));

app.get("/products", (req, res) =>
  res.send(["Producto 1", "Producto 2", "Producto 3"])
);
app.get("/contact", (req, res) =>
    res.send("Contáctanos en contacto@ejemplo.com")
  );

// Ruta para simular un error
app.get("/error", (req, res) => {
  throw new Error("Error simulado");
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {

  console.error(err.message);
  res.status(500).send("Error del servidor. Estamos trabajando en ello.");
});

// Escuchar el servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});