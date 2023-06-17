import React, { useState } from "react";
import "../Components/default.css";
//import Footer from "./Footer";

export default function Default({ images }) {

  //linKs for recipes
  const url = "https://www.livewellbakeoften.com/chocolate-oreo-cupcakes/";
  const url2 = "https://www.bbcgoodfood.com/recipes/salted-tomato-salad";
  const url3 = "https://www.onceuponachef.com/recipes/gingerbread-cookies.html";
  const url4 =
    "https://www.kochbar.de/rezept/345227/Italienische-Steinofen-Pizza.html";
  const url5 =
    "https://www.recipesfromitaly.com/spaghetti-carbonara-original-recipe/";
  const url6 =
    "https://www.jamieoliver.com/recipes/seafood-recipes/sizzling-moroccan-prawns/";
  const url7 =
    "https://www.tarladalal.com/blueberry-cheesecake--cheesecakes-recipe-35881r";
  const url8 =
    "https://www.inspiredtaste.net/22855/simple-strawberry-pie-recipe/";
  const target = "_blank";

  // Dark Mode button
  const [isBlack, setIsBlack] = useState(true);

  const backgroundColor = isBlack ? "white" : "black";

  const toggleBackground = () => {
    setIsBlack(!isBlack);
  };

  return (
    <div className="default" style={{ backgroundColor }}>
      <button className="darkmode" onClick={toggleBackground}>
        Dark Mode
      </button>

      <h1>Popular recipe Categories</h1>
      
      {/*links to diff. Websites for Recipes */}
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
              padding: "4px",
            }}
          >
            <a href={url} target={target}>
              {" "}
              A luxurious black & white chocolate Oreo cupcake
            </a>
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
              padding: "4px",
            }}
          >
            <a href={url2} target={target}>
              {" "}
              Delicious and refreshing summer salad
            </a>
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
              padding: "18px",
            }}
          >
            <a href={url3} target={target}>
              Delightful Christmas cookies
            </a>
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
              padding: "18px",
            }}
          >
            <a href={url4} target={target}>
              Stein-Oven pizza
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
          marginBottom: "5rem",
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
              padding: "4px",
            }}
          >
            <a href={url5} target={target}>
              {" "}
              Spaghetti carbonara with rustic bread
            </a>
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
              padding: "4px",
            }}
          >
            <a href={url6} target={target}>
              {" "}
              Spicy Morroccan prawns with raddish sauce
            </a>
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
              padding: "4px",
            }}
          >
            <a href={url7} target={target}>
              {" "}
              Super easy blueberry cheesecake
            </a>
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
              padding: "5.5px",
            }}
          >
            <a href={url8} target={target}>
              {" "}
              Super easy rustic strawberry pie
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
