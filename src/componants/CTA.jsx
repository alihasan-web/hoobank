import styles from "../style/style"
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
           <div className="flex flex-1 flex-col">
              <h4 className={`${styles.heading2}`}>Let’s try our service now!</h4>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments
                <br className="sm:block hidden" /> and grow your business anywhere on the planet.</p>
             </div>
             <div className={`${styles.flexCenter}sm:ml-10 ml0 sm:mt-0 mt-10`}>
              <Button />
              </div> 
    </section>
  )
}

export default CTA
