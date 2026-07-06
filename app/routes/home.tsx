import type { Route } from "./+types/home";
import { ComingSoon } from "../coming-soon/coming-soon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "A03 Labs — Coming Soon" },
    {
      name: "description",
      content:
        "We're currently building our website. Something new is on the way.",
    },
  ];
}

export default function Home() {
  return <ComingSoon />;
}
