const Body = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex justify-center items-center ">
          <img
            src="./assets/Blue-Shape.svg"
            alt="1st"
            className="-rotate-[45deg] h-64"
          />
          <img
            src="./assets/Pink-Shape.svg"
            alt="2nt"
            className="absolute -rotate-[30deg] h-64"
          />
          <img
            src="./assets/Purple-Shape.svg"
            alt="3rd"
            className="absolute -rotate-[15deg] h-64"
          />
          <img
            src="./assets/Hero-Model.png"
            alt="4th"
            className="absolute h-64 "
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold font-playfair leading-tight">
            Host your website in less than 5 minutes.
          </h1>
          <p className="font-lato text-gray-400">
            With Hosterr , get your website hosted in less than 5 mins with
            comparitive lesser price and in easy steps with fast and secure
            server.
          </p>
          <form className=" flex flex-col gap-6 m-4" action="">
            <input
              className=" rounded-md p-2 placeholder:text-grey-400"
              type="email"
              placeholder="Enter your email address"
            />
            <button className=" rounded-2xl text-xl text-white bg-blue-500 shadow-lg shadow-blue-500/50  font-lato hover:bg-blue-200">
              Join waitlist
            </button>
          </form>
          <div className="flex gap-2">
            <img src="./assets/Checkmark.svg" alt="checkmark" />
            <p className="font-lato text-gray-400">
              No spam, ever . Unsubscribe anytime!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
