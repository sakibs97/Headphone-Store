import obj1 from "../assets/icon/obj1.png"
import obj2 from "../assets/icon/obj2.png"
import obj3 from "../assets/icon/obj3.png"
import obj4 from "../assets/icon/obj4.png"
import { UpdateFollower } from "react-mouse-follower"


const ServiceData = [
    {
        id: 1,
        image: obj1,
        title: "24/7 Support",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!"
    },
    {
        id: 2,
        image: obj4,
        title: "Security",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!"
    },
    {
        id: 3,
        image: obj2,
        title: "Gurantee",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!"
    },
    {
        id: 4,
        image: obj3,
        title: "Affordability",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!"
    },
]


const Service = () => {
    return (
        <section className="bg-gray-100 font-pop py-8">
            <div className="container py-14">
                <h2 className="text-3xl font-bold text-center pb-10">Service</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {ServiceData.map((item) => (
                        <>
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: 720,
                                    scale: 5,
                                    mixBlendMode: "darken",
                                    backgroundElement: (
                                        <div>
                                            <img src={item.image} alt={item.id} />
                                        </div>
                                    )
                                }}>
                                <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white">
                                    <img src={item.image} className="w-[100px] mb-4" />
                                    <div className="text-center space-y-2">
                                        <h3 className="text-center text-black font-bold text-2xl">{item.title}</h3>
                                        <p className="text-center text-black/70 text-sm font-normal">{item.subtitle}</p>
                                    </div>
                                </div>
                            </UpdateFollower>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service