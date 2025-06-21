import { createRoot } from "react-dom/client";
// import React from "react";
import "./style.css";

function Card(productDetails) {
  const { title, description, image, price } = productDetails;
  console.log(productDetails);

  return (
    <div className="card">
      <img src={image} alt="product" />
      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>
          <b>₹{price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

console.log("Hello world!");

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     root.render(
//       <div className="container">
//         {data.products.map((product) => {
//           return Card({
//             key: product.id,
//             title: product.title,
//             image: product.thumbnail,
//             description: product.description,
//             price: product.price,
//           });
//         })}
//       </div>
//     );
//   });

//normal create react element

// root.render(
//   React.createElement(Card, {
//     key: 1,
//     title: "yes",
//     description: "loremhwdhdi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkCDtX2eZU_c6mhrNDYkcNOnZEfmNrToG7ImyJJTSQRHEDdDChDQUN2l9iWoIa_zLEgFoASGO4LQTEgUs",
//     price: 234,
//   })
// );

//through component
// root.render(
//   <Card
//     title="King"
//     image="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQkCDtX2eZU_c6mhrNDYkcNOnZEfmNrToG7ImyJJTSQRHEDdDChDQUN2l9iWoIa_zLEgFoASGO4LQTEgUs"
//     description="Goat"
//     price=" infinity"
//   />
// );

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });
