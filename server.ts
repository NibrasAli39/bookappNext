import express from "express";
import next from "next";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book API",
      version: "1.0.0",
      description: "A simple book management API",
    },
  },
  apis: ["src/pages/api/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

app.prepare().then(() => {
  const server = express();

  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
