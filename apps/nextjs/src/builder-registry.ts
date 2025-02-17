"use client";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from 'next/dynamic';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: dynamic(() => import("./components/Counter/Counter")),
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  {
    component: dynamic(() => import("~/components/blocks/shape-landing-hero").then(mod => mod.HeroGeometric)),
    name: "HeroGeometric",
    inputs: [
      {
        name: "badge",
        type: "string",
        defaultValue: "Design Collective",
      },
      {
        name: "title1",
        type: "string",
        defaultValue: "Elevate Your Digital Vision",
      },
      {
        name: "title2",
        type: "string",
        defaultValue: "Crafting Exceptional Websites",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
      },
      {
        name: "shapes",
        type: "list",
        subFields: [
          {
            name: "gradient",
            type: "color",
            defaultValue: "from-indigo-500/[0.15]",
          },
          {
            name: "delay",
            type: "number",
            defaultValue: 0.3,
          },
          {
            name: "width",
            type: "number",
            defaultValue: 600,
          },
          {
            name: "height",
            type: "number",
            defaultValue: 140,
          },
          {
            name: "rotate",
            type: "number",
            defaultValue: 12,
          },
          {
            name: "className",
            type: "string",
            defaultValue: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
          },
        ],
        defaultValue: [
          { gradient: "from-indigo-500/[0.15]", delay: 0.3, width: 600, height: 140, rotate: 12, className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" },
          { gradient: "from-rose-500/[0.15]", delay: 0.5, width: 500, height: 120, rotate: -15, className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" },
          { gradient: "from-violet-500/[0.15]", delay: 0.4, width: 300, height: 80, rotate: -8, className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" },
          { gradient: "from-amber-500/[0.15]", delay: 0.6, width: 200, height: 60, rotate: 20, className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]" },
        ],
      },
    ],
  },
];