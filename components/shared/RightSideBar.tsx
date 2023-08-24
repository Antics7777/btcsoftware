import Image from "next/image";
import qr from "@/public/assets/qr.png"
function RightSidebar() {
    return (
       <section className="custom-scrollbar rightsidebar">
        <div className="flex flex-row gap-3 justify-start">
            <Image src="/assets/bitcoin.svg.png" alt="logo" width={28} height={28} />
            <h3 className="text-heading4-medium text-light-1"> IOS PLATFORM</h3>
           
        </div>
        <div className="flex flex-1 flex-col justify-start">
        <div className="flex flex-row justify-start gap-2">
        <input type="checkbox" />
         <p className="text-white">Customized Transaction</p>
        </div>
        <div className="flex flex-row justify-start gap-2">
        <input type="checkbox" />
         <p className="text-white">Set Randomized</p>
        </div>
        <div className="flex flex-row justify-start gap-2">
        <input type="checkbox" />
         <p className="text-white">Submit the transaction</p>
        </div>
        <div className="flex flex-row justify-start gap-2">
        <input type="checkbox" />
         <p className="text-white">Make 100% confirmation</p>
        </div>
        <div className="flex flex-row justify-start gap-2 mt-[55px]">
      <Image src={qr} alt="qr"/>
        </div>
        </div>
       </section>
    )
}
export default RightSidebar;