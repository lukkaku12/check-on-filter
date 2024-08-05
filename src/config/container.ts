import { container } from "tsyringe";
import { MedicineInventory } from "../repository/medicineRepository";
import { InventoryService } from "../services/medicineService";


container.registerSingleton(MedicineInventory)
container.registerSingleton(InventoryService)