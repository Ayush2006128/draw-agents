import { mathFlow } from "./flows/math/mathFlow";

async function main() {
    const result = await mathFlow({
        equationImage: "https://study.com/cimages/multimages/16/leading_coefficient_7x9.png"
    });
    if (!result) throw new Error("Failed to generate output");
    console.log(result);
}

main().catch(console.error);
