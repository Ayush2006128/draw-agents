import { z } from "genkit";

export const inputSchema = z.object({
    equationImage: z.string().describe("The equation image.")
});

export type MathInput = z.infer<typeof inputSchema>;
