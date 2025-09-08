import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import FreeBook from "./components/Freebook";
import Course from "./components/Course";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 dark:bg-gray-950 ">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner className />
                <FreeBook />
              </>
            }
          />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element= {<Signup />} />
          
        </Routes>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
