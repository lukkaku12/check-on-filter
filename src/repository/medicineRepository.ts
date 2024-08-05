import { injectable } from "tsyringe";
import { Medicine } from "../models";
import { Op } from "sequelize";

@injectable()
export class MedicineInventory {
   async getAllMedicines() {
    return await Medicine.findAll();
  }

   async addMedicines(medicine: Partial<Medicine>) {
    return await Medicine.create(medicine);
  }
  
  //si deseo hacerlo para una fecha en especifico seria de la siguiente forma


// export default class MedicineService {
//   static async deleteExpiredMedicines(expirationDate: Date) {
//     return await Medicine.destroy({
//       where: {
//         expiration_date: {
//           [Op.lt]: expirationDate
//         }
//       }
//     });
//   }
// }

  static async deleteMedicines() { 
    const today = new Date()
    return await Medicine.destroy({
      where: {
        expiration_date: {
          [Op.lt]: today,
        },
      },
    });
  }

  static async updateMedicineQuantity(id:number, quantity:string) {
    return await Medicine.update({quantity},{where: {id}})
  }
}
