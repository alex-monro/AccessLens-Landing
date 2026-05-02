const VideoSection = () => {
  return (
    <section className="flex flex-col w-full lg:flex-row justify-center items-center h-[50vh] bg-white text-black">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start max-w-md">
        <h2 className="text-xl">Headline</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
          optio id magnam assumenda rem quia excepturi dolorum mollitia officiis
          adipisci, quisquam cum provident, ab perferendis, quasi molestiae
          cumque est! Fugiat nobis maiores cupiditate, nostrum libero hic cumque
          maxime consectetur consequuntur fugit natus commodi quidem cum
          numquam, et tenetur temporibus?
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <h2 className="text-xl">Video</h2>
      </div>
    </section>
  );
};

export default VideoSection;
