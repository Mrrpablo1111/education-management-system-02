import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1DefaultType = {
  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];

  /** Action props */
  onLogotest1ImageClick?: () => void;
};

const Property1Default: NextPage<Property1DefaultType> = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  onLogotest1ImageClick,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[1601px] h-[120px] text-left text-base text-darkslateblue font-poppins"
      style={property1DefaultStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <div className="absolute h-2/5 w-[7.06%] top-[30%] right-[7.56%] bottom-[30%] left-[85.38%] rounded-3xs bg-darkred" />
      <div className="absolute top-[40%] left-[87.2%] font-medium text-white">
        Sign In
      </div>
      <div className="absolute top-[45%] left-[39.91%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45%] left-[51.97%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45%] left-[61.77%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <div className="absolute top-[45%] left-[74.2%] text-5xl font-medium [transform:_rotate(90deg)] [transform-origin:0_0]">{`>`}</div>
      <img
        className="absolute h-[61.67%] w-[16.68%] top-[19.17%] right-[79.33%] bottom-[19.17%] left-[4%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src="/logotest-1@2x.png"
        onClick={onLogotest1ImageClick}
      />
      <div className="absolute h-[30%] w-[4.56%] top-[35.83%] right-[61.9%] bottom-[34.17%] left-[33.54%]">
        <div className="absolute top-[0%] left-[0%] font-medium">About</div>
      </div>
      <div className="absolute h-[30%] w-[8.56%] top-[35.83%] right-[49.72%] bottom-[34.17%] left-[41.72%]">
        <div className="absolute top-[0%] left-[0%] font-medium">Academics</div>
      </div>
      <div className="absolute h-[30%] w-[6.12%] top-[35.83%] right-[39.91%] bottom-[34.17%] left-[53.97%]">
        <div className="absolute top-[0%] left-[0%] font-medium">Contact</div>
      </div>
      <div className="absolute h-[30%] w-[8.74%] top-[35.83%] right-[27.48%] bottom-[34.17%] left-[63.77%]">
        <div className="absolute top-[0%] left-[0%] font-medium">
          Admissions
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
