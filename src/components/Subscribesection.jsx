import React from 'react';

const Subscribesection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    alert(`Thank you for subscribing with: ${email}`);
    e.target.reset();
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/image/block-5.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Don’t Want To Miss Our <br />
          Promos And New Products?
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg mb-6">
          Join now for the inside track on our latest offers
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 w-full max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 sm:py-3 rounded-lg min-w-0 focus:outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="shrink-0 bg-[#e5d3b3] hover:bg-[#b7613e] hover:border-[#b7613e] text-black hover:text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-lg shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribesection;
