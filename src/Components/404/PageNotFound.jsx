export default function PageNotFound() {
    return (
        <div className="md:w-screen w-screen md:h-screen flex md:flex-row-reverse flex-col-reverse place-items-center justify-between md:mt-0 mt-10">
            {/* <iframe className="h-[90%] w-full object-cover border border-blue-950" src="https://lottie.host/embed/f63597d2-7552-432d-abe4-1f87fa1d5c9a/AOzTZ8neaT.json"></iframe> */}
            <iframe className="md:h-[70%] md:w-[50%] w-full h-[600px] object-cover" src="https://lottie.host/embed/46a482bb-7b4a-4517-8131-f2696efd55df/iCqqfMRsJn.json"></iframe>
            <div className="w-[50%] flex flex-col place-items-center justify-center md:-mt-[100px]">
                <p className="text-primary font-extrabold md:text-[150px] text-[60px]">404</p>
                <p className="text-indigo-950 font-extrabold md:text-[40px] text-[20px] md:-mt-12">Page Not Found</p>
                <a href="/" className="text-white font-normal p-3 px-7 md:text-[20px] bg-primary rounded-[30px] mt-10">Go Home</a>
            </div>
        </div>
    )
}