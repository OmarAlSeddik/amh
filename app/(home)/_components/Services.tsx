import {
  BadgePoundSterling,
  Building2,
  NotebookText,
  SquareKanban,
  Store,
  Unlink,
} from "lucide-react";

const Services = () => {
  return (
    <section className="bg-[url('../public/home/services.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col items-center gap-4 py-24">
        <h2 className="h2">Our Services</h2>
        <p className="text-center">
          Explore the comprehensive suite of business development services
          offered at A.M.H. From strategic planning and market analysis to
          partnership cultivation and digital transformation, we provide
          holistic support to meet your varied business needs. Whether
          you&apos;re expanding into new markets or enhancing operational
          efficiencies, A.M.H. delivers tailored solutions backed by expertise
          to propel your business forward.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Corporate Governance Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <Building2 className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Operations Research Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <NotebookText className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Strategic Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <SquareKanban className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Corporate Finance Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <BadgePoundSterling className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Sales & Marketing Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <Store className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>Supply Chain Consultation</p>
            <div className="rounded-full bg-primary p-2">
              <Unlink className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
