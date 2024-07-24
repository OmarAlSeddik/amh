const Innovative = () => {
  return (
    <section className="bg-[url('../public/who-we-are/innovative-business-development.png')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col gap-8 py-24 md:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="h2">Innovative Business Development</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="h2 text-primary">Unmatched</h2>
            <div>
              <h2 className="h2 text-primary">12+</h2>
              <p>Market-Specific Solutions</p>
            </div>
            <div>
              <h2 className="h2 text-primary">2,500+</h2>
              <p>Successful Client Engagements</p>
            </div>
            <div>
              <h2 className="h2 text-primary">98%</h2>
              <p>Positive Client Feedback</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p>
            At A.M.H we excel in providing innovative solutions tailored to meet
            the needs of business development. Our seasoned experts bring
            unparalleled insights and expertise, resulting in a proven track
            record of successful client engagements. We are proud to receive
            overwhelmingly positive feedback from our clients, reinforcing our
            commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
