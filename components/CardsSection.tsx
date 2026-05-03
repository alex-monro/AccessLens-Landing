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
              <span>icon</span> <p>1</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                animi aliquam, officiis quidem deleniti ab?
              </p>
            </div>
          </div>
          {/* Card */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl min-h-[200] p-4">
            <div className="w-full flex justify-between">
              <span>icon</span> <p>2</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                animi aliquam, officiis quidem deleniti ab?
              </p>
            </div>
          </div>
          {/* Card */}
          <div className="w-full lg:w-1/3 flex flex-col justify-start gap-5 border border-gray-200 shadow-md rounded-xl min-h-[200] p-4">
            <div className="w-full flex justify-between">
              <span>icon</span> <p>3</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl">Heading</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                animi aliquam, officiis quidem deleniti ab?
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CardsSection;
