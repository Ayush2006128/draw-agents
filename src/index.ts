import { doodleFlow } from "./flows/doodle/doodleFlow";
import { mkdir, writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
async function main() {
    // const result_math = await mathFlow({
    //     equationImage: "https://study.com/cimages/multimages/16/leading_coefficient_7x9.png"
    // });
    // if (!result_math) throw new Error("Failed to generate output");
    // console.log(result_math);
    const result_doodle = await doodleFlow({
        style: "Cartoon",
        initialDrawing: "https://study.com/cimages/multimages/16/leading_coefficient_7x9.png"
    });
    if (!result_doodle) throw new Error("Failed to generate output");
    const finalDrawing = result_doodle.finalDrawing;
    if (!finalDrawing) throw new Error("Doodle flow returned an empty drawing");

    await mkdir("artifacts", { recursive: true });

    // If the model returns a data URL, strip the header before decoding.
    const dataUrlMatch = finalDrawing.match(/^data:(image\/\w+);base64,(.+)$/);
    const buffer = dataUrlMatch
        ? Buffer.from(dataUrlMatch[2], "base64")
        : Buffer.from(finalDrawing, "base64");

    await writeFile("artifacts/doodle.png", buffer);
    console.log("Saved doodle to artifacts/doodle.png");}

main().catch(console.error);
