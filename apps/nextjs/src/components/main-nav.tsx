"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import * as Icons from "@saasfly/ui/icons";
import { DocumentGuide } from "~/components/document-guide";
import { MobileNav } from "~/components/mobile-nav";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import type { MainNavItem } from "~/types";

interface MainNavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
    params: {
        lang: string;
    };
    marketing?: Record<string, string>;
}

export function MainNav({ items, children, params: { lang }, marketing }: MainNavProps) {
    const { theme } = useTheme();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const toggleMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    const handleMenuItemClick = () => {
        toggleMenu();
    };
    return (
      <div className="flex gap-6 md:gap-10">
          <div className="flex items-center">
              <Link href={`/${lang}`} className="hidden items-center space-x-2 md:flex">
                  <Image
                    src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                    alt="ProductShare Logo"
                    width={150}
                    height={50}
                  />
              </Link>
              
              <Link href="https://docs.productshare.co" target="_blank" className="ml-4 hidden md:flex lg:flex xl:flex">
                  <DocumentGuide>
                      {marketing?.introducing ?? "Introducing ProductShare"}
                  </DocumentGuide>
              </Link>
          </div>
          
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
              {showMobileMenu ? <Icons.Close/> : <Icons.Logo/>}
              <span className="font-bold">Menu</span>
          </button>
          {showMobileMenu && items && (
            <MobileNav items={items} menuItemClick={handleMenuItemClick}>
                {children}
            </MobileNav>
          )}
      </div>
    );
}