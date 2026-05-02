const VideoSection = () => {
  return (
    <section className="w-full h-[50vh] py-12 ">
      <div className=" max-w-6xl h-full flex flex-col w-full lg:flex-row justify-center items-center gap-24 mx-auto">
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Catch accessibility risks before they becomes liability.
          </h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
            optio id magnam assumenda rem quia excepturi dolorum mollitia
            officiis adipisci, quisquam cum provident, ab perferendis, quasi
            molestiae cumque est! Fugiat nobis maiores cupiditate, nostrum
            libero hic cumque maxime consectetur consequuntur fugit natus
            commodi quidem cum numquam, et tenetur temporibus?
          </p>
        </div>

        <div className="w-full lg:w-2/3 flex justify-center items-center">
          <video
            src="/videos/access-lens-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
