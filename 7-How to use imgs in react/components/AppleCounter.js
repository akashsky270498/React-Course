import Button from "./Button";
import AppleBasket from "./AppleBasket";
import Counter from "./TestComponent";
import "../css/style.css";

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));

// const totalAppleCount = 10;
// let rightBasketAppleCount = 0;
// let leftBasketAppleCount = totalAppleCount - rightBasketAppleCount;

// const AppleCounter = ({ root }) => {
//   const leftClickHandler = () => {
//     if (rightBasketAppleCount > 0) {
//       leftBasketAppleCount++;
//       rightBasketAppleCount--;
//       console.log(leftBasketAppleCount, rightBasketAppleCount);
//       root.render(<AppleCounter root={root} />);
//     }
//   };

//   const rightClickHandler = () => {
//     if (leftBasketAppleCount > 0) {
//       leftBasketAppleCount--;
//       rightBasketAppleCount++;
//       console.log(leftBasketAppleCount, rightBasketAppleCount);

//       root.render(<AppleCounter root={root} />);
//     }
//   };
//   return (
//     <>
//     <Counter/>
//       <section>
//         <AppleBasket
//           appleCount={leftBasketAppleCount}
//           basketName="Basket 1"
//           basketClass="first-basket"
//         />
//         {/* <Button clickHandler={() => {console.log("Right arrow clicked")}} imageUrl='https://img.icons8.com/?size=50&id=7811&format=png' title= "Left Arrow" />
//       <Button clickHandler= {() => {console.log("left arrow clicked")}} imageUrl='https://img.icons8.com/?size=50&id=7789&format=png' title= "Right Arrow" /> */}
//         <Button
//           clickHandler={rightClickHandler}
//           imageUrl="https://img.icons8.com/?size=50&id=7811&format=png"
//           title="Left Arrow"
//         />
//         <Button
//           clickHandler={leftClickHandler}
//           imageUrl="https://img.icons8.com/?size=50&id=7789&format=png"
//           title="Right Arrow"
//         />
//         <AppleBasket
//           appleCount={rightBasketAppleCount}
//           basketName="Basket 2"
//           basketClass="second-basket"
//         />

//         {/* <p
//           style={{
//             textAlign: "center",
//             marginTop: "32px",
//           }}
//         >
//           <button onClick={() => {}}>re-render</button>
//         </p> */}
//       </section>
//     </>
//   );
// };

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1);
      setRightAppleCount(rightAppleCount + 1);
    }
  };

  return (
    <>
      <Counter />
      <section>
        <AppleBasket
          appleCount={leftBasketAppleCount}
          basketName="Basket 1"
          basketClass="first-basket"
        />
        {/* <Button clickHandler={() => {console.log("Right arrow clicked")}} imageUrl='https://img.icons8.com/?size=50&id=7811&format=png' title= "Left Arrow" />
      <Button clickHandler= {() => {console.log("left arrow clicked")}} imageUrl='https://img.icons8.com/?size=50&id=7789&format=png' title= "Right Arrow" /> */}
        <Button
          clickHandler={rightClickHandler}
          imageUrl="https://img.icons8.com/?size=50&id=7811&format=png"
          title="Left Arrow"
        />
        <Button
          clickHandler={leftClickHandler}
          imageUrl="https://img.icons8.com/?size=50&id=7789&format=png"
          title="Right Arrow"
        />
        <AppleBasket
          appleCount={rightBasketAppleCount}
          basketName="Basket 2"
          basketClass="second-basket"
        />

        {/* <p
          style={{
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          <button onClick={() => {}}>re-render</button>
        </p> */}
      </section>
    </>
  );
};

export default AppleCounter;
