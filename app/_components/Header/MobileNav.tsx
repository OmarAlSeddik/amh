import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="block text-black lg:hidden">
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <nav className="flex h-screen flex-col items-center justify-center gap-8 bg-black text-2xl text-white">
          <DialogClose asChild>
            <Link href="/">Home</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href="/who-we-are">Who We Are</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href="/our-team">Our Team</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href="/what-we-do">What We Do</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href="/contact-us">Contact Us</Link>
          </DialogClose>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNav;
