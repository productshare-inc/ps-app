import { getCurrentUser } from "@saasfly/auth";

import { PricingCards } from "~/components/price/pricing-cards";
import { PricingFaq } from "~/components/price/pricing-faq";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";
import { HeroGeometric } from "~/components/blocks/shape-landing-hero";
import { Hero } from "~/components/ui/animated-hero"

function HeroDemo() {
    return (
      <div className="block">
          <Hero />
      </div>
    );
}

export const metadata = {
    title: "Pricing",
};

function DemoHeroGeometric() {
    return (
      <>
      <HeroGeometric
        badge="Kokonut UI"
        title1="Elevate Your"
        title2="Digital Vision"
      />
          </>
    );
}

export default async function PreviewPage({
                                              params: { lang },
                                          }: {
    params: {
        lang: Locale;
    };
}) {
    const user = await getCurrentUser();
    const dict = await getDictionary(lang);
    let subscriptionPlan;
    
    if (user) {
        subscriptionPlan = await trpc.stripe.userPlans.query();
    }
    return (
      <>
          <DemoHeroGeometric />
          <HeroDemo />
      </>
    );
}