"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Users, DollarSign, Activity, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="p-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>
        
        <BentoGrid className="max-w-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-800"></div>
);

const items = [
  {
    title: "Total Revenue",
    description: "Revenue generated this month.",
    header: <Skeleton />,
    icon: <DollarSign className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Active Users",
    description: "Users currently active.",
    header: <Skeleton />,
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "System Health",
    description: "All systems running smoothly.",
    header: <Skeleton />,
    icon: <Activity className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Recent Logs",
    description: "Latest activity logs across the platform.",
    header: <Skeleton />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
];
