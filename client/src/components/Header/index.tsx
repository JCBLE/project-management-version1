/*
 * @Author: Mecil Meng
 * @Date: 2025-01-20 13:33:05
 * @LastEditors: Mecil Meng
 * @LastEditTime: 2025-01-20 13:59:33
 * @FilePath: /project_manager_system/client/src/components/Header/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by JCBEL/JCBLE/MSCI/MOTU, All Rights Reserved.
 */
import React from "react";

type Props = {
  name: string;
  buttonComponent?: React.ReactNode;
  isSmallText?: boolean;
};

function Header({ name, buttonComponent, isSmallText = false }: Props) {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
      >
        {name}
      </h1>
      {buttonComponent && buttonComponent}
    </div>
  );
}

export default Header;
