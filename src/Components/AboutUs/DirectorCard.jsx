import manish_mehta from "../../assets/Images/AboutUs/boardOfDirectors/manish_mehta.svg"
import usha_mehta from "../../assets/Images/AboutUs/boardOfDirectors/usha_mehta.svg"
import hamir_mehta from "../../assets/Images/AboutUs/boardOfDirectors/hamir_mehta.svg"
import ulrich_reifenhäuser from "../../assets/Images/AboutUs/boardOfDirectors/ulrich_reifenhäuser.svg"
import bernd_reifenhäuser from "../../assets/Images/AboutUs/boardOfDirectors/bernd_reifenhäuser.svg"
import volkmar_kurk from "../../assets/Images/AboutUs/boardOfDirectors/volkmar_kurk.svg"

export default function DirectorCard({ name, role, img }) {
    const images = {
        manish_mehta,
        usha_mehta,
        hamir_mehta,
        ulrich_reifenhäuser,
        bernd_reifenhäuser,
        volkmar_kurk
    }
    return (
        <div className="flex flex-col justify-center place-items-center">
            <div className="">
                <img src={images[img]} className="rounded-full md:pt-5 border-[#9bc1ff] md:h-[200px] h-[110px] w-auto bg-[#9bc1ff] md:w-[200px]"></img>
            </div>
            <p className="md:text-[20px] text-[12px] text-[#295DB1] font-semibold mt-[24px]">{name}</p>
            <p className="md:text-[16px] text-[12px] text-[#295DB1]">{role}</p>
        </div>
    )
}