import { motion } from "motion/react";
import card from "../src/assets/card.png";

const Card = ({
  heading,
  description,
  projectBuilt,
  rotateZ,
  rotateY,
  translateX,
  translateY,
  bgImg,
  href,
  overlay,
  
}) => {
  return (
    <motion.div
      style={{ rotateZ: rotateZ, x: translateX, y: translateY }}
      className="w-60 min-[1200px]:w-70 min-[1350px]:w-80 h-[350px] min-[1200px]:h-[400px] min-[1350px]:h-[440px] absolute top-0 left-1/2 -translate-x-1/2 perspective-[1000px]"
    >
      <motion.div
        className="relative w-full h-full preserve"
        style={{ rotateY: rotateY }}
      >
        <div className="absolute w-full h-full rounded-2xl border-4  backface-hidden">
          <img
            src={card}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <a
          href={href}
          target="_blank"
          className="overflow-hidden absolute w-full h-full rounded-2xl border-4 text-black bg-white backface-hidden rotate-y-180 "
        >
          <div className="w-full h-full relative">
            {bgImg && (
              <>
                <img
                  src={bgImg}
                  className="absolute w-full h-full"
                />
                {overlay && <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>}
                <div className="relative p-2 min-[1200px]:p-6 min-[1350px]:p-10 text-white">
                  <h1 className="text-2xl uppercase">{heading}</h1>
                  <div className="leading-relaxed space-y-2">
                    <p dangerouslySetInnerHTML={{__html:description}}></p>
                    <p className="font-mono">✨ Built With</p>
                    <div>
                      {projectBuilt?.map((stack) => (
                        <div className="not-last:border-b-3 border-[#9DDCFF] border-dotted ">
                          <h3 className="capitalize text-lg py-1 min-[1200px]:py-2">{stack}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {!bgImg && <div className="h-full text-2xl min-[1200px]:text-3xl font-bold flex items-center justify-center">
              {heading}
            </div>}
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Card;
