"use client";

import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceAreas, services } from "@/lib/data";

const primaryServices = services.slice(0, 8);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 text-white shadow-[0_12px_40px_rgba(0,0,0,.18)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:h-24 lg:gap-5 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="C&B home">
          <Image src="/images/brand/cb-logo-transparent.png" alt="C&B Gas Piping logo" width={250} height={167} className="h-14 w-auto object-contain sm:h-16 lg:h-20" priority />
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 text-[11px] font-extrabold uppercase tracking-[.045em] text-white/82 min-[760px]:flex lg:text-[12px] xl:gap-1 xl:text-[13px]">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <Dropdown label="Services" href="/services">
              <div className="grid w-[min(760px,calc(100vw-2rem))] grid-cols-2 gap-2 p-3">
                {primaryServices.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-md p-3 hover:bg-zinc-100">
                    <p className="font-extrabold text-zinc-950">{service.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs normal-case leading-5 tracking-normal text-zinc-600">{service.summary}</p>
                  </Link>
                ))}
                <Link href="/services" className="col-span-2 rounded-md bg-zinc-950 px-4 py-3 text-center font-extrabold text-white hover:bg-flame">
                  View all services
                </Link>
              </div>
          </Dropdown>
          <Dropdown label="Service Areas" href="/service-areas">
              <div className="grid w-[min(560px,calc(100vw-2rem))] grid-cols-3 gap-2 p-3">
                {serviceAreas.map((area) => (
                  <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-md p-3 font-extrabold text-zinc-900 hover:bg-zinc-100">
                    {area.city}
                  </Link>
                ))}
              </div>
          </Dropdown>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <Button asChild className="ml-2 hidden min-[1120px]:inline-flex">
          <Link href="tel:2089722102">Call Now</Link>
        </Button>

        <Button asChild variant="secondary" className="hidden min-[1240px]:inline-flex">
          <Link href="/contact">Free Estimate</Link>
        </Button>

        <MobileMenu />
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md px-3 py-2 hover:bg-white/10 hover:text-white">
      {children}
    </Link>
  );
}

function Dropdown({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-md px-2.5 py-2 uppercase hover:bg-white/10 hover:text-white lg:px-3">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </button>
      <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-premium">
          <Link href={href} className="block border-b border-zinc-200 px-6 py-4 text-sm font-extrabold text-zinc-950 hover:bg-zinc-100">
            {label} Overview
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ml-auto inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-3 text-sm font-extrabold uppercase tracking-wide min-[760px]:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
        <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-[min(92vw,420px)] overflow-y-auto bg-zinc-950 p-5 text-white shadow-premium">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Image src="/images/brand/cb-logo-transparent.png" alt="C&B Gas Piping logo" width={190} height={127} className="h-16 w-auto object-contain" />
            <Dialog.Close className="rounded-md border border-white/20 p-2" aria-label="Close menu">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <nav className="mt-6 grid gap-6">
            <MobileLink href="/">Home</MobileLink>
            <MobileLink href="/about">About</MobileLink>
            <MobileGroup title="Services" href="/services">
              {services.map((service) => <MobileLink key={service.slug} href={`/services/${service.slug}`}>{service.title}</MobileLink>)}
            </MobileGroup>
            <MobileGroup title="Service Areas" href="/service-areas">
              {serviceAreas.map((area) => <MobileLink key={area.slug} href={`/service-areas/${area.slug}`}>{area.city}</MobileLink>)}
            </MobileGroup>
            <MobileLink href="/gallery">Gallery</MobileLink>
            <MobileLink href="/contact">Contact</MobileLink>
            <MobileLink href="tel:2089722102">Call 208-972-2102</MobileLink>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Dialog.Close asChild>
      <Link href={href} className="block rounded-md py-2 text-base font-black text-white/88 hover:text-white">
        {children}
      </Link>
    </Dialog.Close>
  );
}

function MobileGroup({ title, href, children }: { title: string; href: string; children: React.ReactNode }) {
  return (
    <div>
      <MobileLink href={href}>{title}</MobileLink>
      <div className="mt-2 grid gap-1 border-l border-white/15 pl-4 text-sm">{children}</div>
    </div>
  );
}
