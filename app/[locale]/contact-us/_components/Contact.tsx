const Contact = () => {
  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col gap-8 py-24 sm:items-center">
        <h2 className="h2">Contact Us</h2>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-16">
          <div className="flex flex-col">
            <h3 className="h3 mb-2">Address</h3>
            <span className="text-sm">29 Block 3, First Sector</span>
            <span className="text-sm">Zahraa Al Maadi, Cairo</span>
          </div>
          <div className="flex flex-col">
            <h3 className="h3 mb-2">Contact</h3>
            <span className="text-sm">+201003020</span>
            <span className="text-sm">a.m.hbusinessdev@gmail</span>
          </div>
          <div className="flex flex-col">
            <h3 className="h3 mb-2">Opening Hours</h3>
            <span className="text-sm">Sun - Thurs</span>
            <span className="text-sm">8:00 am - 8:00 pm</span>
          </div>
        </div>
        <div className="h-64 w-[32rem] max-w-full rounded bg-gray-500"></div>
      </div>
    </section>
  );
};

export default Contact;
