import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style/style";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-[1] flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain "
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            {" "}
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex md:mt-0 mt-10 flex-row flex-wrap justify-between ">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.key}
              className="flex-flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white ">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.key}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-center text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] cursor-pointer object-contain ${
                index !== socialMedia.length - 1 ? "mr-6 " : "mr-0"
              } `}
              onClick={() => window.open(media.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
