import React from "react";
import styles, { layout } from "../style/style";
import { features } from "../constants/index";
import Button from "./Button";
const FeatureCard =({icon ,title , content ,index})=>(
  <div className={`flex flex-row rounded-[20px] ${index !== features.length -1 ? 'mb-6': 'mb-0'} handlefeatures `}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain" />
    </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="flex-1 flex flex-col text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="flex-1 flex flex-col text-dimWhite font-poppins font-normal text-[16px] leading-[20px] mb-1">
          {content}
        </p>
      </div>
  </div>
)
const Buisness = () => {
  return (
    <section id="Buisness" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h4>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button style={`mt-5`} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((featuer , index)=>{
          return(
            <FeatureCard key={featuer.id}  {...featuer}
            index={index} />
          )
        })}
      </div>
    </section>
  );
};

export default Buisness;
