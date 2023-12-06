import cardContent from './HomeTestimonalCard/content.json'
import { Icon } from '@iconify/react';
import { HomeTestimonialCard } from './HomeTestimonalCard/HomeTestimonialCard';

export default function HomeTestimonials() {
    // Use slice to get the first 3 items in the array
    const first3Cards = cardContent.slice(0, 3);

    return (
        <div className="bg-base flex flex-col">
            <div className="md:px-[6%] pt-10 p-5 font-semibold md:w-[40%] xl:text-3xl text-2xl xl:font-semibold md:font-bold md:text-4xl w-full">
                <span>Here's what our </span>
                <span className="text-primary">customers </span>
                <span>say about us</span>
            </div>

            <div className="flex justify-center gap-4 text-[#6B6B78] pl-10">
                {first3Cards.map((card, index) => (
                    <HomeTestimonialCard
                    key={index}
                    // title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    buttonTextt={card.buttonTextt}
                    pos={card.pos}
                    kl={card.kl}
                    poss={card.poss}
                    />
                ))}
            </div>

            <div className="w-full flex justify-center place-items-center mt-10 mb-6 md:mb-10 ">
                <a href="/testimonials" className="text-primary flex flex-row gap-2 p-3 md:rounded-lg rounded-2xl justify-center place-items-center font-medium border border-primary md:w-[17%] w-[60%]">
                    <p>View All Testimonials</p>
                    <div className="text-primary md:text-xl">
                        <Icon icon="iconoir:arrow-tr" />
                    </div>
                </a>
            </div>

        </div>
    );
}
