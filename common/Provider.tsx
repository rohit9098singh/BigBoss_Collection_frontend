"use client"
import NextTopLoader from "nextjs-toploader";
import { ModalProvider } from "@/context/modal-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 0,
                refetchOnReconnect: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <ModalProvider>
                <NextTopLoader
                    showSpinner={false}
                    color="#FFD700"
                    shadow="0 0 10px #FFD700, 0 0 6px #FFD700"
                    height={3}
                />
                {children}
            </ModalProvider>
        </QueryClientProvider>
    )
}