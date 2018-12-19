import React from "react";
import classNames from "classnames";

import FirstHexagonContentStyles from "./FirstHexagonContent.style";

const FirstHexagonContent = props => {
  const { classes, active } = props;

  return (
    <>
      <path
        fill="#000"
        fillOpacity={0.6}
        d="M734.36 639.56L450 829.06l-284.38-189.5-.1-379.22L450.1 70.91l284.22 189.5.05 379.15z"
      />
      <g className={classNames({ [classes.sideTexts]: active })}>
        <g
          fontFamily="Philosopher"
          fontWeight={400}
          fontSize={32}
          fill="#b9b9b9"
        >
          <text transform="translate(445.317 438.508)">
            {"Go back in time"}
          </text>
          <text transform="translate(445.317 474.348)">
            {"and reveal the past"}
          </text>
          <text transform="translate(445.317 510.188)">{"simply just by"}</text>
          <text transform="translate(445.317 546.028)">{"scrolling."}</text>
          <text transform="translate(445.317 617.708)">
            {"Nothing will be"}
          </text>
          <text transform="translate(445.317 653.548)">
            {"forgotten here!"}
          </text>
        </g>
        <g fontWeight={400} fontSize={30} fill="#e8e8e8">
          <text transform="translate(182.161 423.872)" fontFamily="Scope One">
            {'"The past is never'}
          </text>
          <text transform="translate(182.161 465.362)" fontFamily="Scope One">
            {"where you think"}
          </text>
          <text transform="translate(182.161 506.852)" fontFamily="Scope One">
            {"you left it."}
          </text>
          <text transform="translate(224.661 548.539)" fontFamily="Satisfy">
            {"Katherine Porter"}
          </text>
        </g>
      </g>

      <g
        className={classNames({ [classes.title]: active })}
        fontFamily="Philosopher"
        fontWeight={400}
        fontSize={48}
        fill="#d0f28d"
      >
        <text transform="translate(331 198.92)">{"Move in time"}</text>
        <text transform="translate(367 252.68)">{"With delightful"}</text>
        <text transform="translate(475 306.44)">{"Experience"}</text>
      </g>
      <g
        className={classNames({ [classes.horizontalLines]: active })}
        fill="none"
        vectorEffect="non-scaling-stroke"
        strokeWidth={3}
        stroke="#FFC30D"
        strokeLinecap="circle"
      >
        <path d="M433 280L433 800" />
        <path d="M433 330L660 330" />
        <path d="M433 680L660 680" />
        <path d="M433 573L200 573" />
      </g>
      <g className={classNames({ [classes.jetsAnimations]: active })}>
        <g fill="#FF5757" className={classes.centerJetsFuelTrailAnimation}>
          <path d="M260.843 271.584l5.478 3.265-14.317 24.02-5.478-3.264z" />
          <path d="M277.4 274.937l5.478 3.265-40.088 67.257-5.478-3.265z" />
          <path d="M293.954 278.292l5.477 3.265-42.95 72.06-5.479-3.264z" />
          <path d="M284.74 324.879l5.478 3.265-20.044 33.628-5.478-3.265zM290.463 315.276l5.477 3.265-2.863 4.805-5.478-3.265zM304.776 291.26l5.478 3.264L298.8 313.74l-5.477-3.265z" />
          <path d="M315.605 304.222l5.478 3.265-14.318 24.02-5.477-3.265z" />
        </g>
        <path
          d="M263.101 263.02l36.412 12.114 28.004 26.237c.193.181.401.337.623.469.786.468 1.725.623 2.57.401 1.086-.285 1.835-1.144 1.94-2.217l8.61-89.25c.004-.05-.012-.098-.008-.148.003-.112-.011-.218-.022-.332a2.828 2.828 0 0 0-.245-.959 3.379 3.379 0 0 0-.357-.597c-.066-.088-.12-.179-.193-.261a3.607 3.607 0 0 0-.824-.692 3.596 3.596 0 0 0-.998-.393c-.11-.026-.215-.03-.322-.045a3.324 3.324 0 0 0-.695-.03 2.876 2.876 0 0 0-.96.242c-.105.045-.205.083-.302.14-.042.027-.094.034-.134.063l-74.357 50.106c-.897.602-1.292 1.671-1.025 2.761.264 1.085 1.144 2.006 2.283 2.391zm39.318 7.234a3.69 3.69 0 0 0-.709-.324l-4.881-1.624 28.399-36.362-18.433 42.296-3.753-3.517a3.643 3.643 0 0 0-.623-.469zm9.305 8.603l21.444-49.206-6.131 63.552-15.313-14.346zm11.735-54.986l-33.037 42.303-19.911-6.624 52.948-35.679z"
          fill="#009688"
        />
        <g>
          <g fill="#EE7027" className={classes.miniJetsFuelTrailAnimation}>
            <path d="M297.932 358.779l5.477 3.265-8.59 14.412-5.478-3.265z" />
            <path d="M314.361 368.57l5.478 3.266-8.59 14.412-5.478-3.265z" />
            <path d="M330.79 378.362l5.477 3.265-8.59 14.412-5.478-3.265z" />
          </g>
          <path
            d="M354.46 366.79l-8.639-14.108 6.721-17.048c6.315-10.713 8.955-23.697 1.805-27.954-7.15-4.257-17.307 4.252-23.711 14.909l-11.783 14.033-16.521-.87c-1.086-.058-2.057.425-2.559 1.269l-5.722 9.61c-.789 1.327-.203 3.134 1.309 4.034l49.311 29.358c1.512.9 3.38.554 4.17-.772l5.722-9.61c.502-.844.464-1.927-.103-2.851zm-8.574-31.605l-6.384 16.188c-.311.785-.208 1.702.277 2.495l3.585 5.851-12.026-7.16 11.444-19.222 3.104 1.848zm5.6-22.7c1.469.874 1.906 7.949-3.167 17.641l-10.829-6.448c6.1-9.08 12.528-12.067 13.996-11.193zm-30.799 30.013c.928.048 1.784-.298 2.325-.946l11.187-13.324 3.104 1.847-11.444 19.222-12.026-7.16 6.854.361zm-16.865.187l19.176 11.417-2.861 4.806-19.176-11.417 2.861-4.806zm21.794 19.485l2.861-4.806 19.176 11.417-2.861 4.806-19.176-11.417z"
            fill="#009688"
          />
        </g>
        <g>
          <g fill="#EE7027" className={classes.miniJetsFuelTrailAnimation}>
            <path d="M188.408 293.507l5.478 3.265-8.59 14.413-5.478-3.265z" />
            <path d="M204.836 303.298l5.478 3.265-8.59 14.412-5.479-3.265z" />
            <path d="M221.265 313.088l5.478 3.265-8.59 14.412-5.479-3.265z" />
          </g>
          <path
            d="M244.881 301.551l-8.638-14.109 6.721-17.048c6.315-10.712 8.954-23.697 1.804-27.954-7.149-4.257-17.307 4.252-23.71 14.909l-11.784 14.033-16.521-.87c-1.086-.058-2.056.426-2.558 1.269l-5.722 9.611c-.79 1.326-.203 3.133 1.309 4.033l49.31 29.358c1.512.9 3.38.555 4.17-.772l5.722-9.61c.502-.844.464-1.927-.103-2.85zm-8.574-31.605l-6.384 16.187c-.311.785-.208 1.702.278 2.495l3.585 5.851-12.027-7.16 11.444-19.221 3.104 1.848zm5.601-22.701c1.468.874 1.905 7.949-3.167 17.641l-10.83-6.447c6.1-9.08 12.528-12.068 13.997-11.194zm-30.8 30.013c.928.048 1.784-.298 2.325-.946l11.187-13.324 3.104 1.848-11.444 19.221-12.026-7.16 6.854.361zm-16.865.188l19.176 11.417-2.861 4.805-19.176-11.417 2.861-4.805zm21.794 19.484l2.861-4.806 19.177 11.417-2.861 4.806-19.177-11.417z"
            fill="#009688"
          />
        </g>
        <g>
          <path
            d="M734.355 638.562L450.009 828.064 165.633 638.562l-.102-379.218L450.094 69.906l284.218 189.5.043 379.156z"
            fill="#0D0D0D"
            fillOpacity={0.11}
          />
        </g>
      </g>
    </>
  );
};

export default FirstHexagonContentStyles(FirstHexagonContent);
