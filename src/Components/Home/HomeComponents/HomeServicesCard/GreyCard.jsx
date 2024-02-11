import { Icon } from "@iconify/react";

const GreyCard = ({ content, selected, handleLocationClick }) => {
    return (
        <a
            href='/#/services'
            onMouseEnter={() => handleLocationClick(content)}
            className={`md:rounded-3xl rounded-xl bg-[#f4f4f4] md:h-[90px] flex flex-row justify-between place-items-center md:p-7 p-3 transition-opacity duration-300 ${selected === content ? 'opacity-0' : 'opacity-100'}`}
        >
            <p>{content}</p>
            <div className="text-black md:text-xl">
                <Icon icon="iconoir:arrow-tr" />
            </div>
        </a>
    );
};

export default GreyCard;
