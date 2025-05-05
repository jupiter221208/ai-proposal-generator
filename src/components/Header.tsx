"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b container mx-auto flex h-16 items-center justify-between px-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold">AI Proposal Generator</span>
      </Link>
      <nav className="flex items-center space-x-4">
        <Button asChild variant="ghost">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/about">About</Link>
        </Button>
      </nav>
    </header>
  );
}
