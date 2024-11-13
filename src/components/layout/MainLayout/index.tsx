"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/src/context/authContext";
import { protectedRoutes, unprotectedRoutes } from "@/src/routes";
import SecuredPagesLayout from "@/src/components/layout/SecuredPagesLayout";
import UnsecuredPagesLayout from "@/src/components/layout/UnsecuredPagesLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  meta?: {
    title?: string;
    description?: string;
  };
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPartOfProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isUnprotectedRoute = unprotectedRoutes.includes(pathname);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {isProtectedRoute ? (
          <SecuredPagesLayout>{children}</SecuredPagesLayout>
        ) : isUnprotectedRoute ? (
          <UnsecuredPagesLayout>{children}</UnsecuredPagesLayout>
        ) : isPartOfProtectedRoute ? (
          <SecuredPagesLayout>{children}</SecuredPagesLayout>
        ) : (
          <section>{children}</section>
        )}
        <Toaster />
        {/* <ReactQueryDevtools/> */}
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default MainLayout;
