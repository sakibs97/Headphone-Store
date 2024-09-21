import { TiHeadphones } from "react-icons/ti";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold2Fill } from "react-icons/ri";

const HeaderMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Categories",
        link: "#",
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    }
]

const Header = () => {
    return (
        <nav className="flex justify-between items-center">
            {/*~~--- Logo Section ~~---*/}
            <a href="#">Listening</a>
            {/*~~--- Menu Section ~~---*/}
            <ul>
                {
                    HeaderMenu.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))
                }
                <div className="">
                    <TiHeadphones />
                </div>
            </ul>
            {/*~~--- Mobile Section ~~---*/}
            <div className="">
                <MdMenuOpen />
                <RiMenuFold2Fill />
            </div>
        </nav>
    )
}

export default Header