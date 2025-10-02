import { z } from "genkit";

export const outputSchema = z.object({
    solvedEquation: z.string().describe("The solved equation."),
});

export type MathOutput = z.infer<typeof outputSchema>;
