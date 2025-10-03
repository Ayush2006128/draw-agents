import { ai } from "../../genkit";
import { inputSchema, MathInput } from "../../schemas/math/inputSchema";
import { MathOutput, outputSchema } from "../../schemas/math/outputSchema";
import searchTool from "../../tools/searchTool";

export const mathFlow = ai.defineFlow({
    name: "Math Flow",
    inputSchema: inputSchema,
    outputSchema: outputSchema,
},
    async (input: MathInput): Promise<MathOutput> => {
        const { output } = await ai.generate({
            prompt: [
                {
                    text: `You are an expert mathematician tasked with analyzing an image containing a complex mathematical equation.
Your goal is to provide a comprehensive analysis, explanation, and solution.`
                },
                {
                    media: { url: input.equationImage }
                }
            ],
            tools: [searchTool],
            output: { schema: outputSchema },
        });
        if (!output) throw new Error("Failed to generate output");
        return output;
    }
);
