'use client';

import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

export default function CustomApolloPrivder({ children }: { children: ReactNode }) {
    return <ApolloProvider client={client}>{ children}</ApolloProvider>
}