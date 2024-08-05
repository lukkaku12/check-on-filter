import { Request, Response } from "express";
import { container } from "tsyringe";
import { InventoryService } from "../services/medicineService";


export class medicineController {
    static getAll = async (_req:Request, res:Response) => {
        try {
            const medicineService = container.resolve(InventoryService);
            const response = await medicineService.getAllFromInventory()
            res.status(200).json({
                status:200,
                response:response
            })
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

    static insertMedicine = async (req:Request, res:Response) => {
        try {
            const {medicine_name,
                quantity,
                expiration_date,
                price} = req.body;
            const medicineService = container.resolve(InventoryService);
            await medicineService.addToInventory({medicine_name, quantity, expiration_date, price})
            res.status(201).json({
                status:201,
                response:'medicine created successfully'
            })
            
        } catch (error: any) {
            throw new Error(error)
        }
    }
}