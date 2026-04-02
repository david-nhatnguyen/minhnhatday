"use client";

import type { ReactNode } from "react";
import { SectionRailProvider } from "@/components/landing/section-rail-context";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SectionRail } from "@/components/landing/SectionRail";

export function LandingChrome({ children }: { children: ReactNode }) {
  return (
    <SectionRailProvider>
      <SiteHeader />
      <SectionRail />
      {children}
    </SectionRailProvider>
  );
}
