 

export default function Navbar() {
    return (
        <div className="navbar-container grid grid-cols-1 md:grid-cols-2 gap-1 bg-zinc-800 text-zinc-50 shadow-md shadow-teal-700">
            <div className="navbar-left p-5">
                <span className="text-2xl font-lobster" >
                   Serhan Çelik 
                </span>
            </div>
            <div className="navbar-right px-5">
                <ul className="navbar-menu grid grid-cols-5">
                    <li className="navbar-menu-item text-center py-5 bg-teal-200 text-zinc-800 shadow-lg shadow-zinc-800">
                        <span className="font-medium">
                            Ana Sayfa
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  hover:bg-teal-200 hover:text-zinc-800 hover:shadow-lg hover:shadow-zinc-800">
                        <span className="font-medium">
                            Eğitim
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  hover:bg-teal-200 hover:text-zinc-800 hover:shadow-lg hover:shadow-zinc-800">
                        <span className="font-medium">
                            Referanslar
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  hover:bg-teal-200 hover:text-zinc-800 hover:shadow-lg hover:shadow-zinc-800">
                        <span className="font-medium">
                            İletişim
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}