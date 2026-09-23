import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowSquareOut,
  EnvelopeSimple,
  GithubLogo,
  House,
  List,
  Medal,
  Stack,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { useState, type ReactNode } from "react";

import portrait from "@/assets/axel-francisco.png";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/", icon: House },
  { label: "Projects", to: "/projects", icon: Stack },
  { label: "Credentials", to: "/credentials", icon: Medal },
  { label: "Services", to: "/services", icon: UserCircle },
  { label: "Contact", to: "/contact", icon: EnvelopeSimple },
] as const;

function ContourBackground() {
  return (
    <div className="contour-bg" aria-hidden="true">
      <span className="contour contour-one" />
      <span className="contour contour-two" />
      <span className="contour contour-three" />
    </div>
  );
}

function NavItems({ close }: { close?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav aria-label="Main navigation" className="mt-8 flex flex-col gap-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={close}
            aria-current={active ? "page" : undefined}
            className={`nav-item ${active ? "nav-item-active" : ""}`}
          >
            <Icon size={24} weight={active ? "fill" : "regular"} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function Identity() {
  return (
    <div className="text-center">
      <div className="relative mx-auto size-28 overflow-hidden rounded-full">
        <img
          src={portrait}
          alt="Van Axel Francisco, web and mobile app developer"
          className="size-full object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-background" />
      </div>

      <p className="mt-4 text-xl font-bold text-foreground">Van Axel Francisco</p>
      <p className="mt-1 text-base text-muted-foreground">Web & Mobile App Developer</p>

      <div className="mt-4 flex justify-center gap-2">
        <Button asChild variant="outline" size="icon" aria-label="View Van Axel Francisco on GitHub">
          <a href="https://github.com/axelfrancisco" target="_blank" rel="noreferrer">
            <GithubLogo size={22} />
          </a>
        </Button>

        <Button asChild variant="outline" size="icon" aria-label="View Van Axel Francisco on Upwork">
          <a
            href="https://www.upwork.com/freelancers/~0128acb463b46d4e26?mp_source=share"
            target="_blank"
            rel="noreferrer"
          >
            <ArrowSquareOut size={22} />
          </a>
        </Button>

        <Button asChild variant="outline" size="icon" aria-label="Email Van Axel Francisco">
          <a href="mailto:rinuagold@gmail.com">
            <EnvelopeSimple size={22} />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContourBackground />

      <header className="mobile-header">
        <Link to="/" className="flex items-center gap-3 font-bold" aria-label="Van Axel Francisco home">
          <img src={portrait} alt="" className="size-11 rounded-full object-cover object-top" />
          <span>Van Axel Francisco</span>
        </Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
          aria-expanded={mobileOpen}
        >
          <List size={24} />
        </Button>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay" />
          <aside className="absolute inset-y-0 left-0 w-[min(88vw,22rem)] overflow-y-auto border-r border-border bg-background p-6 shadow-2xl">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close navigation">
                <X size={24} />
              </Button>
            </div>
            <Identity />
            <NavItems close={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <aside className="desktop-sidebar">
        <Identity />
        <NavItems />
        <p className="mt-auto border-t border-border pt-5 text-center text-sm text-muted-foreground">© 2026 Van Axel Francisco</p>
      </aside>

      <main className="relative z-10 min-h-screen px-5 pb-10 pt-24 sm:px-8 lg:ml-80 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-295">{children}</div>
      </main>
    </div>
  );
}
