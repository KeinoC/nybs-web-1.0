import "../styles/globals.css";
import Navbar from "./_components/Navbar";
import { TRPCReactProvider } from "~/trpc/react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950  text-zinc-300 relative w-full h-full max-w-screen overflow-x-hidden">
        <main className="relative flex h-full">
          <TRPCReactProvider>
            <Navbar />
            <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
              {children}
            </div>
          </TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
