/*
 * @Author: Mecil Meng
 * @Date: 2025-01-22 18:01:45
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-22 18:46:44
 * @FilePath: /project_manager_system/client/src/components/UserCard/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt={user.username}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
