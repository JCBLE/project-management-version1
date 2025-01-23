/*
 * @Author: Mecil Meng
 * @Date: 2025-01-21 14:34:40
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-22 14:37:24
 * @FilePath: /project_manager_system/client/src/app/projects/ListView/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import Header from "@/components/Header";
import { Task, useGetTasksQuery } from "@/state/api";
import React from "react";
import TaskCard from "../../../components/TaskCard";
import { PlusSquare } from "lucide-react";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (value: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching task</div>;

  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="List"
          buttonComponent={
            <button
              className="flex items-center rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              <PlusSquare className="mr-2 h-5 w-5" /> New Task
            </button>
          }
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
