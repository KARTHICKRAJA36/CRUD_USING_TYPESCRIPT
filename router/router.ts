import { Router } from "express"
import { createuser } from "../controllers/usercontroller/create"
import { login } from "../controllers/usercontroller/login"
import { read } from "../controllers/usercontroller/read"
import { update } from "../controllers/usercontroller/update"
import { verifyToken } from "../auth/authorizatin"
import { deleteuser } from "../controllers/usercontroller/delete"
const router = Router();

router.post('/create', createuser)
router.post('/login', login)
router.get('/read', verifyToken, read)
router.put('/update/:userid', verifyToken, update)
router.delete('/delete/:userid', verifyToken, deleteuser)
export default router