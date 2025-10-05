import { doodleFlow } from "./flows/doodle/doodleFlow";
import { mathFlow } from "./flows/math/mathFlow";
async function main() {
    await mathFlow_function();
}
async function mathFlow_function() {
    const result_math = await mathFlow({
        equationImage: "https://study.com/cimages/multimages/16/leading_coefficient_7x9.png"
    });
    if (!result_math) throw new Error("Failed to generate output");
    console.log(result_math);
}

async function doodleFlow_function() {
    const result_doodle = await doodleFlow({
        initialDrawing: "https://study.com/cimages/multimages/16/leading_coefficient_7x9.png",
        style: "Cartoon"
    });
    if (!result_doodle) throw new Error("Failed to generate output");
    console.log(result_doodle);
}

main().catch(console.error);
