import { Download } from "lucide-react";

const CardsSection = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-center items-start py-12 px-6 lg:px-24 min-h-[37.5rem]">
      {/* Intro */}
      <h2 className="text-4xl font-bold">How it works.</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
        voluptatibus explicabo laboriosam voluptatum tempore porro!
      </p>
      {/* Cards Container */}
      <div className="w-full flex flex-col lg:flex-row gap-4 max-w-6xl">
        {/* Card */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl min-h-[200] p-4">
          <div className="w-full flex justify-between">
            <span className="card-badge">
              <Download className="w-5 h-5" />
            </span>
            <span className="card-badge font-bold">1</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Install the Extension</h3>
            <p>
              Add AccessLens to Chrome from the Web Store. It sits in your toolbar ready whenever you need it.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl min-h-[200] p-4">
          <div className="w-full flex justify-between">
            <span className="card-badge">
              <Download className="w-5 h-5" />
            </span>
            <span className="card-badge font-bold">2</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Install the Extension</h3>
            <p>
              Add AccessLens to Chrome from the Web Store. It sits in your toolbar ready whenever you need it.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl min-h-[200] p-4">
          <div className="w-full flex justify-between">
            <span className="card-badge">
              <Download className="w-5 h-5" />
            </span>
            <span className="card-badge font-bold">3</span>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl">Install the Extension</h3>
            <p>
              Add AccessLens to Chrome from the Web Store. It sits in your toolbar ready whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
