/*
 * @Author: Mecil Meng
 * @Date: 2025-01-22 17:58:34
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-22 18:00:33
 * @FilePath: /project_manager_system/client/src/components/ProjectCard/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="rounded border p-4 shadow">
      <h3 className="">{project.name}</h3>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
    </div>
  );
};

export default ProjectCard;
