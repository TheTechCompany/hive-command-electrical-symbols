import * as React from "react";
import type { SVGProps } from "react";
export const NoContact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#fff"
    fillRule="evenodd"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    fontFamily="Roboto"
    fontSize={14}
    textAnchor="middle"
    viewBox="-2 -5 25 60"
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:"Roboto";src:url(data:application/font-woff;charset=utf-8;base64,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)format("woff");font-weight:400;font-style:normal}'
        }
      </style>
    </defs>
    <use xlinkHref="#no-contact_svg__A" x={0.5} y={0.5} />
    <symbol id="no-contact_svg__A" overflow="visible">
      <path fill="none" strokeWidth={0.5} d="M10 0v15M5 15l5 20v15" />
      <text fill="#000" stroke="none" fontSize={7} textAnchor="end">
        <tspan x={8} y={9}>
          {"13"}
        </tspan>
        <tspan x={8} y={46.81}>
          {"14"}
        </tspan>
      </text>
    </symbol>
  </svg>
);

NoContact.metadata = {
  width: 20,
  height: 60
}