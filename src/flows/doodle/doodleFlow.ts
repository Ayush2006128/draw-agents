import { ai } from "../../genkit";
import { inputSchema, DoodleInput } from "../../schemas/doodle/inputSchema";
import { DoodleOutput, outputSchema } from "../../schemas/doodle/outputSchema";

export const doodleFlow = ai.defineFlow({
    name: "Doodle Flow",
    inputSchema: inputSchema,
    outputSchema: outputSchema,
},
    async (input: DoodleInput): Promise<DoodleOutput> => {
        const { output } = await ai.generate({
            prompt: [
                {
                    text: `
                    You are an expert artist tasked with enhancing/reimagining user's doodle based on the given style.
                    Style: ${input.style}
                    `
                },
                {
                    media: { url: input.initialDrawing }
                }
            ],
            output: { schema: outputSchema },
        });
        if (!output) throw new Error("Failed to generate output");
        return output;
    }
);