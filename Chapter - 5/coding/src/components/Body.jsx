import RestaurantCard from "./ResaturantCard";
import { resList } from "../utils/mockData";


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
