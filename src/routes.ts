import { Router } from "express";
import { CreateProfessorController } from "./controllers/professor/CreateProfessorController";
import { validateSchema } from "./middlewares/validateSchema";
import { professorSchema } from "./schemas/professorSchema";

const routes = Router();
const createProfessorController = new CreateProfessorController();

routes.post(
  "/professores",
  validateSchema(professorSchema),
  createProfessorController.handle.bind(createProfessorController)
);

export default routes;
