import React from "react";

export const LogoFull: React.FC<{
  className: string;
  style: CSSStyleDeclaration;
}> = React.forwardRef(({ className, style = {} }, ref: SVGElement) => {
  return (
    <svg
      width="370"
      height="120"
      viewBox="0 0 370 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fill="currentColor"
        className="logo--letter-8"
        d="M345.036 116.142C343.005 113.909 341.279 110.761 339.858 107.107C337.015 99.797 335.391 90.0508 335.391 79.1878C335.391 76.0406 335.492 72.9949 335.797 70.1523L340.975 70.6599C340.772 73.401 340.569 76.2437 340.569 79.2893C340.569 87.0051 341.482 94.1117 343.005 100C344.528 105.787 346.66 110.355 348.893 112.69C350.315 114.315 351.635 114.822 352.65 114.822C353.665 114.822 354.985 114.315 356.406 112.69C357.827 111.066 359.35 108.528 360.569 105.381C363.107 98.8833 364.731 89.6447 364.731 79.2893C364.731 76.3452 364.629 73.401 364.325 70.6599L369.503 70.1523C369.807 73.0964 369.909 76.1421 369.909 79.1878C369.909 87.3096 368.995 94.8223 367.269 101.218C365.645 107.614 363.31 112.69 360.264 116.142C358.234 118.376 355.594 120 352.65 120C349.706 120 347.066 118.477 345.036 116.142Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-7"
        d="M301.178 120C294.477 120 288.081 117.056 283.208 112.386C278.335 107.716 275.086 101.218 275.086 93.9086C275.086 79.4924 286.761 67.8173 301.178 67.8173C313.36 67.8173 323.513 76.1421 326.457 87.4112L327.269 90.6599H280.569C280.366 91.6751 280.264 92.7919 280.264 93.9086C280.264 99.5939 282.802 104.772 286.761 108.629C290.721 112.487 296 114.822 301.076 114.822H327.168V120H301.178V120ZM282.091 85.4822H320.264C316.914 78.1726 309.604 73.0965 301.178 73.0965C292.65 73.0965 285.34 78.1726 282.091 85.4822Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-6"
        d="M242.441 119.899C228.025 119.899 216.35 108.233 216.35 93.8292C216.35 79.4252 228.025 67.7599 242.441 67.7599H262.035V0H267.213V73.0347H242.441C230.868 73.0347 221.629 82.3669 221.528 93.9307C221.528 105.494 230.868 114.725 242.441 114.827H267.213V120H242.441V119.899Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-5"
        d="M157.91 120V114.822H182.682C194.255 114.822 203.494 105.482 203.595 93.9086C203.595 82.335 194.255 73.0965 182.682 72.9949H157.91V0H163.088V67.8173H182.682C197.098 67.8173 208.773 79.4924 208.773 93.9086C208.773 108.325 197.098 120 182.682 120H157.91Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-4"
        d="M107.01 93.9898C107.01 79.5736 118.685 68 133 68C137.771 68 142.137 69.2183 145.995 71.4518L148.228 72.7716L145.69 77.1371L143.457 75.9188C140.411 74.0914 136.858 73.0761 133 73.0761C121.426 73.0761 112.086 82.4162 112.086 93.9898C112.086 105.563 121.426 114.904 133 114.904C136.858 114.904 140.411 113.888 143.457 112.061L145.69 110.741L148.228 115.107L145.995 116.426C142.137 118.66 137.67 119.878 133 119.878C118.685 119.98 107.01 108.305 107.01 93.9898Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-3"
        d="M93.81 120V67.8173H98.8861V120H93.81Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-3"
        d="M92.89 52.8934C92.89 50.9645 94.4128 49.4416 96.3418 49.4416C98.2707 49.4416 99.7936 50.9645 99.7936 52.8934C99.7936 54.8223 98.2707 56.3452 96.3418 56.3452C94.4128 56.3452 92.89 54.8223 92.89 52.8934Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-2"
        d="M60.3 120C60.3 120 60.3 88.3249 60.3 83.1472V82.4366V70.4569V67.8173H65.4777V75.8376C70.0462 71.6751 76.2391 69.1371 82.9396 69.1371H85.5792V74.3147H82.9396C75.63 74.3147 69.1325 78.0711 65.4777 83.8579V120H60.3V120Z"
      />
      <path
        fill="currentColor"
        className="logo--letter-1"
        d="M26.0914 120C19.3909 120 12.9949 117.056 8.12183 112.386C3.24873 107.716 0 101.218 0 93.9086C0 79.4924 11.6751 67.8173 26.0914 67.8173C38.2741 67.8173 48.4264 76.1421 51.3706 87.4112L52.1827 90.6599H5.48223C5.27919 91.6751 5.17766 92.7919 5.17766 93.9086C5.17766 99.5939 7.71574 104.772 11.6751 108.629C15.6345 112.487 20.9137 114.822 25.9898 114.822H52.0812V120H26.0914V120ZM7.00508 85.4822H45.1777C41.9289 78.1726 34.6193 73.0965 26.0914 73.0965C17.5635 73.0965 10.2538 78.1726 7.00508 85.4822Z"
      />
    </svg>
  );
});

LogoFull.displayName = "LogoFull";
