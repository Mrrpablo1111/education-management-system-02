import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default1Type = {
  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default1: NextPage<Property1Default1Type> = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[1601px] h-[120px] text-left text-base text-darkslateblue font-poppins"
      style={property1Default1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <div className="absolute top-[36.67%] left-[88.19%] font-medium text-gray">
        Por Senghong
      </div>
      <div className="absolute top-[45.83%] left-[33.92%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45.83%] left-[46.66%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45.83%] left-[55.97%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45.83%] left-[68.39%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45.83%] left-[76.7%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <img
        className="absolute h-[52.5%] w-[3.94%] top-[20%] right-[12.93%] bottom-[27.5%] left-[83.14%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/ellipse-2@2x.png"
      />
      <img
        className="absolute h-[70.83%] w-[19.18%] top-[15%] right-[76.76%] bottom-[14.17%] left-[4.06%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logotest-1@2x.png"
      />
      <div className="absolute h-[30%] w-[4.56%] top-[35%] right-[67.71%] bottom-[35%] left-[27.73%]">
        <div className="absolute top-[0%] left-[0%] font-medium">About</div>
      </div>
      <div className="absolute h-[30%] w-[8.56%] top-[35%] right-[55.09%] bottom-[35%] left-[36.35%]">
        <div className="absolute top-[0%] left-[0%] font-medium">Academics</div>
      </div>
      <div className="absolute h-[30%] w-[6.12%] top-[35%] right-[45.66%] bottom-[35%] left-[48.22%]">
        <div className="absolute top-[0%] left-[0%] font-medium">Contact</div>
      </div>
      <div className="absolute h-[30%] w-[8.74%] top-[35%] right-[33.23%] bottom-[35%] left-[58.03%]">
        <div className="absolute top-[0%] left-[0%] font-medium">
          Admissions
        </div>
      </div>
      <div className="absolute h-[30%] w-[4.68%] top-[35%] right-[24.92%] bottom-[35%] left-[70.39%]">
        <div className="absolute top-[0%] left-[0%] font-medium">Profile</div>
      </div>
    </div>
  );
};

export default Property1Default1;
