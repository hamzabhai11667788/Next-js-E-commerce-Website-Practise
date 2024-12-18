import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header"
import Image from "next/image";

function Hero(){
    return(
       <div className="w-full h-[270px]  flex justify-center mt-8">
       <div className=" bg-black h-full w-[80%] flex justify-between">
        {/* {left side} */}
        <div className="ml-8 mt-16 text-white">
            <div className="flex justify-center items-center gap-x-5" >
                             <span> <FontAwesomeIcon icon={faApple} className="w-[30px]" /></span>
               <span className="ml-4">iPhone 14 Series</span>
            </div>
            <div className="w-[100px]">
                <h1 className="text-3xl font-bold ml-5">Up to 10% off Voucher</h1>
                <button className="font-bold undrline underline-offset-8 ml-5">Shop Now</button>
            </div>
        </div>
        {/* {right side} */}
        <div>
            <Image src={"/images/hero.png"} width={350} height={200} alt="Heroimage"
            className="mt-5"></Image>

        </div>

       </div>
        </div>
    )
}

export default Hero 