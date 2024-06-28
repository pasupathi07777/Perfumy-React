import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";



export default function Galary() {
    return (
      <div className="img grid  grid-cols-1 sm:grid-cols-3  w-full   text-center max-w-[800px] mx-auto justify-center gap-3 px-5 md:px-0 h-full  ">
        <div className="img_box flex flex-col items-center p-2 text-center h-full max-w-[300px] mx-auto  ">
          <img src={img1} alt="" />
          <p className="font-mono">
            Fogg is perfume and deodorant line from Vini group of companies. They
            create deodorants targeted for young urbanites, which gives body spray
            that lasts longer.
          </p>
        </div>
        <div className="img_box flex flex-col items-center p-2 text-center h-full max-w-[300px] mx-auto mt-5 sm:mt-0">
          <img src={img2} alt="" />
          <p className="font-mono">
            They create deodorants targeted for young urbanites, which gives body
            spray that lasts longer. Manufactured in India By: Helios Packaging
            PVT. LTD.
          </p>
        </div>
        <div className="img_box flex flex-col items-center p-2 text-center h-full max-w-[300px] mx-auto mt-10 sm:mt-0 ">
          <img src={img3} alt="" />
          <p className="font-mono">
            {" "}
            which gives body spray that lasts longer. Manufactured in India By:
            Helios Packaging PVT. LTD.
          </p>
        </div>
      </div>
    );
  }