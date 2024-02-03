import express from "express";
import protectRoute from "../midlleware/protectRoute.js";
import { getUsersForSidebar } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)

export default router;