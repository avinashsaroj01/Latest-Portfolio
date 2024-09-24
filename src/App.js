import { BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <div className="bg-neutral-950 w-[100vw]">
            <Landing />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
