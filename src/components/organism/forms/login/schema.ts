import z from "zod";

export const SCHEMA = z.object({
  username: z.string().min(1, {
    message: "El nombre de usuario es obligatorio.",
  }).max(30, "El nombre de usuario es demasiado largo"),
  password: z.string().min(1, {
    message: "La contraseña es obligatoria.",
  }).max(20, "La contraeña es demasiado larga"),
});
