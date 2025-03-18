"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Upcoming Bill Due",
      description: "Your electricity bill is due in 2 days",
      time: "15m ago",
      icon: "⚡",
      color: "#FF3D71",
    },
    {
      name: "Budget Reminder",
      description: "You've spent 80% of your monthly groceries budget",
      time: "10m ago",
      icon: "📊",
      color: "#FFB800",
    },
    {
      name: "Event Reminder",
      description: "Don't forget your finance review session this weekend",
      time: "5m ago",
      icon: "📅",
      color: "#1E86FF",
    },
    {
      name: "Smart Tip",
      description: "Consider setting up a weekly expense review to stay on track",
      time: "2m ago",
      icon: "💡",
      color: "#00C9A7",
    },
    {
      name: "Goal Progress Update",
      description: "You're 75% towards your vacation savings goal!",
      time: "Just now",
      icon: "🎯",
      color: "#4CAF50",
    },
  ];
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%] ",
        // light styles
        // shadow-[4px_14px_186px_31px_rgba(62,_78,_225,_0.19)]
        "bg-white/40 ",
        // dark styles
        // dark:bg-transparent dark:backdrop-blur-2xl dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
        "transform-gpu bg-white/50 backdrop-blur-4xl ",
      )}
    >
      <div className="flex flex-row items-center gap-3 ">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col  overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm text-black  sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-300"></div>
    </div>
  );
}
