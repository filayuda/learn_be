import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router(); 

//GET
router.get('/users', verifyToken, getUsers);
router.get('/token', refreshToken);


//POST
router.post('/users', Register);
router.post('/login', Login);

//DELETE
router.delete('/logout', Logout);


export default router;