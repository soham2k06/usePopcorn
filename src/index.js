import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [moviesRating, setMoviesRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="red"
//         size={32}
//         onSetRating={setMoviesRating}
//       />
//       <p>You rated it {moviesRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color={"#fcc419"}
      size={48}
      className={"test"}
      messages={["Teribble", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> 
    <Test /> */}
  </React.StrictMode>
);
