import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";


// Planning WireFrame for Our App
/**
 *
 * Header
 *  - logo
 *  - nav Items
 *
 * Body
 *  - Search
 *  - Restraunt Container
 *    - RestroCard
 *      - Img
 *      - Name of Restraunt , Star Rating , Cuisines , Delivery time
 *
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact Info
 *
 */

// component is just a Javascript function that return the JSX




//App Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
