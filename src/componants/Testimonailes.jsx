import { feedback } from "../constants"
import styles from "../style/style"
import FeedBack from './FeedBack'
const Testimonailes = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient" />
      <div className="flex md:flex-row flex-col justify-between items-center relative z-[1] sm:mb-16 w-full mb-6">
        <h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden" /> saying about us</h1>
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>  
      <div className="flex flex-wrap w-full justify-center sm:justify-start feedback-contianer relative z-[1]">
        {feedback.map((card)=>(
          <FeedBack key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonailes
