import express from "express";
import routes from "./routes/routes";

const server: express.Application = express();
server.use(express.urlencoded({ extended: false }));
server.use("/", routes);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
