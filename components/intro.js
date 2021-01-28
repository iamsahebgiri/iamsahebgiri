import Link from "next/link";
import React from "react";
import Button from "./button";

export default function Intro() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 mb-6 md:mb-4">
        <h1 className="font-heading text-gray-800 dark:text-gray-100 font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center md:text-left leading-snug lg:leading-tight">
          Hey, I am
          <span className="text-gradient">{" Saheb Giri"}</span>
        </h1>
      </div>
      <p className="leading-relaxed text-gray-500 text-center max-w-sm">
        I’m a developer, student, and creator. You’ve found my personal slice of
        the internet.
      </p>
      <div className="mt-8 md:flex md:space-x-4">
        <Link href="/blog">
          <a>
            <Button isPrimary>View blogs</Button>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <Button isSecondary>See Projects </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
