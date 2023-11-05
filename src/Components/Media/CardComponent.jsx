import React from "react";
import './Media.css';
export default function CardComponent() {
    const posts = [
        {
            title: "Lorem epsom dedor ↗",
            img: "https://s3-alpha-sig.figma.com/img/e17d/4f59/87dd81d6f5477bad09c00ba187353e1e?Expires=1699833600&Signature=llqaY65FDVTw~kruARCbpWJR-hUuk1ETLkzT9vUTgbQcGENofYeRjDaJJRpLHyIkX5o-6QU6KqcdFXJk0B22FjsSmKkbX78Qu9wAxs9vUvBWKeAyyVhvDGipKuZZasIdPVtGxNSAjNtsv0sQ22zutN-lQ2XKjMh7FAid8ROHKAi3QupGf~-vahmmHQ0c611RRBSGivn7aCOKs9I8qJgtzyRzDFyS9Mk4dxe~reD8AvbyO6HfrmceVbQOTUpDl7nhz~h9abPbqT~fOwfHQCqitow-rYRo8aN~09qGYQzSurvYLF38ZE~87qmpGgLJ2DIOdLCiwsTEQBEGAB4WrlrAIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗ ",
            img: "https://s3-alpha-sig.figma.com/img/e17d/4f59/87dd81d6f5477bad09c00ba187353e1e?Expires=1699833600&Signature=llqaY65FDVTw~kruARCbpWJR-hUuk1ETLkzT9vUTgbQcGENofYeRjDaJJRpLHyIkX5o-6QU6KqcdFXJk0B22FjsSmKkbX78Qu9wAxs9vUvBWKeAyyVhvDGipKuZZasIdPVtGxNSAjNtsv0sQ22zutN-lQ2XKjMh7FAid8ROHKAi3QupGf~-vahmmHQ0c611RRBSGivn7aCOKs9I8qJgtzyRzDFyS9Mk4dxe~reD8AvbyO6HfrmceVbQOTUpDl7nhz~h9abPbqT~fOwfHQCqitow-rYRo8aN~09qGYQzSurvYLF38ZE~87qmpGgLJ2DIOdLCiwsTEQBEGAB4WrlrAIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: "https://s3-alpha-sig.figma.com/img/e17d/4f59/87dd81d6f5477bad09c00ba187353e1e?Expires=1699833600&Signature=llqaY65FDVTw~kruARCbpWJR-hUuk1ETLkzT9vUTgbQcGENofYeRjDaJJRpLHyIkX5o-6QU6KqcdFXJk0B22FjsSmKkbX78Qu9wAxs9vUvBWKeAyyVhvDGipKuZZasIdPVtGxNSAjNtsv0sQ22zutN-lQ2XKjMh7FAid8ROHKAi3QupGf~-vahmmHQ0c611RRBSGivn7aCOKs9I8qJgtzyRzDFyS9Mk4dxe~reD8AvbyO6HfrmceVbQOTUpDl7nhz~h9abPbqT~fOwfHQCqitow-rYRo8aN~09qGYQzSurvYLF38ZE~87qmpGgLJ2DIOdLCiwsTEQBEGAB4WrlrAIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Lorem epsom dedor ↗",
            img: "https://s3-alpha-sig.figma.com/img/e17d/4f59/87dd81d6f5477bad09c00ba187353e1e?Expires=1699833600&Signature=llqaY65FDVTw~kruARCbpWJR-hUuk1ETLkzT9vUTgbQcGENofYeRjDaJJRpLHyIkX5o-6QU6KqcdFXJk0B22FjsSmKkbX78Qu9wAxs9vUvBWKeAyyVhvDGipKuZZasIdPVtGxNSAjNtsv0sQ22zutN-lQ2XKjMh7FAid8ROHKAi3QupGf~-vahmmHQ0c611RRBSGivn7aCOKs9I8qJgtzyRzDFyS9Mk4dxe~reD8AvbyO6HfrmceVbQOTUpDl7nhz~h9abPbqT~fOwfHQCqitow-rYRo8aN~09qGYQzSurvYLF38ZE~87qmpGgLJ2DIOdLCiwsTEQBEGAB4WrlrAIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4 media15">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm media13" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xs font-semibold text-white media14">
                                
                                {items.title}
                            </h4>
                            
                            {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}