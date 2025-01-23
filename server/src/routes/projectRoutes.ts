/*
 * @Author: Mecil Meng
 * @Date: 2025-01-20 00:19:13
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-20 01:19:56
 * @FilePath: /project_manager_system/server/src/routes/projectRoutes.ts
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Router } from "express";
import { createProject, getProjects } from "../controller/projectController";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);

export default router;
