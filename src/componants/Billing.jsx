import React from "react";
import styles, { layout } from "../style/style";
import { apple, google, bill } from "../assets";
const Billing = () => (
  <section className={`${layout.sectionImgReverse} relative md:flex-row flex-col z-[5]`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] "
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute w-[50%] h-[50%] rounded-full -left-1/2 bottom-0 z-[0] pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo} flex flex-col flex-wrap`}>
      <h2 className={`${styles.heading2}  `}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
        <img src={apple} alt="google-store" className="cursor-pointer w-[128px] h-[42px] mr-5 object-contain" />
        <img src={google} alt="google-play" className="cursor-pointer w-[128px] h-[42px] mr-5 object-contain" />
      </div>
    </div>
  </section>
);

export default Billing;
