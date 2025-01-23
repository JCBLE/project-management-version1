/*
 * @Author: Mecil Meng
 * @Date: 2025-01-22 17:26:53
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-22 17:27:20
 * @FilePath: /project_manager_system/server/src/routes/searchRoutes.ts
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Router } from "express";
import { search } from "../controller/searchController";

const router = Router();

router.get("/", search);
export default router;
