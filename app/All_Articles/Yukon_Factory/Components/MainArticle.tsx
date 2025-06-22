import Image from "next/image";
import Yukon from "./WhyYukon";
import UniqueFeatures from "./UniqueFeatures";
import Partnership from "./Partnership";

export default function MainArticle() {
  return (
    <div className="bg-[url(/daylun_building_balconies.jpg)] px-[7%] md:px-[15%]">
      <div className="bg-[#04012A]">
        <div className="text-sm md:text-md lg:text-xl text-white px-[5%] py-[100px] whitespace-pre-wrap">
          <p>
            Having recieved the Factory Innovation and NGen grant, Daylun is
            currently constructing it's first micro-factory in Yukon. This
            factory will be revolutionary - by leveraging AI and automation,
            this factory is projected to reduce costs by 30-50%, and increase
            product speed by 30%!
          </p>
          <Yukon />
          <UniqueFeatures />
          <Partnership />
        </div>
      </div>
    </div>
  );
}
