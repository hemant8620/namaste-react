import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6331067&lng=88.4169004&restaurantId=" + resId
    );
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((items, i) => (
          <li key={i}>
            {items.card.info.name} - Rs{" "}
            {items.card.info.defaultPrice / 100 || items.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
