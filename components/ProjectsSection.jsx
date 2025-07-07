import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import LetsWorkTogether from "./LetsWorkTogether";
import AllProject from "./AllProject";

const ProjectsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 35vh", "end 70vh"],
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 1650]);

  const rotateZ = useTransform(scrollYProgress, [0, 0.1], [0, -5]);
  const rotateZ1 = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
  const rotateZ2 = useTransform(scrollYProgress, [0, 0.1], [0, 5]);
  const rotateZ3 = useTransform(scrollYProgress, [0, 0.1], [0, 10]);

  const rotateZPhase = useTransform(scrollYProgress, [0.4, 0.5], [0, 5]);
  const rotateZPhase1 = useTransform(scrollYProgress, [0.43, 0.53], [0, 0]);
  const rotateZPhase2 = useTransform(scrollYProgress, [0.46, 0.56], [0, -5]);
  const rotateZPhase3 = useTransform(scrollYProgress, [0.49, 0.59], [0, -10]);

  const finalRotateZ = useTransform(
    [rotateZ, rotateZPhase],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateZ1 = useTransform(
    [rotateZ1, rotateZPhase1],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateZ2 = useTransform(
    [rotateZ2, rotateZPhase2],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateZ3 = useTransform(
    [rotateZ3, rotateZPhase3],
    ([p1, p2]) => p1 + p2
  );

  const largeScreen = width < 1350;
  const MediumScreen = width < 1200;

  const endX = largeScreen ? (MediumScreen ? -380 : -430) : -500;
  const endX1 = largeScreen ? (MediumScreen ? -125 : -140) : -160;
  const endX2 = largeScreen ? (MediumScreen ? 120 : 150) : 170;
  const endX3 = largeScreen ? (MediumScreen ? 370 : 440) : 500;

  const translateX = useTransform(scrollYProgress, [0.1, 0.3], [0, endX]);
  const translateX1 = useTransform(scrollYProgress, [0.1, 0.3], [0, endX1]);
  const translateX2 = useTransform(scrollYProgress, [0.1, 0.3], [0, endX2]);
  const translateX3 = useTransform(scrollYProgress, [0.1, 0.3], [0, endX3]);

  const rotateY = useTransform(scrollYProgress, [0.3, 0.5], [0, -220]);
  const rotateY1 = useTransform(scrollYProgress, [0.33, 0.53], [0, -220]);
  const rotateY2 = useTransform(scrollYProgress, [0.36, 0.56], [0, -220]);
  const rotateY3 = useTransform(scrollYProgress, [0.39, 0.59], [0, -220]);

  const rotateYPhase = useTransform(scrollYProgress, [0.47, 0.53], [0, 40]);
  const rotateYPhase1 = useTransform(scrollYProgress, [0.5, 0.56], [0, 40]);
  const rotateYPhase2 = useTransform(scrollYProgress, [0.53, 0.59], [0, 40]);
  const rotateYPhase3 = useTransform(scrollYProgress, [0.56, 0.62], [0, 40]);

  const finalRotateY = useTransform(
    [rotateY, rotateYPhase],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateY1 = useTransform(
    [rotateY1, rotateYPhase1],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateY2 = useTransform(
    [rotateY2, rotateYPhase2],
    ([p1, p2]) => p1 + p2
  );
  const finalRotateY3 = useTransform(
    [rotateY3, rotateYPhase3],
    ([p1, p2]) => p1 + p2
  );

  const floatY = useMotionValue(0);
  const floatY1 = useMotionValue(0);
  const floatY2 = useMotionValue(0);
  const floatY3 = useMotionValue(0);

  useAnimationFrame((t) => {
    const amplitude = 10;
    floatY.set(Math.sin(t / 300 + 0) * amplitude);
    floatY1.set(Math.sin(t / 300 + 1) * amplitude);
    floatY2.set(Math.sin(t / 300 + 2) * amplitude);
    floatY3.set(Math.sin(t / 300 + 3) * amplitude);
  });

  const floatActive = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  const combinedY = useTransform(
    [translateY, floatY, floatActive],
    ([scrollY, float, active]) => scrollY + float * active
  );
  const combinedY1 = useTransform(
    [translateY, floatY1, floatActive],
    ([scrollY, float, active]) => scrollY + float * active
  );
  const combinedY2 = useTransform(
    [translateY, floatY2, floatActive],
    ([scrollY, float, active]) => scrollY + float * active
  );
  const combinedY3 = useTransform(
    [translateY, floatY3, floatActive],
    ([scrollY, float, active]) => scrollY + float * active
  );

  return (
    <>
      {" "}
      <div className="px-5 md:px-20 mt-20 md:mt-40 overflow-x-hidden">
        <AllProject
          finalRotateZ={finalRotateZ}
          finalRotateZ1={finalRotateZ1}
          finalRotateZ2={finalRotateZ2}
          finalRotateZ3={finalRotateZ3}
          translateX={translateX}
          translateX1={translateX1}
          translateX2={translateX2}
          translateX3={translateX3}
          finalRotateY={finalRotateY}
          finalRotateY1={finalRotateY1}
          finalRotateY2={finalRotateY2}
          finalRotateY3={finalRotateY3}
          combinedY={combinedY}
          combinedY1={combinedY1}
          combinedY2={combinedY2}
          combinedY3={combinedY3}
          ref={ref}
        />
      </div>
      <LetsWorkTogether />
    </>
  );
};

export default ProjectsSection;
