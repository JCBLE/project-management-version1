/*
 * @Author: Mecil Meng
 * @Date: 2025-01-23 14:12:08
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-23 14:12:30
 * @FilePath: /project_manager_system/server/src/routes/userRoutes.ts
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Router } from "express";
import { getUsers } from "../controller/userController";

const router = Router();

router.get("/", getUsers);
export default router;
