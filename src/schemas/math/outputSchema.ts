import { z } from "genkit";

export const outputSchema = z.object({
    solvedEquation: z.string().describe("The solved equation."),
    sources: z.array(z.string()).describe("The sources used to solve the equation."),
});

export type MathOutput = z.infer<typeof outputSchema>;
