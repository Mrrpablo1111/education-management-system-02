import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FacultyContainer1Type = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const FacultyContainer1: NextPage<FacultyContainer1Type> = ({
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <div
      className="self-stretch relative bg-darkred h-[470px] text-left text-base text-white font-poppins"
      style={footerStyle}
    >
      <div className="absolute top-[416px] left-[565px] font-medium inline-block w-[550px]">{`Copyright 2024 Phnom Penh Digital University All Rights Reserved. `}</div>
      <div className="absolute top-[139px] left-[595px] font-medium inline-block w-[356px]">
        Faculty of Architecture and Design
      </div>
      <div className="absolute top-[139px] left-[131px] font-medium inline-block w-40">
        Home Page
      </div>
      <div className="absolute top-[114px] left-[1220px] font-medium inline-block w-[372px]">
        #79 Kampuchea Krom Blvd, Sangkhat Monorom, Khan 7 Makara, Phnom Penh,
        Cambodia
      </div>
      <div className="absolute top-[225px] left-[1220px] font-medium inline-block w-[372px]">
        +855 2399 5733
      </div>
      <div className="absolute top-[280px] left-[1220px] font-medium inline-block w-[372px]">
        phnompenhdigital@gmail.com
      </div>
      <div className="absolute top-[189px] left-[596px] font-medium inline-block w-[440px]">{`Faculty of Arts, Literature & Human Science`}</div>
      <div className="absolute top-[189px] left-[132px] font-medium inline-block w-[279px]">
        Help
      </div>
      <div className="absolute top-[239px] left-[596px] font-medium inline-block w-[346px]">
        Faculty of Business Managment
      </div>
      <div className="absolute top-[239px] left-[132px] font-medium inline-block w-[279px]">{`Term & Conditions`}</div>
      <div className="absolute top-[289px] left-[596px] font-medium whitespace-pre-wrap inline-block w-[503px]">{`Faculty of Mathematics, Sciences &  Engineering`}</div>
      <div className="absolute top-[289px] left-[132px] font-medium inline-block w-[279px]">
        FAQ
      </div>
      <div className="absolute top-[44px] left-[591px] text-9xl font-semibold inline-block w-[134px]">
        Faculty
      </div>
      <div className="absolute top-[44px] left-[131px] text-9xl font-semibold inline-block w-[275px]">
        Quick Links
      </div>
      <div className="absolute top-[44px] left-[1220px] text-9xl font-semibold inline-block w-[111px]">
        Find Us
      </div>
      <img
        className="absolute top-[336px] left-[1220px] w-7 h-7 overflow-hidden"
        alt=""
        src="/social-icons.svg"
      />
      <img
        className="absolute top-[336px] left-[1275px] w-7 h-7 overflow-hidden"
        alt=""
        src="/social-icons.svg"
      />
      <img
        className="absolute top-[336px] left-[1330px] w-7 h-7 overflow-hidden"
        alt=""
        src="/social-icons.svg"
      />
      <img
        className="absolute top-[336px] left-[1385px] w-7 h-7 overflow-hidden"
        alt=""
        src="/social-icons.svg"
      />
    </div>
  );
};

export default FacultyContainer1;
