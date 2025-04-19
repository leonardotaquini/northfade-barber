"use client";

import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import {  Home, Music2,  Scissors, NotebookPen } from 'lucide-react';



export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative">
      <Dock iconMagnification={50} iconDistance={80}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Home className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
            <Scissors className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <Music2 className="size-full" />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <NotebookPen className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}

