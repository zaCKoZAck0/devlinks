"use client";
import React from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "~/state/store";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="bottom-center" richColors />
    </Provider>
  );
};
