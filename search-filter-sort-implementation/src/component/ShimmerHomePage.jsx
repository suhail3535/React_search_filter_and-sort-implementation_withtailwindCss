const ShimmerHomePage = () => {
  const singleFoodItem = [1, 2, 3, 4, 5, 6, 7];
  const singleCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  return (
    <div className="shimmerUI flex flex-col gap-12 w-full lg:w-4/5 mx-auto mt-32">



      <div className="onlineFoodDeliveryRestaurants flex flex-col gap-6">
        <div className="header3 ml-2 animate-pulse bg-slate-300 w-4/5 lg:w-[70%] h-8" />
        <div className="restaurant-cards flex flex-wrap justify-around">
          {singleCards.map((number) => (
            <div className="singleCard my-4 flex flex-col" key={number}>
              <div className="img lg:w-72 w-96 h-56 rounded-sm bg-slate-300 animate-pulse" />
              <div className="ml-1 details gap-2 flex flex-col mt-2">
                <div className="h-4 w-4/5 bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-1/3 bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-[60%] bg-slate-300 animate-pulse"></div>
                <div className="h-4 w-[50%] bg-slate-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerHomePage;
