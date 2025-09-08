import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

const Freebook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const [book, setBook] = useState([]);
    useEffect(() => {
      const getBook = async () => {
        try {
          const response = await axios.get("https://mybookstore-9rbu.onrender.com");
          const filteredBooks = response.data.filter(
            (book) => book.price === 0
          );
          setBook(filteredBooks);
        } catch (error) {
          console.error(error);
        }
      };

      getBook();
    }, []);
  

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Free Book Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          commodi, et sunt provident tempora laboriosam harum sapiente deserunt,
          placeat omnis corporis cum impedit! Doloremque ipsam quam quibusdam
          obcaecati ullam voluptates.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {book.map((item) => {
            return <ProductCard item={item}></ProductCard>;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
