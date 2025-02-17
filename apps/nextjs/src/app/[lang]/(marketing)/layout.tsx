import { Suspense } from "react";

import { getCurrentUser } from "@saasfly/auth";

import { ModalProvider } from "~/components/modal-provider";
import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";
import type { Locale } from "~/config/i18n-config";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";
import { Book, Sunset, Trees, Zap } from "lucide-react";

import { Navbar1 } from "~/components/blocks/shadcnblocks-com-navbar1";
function Navbar1Demo() {
    return <Navbar1 {...demoData} />;
}

const demoData = {
    logo: {
        url: "https://www.shadcnblocks.com",
        src: "https://www.shadcnblocks.com/images/block/block-1.svg",
        alt: "blocks for shadcn/ui",
        title: "Shadcnblocks.com",
    },
    menu: [
        {
            title: "Home",
            url: "https://www.shadcnblocks.com",
        },
        {
            title: "Products",
            url: "#",
            items: [
                {
                    title: "Blog",
                    description: "The latest industry news, updates, and info",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "/blog",
                },
                {
                    title: "Company",
                    description: "Our mission is to innovate and empower the world",
                    icon: <Trees className="size-5 shrink-0" />,
                    url: "/company",
                },
                {
                    title: "Careers",
                    description: "Browse job listing and discover our workspace",
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: "/careers",
                },
                {
                    title: "Support",
                    description:
                      "Get in touch with our support team or visit our community forums",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "/support",
                },
            ],
        },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "Help Center",
                    description: "Get all the answers you need right here",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "/help",
                },
                {
                    title: "Contact Us",
                    description: "We are here to help you with any questions you have",
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: "/contact",
                },
                {
                    title: "Status",
                    description: "Check the current status of our services and APIs",
                    icon: <Trees className="size-5 shrink-0" />,
                    url: "/status",
                },
                {
                    title: "Terms of Service",
                    description: "Our terms and conditions for using our services",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "/terms",
                },
            ],
        },
        {
            title: "Pricing",
            url: "/pricing",
        },
        {
            title: "Blog",
            url: "/blog",
        },
    ],
    mobileExtraLinks: [
        { name: "Press", url: "/press" },
        { name: "Contact", url: "/contact" },
        { name: "Imprint", url: "/imprint" },
        { name: "Sitemap", url: "/sitemap" },
    ],
    auth: {
        login: { text: "Log in", url: "/login" },
        signup: { text: "Sign up", url: "/signup" },
    },
};
export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
          <Navbar1 {...demoData} />
       {/*  <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          user={user}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        /> */}
      </Suspense>
      <ModalProvider dict={dict.login} />
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
