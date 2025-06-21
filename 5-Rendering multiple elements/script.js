import { createRoot } from "react-dom/client";
import "./style.css";

function Card(key, title, thumbnail, description, price) {
  return (
    <div className="card" key={key}>
      <img src={thumbnail} alt="" />
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

// root.render(Card()); // valid
// root.render([Card(), Card(), Card(), Card()]); render function only accepts one argument it can also accepts array. [valid]

console.log("Hello world!!");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return Card(
            product.id,
            product.title,
            product.thumbnail,
            product.description,
            product.price
          );
        })}
      </div>
    );
  });
