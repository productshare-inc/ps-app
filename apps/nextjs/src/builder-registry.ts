"use client";
import type { RegisteredComponent } from "@builder.io/sdk-react";
//import Counter from "./components/Counter/Counter";
import dynamic from 'next/dynamic';
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
   // component: Counter,
    component: dynamic(() => import("./components/Counter/Counter")),
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
];
