import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; //imnport the named export
const Header = () => {
  const [btnName, setBtnName] = useState("LogIn"); //If any other state changes so React Reloads the component //So i was checking that while reloading will other state values reset or stores it
  const [checkState, setCheckState] = useState(1); //Checking
  const [check2,setCheck2] = useState(0);

  console.log("Header Render");

  //If No Dependency array => useEffect is called on every component render 
  useEffect(()=>{
    console.log("Header UseEffect Called");
  });
  //If the Dependency Array but [] => than useEffect is called on initial render just once 
  useEffect(()=>{
    console.log("2nd UseEffect");
  },[]);
//If Dependency array is something , than useEffect is called every time btnName is updated 
//Initial Render it will always call 
useEffect(()=>{
  console.log("UseEffect 3 Called");
},[btnName]);


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li><button onClick={()=>{
            setCheck2(check2+1);
          }}>Home</button></li>
          <li>About Us</li> <li>Contact Us</li>
          <li>Cart</li>
          <li>{checkState}</li>
          <button
            className="login"
            onClick={() => {
              if (btnName == "LogIn") setBtnName("LogOut");
              else setBtnName("LogIn");
              setCheckState(checkState + 1);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
