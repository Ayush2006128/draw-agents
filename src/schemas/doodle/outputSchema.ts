import { z } from "genkit";

export const outputSchema = z.object({
    finalDrawing: z.string().describe("The final drawing of the doodle."),
});

export type DoodleOutput = z.infer<typeof outputSchema>;
