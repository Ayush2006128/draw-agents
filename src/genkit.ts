import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";
import { config } from "dotenv";

config();

export const ai = genkit({
    plugins: [googleAI({
        apiKey: process.env.GOOGLE_API_KEY,
    })],
    model: googleAI.model("gemini-2.0-flash-preview-image-generation"),
});