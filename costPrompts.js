import inquirer from "inquirer";
import datePrompt from "inquirer-date-prompt";

//aux

const newCostPrompt = [
    {
        type: "date",
        name: "date",
        message: "Ingresa la fecha",
        locate: "en-US",
        format: { month: "short", day: "numeric" },
    },
    {
        type: "input",
        name: "cost",
        message: "Ingresa tus gastos de hoy",
    },
]
inquirer.registerPrompt("date", datePrompt);

export async function promtNewCost(){
    return await inquirer.prompt(newCostPrompt)

}


