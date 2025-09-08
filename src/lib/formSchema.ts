import z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(11, {
    message: "Phone number must be at least 11 characters.",
  }).regex(/^[+]?[0-9\s\-\(\)]+$/, {
    message: "Please enter a valid phone number.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  nin: z.string().min(11, {
    message: "NIN must be at least 11 characters.",
  }).max(11, {
    message: "NIN must be exactly 11 characters.",
  }).regex(/^[0-9]+$/, {
    message: "NIN must contain only numbers.",
  }),
});
