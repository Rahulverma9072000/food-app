import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// Generally how this Restraunt Data comes from Backend to Us
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
//useEffect takes 2 input
//useEffect(()=>{},[]) // Callback function , Dependency Array
//When will this callback function will be called ?
// As soon as this render cycle finish , It will just quickly call this callback function
const Body = () => {
  //State Variable - Super Powerfull Variable
  //It maintains a State of our component
  //Whenever State Variable updates , React re-renders the component
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(""); //useEffect takes 2 input //useEffect(()=>{},[]) // Callback function , Dependency Array //When will this callback function will be called ? // As soon as this render cycle finish , It will just quickly call this callback function


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const data = await fetch(
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json;
    // //Optional Chaining
    // console.log("Data : ",json);
    setListOfRestaurants(resList);
    setFilteredRestaurant(resList);
  };
  console.log("Body Rendered"); //First Body will be rendered and than useEffect will be called //UI does not changes if the listOfRestaurants changes
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            onClick={() => {
              //Filter the Restraunt Card and Update the UI
              //To track the value of userboc
              console.log("Search Text ", searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log("This is Filtered Restaurant", filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //I have to write Filter logic here
            setFilteredRestaurant(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.3)
            );
            console.log("listOfRestraunt", listOfRestaurants);
          }}
        >
          Top Rated Restaurant's
        </button>
      </div>
      

      <div className="res-container">
        {/* Passing props to components */}
        {filteredRestaurant.map((restaraunt) => (
          <RestaurantCard key={restaraunt.info.id} resData={restaraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
//React Hooks :
//Normal JS utility functions :
// 2 Most used Hooks
// useState() : Super Power React Varible
// useEffect()
