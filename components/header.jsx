function Header() {
    return (
        <>
            <header className="z-10 fixed inset-x-0 top-0 h-20 opacity-90 px-6 shadow-lg flex justify-between items-center bg-gray-300">
                <div>
                    <a href="#" className="text-4xl font-bold">
                        AD
                    </a>
                </div>
                <div className="space-x-6">
                    <a href="#" className="text-xl sm:font-extralight">
                        About Me
                    </a>
                    <a
                        href="#"
                        className="px-6 py-2 border-gray-800 border-2 rounded-full text-xl text-gray-300 bg-gray-800 hover:text-gray-800 hover:bg-gray-300"
                    >
                        Say Hi!
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;
