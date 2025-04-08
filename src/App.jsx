import { ToastContainer } from "react-toastify";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Router />
    </>
  );
}

export default App;
