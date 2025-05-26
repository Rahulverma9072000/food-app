import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    // Check that resData and resData.info exist to avoid crash
    if (!resData?.info) return null;
  
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default RestaurantCard;