/*
 * @Author: Mecil Meng
 * @Date: 2025-01-23 14:26:49
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-23 14:33:00
 * @FilePath: /project_manager_system/server/src/controller/teamController.ts
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();
    const teamsWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        const productOwner = await prisma.user.findUnique({
          where: {
            userId: team.productOwnerUserId,
          },
          select: { username: true },
        });

        const projectManager = await prisma.user.findUnique({
          where: {
            userId: team.projectManagerUserId,
          },
          select: { username: true },
        });

        return {
          ...team,
          productOwnerUsername: productOwner?.username,
          projectManagerUsername: projectManager?.username,
        };
      })
    );

    res.json(teamsWithUsernames);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Get Teams, Something went wrong. ${error.message}` });
  }
};
