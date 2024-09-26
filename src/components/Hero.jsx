import { useState } from "react"
import headphone from "../assets/Headphone.png"
import headphone2 from "../assets/Headphone_Blue.png"
import headphone3 from "../assets/Headphone_Red.png"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { UpdateFollower } from "react-mouse-follower"



let fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut
            },
        }
    }
}

const headphoneInfo = [
    {
        id: 1,
        image: headphone,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#923f3fc5",
    },
    {
        id: 2,
        image: headphone2,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$130",
        modal: "Modal Blue",
        bgColor: "#1a7174",
    },
    {
        id: 3,
        image: headphone3,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$120",
        modal: "Modal Red",
        bgColor: "#e63b3b",
    }
]


const Hero = () => {

    let [activeData, setActiveData] = useState(headphoneInfo[0]);

    let handleActiveData = (data) => {
        setActiveData(data);
    }

    return (
        <section className="bg-darkFor text-white">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/*~~--- Info Section ~~---*/}
                <div className="flex flex-col justify-center py-14 md:py-0 min-h-[500px]">
                    <div className="space-y-5 text-center md:text-left">
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                    scale: 8,
                                }}
                            >
                                <motion.h1
                                    key={activeData.id}
                                    variants={fadeUp(0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="font-pop font-bold text-3xl lg:text-6xl">{activeData.title}</motion.h1>
                            </UpdateFollower>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeData.id}
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="font-pop font-normal text-sm leading-loose text-white/80">{activeData.titleinfo}</motion.p>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: activeData.bgColor,
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    scale: 6,
                                    backgroundElement: (
                                        <div>
                                            <img src={activeData.image} alt={activeData.id} />
                                        </div>
                                    )
                                }}
                            >
                                <motion.button
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    style={{
                                        backgroundColor: activeData.bgColor
                                    }}
                                    className="font-pop font-normal px-4 py-2 inline-block rounded-sm ">Buy Now & Listen</motion.button>
                            </UpdateFollower>
                        </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                        <div className="w-20 h-[2px] bg-white"></div>
                        <p className="font-pop text-sm font-normal uppercase">Headphones for you</p>
                        <div className="w-20 h-[2px] bg-white"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        {headphoneInfo.map((item) => {
                            return (
                                <>
                                    <div key={item.id} onClick={() => handleActiveData(item)} className="grid grid-cols-2 place-items-center cursor-pointer">
                                        <img src={item.image} alt="" className="w-[200px]" />
                                        <div className="space-y-2">
                                            <p className="font-pop font-bold text-base">{item.price}</p>
                                            <p className="font-pop font-normal text-xs text-nowrap">{item.modal}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {/*~~--- Image Section ~~---*/}
                <div className="flex flex-col justify-end items-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeData.id}
                            initial={{ opacity: 1, scale: 0.9, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                            exit={{
                                opacity: 0, scale: 0.9, y: 100,
                                transition: {
                                    duration: 0.2,
                                },
                            }}
                            src={activeData.image} alt={activeData.title}
                            className="w-[300px] md:w-[400px] xl:w-[500px]" />
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Hero