/*
 * @Author: Mecil Meng
 * @Date: 2025-01-21 16:40:31
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-21 19:36:41
 * @FilePath: /project_manager_system/client/src/components/TaskCard/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  console.log(task);
  return (
    <div className="mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white">
      {task.attachments && task.attachments.length > 0 && (
        <div>
          <strong>Attachments:</strong>
          <div className="flex flex-wrap">
            {task.attachments && task.attachments.length > 0 && (
              <Image
                src={`/${task.attachments[0].fileURL}`}
                width={400}
                height={200}
                alt={task.attachments[0].fileName}
                className="rounded-md"
              />
            )}
          </div>
        </div>
      )}
      <p>
        <strong>ID:</strong>
        {task.id}
      </p>
      <p>
        <strong>Title:</strong>
        {task.title}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {task.description || "No description provided"}
      </p>
      <p>
        <strong>Status:</strong>
        {task.status}
      </p>
      <p>
        <strong>Priority:</strong>
        {task.priority}
      </p>
      <p>
        <strong>Tags:</strong>
        {task.tags}
      </p>
      <p>
        <strong>Start Date:</strong>
        {task.startDate ? format(new Date(task.startDate), "P") : "N/A"}
      </p>
      <p>
        <strong>Due Date:</strong>
        {task.dueDate ? format(new Date(task.dueDate), "P") : "N/A"}
      </p>
      <p>
        <strong>Author:</strong>
        {task.author ? task.author.username : "Unknown"}
      </p>
      <p>
        <strong>Assignee:</strong>
        {task.assignee ? task.assignee.username : "Unknown"}
      </p>
    </div>
  );
};

export default TaskCard;
