/*
 * @Author: Mecil Meng
 * @Date: 2025-01-23 16:00:05
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-23 16:03:05
 * @FilePath: /project_manager_system/client/src/app/priority/urgent/page.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;
