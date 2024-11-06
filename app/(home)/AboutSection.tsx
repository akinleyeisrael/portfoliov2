/* eslint-disable react/no-unescaped-entities */
import { LayoutGrid } from "@/components/ui/layout-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SocialMedia } from "./socialMedias";

const words = [
  {
    text: "hey",
  },
  {
    text: "I'am",
  },
  {
    text: "Akinola",
    className: "text-lime-300",
  },
  {
    text: "Akinleye.",
    className: "text-lime-300",
  },
];
const AboutSection = () => {
  return (
    <section id="about" className="container">
      <div>
        <div className="py-4">
          <h1 className="text-5xl flex flex-col text-lime-400 font-bold text">
            Frontend <span>Developer.</span>
          </h1>
          <div className="pt-2">
            <TypewriterEffect words={words} />
          </div>
        </div>
        <p className="text-slate-400 tracking-normal leading-loose">
          I am a passionate{" "}
          <span className="font-bold">Frontend Developer </span>with a
          relentless drive for <span className="font-bold">innovation</span> and{" "}
          <span className="font-bold">problem-solving</span>. Graduating with a
          degree in <span className="font-bold">Computer Programming</span> I've
          embarked on a journey to weave intricate webs of code into
          transformative digital experiences.
        </p>
        <div className="block md:hidden lg:hidden">
          <SocialMedia />
        </div>
      </div>
      <div className="h-screen py-10 w-full">
        <LayoutGrid cards={cards} />
      </div>
      <div className="pt-2">
        <p className="text-slate-400 tracking-normal leading-loose">
          Beyond the world of programming,I am also a skilled{" "}
          <span className="font-bold">cinematographer,</span> proficient in
          capturing captivating <span>videos</span> with a keen eye for{" "}
          <span className="font-bold">visual storytellin</span>g.
        </p>
      </div>
    </section>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
    
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
     
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
    
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://unsplash.com/photos/woman-in-black-shirt-sitting-beside-black-flat-screen-computer-monitor-Im_cQ6hQo10",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://unsplash.com/photos/a-close-up-of-a-sign-with-the-word-hello-hello-jxelyjTrWFg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://unsplash.com/photos/black-flat-screen-computer-monitor-8qEB0fTe9Vw",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/akin.png",
  },
];

export default AboutSection;
