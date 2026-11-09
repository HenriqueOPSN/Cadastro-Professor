import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { CreateProfessorService } from "../../services/professor/CreateProfessorService";

export class CreateProfessorController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, email, disciplina, telefone } = req.body;
      const service = new CreateProfessorService();
      const professor = await service.execute({ nome, email, disciplina, telefone });

      return res.status(201).json({ professor });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        return res.status(409).json({ error: "Já existe um professor cadastrado com esse e-mail." });
      }

      return next(error);
    }
  }
}
