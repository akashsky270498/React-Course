import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="py-4 px-4 md:px-8">
        <Suspense className="py-4 px-4 md:px-8" fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
