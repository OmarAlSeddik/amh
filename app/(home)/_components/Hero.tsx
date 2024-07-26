import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('../public/home/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col justify-between gap-64 py-24">
        <div className="flex flex-col gap-4 self-start">
          <h1 className="h1">
            Welcome To A.M.H For
            <br />
            Business Development
          </h1>
          <h3 className="h3">
            Your destination for exceptional Business Development solutions
          </h3>
          <Link href="/what-we-do">
            <Button
              variant="outline"
              className="w-40 bg-transparent text-white hover:bg-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 self-end">
          <h2>Subscribe to Our Newsletter</h2>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-xs">
              Enter your email address
            </Label>
            <div className="flex">
              <Input
                placeholder="Email Address"
                className="border-primary bg-transparent text-white placeholder:text-white"
                id="email"
              />
              <Button>Subscribe</Button>
            </div>
            <span className="text-xs">Thank You for Subscribing!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
