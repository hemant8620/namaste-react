import RestaurantCard from "./ResaturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setList] = useState([]);
  const [filteredListRestaurant, setfilteredListRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6331067&lng=88.4169004&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurants);
            setfilteredListRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredListRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListRestaurant?.map((data) => {
          return <Link to={"/restaurants/" + data.info.id}><RestaurantCard key={data.info.id} resData={data} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
