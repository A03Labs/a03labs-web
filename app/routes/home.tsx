import type { Route } from "./+types/home";
import { Landing } from "../landing/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "A03 Labs — Software Agency" },
    {
      name: "description",
      content:
        "A03 Labs designs, builds, and ships digital products for startups and growing teams.",
    },
  ];
}

export default function Home() {
  return <Landing />;
}
