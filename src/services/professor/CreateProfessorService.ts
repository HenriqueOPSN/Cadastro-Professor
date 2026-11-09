import { prisma } from "../../prisma";
import { ProfessorInput } from "../../schemas/professorSchema";

export class CreateProfessorService {
  async execute(data: ProfessorInput) {
    const professor = await prisma.professor.create({
      data: {
        nome: data.nome,
        email: data.email,
        disciplina: data.disciplina,
        telefone: data.telefone
      },
      select: {
        id: true,
        nome: true,
        email: true,
        disciplina: true,
        telefone: true,
        createdAt: true
      }
    });

    return professor;
  }
}
