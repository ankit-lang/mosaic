"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutDashboard, Settings, Users, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: Activity },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <motion.div
      initial={false}
      animate={{ width: isExpanded ? 240 : 80 }}
      className="h-screen bg-black border-r border-neutral-800 flex flex-col relative"
    >
      <div className="p-4 flex items-center justify-between border-b border-neutral-800">
        <motion.div
          animate={{ opacity: isExpanded ? 1 : 0 }}
          className={cn("font-bold text-xl text-white truncate", !isExpanded && "hidden")}
        >
          MOSAIC OS
        </motion.div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-md hover:bg-neutral-800 text-neutral-400 transition-colors"
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                )}
              >
                <item.icon size={20} className="min-w-[20px]" />
                <motion.span
                  animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "auto" : 0 }}
                  className={cn("ml-4 whitespace-nowrap overflow-hidden", !isExpanded && "hidden")}
                >
                  {item.name}
                </motion.span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex-shrink-0" />
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0 }}
            className={cn("flex flex-col overflow-hidden", !isExpanded && "hidden")}
          >
            <span className="text-sm font-medium text-white truncate">Admin User</span>
            <span className="text-xs text-neutral-500 truncate">admin@mosaic.com</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
