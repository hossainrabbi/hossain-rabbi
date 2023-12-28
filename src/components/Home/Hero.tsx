import HeroImage from "../../assets/images/hossainrabbi.jpeg";

export default function Hero() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-2 items-center gap-5">
        <div>
          <h6 className="text-3xl font-bold text-gray-400">I am a</h6>
          <h1 className="text-7xl font-extrabold tracking-wide mt-5 mb-10">
            Frontend Developer
          </h1>
          <div>
            <em className="text-xs font-extralight text-gray-400">{`<script>`}</em>
            <h5 className="pl-5 text-2xl  text-gray-400">Love Designing</h5>
            <em className="text-xs font-extralight text-gray-400">{`</script>`}</em>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="rounded-full w-96 h-96 object-cover"
            src={HeroImage}
            alt="HossainRabbi"
          />
        </div>
      </div>
    </section>
  );
}
