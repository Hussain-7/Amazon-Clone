import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
const Header = () => {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
                {/* Amazon Icon Div */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Search Input div */}
                <div
                    className="hidden sm:flex  items-center h-10 rounded-md
                bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer"
                >
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right Part of top Header */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-wrap">
                    <div className="link">
                        <p>Hello Hussain Rizvi</p>
                        <p className="font-extrabold md:text-sm">
                            Account & lists{' '}
                        </p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            4
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden font-extrabold md:inline md:text-sm mt-2">
                            Basket
                        </p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <div></div>
        </header>
    )
}
export default Header
