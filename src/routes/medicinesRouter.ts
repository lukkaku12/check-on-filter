import { Router } from "express";
import { medicineController } from "../controllers/medicineController";


const medicinesRouter = Router();

medicinesRouter.get('/', medicineController.getAll);
medicinesRouter.post('/', medicineController.insertMedicine);


export default medicinesRouter;