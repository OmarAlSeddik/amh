import { BookmarkCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center border p-16">
          <h2 className="h2">
            Why Choose
            <br />
            <span className="text-primary">A.M.H</span> For Your
            <br />
            Business?
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Proven Expertise</h3>
          <p>
            AMH has a strong track record in business development, demonstrated
            through successful client engagements and industry-specific
            knowledge.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Tailored Strategies</h3>
          <p>
            They offer customized solutions that address our specific business
            challenges and align with our strategic goals.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Network and Partnerships</h3>
          <p>
            AMH provides access to extensive networks and strategic
            partnerships, facilitating market expansion and growth
            opportunities.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Market Insights</h3>
          <p>
            Their deep understanding of market trends and competitive landscapes
            informs strategic decision-making and enhances market positioning.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Focused Support</h3>
          <p>
            Partnering with AMH allows us to concentrate on core business
            operations while benefiting from specialized business development
            expertise
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Results-Oriented Approach</h3>
          <p>
            They deliver measurable results, supporting our aim to achieve
            sustainable growth and operational excellence
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <BookmarkCheck className="size-8" />
          </div>
          <h3 className="h3">Professional Guidance</h3>
          <p>
            AMH serves as a strategic advisor, guiding us through complex
            business environments and optimizing business performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
