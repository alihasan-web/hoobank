import Style from "./style/style";
import {
  Navbar,
  Billing,
  Buisness,
  Client,
  CradDeal,
  CTA,
  Footer,
  Stats,
  Testimonial,
} from "./componants/index";
import Hero from "./componants/Hero";
const App = () => {
  return (
    <>
      <div className="overflow-hidden w-full bg-black">
        <div className={`${Style.paddingX} ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}><Navbar/></div>
        </div>
        <div className={`bg-black ${Style.paddingX} ${Style.flexStart}`}>
          <div className={`${Style.boxWidth}`}><Hero /></div>
        </div>
        <div className={`bg-black ${Style.paddingX} ${Style.flexStart}`}>
          <div className={`${Style.boxWidth}`}>
          <Stats />
        <Buisness />
        <Billing />
        <CradDeal />
        <Testimonial />
        <Client />
        <CTA />
        <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
