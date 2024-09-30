import styles from "../style/style"
import { clients } from "../constants"
const Client = () => (
  <section id="client" className={`${styles.flexCenter}  my-5`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  )

export default Client
