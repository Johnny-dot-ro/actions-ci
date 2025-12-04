import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router";
import Details from "./Details";
import InfiniteScroll from "./InfiniteScroll";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import './i18n';

const root = createRoot(document.getElementById("root")!);

const queryClient = new QueryClient()

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/:pid/details" element={<Details/>}/>
            <Route path="/listing" element={
                <QueryClientProvider client={queryClient}>
                    <InfiniteScroll/>
                </QueryClientProvider>}/>
        </Routes>
    </BrowserRouter>
);