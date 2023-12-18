import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Media.css';
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
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className="overflow-hidden">
            <Slider {...sliderSettings}>
                {posts.map((items, key) => (
                    <div className="w-96 ml-15 mr-15  rounded-lg rounded-md rounded-sm shadow-md media77" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xs font-semibold text-white media77">
                                {items.title}
                            </h4><br></br>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
