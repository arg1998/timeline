import React from "react";

const FirstHexagon = props => (
  <svg viewBox="2 -20 723 710" width={200} height={200}>
    {/* main center hexagon */}
    <defs>
      <filter
        id="prefix__d"
        x="-200%"
        y="-200%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur xmlns="http://www.w3.org/2000/svg" stdDeviation={2.5} />
      </filter>
    </defs>
    <g filter="url(#prefix__d)">
      <path
        d="M533.431 530.824h-250L157.775 307.547 282.12 85.824h249.999l125.656 221.723-124.344 223.277z"
        fill="none"
        vectorEffect="non-scaling-stroke"
        strokeWidth={4}
        stroke="#5c6298"
        strokeOpacity={1}
        strokeLinecap="square"
        strokeMiterlimit={3}
      />
    </g>

    {/* linked lines */}
    <g
      strokeWidth={2}
      stroke="#7FC0EE"
      strokeOpacity={0.5}
      strokeLinecap="square"
      strokeMiterlimit={1}
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M388.454 33.929v84M413 151l93 41M370.545 148.929L277 192M530 232l88 47M503.454 226.071L448 277M276.025 247.459l.124 36.541M446 325l2 67M253 321l-78 71M327 431l-50 29M593 314.071L532 392M515 427l-42 33M298 321l50 71M636 314.071L700 372M473 464v80M586.211 460v101M409 464v44M525.454 408.071l59.907 50.858M448 440l-2 141M700 422v106M175 440v48M345.736 409.07l61.984 50.788M276 463l.149 103"
      />
    </g>

    {/* mini hexagons inside the main hexagon */}
    <g fill="#0078A4" opacity={1}>
      <path d="M302.19 322.876l-25.91 14.958-26.045-15.037-.045-29.838L276.1 278l25.954 14.88.136 29.996zM472.988 317.171l-25.909 14.959-26.046-15.037-.045-29.84 25.909-14.959 25.956 14.881.135 29.996zM640.988 317.171l-25.909 14.959-26.046-15.038-.045-29.839 25.909-14.959 25.956 14.881.135 29.996zM725.591 412.664l-25.91 14.958-26.045-15.037-.045-29.838 25.908-14.959 25.956 14.88.136 29.996zM473.988 432.876l-25.909 14.958-26.045-15.037-.046-29.838L447.898 388l25.953 14.88.137 29.996zM558 432.876l-25.91 14.958-26.045-15.037-.045-29.838L531.908 388l25.956 14.88.136 29.996zM375.212 432.876l-25.909 14.958-26.045-15.037-.046-29.838L349.122 388l25.954 14.88.136 29.996zM200 432.876l-25.909 14.958-26.045-15.037-.046-29.838L173.91 388l25.954 14.88.136 29.996zM414.683 151.664l-25.91 14.958-26.045-15.037-.045-29.838 25.91-14.959 25.953 14.88.137 29.996zM532 232.677l-25.91 14.958-26.045-15.037L480 202.76l25.91-14.959 25.954 14.88.136 29.996zM302.19 232.677l-25.91 14.958-26.045-15.037-.045-29.838 25.91-14.959 25.954 14.88.136 29.996z" />
    </g>

    {/* beehive 0 */}
    <g
      filter="url(#prefix__c)"
      fill="none"
      stroke="#70CBF2"
      strokeLinecap="square"
      strokeMiterlimit={2}
      strokeOpacity={0.3}
    >
      <path
        d="M156.285 309.271h-47.036l-23.641-42.784L109.003 224h47.036l23.641 42.487-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
      <path
        d="M234.605 350.906h-47.036l-23.641-42.784 23.395-42.487h47.036L258 308.122l-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
      <path
        d="M85.608 351.906H38.572l-23.641-42.784 23.394-42.486h47.036l23.642 42.486-23.395 42.784zM85.608 266.636H38.572l-23.641-42.784 23.395-42.487h47.036l23.641 42.487-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id="prefix__c"
        x="-200%"
        y="-200%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur xmlns="http://www.w3.org/2000/svg" stdDeviation={3} />
      </filter>
    </defs>

    {/* beehive 1 */}
    <g
      filter="url(#prefix__b)"
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit={3}
      strokeOpacity={0.4}
    >
      <path
        d="M604.865 128.406h-47.036l-23.642-42.784 23.395-42.486h47.036l23.641 42.486-23.394 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
        stroke="#66B9E0"
      />
      <path
        d="M529.606 176.27H482.57l-23.642-42.784L482.323 91h47.036L553 133.486l-23.394 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
        stroke="#66B9E0"
      />
      <path
        d="M675.295 171.148h-47.036l-23.641-42.785 23.394-42.486h47.036l23.642 42.486-23.395 42.785z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={3}
        stroke="#70CBF2"
      />
      <path
        d="M675.295 85.771h-47.036l-23.641-42.784L628.012.5h47.036l23.642 42.487-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
        stroke="#70CBF2"
      />
    </g>
    <defs>
      <filter
        id="prefix__b"
        x="-200%"
        y="-200%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur
          xmlns="http://www.w3.org/2000/svg"
          stdDeviation={1.073}
          result="_out_8NHcuyQwcQ1CGQawprIyP1GsJCvIKlHc"
        />
        <feGaussianBlur
          xmlns="http://www.w3.org/2000/svg"
          stdDeviation={2.9}
          in="_out_8NHcuyQwcQ1CGQawprIyP1GsJCvIKlHc"
        />
      </filter>
    </defs>

    {/* beehive 2 */}
    <g
      filter="url(#prefix__a)"
      fill="none"
      stroke="#70CBF2"
      strokeOpacity={0.5}
      strokeLinecap="square"
      strokeMiterlimit={3}
    >
      <path
        d="M534.554 618.042h-47.036l-23.641-42.785 23.394-42.486h47.036l23.642 42.486-23.395 42.785zM605.462 575.406h-47.036l-23.642-42.784 23.395-42.486h47.036l23.641 42.486-23.394 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
      <path
        d="M605.193 660.677h-47.036l-23.641-42.784 23.394-42.487h47.036l23.642 42.487-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
      <path
        d="M529.605 519.271h-47.036l-23.641-42.784L482.322 434h47.036L553 476.487l-23.395 42.784z"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id="prefix__a"
        x="-200%"
        y="-200%"
        width="400%"
        height="400%"
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur
          xmlns="http://www.w3.org/2000/svg"
          stdDeviation={3}
          result="_out_tlCJlb6WtIkqwJ7w79tsxMFXAkOiDntU"
        />
        <feGaussianBlur
          xmlns="http://www.w3.org/2000/svg"
          stdDeviation={3}
          in="_out_tlCJlb6WtIkqwJ7w79tsxMFXAkOiDntU"
        />
      </filter>
    </defs>
  </svg>
);

export default FirstHexagon;
