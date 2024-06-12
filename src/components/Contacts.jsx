import React from "react";

const Contacts = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-[70vh] gap-10 mx-auto md:w-[750px]">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
          Contact Us
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p><strong>Instagram:</strong> @rootsandradiance</p>
          <p><strong>Pinterest:</strong> rootsandradianceCo</p>
          <p><strong>X:</strong> @rootsandradiance</p>
          <p><strong>Email:</strong> rootsandradiance@gmail.com</p>
          <p><strong>Tel:</strong> +1 (555) 555-5555</p>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
