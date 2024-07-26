import { Button } from "@/components/ui/button";
import Link from "next/link";

const Blog = () => {
  return (
    <section>
      <div className="container flex flex-wrap items-center justify-between gap-4 py-24">
        <div className="flex flex-col gap-4">
          <h2 className="h2">Insights & Resources</h2>
          <p>
            We combine insightful strategies with valuable resources to empower
            your business development journey. Our commitment lies in providing
            you with the essential tools and knowledge needed to navigate
            challenges, seize opportunities, and achieve sustainable growth.
            With our comprehensive expertise and dedicated support, we ensure
            every decision is backed by clarity and confidence.
          </p>
        </div>
        <div>
          <Link href="/what-we-do">
            <Button
              variant="outline"
              className="w-40 border-black bg-transparent hover:border-primary hover:bg-primary hover:text-white"
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
