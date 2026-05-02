const CardsSection = () => {
  return (
    <section className="border-5 border-blue-600 w-full lg:flex-col flex flex-col gap-5 justify-center items-start h-[50vh] bg-white text-black">
      <div className="w-full flex-col justify-center items-start">
        <h2 className="text-xl">How it works.</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          voluptatibus explicabo laboriosam voluptatum tempore porro!
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/3 border-5 border-green-200">
          <h3 className="text-xl">Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae!</p>
        </div>
        <div className="w-full lg:w-1/3 border-5 border-green-200">
          <h3 className="text-xl">Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae!</p>
        </div>
        <div className="w-full lg:w-1/3 border-5 border-green-200">
          <h3 className="text-xl">Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, recusandae!</p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
