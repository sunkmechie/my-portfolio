import React from 'react';
import { motion } from 'framer-motion';
import * as HoverCard from '@radix-ui/react-hover-card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  level: string;
  details: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon: Icon,
  level,
  details,
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {level}
              </p>
            </div>
          </div>
        </motion.div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="w-80 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          sideOffset={5}
        >
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <ul className="space-y-1">
              {details.map((detail, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  • {detail}
                </li>
              ))}
            </ul>
          </div>
          <HoverCard.Arrow className="fill-white dark:fill-gray-800" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};