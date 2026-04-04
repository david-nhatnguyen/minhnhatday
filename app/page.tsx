import { LandingChrome } from "@/components/landing/LandingChrome";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { Craftsman } from "@/components/landing/Craftsman";
import { WhyCursor } from "@/components/landing/WhyCursor";
import { Formula4C } from "@/components/landing/Formula4C";
import { Journey } from "@/components/landing/Journey";
import { WeeklySupport } from "@/components/landing/WeeklySupport";
import { CourseOutcomes } from "@/components/landing/CourseOutcomes";
import { Manifesto } from "@/components/landing/Manifesto";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-100 focus-visible:rounded-lg focus-visible:bg-zinc-900 focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Bỏ qua đến nội dung chính
      </a>
      <LandingChrome>
        <main
          id="main"
          className="flex-1 min-w-0 overflow-x-clip"
        >
          <Hero />
          <TrustStrip />
          <ProblemSolution />
          <Craftsman />
          <WhyCursor />
          <Formula4C />
          <Journey />
          <WeeklySupport />
          <CourseOutcomes />
          <Manifesto />
          <Pricing />
          <FinalCta />
        </main>
      </LandingChrome>
      <SiteFooter />
    </>
  );
}
