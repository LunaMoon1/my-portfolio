import Image from "next/image";

function MainContent() {
    return (
        <>
            <div className="px-3 py-2 flex flex-col items-center">
                <div>
                    <Image
                        alt="Profile picture of Anindya Dey"
                        src="/images/profile.jpg"
                        height={200}
                        width={200}
                        className="rounded-full"
                    />
                </div>
                <div className="mt-8 text-5xl font-light">Anindya Dey</div>
                <div className="mt-3 text-2xl font-light">Full-stack Developer</div>
            </div>
        </>
    )
}

export default MainContent;
