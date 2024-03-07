import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default2Type = {
  /** Style props */
  property1DefaultWidth?: CSSProperties["width"];
  property1DefaultHeight?: CSSProperties["height"];
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultRight?: CSSProperties["right"];
  property1DefaultBottom?: CSSProperties["bottom"];
  property1DefaultLeft?: CSSProperties["left"];
};

const Property1Default2: NextPage<Property1Default2Type> = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
  ]);

  return (
    <div
      className="w-[73px] h-9 text-left text-base text-darkslateblue font-poppins"
      style={property1Default2Style}
    >
      <div className="absolute top-[0%] left-[0%] font-medium">About</div>
    </div>
  );
};

export default Property1Default2;
