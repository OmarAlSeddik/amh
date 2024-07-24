import { BookmarkCheck } from "lucide-react";

const Approach = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-16 pt-24">
        <div className="flex flex-col gap-4">
          <h2 className="h2 text-center">
            Our Business Development Principles
          </h2>
          <h3 className="h3 text-center">Setting above the Standard</h3>
        </div>
        <div className="grid w-full justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <BookmarkCheck className="size-8 text-white" />
            </div>
            <h3 className="h3">Strategic Alignment</h3>
            <p className="text-sm">
              A.M.H. prioritizes strategic alignment by ensuring every business
              development initiative directly supports our long-term goals and
              enhances our competitive edge. This approach allows us to focus
              resources effectively, capitalize on market opportunities, and
              navigate challenges with clarity and purpose.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <BookmarkCheck className="size-8 text-white" />
            </div>
            <h3 className="h3">Customer-Centric Focus</h3>
            <p className="text-sm">
              At A.M.H., understanding and meeting client needs is paramount. We
              actively engage with clients to gain deep insights into their
              challenges and goals. By tailoring our solutions and services
              accordingly, we foster strong client relationships built on trust,
              satisfaction, and a commitment to delivering meaningful value.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <BookmarkCheck className="size-8 text-white" />
            </div>
            <h3 className="h3">Relationship Cultivation</h3>
            <p className="text-sm">
              We place significant emphasis on cultivating and nurturing
              relationships with clients, partners, and stakeholders. By
              fostering open communication, collaboration, and mutual respect,
              we create opportunities for strategic alliances and synergies.
              These partnerships not only expand our reach but also enrich our
              capabilities and industry insights
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <BookmarkCheck className="size-8 text-white" />
            </div>
            <h3 className="h3">Innovation and Adaptability</h3>
            <p className="text-sm">
              A.M.H. embraces innovation as a catalyst for growth and
              differentiation. We encourage a culture of creativity and
              continuous improvement, leveraging emerging technologies and
              industry trends to stay ahead. Our adaptable approach enables us
              to respond swiftly to market shifts, seize new opportunities, and
              maintain relevance in a competitive landscape
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <BookmarkCheck className="size-8 text-white" />
            </div>
            <h3 className="h3">Data-Driven Decision Making</h3>
            <p className="text-sm">
              Data is integral to A.M.H.&apos;s decision-making process. We
              harness data analytics and market intelligence to inform strategic
              choices, optimize performance, and mitigate risks. By leveraging
              actionable insights, we enhance our ability to forecast trends,
              measure success, and refine our business development strategies
              for sustained growth and profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
