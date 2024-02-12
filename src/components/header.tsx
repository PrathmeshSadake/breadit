"use client";

import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import Button from "./button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Home, Search, User } from "lucide-react";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();

  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // player.reset();
    router.refresh();

    if (error) {
      //   toast.error(error.message);
    }
  };

  return (
    <div
      className={cn(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition'
          >
            <ChevronLeft className='text-white' size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className='rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition'
          >
            <ChevronRight className='text-white' size={35} />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button
            onClick={() => router.push("/")}
            className='rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition'
          >
            <Home className='text-black' size={20} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className='rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition'
          >
            <Search className='text-black' size={20} />
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          {user ? (
            <div className='flex gap-x-4 items-center'>
              <Button onClick={handleLogout} className='bg-white px-6 py-2'>
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className='bg-white'
              >
                <User />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-transparent text-neutral-300 font-medium'
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className='bg-white px-6 py-2'
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
