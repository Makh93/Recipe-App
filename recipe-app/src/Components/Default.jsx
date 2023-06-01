import React, { useState } from "react";
import "../Components/default.css";
import Footer from "./Footer";

export default function Default({ images }) {
  const [isBlack, setIsBlack] = useState(true);

  const backgroundColor = isBlack ? "white" : "black";

  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div className="default" style={{ backgroundColor }}>
      <button  className= 'darkmode'  onClick={toggleBackground}>Dark Mode</button>

      <h1>Popular recipe Categories</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.oreo}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '4px'
            }}
          >
            A luxurious black & white chocolate Oreo cupcake
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.salad}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '4px'
            }}
          >
            Delicious and refreshing summer salad
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.cookies}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '18px'
            }}
          >
           Delightful Christmas cookies
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.pizza}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '18px'
            }}
          >
            Stein-Oven pizza
          </p>
        </div>

       

        

       

       
      </div>


      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
          marginBottom: '5rem'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.spaghetti}
            alt="spaghetti"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '4px'
            }}
          >
          Spaghetti carbonara with rustic bread
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.prawns}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '4px'
            }}
          >
            Spicy Morroccan prawns with raddish sauce
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.cake}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '4px'
            }}
          >
             Super easy blueberry cheesecake
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "80px",
          }}
        >
          <img
            style={{ width: "300px", height: "200px" }}
            src={images.pie}
            alt="cupcake"
          />
          <p
            style={{
              backgroundColor: "orange",
              width: "300px",
              fontSize: "20px",
              padding: '5.5px'
            }}
          >
           Super easy rustic strawberry pie
          </p>
        </div>

       

        

       

       
      </div>




    </div>
  );
}
