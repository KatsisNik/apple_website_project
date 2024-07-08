import { appleImg, bagImg, searchImg } from "@/utils"
import { navLists } from "@/constants"


export default function Navbar() {
    return (
        <header className="w-full py5 sm:px-10 px-5 flex sustify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="Apple" width={14} height={18}/>
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => (
                        <div key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>
                <div>
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
        
    )
}