import { z } from "genkit";

export const inputSchema = z.object({
    style: z.string().describe("The style of the doodle."),
    initialDrawing: z.string().describe("The initial drawing of the doodle."),
});

export type DoodleInput = z.infer<typeof inputSchema>;

