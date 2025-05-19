import { AboutHero } from "~/components/about/about-hero";
import { MissionValues } from "~/components/about/mission-values";
// import { Team } from "@/components/about/team";
import { Stats } from "~/components/about/stats";
import { Reviews } from "~/components/home/reviews";
import { Newsletter } from "~/components/home/newsletter";
import type { Metadata } from 'next';
import { VideoHero } from "~/components/home/video-hero";
import { VideoHero2 } from "~/components/home/video-hero-v2";

export const metadata: Metadata = {
  title: 'About Us | Your Store Name',
  description: 'Learn about our story, mission, values, and the team behind Your Store Name',
};

export default function AboutPage() {
  return (
    <>
    <VideoHero2/>
      {/* <VideoHero/> */}
      <AboutHero />
      {/* <MissionValues /> */}
      {/* <Stats /> */}
      {/* <Team /> */}
      {/* <Reviews />
      <Newsletter /> */}
    </>
  );
}