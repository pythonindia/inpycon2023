import Image from "next/image";
import PyIcon from "./favicon.ico";
import Wheel from "../public/wheel-grey.png";

export default function Banner() {
  return (
    <div className="uppercase text-6xl font-bold text-zinc-900 sm:text-6xl">
      <div className="container p-3">
        {/* border-dashed border-py-blue border-b-8  */}
        <div className="PyCon text-right">
          <span className="text-py-blue tracking-wide">py</span>
          <span className="text-yellow-300 tracking-wide">con</span>
        </div>
        <div className="PyLogo">
          <Image
            className="float-right h-12 w-12 m-1 p-1"
            src={PyIcon}
            alt="PyIcon"
          />
        </div>
        <div className="India text-py-orange text-right">India</div>
        <div className="Wheel">
          <Image className="h-32 w-32" src={Wheel} alt="wheel" />
        </div>
        <div className="T1 text-left">20</div>
        <div className="T2 text-py-green text-left">23</div>
      </div>
    </div>
  );
}
