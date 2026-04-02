"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SectionRailContextValue = {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggle: () => void;
};

const SectionRailContext = createContext<SectionRailContextValue | null>(null);

export function SectionRailProvider({ children }: { children: ReactNode }) {
  const [open, setOpenState] = useState(true);

  const setOpen = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    setOpenState((prev) => (typeof value === "function" ? value(prev) : value));
  }, []);

  const toggle = useCallback(() => {
    setOpen((v) => !v);
  }, [setOpen]);

  const value = useMemo(
    () => ({ open, setOpen, toggle }),
    [open, setOpen, toggle],
  );

  return (
    <SectionRailContext.Provider value={value}>{children}</SectionRailContext.Provider>
  );
}

export function useSectionRail(): SectionRailContextValue {
  const ctx = useContext(SectionRailContext);
  if (!ctx) {
    throw new Error("useSectionRail must be used within SectionRailProvider");
  }
  return ctx;
}
