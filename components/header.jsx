function Header() {
    return (
        <>
            <header className="fixed top-0 inset-x-0 mb-20 px-6 py-8 shadow-lg flex justify-between items-center bg-gray-300">
                <div>
                    <a href="#" className="text-4xl font-bold">
                        AD
                    </a>
                </div>
                <div className="space-x-6">
                    <a href="#" className="text-lg font-extralight">
                        About Me
                    </a>
                    <a
                        href="#"
                        className="px-6 py-2 border-black border-2 rounded-full text-lg text-white bg-black hover:text-black hover:bg-white"
                    >
                        Say Hi!
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;
