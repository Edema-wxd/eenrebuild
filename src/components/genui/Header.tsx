"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // For exact matches
    if (pathname === path) return true;
    // For nested routes (like services)
    if (path.startsWith("/services") && pathname.startsWith("/services"))
      return true;
    return false;
  };

  return (
    <header className="bg-white/95 backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.05)] flex flex-row justify-between items-center lg:p-10 px-5 py-5">
      <Link href="/">
        <Image
          src="/logos/een-logo.svg"
          alt="EEN Consulting"
          width={150}
          height={150}
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              data-active={isActive("/about")}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger data-active={isActive("/services")}>
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem
                  href="/services/edge-nigeria"
                  title="EDGE Certification"
                >
                  Expert guidance through the IFC EDGE green building
                  certification process
                </ListItem>
                <ListItem
                  href="/services/water-solutions"
                  title="Water Solutions"
                >
                  Reduce water consumption by up to 70% without compromising
                  performance.
                </ListItem>
                <ListItem href="/services/solar-energy" title="Solar Energy">
                  Complete solar installations for residential and commercial
                  properties.
                </ListItem>
                <ListItem href="/services/smart-meters" title="Smart Meters">
                  Track and optimize your energy consumption in real-time for
                  maximum efficiency.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              data-active={isActive("/edge-building")}
            >
              <Link href="/edge-building">EDGE</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              data-active={isActive("/resources")}
            >
              <Link href="/resources">Resources</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
              data-active={isActive("/partners")}
            >
              <Link href="/partners">Partners</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button>Get Started</Button>
    </header>
  );
}

export default Header;
