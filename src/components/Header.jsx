import { TiHeadphones } from "react-icons/ti";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold2Fill } from "react-icons/ri";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

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
        <section>
            <div className="bg-darkFor text-white py-4 font-pop">
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="container flex justify-between items-center">
                    {/*~~--- Logo Section ~~---*/}
                    <UpdateFollower
                        mouseOptions={{
                            scale: 5,
                            mixBlendMode: "difference",
                        }}
                    >
                        <a href="#" className="text-xl font-bold uppercase">Listening</a>
                    </UpdateFollower>
                    {/*~~--- Menu Section ~~---*/}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {
                                HeaderMenu.map((item) => (
                                    <li key={item.id}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                scale: 5,
                                                mixBlendMode: "difference",
                                            }}
                                        >
                                            <a href={item.link} className="inline-block text-sm py-2 px-3 uppercase">{item.title}</a>
                                        </UpdateFollower>
                                    </li>
                                ))
                            }
                            <UpdateFollower
                                mouseOptions={{
                                    scale: 4,
                                    mixBlendMode: "difference",
                                }}
                            >
                                <button className="text-xl ps-14">
                                    <TiHeadphones />
                                </button>
                            </UpdateFollower>
                        </ul>
                    </div>
                    {/*~~--- Mobile Section ~~---*/}
                    <div className="lg:hidden">
                        <MdMenuOpen />
                        <RiMenuFold2Fill />
                    </div>
                </motion.nav>
            </div>
        </section>
    )
}

export default Header