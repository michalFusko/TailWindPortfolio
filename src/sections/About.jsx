import img from "../assets/images/img.png"
import imgReact from "../assets/images/react.png"
import imgTailwind from "../assets/images/tailwind.png"

const About = () => (
    <div className=" py-20 w-[80%] m-auto flex max-xl:block">
        <div>
            <h1 className="max-2xl:text-center text-[2rem] xl:text-[3rem] ml-2">A little bit <br className=" 2xl:hidden" /><strong className="text-[4rem] xl:text-8xl font-semibold">About Me...</strong></h1>
            <div className=" pt-10 w-[90%] m-auto">
                <p className=" py-5 xl:pr-20 text-xl xl:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem labore quis tempore magnam eius! Vitae sit amet modi facilis?</p>
                <p className=" py-5 xl:pr-20 text-xl xl:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint doloribus eius atque! Obcaecati voluptas delectus magnam. Harum, repellendus corporis.</p>
            </div>
        </div>
        <div className="max-w-[40%] max-xl:max-w-[100%] m-auto">
            <img src="" width={300} height={300}  alt="" className="border-2 border-gray-950 rounded-full m-auto max-sm:hidden xl:h-[400px] xl:w-[400px]" />
            <div className="max-sm:flex-col max-sm:items-center max-xl:flex max-xl:pt-5 justify-center">
                <h1 className=" max-xl:text-center mt-10 text-[2rem] xl:text-[3rem] font-bold sm:hidden xl:block">My stack</h1>
                <div className="max-sm:mt-10 max-xl:h-[80px] h-[130px] max-xl:w-[280px] w-[400px]  overflow-hidden">
                    <img src={img} className="relative -top-7" alt="" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={imgReact} alt="" className="w-[130px] max-xl:w-[80px]"/>
                    <img src={imgTailwind} alt=""className="w-[130px] max-xl:w-[80px]"/>
                </div>
            </div>
        </div>
    </div>
)

export default About