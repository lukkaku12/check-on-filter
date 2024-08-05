import { Router } from "express";
import medicinesRouter from "./medicinesRouter";


const router = Router();

router.use('/inventory', medicinesRouter);

export default router;