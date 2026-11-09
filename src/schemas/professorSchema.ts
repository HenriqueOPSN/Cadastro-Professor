import { z } from "zod";

export const professorSchema = z.object({
  nome: z.string().trim().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().trim().email("Informe um e-mail válido"),
  disciplina: z.string().trim().min(2, "Informe a disciplina"),
  telefone: z.string().trim().min(8, "Informe um telefone válido")
});

export type ProfessorInput = z.infer<typeof professorSchema>;
