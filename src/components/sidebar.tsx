"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./box";
import Library from "./library";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: Home,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: Search,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div
      className={cn(
        "flex h-full"
        // player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
                  item.active && "text-white"
                )}
              >
                {<item.icon />}
                <p className='truncate w-100'>{item.label}</p>
              </Link>
            ))}
          </div>
        </Box>
        <Box className='overflow-y-auto h-full'>
          <Library songs={[]} />
        </Box>
      </div>
      <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
    </div>
  );
};

export default Sidebar;
