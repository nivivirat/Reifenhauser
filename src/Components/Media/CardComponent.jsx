import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Media.css';
import img3 from'../../assets/Images/Media/Rectangle 6270.svg';

export default function CardComponent() {
    const posts = [
        {
            title: "Lorem epsom dedor ↗",
            img: img3,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗ ",
            img: img3,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: img3,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: img3,
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div className="overflow-hidden">
            {/* Apply the slider only for md or smaller screens */}
            <div className="md:hidden">
                <Slider {...sliderSettings}>
                    {posts.map((items, key) => (
                        <div className="w-full rounded-lg rounded-md rounded-sm shadow-md media77" key={key}>
                            <img
                                className="object-cover w-full h-48"
                                src={items.img}
                                alt="image"
                            />
                            <div className="p-4">
                                <h4 className=" text-xs font-semibold text-white media77">
                                    {items.title}
                                </h4><br></br>
                            </div>
                        </div>
                    ))}
                </Slider>
                <br></br>
            </div>
            {/* Display individual cards for lg and larger screens */}
            <div className="hidden md:flex gap-2 media15">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg rounded-md rounded-sm shadow-md media77" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="w-full rounded-lg rounded-md rounded-sm shadow-md text-xs font-semibold text-white">
                                {items.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
