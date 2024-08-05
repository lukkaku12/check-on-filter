import { inject, injectable } from "tsyringe";
import { MedicineInventory } from "../repository/medicineRepository";
import { Medicine } from "../models";


//NO USAR INTERFACES, PARA ESO ESTA LA TABLA DE MODELOS, SI FALTAN DATOS PARA INSERTAR PONER PARTIAL

@injectable()
export class InventoryService {
    constructor(@inject(MedicineInventory) private medicineInventory: MedicineInventory) {}
    // en vez de usar const medicineInventory = new MedicineInventory() y de ahi poder usar los metodos, 
    async getAllFromInventory() {
        const [rows] = await this.medicineInventory.getAllMedicines();
        return rows;
    }

    async addToInventory(medicine:Partial<Medicine>) {
        const result = await this.medicineInventory.addMedicines(medicine);
        return result;
    }
}