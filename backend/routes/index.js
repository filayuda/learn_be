import express from "express";
import { getUsers } from "../controllers/Users.js";
import { Router } from "express";

// const router = express.Router() 

Router.get('/users', getUsers);

export default router;