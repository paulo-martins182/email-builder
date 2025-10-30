"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";

function Header() {
  const { user } = useUser();
  return (
    <div>
      <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-linear-to-r from-[#dd2590] to-[#376bfa]">
        <p>
          <span className="px-3 py-1 rounded-md text-primary bg-white mr-2">
            super oferta
          </span>
          teste nosso gerador com R$ 15,00 de descontos.
        </p>
      </div>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500 md:translate-x-14">
          <a href="/" className="hover:text-slate-500 transition">
            Home
          </a>
          <a href="/products" className="hover:text-slate-500 transition">
            Products
          </a>
          <a href="/stories" className="hover:text-slate-500 transition">
            Stories
          </a>
          <a href="/pricing" className="hover:text-slate-500 transition">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <Button>Get started</Button>
          {user ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <Button>Login</Button>
            </SignInButton>
          )}
        </div>
        <Button id="open-menu" className="md:hidden active:scale-90 transition">
          <Menu />
        </Button>
      </nav>

      <div
        id="mobile-navLinks"
        className="fixed inset-0 z-100 bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 -translate-x-full"
      >
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/stories">Stories</a>
        <a href="/pricing">Pricing</a>
        <Button
          id="close-menu"
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
        >
          <X />
        </Button>
      </div>
    </div>
  );
}

export default Header;
