import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);

  return res.status(500).json({
    error: "Erro interno do servidor"
  });
});

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
