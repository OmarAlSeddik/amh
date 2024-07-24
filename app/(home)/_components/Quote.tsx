const Quote = () => {
  return (
    <section className="bg-[url('../public/home/quote.png')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col items-center justify-between py-24">
        <p className="max-w-[25ch] text-2xl !leading-loose md:text-4xl">
          “Business development is the art of fostering growth through strategic
          insight, innovative thinking, and unwavering dedication. It&apos;s
          about navigating opportunities with precision and seizing them with
          courage, ensuring every step forward is a testament to vision and
          resilience.”
        </p>
      </div>
    </section>
  );
};

export default Quote;
