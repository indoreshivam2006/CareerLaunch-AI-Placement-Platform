"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function LandingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303]">
      {/* Animated geometric hero */}
      <HeroGeometric
        badge="AI-Powered Career Readiness"
        title1="Launch Your Dream"
        title2="Career with Confidence"
      />

      {/* Features showcase section */}
      <section id="features" className="relative z-10 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">Ace Placements</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              10 AI-powered tools in one platform — built for campus placement prep
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const iconColors = [
                "text-indigo-400 bg-indigo-400/10",
                "text-rose-400 bg-rose-400/10",
                "text-violet-400 bg-violet-400/10",
              ];
              const colorClass = iconColors[idx % 3];
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] transition-colors p-8 group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorClass} text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honest stats / social proof */}
      <section className="relative z-10 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] px-8 py-12">
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="mt-1 text-sm text-white/50">
                  AI-Powered Features
                </div>
              </div>
              <div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                  IIT Ropar
                </div>
                <div className="mt-1 text-sm text-white/50">
                  Adivya 2.0 Hackathon
                </div>
              </div>
              <div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">
                  Groq LLM
                </div>
                <div className="mt-1 text-sm text-white/50">
                  Lightning-Fast AI Engine
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#030303] px-4 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-white/40">
          © {new Date().getFullYear()} CareerLaunch. Built for ambitious professionals.
        </div>
      </footer>
    </div>
  );
}

/* ------- Feature data ------- */
const features = [
  { icon: "🤖", title: "AI Mock Interview", desc: "Practice behavioral & technical interviews with real-time AI feedback" },
  { icon: "🗣️", title: "GD Simulator", desc: "Simulate group discussions and get communication & leadership insights" },
  { icon: "📄", title: "Resume Builder", desc: "Generate professional resumes with dynamic styling and PDF export" },
  { icon: "✅", title: "ATS Scorer", desc: "Upload your resume and get an ATS compatibility score with improvement tips" },
  { icon: "🎯", title: "JD Matcher", desc: "Match your resume against a Job Description to find skill gaps" },
  { icon: "✉️", title: "Cover Letter Generator", desc: "Auto-generate tailored cover letters for specific roles using Groq LLM" },
  { icon: "🧠", title: "Aptitude Module", desc: "Practice quantitative, logical, and verbal reasoning questions" },
  { icon: "🏢", title: "Company Tracker", desc: "Track upcoming campus companies, deadlines, and eligibility criteria" },
  { icon: "⚖️", title: "Offer Comparison", desc: "Compare job offers side-by-side based on CTC, location, and growth" },
  { icon: "💳", title: "Pricing Tiers", desc: "Subscription tiers to unlock advanced AI-powered premium features" },
];
