import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-[url('../public/home/about.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col gap-64 py-24">
        <div className="flex flex-col gap-4 self-start">
          <h2 className="h2">
            About A.M.H For
            <br />
            Developments
          </h2>
          <h3 className="h3">Empowering Your Business To Success</h3>
        </div>
        <div className="flex flex-col gap-8 self-end">
          <p>
            At A.M.H., we are committed to empowering your business to thrive in
            today&apos;s competitive landscape. Our strategic approach is
            designed to unlock your full potential and drive sustainable growth.
            With personalized strategies and expert guidance, we ensure that you
            have the tools and insights needed to seize opportunities and
            navigate challenges effectively. Partner with A.M.H. to elevate your
            business development efforts and achieve enduring success.
          </p>
          <Link href="/what-we-do">
            <Button
              variant="outline"
              className="w-40 self-end bg-transparent text-white hover:bg-white"
            >
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
