import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const transition ={
  duration: 5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01]
}

const HomeLanding = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const pathLength1 = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const pathLength2 = useTransform(scrollYProgress, [0, 0.05], [1.1, 0]);
  const pathLength3 = useTransform(scrollYProgress, [0, 0.05], [1.2, 0]);
  const pathLength4 = useTransform(scrollYProgress, [0, 0.05], [1.3, 0]);
  const pathLength5 = useTransform(scrollYProgress, [0, 0.05], [1.4, 0]);
  const pathLength6 = useTransform(scrollYProgress, [0, 0.05], [1.5, 0]);
  const pathLength7 = useTransform(scrollYProgress, [0, 0.05], [1.6, 0]);
  const pathLength8 = useTransform(scrollYProgress, [0, 0.05], [1.7, 0]);
  const pathLength9 = useTransform(scrollYProgress, [0, 0.05], [1.8, 0]);
  const pathLength10 = useTransform(scrollYProgress, [0, 0.05], [1.9, 0]);
  const pathLength11 = useTransform(scrollYProgress, [0, 0.05], [1.9, 0]);
  const pathLength12 = useTransform(scrollYProgress, [0, 0.05], [1.9, 0]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="974"
      height="769"
      viewBox="0 0 974 769"
      fill="none"
      className="absolute -top-200  md:top-20 w-full !z-0"
    >
      <motion.path
        opacity="0.5"
        d="M2.47886 699.319C2.47886 699.319 -52.3029 260.828 440.97 260.828C934.243 260.828 879.461 -177.664 879.461 -177.664"
        stroke="url(#paint0_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength1,
        }}
        transition={transition}
        fill="none"
      />
      <motion.path
        opacity="0.5"
        d="M12.2611 704.21C12.2611 704.21 -42.5207 265.719 450.752 265.719C944.025 265.719 889.243 -172.772 889.243 -172.772"
        stroke="url(#paint1_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength2,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M20.087 711.058C20.087 711.058 -34.6948 272.566 458.578 272.566C951.851 272.566 897.069 -165.925 897.069 -165.925"
        stroke="url(#paint2_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength3,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M27.9129 717.905C27.9129 717.905 -26.8689 279.414 466.404 279.414C959.677 279.414 904.895 -159.078 904.895 -159.078"
        stroke="url(#paint3_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength4,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M36.7169 724.753C36.7169 724.753 -18.0649 286.262 475.208 286.262C968.481 286.262 913.699 -152.23 913.699 -152.23"
        stroke="url(#paint4_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength5,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M46.4991 729.644C46.4991 729.644 -8.28267 291.153 484.99 291.153C978.263 291.153 923.481 -147.338 923.481 -147.338"
        stroke="url(#paint5_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength6,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M54.325 736.492C54.325 736.492 -0.456739 298 492.816 298C986.089 298 931.307 -140.491 931.307 -140.491"
        stroke="url(#paint6_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength7,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M62.1509 743.339C62.1509 743.339 7.36916 304.848 500.642 304.848C993.915 304.848 939.133 -133.643 939.133 -133.643"
        stroke="url(#paint7_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength8,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M68.9983 750.187C68.9983 750.187 14.2166 311.696 507.489 311.696C1000.76 311.696 945.981 -126.796 945.981 -126.796"
        stroke="url(#paint8_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength9,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M78.7809 755.078C78.7809 755.078 23.9991 316.587 517.272 316.587C1010.54 316.587 955.763 -121.905 955.763 -121.905"
        stroke="url(#paint9_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength10,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M86.6065 761.926C86.6065 761.926 31.8248 323.434 525.098 323.434C1018.37 323.434 963.589 -115.057 963.589 -115.057"
        stroke="url(#paint10_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength11,
        }}
        transition={transition}
      />
      <motion.path
        opacity="0.5"
        d="M94.4325 768.773C94.4325 768.773 39.6507 330.282 532.924 330.282C1026.2 330.282 971.415 -108.209 971.415 -108.209"
        stroke="url(#paint11_linear_4_20)"
        strokeWidth="0.987858"
        initial={{
          pathLength: 1,
        }}
        style={{
          pathLength: pathLength12,
        }}
        transition={transition}
      />


      {/* Blurs paths */}
      <path
        opacity="0.2"
        d="M2.47886 699.319C2.47886 699.319 -52.3029 260.828 440.97 260.828C934.243 260.828 879.461 -177.664 879.461 -177.664"
        stroke="url(#paint0_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M12.2611 704.21C12.2611 704.21 -42.5207 265.719 450.752 265.719C944.025 265.719 889.243 -172.772 889.243 -172.772"
        stroke="url(#paint1_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M20.087 711.058C20.087 711.058 -34.6948 272.566 458.578 272.566C951.851 272.566 897.069 -165.925 897.069 -165.925"
        stroke="url(#paint2_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M27.9129 717.905C27.9129 717.905 -26.8689 279.414 466.404 279.414C959.677 279.414 904.895 -159.078 904.895 -159.078"
        stroke="url(#paint3_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M36.7169 724.753C36.7169 724.753 -18.0649 286.262 475.208 286.262C968.481 286.262 913.699 -152.23 913.699 -152.23"
        stroke="url(#paint4_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M46.4991 729.644C46.4991 729.644 -8.28267 291.153 484.99 291.153C978.263 291.153 923.481 -147.338 923.481 -147.338"
        stroke="url(#paint5_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M54.325 736.492C54.325 736.492 -0.456739 298 492.816 298C986.089 298 931.307 -140.491 931.307 -140.491"
        stroke="url(#paint6_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M62.1509 743.339C62.1509 743.339 7.36916 304.848 500.642 304.848C993.915 304.848 939.133 -133.643 939.133 -133.643"
        stroke="url(#paint7_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M68.9983 750.187C68.9983 750.187 14.2166 311.696 507.489 311.696C1000.76 311.696 945.981 -126.796 945.981 -126.796"
        stroke="url(#paint8_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M78.7809 755.078C78.7809 755.078 23.9991 316.587 517.272 316.587C1010.54 316.587 955.763 -121.905 955.763 -121.905"
        stroke="url(#paint9_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M86.6065 761.926C86.6065 761.926 31.8248 323.434 525.098 323.434C1018.37 323.434 963.589 -115.057 963.589 -115.057"
        stroke="url(#paint10_linear_4_20)"
        strokeWidth="0.987858"
        filter="url(#blurMe)"
        pathLength={1}
      />
      <path
        opacity="0.2"
        d="M94.4325 768.773C94.4325 768.773 39.6507 330.282 532.924 330.282C1026.2 330.282 971.415 -108.209 971.415 -108.209"
        stroke="url(#paint11_linear_4_20)"
        strokeWidth="0.987858"
       filter="url(#blurMe)"
        pathLength={1}
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_20"
          x1="440.97"
          y1="-177.664"
          x2="440.97"
          y2="699.319"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_20"
          x1="450.752"
          y1="-172.772"
          x2="450.752"
          y2="704.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_4_20"
          x1="458.578"
          y1="-165.925"
          x2="458.578"
          y2="711.058"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_4_20"
          x1="466.404"
          y1="-159.078"
          x2="466.404"
          y2="717.905"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_4_20"
          x1="475.208"
          y1="-152.23"
          x2="475.208"
          y2="724.753"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_4_20"
          x1="484.99"
          y1="-147.338"
          x2="484.99"
          y2="729.644"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_4_20"
          x1="492.816"
          y1="-140.491"
          x2="492.816"
          y2="736.492"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_4_20"
          x1="500.642"
          y1="-133.643"
          x2="500.642"
          y2="743.339"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_4_20"
          x1="507.49"
          y1="-126.796"
          x2="507.49"
          y2="750.187"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_4_20"
          x1="517.272"
          y1="-121.905"
          x2="517.272"
          y2="755.078"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_4_20"
          x1="525.098"
          y1="-115.057"
          x2="525.098"
          y2="761.926"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_4_20"
          x1="532.924"
          y1="-108.209"
          x2="532.924"
          y2="768.773"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0520833" stopColor="#7832D0" stopOpacity="0"></stop>
          <stop offset="0.510417" stopColor="#7832D0"></stop>
          <stop offset="0.9375" stopColor="#7832D0" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HomeLanding;
