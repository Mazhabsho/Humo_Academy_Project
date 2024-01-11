import { Route, Routes } from "react-router-dom";
import { Home, Layout } from "./routes/Routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
