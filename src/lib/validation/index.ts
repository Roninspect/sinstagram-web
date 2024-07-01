import { z } from "zod";

export const signupValidation = z.object({
  name: z.string().min(2, { message: "Too Short" }),
  username: z.string().min(2, { message: "Too Shortss" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password cant be less than 8 characters" }),
});
export const signinValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password cant be less than 8 characters" }),
});
