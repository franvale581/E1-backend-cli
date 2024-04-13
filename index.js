import {get, save} from "./filesMethod.js";
import inquirer from "inquirer";
import { promtNewCost } from "./costPrompts.js";


//aux 

async function getAllCosts(){
    const currentCosts=await get("costs")
    console.log(currentCosts);
}

async function createNewCost(){
    console.log("estamos registrando sus costos...");
    const newCostData=await promtNewCost();
    console.log("Registrando:", newCostData);
    const currentCosts=await get("costs");
    currentCosts.push(newCostData);
    await save("costs", currentCosts);
}

const main = async()=>{
    let run=true;
    while(run){
        const action= await inquirer.prompt([
            {
                type: "list",
                name: "chosen",
                message: "¿Que deseas registrar?",
                choices: [
                    {value:1,name:"Obtener todos los gastos registrados"},
                    {value:2, name:"Ingresar un nuevo gasto"},
                    {value:3, name:"salir"},
                ],
            },
        ]);
        switch (action.chosen) {
            case 1:
                await getAllCosts();
                break;
            case 2:
                await createNewCost();
                break;
            case 99:
                run=false;
                break;
            default:
                run=false;
                break;
        }
    };
};

main();