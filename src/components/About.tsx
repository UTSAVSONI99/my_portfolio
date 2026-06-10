"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Front-End Developer with 1 years of programming experience and 1 year
          of professional experience building responsive web applications.
          Passionate about solving problems and creating scalable, user-friendly
          solutions using React.js, Next.js, Prisma, JavaScript, and Tailwind
          CSS.
        </p>
        <p>
          I'm currently open to Software Development, Front-End, and Full-Stack
          opportunities where I can contribute, learn, and grow. Feel free to
          connect if you have an opportunity that matches my skills and
          experience.
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{" "}
          me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
