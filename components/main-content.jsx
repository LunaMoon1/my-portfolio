import Image from "next/image";

function MainContent() {
    return (
        <>
            <div className="py-20 flex flex-col items-center">
                <div className="">
                    <Image
                        alt="Profile picture of Anindya Dey"
                        src="/images/profile.jpg"
                        height={150}
                        width={150}
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="mt-8 text-3xl font-light">Anindya Dey</div>
                <div className="mt-3 text-lg font-light">Full-stack Developer</div>
            </div>
        </>
    )
}

export default MainContent;
