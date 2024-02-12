"use client";

import React, { useEffect } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import useAuthModal from "@/hooks/useAuthModal";

import Modal from "./modal";
import { Poppins } from "next/font/google";
import { getURL } from "@/lib/utils";
import { Auth } from "@supabase/auth-ui-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const AuthModal = () => {
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal
      title='Welcome back'
      description='Login to your account.'
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={["google"]}
        redirectTo={`${getURL()}/auth/callback`}
        appearance={{
          theme: ThemeSupa,
          style: {
            button: {
              fontFamily: poppins.style.fontFamily,
            },
            label: {
              fontFamily: poppins.style.fontFamily,
            },
            input: {
              fontFamily: poppins.style.fontFamily,
            },
            anchor: {
              fontFamily: poppins.style.fontFamily,
            },
          },
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        theme='dark'
      />
    </Modal>
  );
};

export default AuthModal;
