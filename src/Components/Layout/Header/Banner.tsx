import { FaLinkedinIn } from "react-icons/fa";

function Banner() {
  return (
    <section className="flex items-center justify-end">
      <a
        className="mr-5 text-xl"
        href="https://www.linkedin.com"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>

      <a className="mr-5 text-xl" href="tel:+12345678900">
        +1 234 567 8900
      </a>
      <span className="mr-5 text-xl">|</span>
      <a className="mr-10 text-xl" href="mailto:test@test.com">
        test@test.com
      </a>
      <button className="bg-slate-700 text-gray-200 text-xl py-3 px-10">
        Book an Intro Call
      </button>
    </section>
  );
}

export default Banner;
