import ProductCard from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/signup"); // 👈 Redirect to signup if not logged in
    }
  }, [navigate]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setBook(response.data);
        response.data;
      } catch (error) {
        console.error(error);
      }
    };

    getBook();
  }, []);

  return (
    <div>
      <div className="mt-10 flex flex-col items-center text-center ">
        <h1 className="text-2xl md:text-3xl font-bold leading-snug text-gray-800 dark:text-white">
          We're delighted to have you{" "}
          <span className="text-blue-500">Here! :)</span>
        </h1>
        <p className="text-gray-600 mt-5 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          repellat Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odit, aspernatur aperiam in est, qui quisquam nemo sed repudiandae
          laboriosam quae distinctio cum culpa incidunt illum itaque
          voluptatibus iure, laborum id.
        </p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {book.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;
