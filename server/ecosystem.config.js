/*
 * @Author: Mecil Meng
 * @Date: 2025-01-23 16:28:10
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-23 16:28:58
 * @FilePath: /project_manager_system/server/ecosystem.config.js
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
module.exports = {
  apps: [
    {
      name: "project-management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
