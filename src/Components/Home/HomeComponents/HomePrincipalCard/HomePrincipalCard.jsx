import { Icon } from "@iconify/react"

export default function HomePincipalCard({ content }) {
    return (
        <div className="md:mb-10 mb-5 md:px-10 px-5 overflow-hidden relative flex flex-row justify-between place-items-center md:w-[45%] w-full md:h-[80px] h-[50px] rounded-lg bg-gradient-to-r from-blue-900 to-blue-400">
            <div className="absolute -left-2 -bottom-2 md:text-[70px] text-[40px] text-white opacity-10">
                <Icon icon="uil:setting" />
            </div>
            <p className="text-white md:text-2xl">{content}</p>
            <div className="text-white md:text-3xl">
                <Icon icon="iconoir:arrow-tr" />
            </div>
        </div>
    )
}