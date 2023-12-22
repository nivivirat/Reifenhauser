import React from "react";
import Slider from "../Blog/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Media.css';
import '../Blog/Blog.css'
import img1 from'../../assets/Images/Media/Screenshot 2023-12-13 at 11.02 1.svg';
import img2 from'../../assets/Images/Media/Screenshot 2023-12-13 at 11.03 1.svg';
import img3 from'../../assets/Images/Media/Screenshot 2023-12-13 at 11.03 2.svg';
import img4 from'../../assets/Images/Media/Screenshot 2023-12-13 at 11.04 1.svg';

export default function CardComponent() {
    const posts = [
        {
            title: "Lorem epsom dedor ↗",
            img: img1,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗ ",
            img: img2,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: img3,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: img4,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        // <div className="md:px-14  px-4 gap-10 flex flex-col">
        <div className="w-screen fg flex flex-col md:gap-5 gap-[100px] pb-10 -mb-24 -mx-4 overflow-x-auto">
  <Slider options={{ align: "center" }}>
    {posts.map((testimonial, i) => (
      <div key={i} className="flex-[0_0_90%] md:flex-[0_0_23%] mx-2">
         <div className="h-auto w-auto  bg-white shadow-lg rounded-lg my-40">
         <div className="flex justify-center md:justify-end -mt-16 relative">
  <div style={{ height: '100%', width: '100%' }} className="relative">
    <img
      className="object-cover border-2 border-indigo-500 w-full h-full"
      src={testimonial.img}
      alt={testimonial.title}
    />
    <h3 className="text-xs h-12 w-full font-semibold text-white media77 absolute bottom-0 left-0 opacity-0 transition-opacity duration-300">
     <br></br> {testimonial.title}
    </h3>
  </div>
</div>

              
              <div>
              
                           
        
                {/* <h5 className="text-gray-600 kkk aaa">{testimonial.date}</h5> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
{/* </div> */}
          
        </div>
    );
}
