import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";
import ModalProvider from "@/providers/modal-provider";
import SupabaseProvider from "@/providers/supabase-provider";
import "./globals.css";
import UserProvider from "@/providers/user-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Breadit",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SupabaseProvider>
      <html lang='en'>
        <UserProvider>
          <body className={poppins.className}>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
            <Toaster />
          </body>
        </UserProvider>
      </html>
    </SupabaseProvider>
  );
}
