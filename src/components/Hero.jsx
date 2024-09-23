import { useState } from "react"
import headphone from "../assets/Headphone.png"
import headphone2 from "../assets/Headphone_Blue.png"
import headphone3 from "../assets/Headphone_Red.png"

const headphoneInfo = [
    {
        id: 1,
        image: headphone,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$100",
        modal: "Modal Brown",
        bgColor: "#7819b8",
    },
    {
        id: 2,
        image: headphone2,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$130",
        modal: "Modal Blue",
        bgColor: "#4c19d6cb",
    },
    {
        id: 3,
        image: headphone3,
        title: "Headphones Wireless",
        titleinfo: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum rem omnis eum consectetur facilis.",
        price: "$120",
        modal: "Modal Red",
        bgColor: "#923f3fc5",
    }
]


const Hero = () => {

    let [activeData, setActiveData] = useState(headphoneInfo[0]);

    return (
        <section className="bg-darkFor text-white text-[#]">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/*~~--- Info Section ~~---*/}
                <div className="flex flex-col justify-center py-14 md:py-0 min-h-[500px]">
                    <div className="space-y-5 text-center md:text-left">
                        <h1 className="font-pop font-bold text-3xl lg:text-6xl">{activeData.title}</h1>
                        <p className="font-pop font-normal text-sm leading-loose text-white/80">{activeData.titleinfo}</p>
                        <button
                            style={{
                                backgroundColor: activeData.bgColor
                            }}
                            className="font-pop font-normal px-4 py-2 inline-block rounded-sm ">Buy Now & Listen</button>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                        <div className="w-20 h-[2px] bg-white"></div>
                        <p className="font-pop text-sm font-normal uppercase">Headphones for you</p>
                        <div className="w-20 h-[2px] bg-white"></div>
                    </div>
                    <div className="">
                        {headphoneInfo.map((item) => {
                            return (
                                <>
                                    <div className="grid grid-cols-2 place-items-center cursor-pointer">
                                        <img src={item.image} alt="" className="w-[200px]" />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {/*~~--- Image Section ~~---*/}

                {/*~~--- whatsapp Section ~~---*/}
            </div>
        </section>
    )
}

export default Hero