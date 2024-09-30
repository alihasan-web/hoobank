import styles from '../style/style'
import { stats } from '../constants'

const Stats = () => (
<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
   {
    stats.map((stats)=>{
      return (
        <div key={stats.id} className={` felx flex-row flex-1 justify-start items-center m-3 `}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stats.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient'>{stats.title}</p>
        </div>
      )
    })
   }
</section>
  )


export default Stats
