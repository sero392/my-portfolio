 

export default function Navbar() {
    return (
        <div className="navbar-container grid grid-cols-1 md:grid-cols-2 gap-1 bg-zinc-50 text-zinc-50 shadow-md shadow-teal-700">
            <div className="navbar-left p-5">
                <span className="text-2xl font-lobster text-blue-900" >
                   Serhan Çelik 
                </span>
            </div>
            <div className="navbar-right px-5">
                <ul className="navbar-menu grid grid-cols-5 h-full">
                    <li className="navbar-menu-item text-center py-5 bg-blue-900 text-zinc-50">
                        <span className="text-xl">
                            Ana Sayfa
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  text-blue-900 hover:bg-blue-900 hover:text-blue-50">
                        <span className="text-xl">
                            Eğitim & İş Geçmişi
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  text-blue-900 hover:bg-blue-900 hover:text-blue-50">
                        <span className="text-xl">
                            Referanslar
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  text-blue-900 hover:bg-blue-900 hover:text-blue-50">
                        <span className="text-xl">
                            Projeler
                        </span>
                    </li>
                    <li className="navbar-menu-item text-center py-5  text-blue-900 hover:bg-blue-900 hover:text-blue-50">
                        <span className="text-xl">
                            İletişim
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}