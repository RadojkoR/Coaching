import BgVideo from "../../public/assets/videos/pearTreeBlossom.mp4";

function Services() {
  return (
    <section className="relative">
      <div className="h-screen relative overflow-hidden">
        <video className="w-100 h-auto" src={BgVideo} autoPlay loop muted />
      </div>
      <h1 className="absolute text-8xl z-50 inset-y-1/2 right-1/3 font-bold text-red-500">
        COMING SOON
      </h1>
    </section>
  );
}

export default Services;
