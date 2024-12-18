import Image from "next/image"

function Sale(){
    return(
        <div className="w-full h-[300px] flex justify-center items-center mt-10 ">
         <div className="w-[80%] h-full ">
            {/* {top sale} */}
            <div>
                <span className="border-1-8 border-red-500 mb-5 font-bold">Today's</span>
                <h2 className="text-4xl font-bold mt-5 ">Flash Sales</h2>
            </div>
            {/* {product} */}
            {/* {container} */}
            <div className="gap-y-8 flex justify-evenly mt-7">
             <div>
             <div className="w-[260px] h-[150px] bg-green-300 flex justify-center items-center">
             <Image src={"/images/chair.png"} width={150} height={100} alt="gaming"></Image>
             </div>
             {/* {titile } */}
             <div className="flex flex-col ">
                <span className="font-bold">HAVIT HV-G9V Game pad</span>
                <span className="font-bold">$120</span>
             </div>
                </div>
               <div>
               <div className="w-[260px] h-[150px] bg-green-300 flex justify-center items-center">
                    <Image src={"/images/game.png"} width={150} height={100} alt="gaming "></Image>
                </div>
                {/* {title} */}
                <div className="flex flex-col ">
                <span className="font-bold">AK-900 Wired Keyboard</span>
                <span className="font-bold">$120</span>
             </div>
             

               </div>
            <div>
            <div className="w-[260px] h- [150px] bg-green-300 flex justify-center items-center">
                    <Image src={"/images/keybord.png"} width={150} height={100} alt="gaming"></Image>
                </div>
            </div>
                {/* {title} */}
                <div className="flex flex-col ">
                <span className="font-bold">                </span>
                <span className="font-bold">                </span>
             </div>
        

        <div>
        <div className="w-[260px] h-[150px] bg-green-300 flex justify-center items-center">
                    <Image src={"/images/deagin.png"} width={150} height={100} alt="gaming"></Image>
                </div>
                   {/* {title} */}
                   <div className="flex flex-col ">
                <span className="font-bold">S-Series Comfort Chair </span>
                <span className="font-bold">$120</span>
             </div>
        </div>


           
            </div>

         </div>
        </div>
    )
}
export default Sale