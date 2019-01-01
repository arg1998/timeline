import React from "react";
import classNames from "classnames";
import ThirdHexagonContentStyles from "./ThirdHexagonContent.style";

function ThirdHexagonContent(props) {
  const { classes, active } = props;
  return (
    <>
      {/* content background */}
      <path
        d="M734.412 639.578L450.065 829.079 165.689 639.578l-.101-379.219L450.15 70.921l284.219 189.5.043 379.157z"
        fill="#000"
        fillOpacity={0.6}
      />

      {/* Texts */}
      <g
        className={classNames({ [classes.sideTexts]: active })}
        fontWeight={400}
      >
        <g fontFamily="Philosopher" fontSize={32} fill="#b9b9b9">
          <text transform="translate(196.108 507.379)">{"Paint whatever"}</text>
          <text transform="translate(196.108 543.219)">
            {"Happened in your"}
          </text>
          <text transform="translate(196.108 579.059)">
            {"Life with strings"}
          </text>
          <text transform="translate(196.108 614.899)">
            {"Made out of time"}
          </text>
          <text transform="translate(196.108 650.739)">{"Itself."}</text>
        </g>

        {/* quote */}
        <g fontSize={30} fill="#e8e8e8">
          <text transform="translate(455.49 381.919)" fontFamily="Scope One">
            {'"Memory...'}
          </text>
          <text transform="translate(455.49 423.409)" fontFamily="Scope One">
            {"Is the diary that we"}
          </text>
          <text transform="translate(455.49 464.899)" fontFamily="Scope One">
            {"All carry about with"}
          </text>
          <text transform="translate(455.49 506.389)" fontFamily="Scope One">
            {'Us."'}
          </text>
          <text transform="translate(564.797 548.076)" fontFamily="Satisfy">
            {"- Oscar Wilde"}
          </text>
        </g>
      </g>

      {/* title */}
      <g
        className={classNames({ [classes.title]: active })}
        fontFamily="Philosopher"
        fontSize={48}
        fill="#d0f28d"
      >
        <text transform="translate(414.331 154.279)">{"Build"}</text>
        <text transform="translate(306.331 208.039)">{"Your Personal"}</text>
        <text transform="translate(270.331 261.799)">
          {"Lifetime Biography"}
        </text>
      </g>

      {/* lines */}
      <g
        className={classNames({ [classes.horizontalLines]: active })}
        strokeWidth={3}
        stroke="#FFC30D"
        strokeLinecap="square"
        strokeMiterlimit={3}
        vectorEffect="non-scaling-stroke"
      >
        <path d="M446.412 279.079v464" />
        <path d="M446.412 475h-221" />
        <path d="M718.412 583.079h-272" />
        <path d="M446.412 671.079h-221" />
      </g>

      {/* Icon */}
      <g className={classNames({ [classes.icon]: active })}>
        {/* notebook */}
        <g>
          <path
            d="M352.385 369.357h-86.867c-.96 0-1.6.691-1.6 1.727v10.362h-12.317c-.961 0-1.601.692-1.601 1.727v79.1c0 1.037.64 1.727 1.601 1.727h88.306c.96 0 1.601-.69 1.601-1.727v-11.917h10.877c.961 0 1.601-.69 1.601-1.727v-77.545c0-.864-.64-1.727-1.601-1.727zm-99.186 91.189V384.9h85.109v75.646h-85.109zm97.588-13.644h-9.279v-63.729c0-.519-.159-.863-.48-1.209-.32-.344-.64-.518-1.121-.518h-72.79v-8.634h83.67v74.09z"
            fill="#B22222"
          />
          <path
            d="M257.717 416.679h23.677c.96 0 1.6-.691 1.6-1.728v-25.56c0-1.037-.64-1.727-1.6-1.727h-23.677c-.96 0-1.6.69-1.6 1.727v25.56c0 .865.799 1.728 1.6 1.728zm1.599-25.561h20.477v22.106h-20.477v-22.106z"
            fill="#BF0A30"
          />
          <path
            d="M273.996 402.863c.802-1.037 1.44-2.418 1.44-3.973 0-3.455-2.559-6.219-5.758-6.219s-5.76 2.764-5.76 6.219c0 1.555.481 2.936 1.439 3.973-2.559 1.553-4.318 4.663-4.318 8.115 0 1.037.64 1.728 1.598 1.728.961 0 1.601-.691 1.601-1.728 0-3.28 2.4-5.872 5.44-5.872 3.04 0 5.438 2.592 5.438 5.872 0 1.037.64 1.728 1.6 1.728.961 0 1.601-.691 1.601-1.728.159-3.452-1.601-6.562-4.321-8.115zm-6.718-3.973c0-1.555 1.119-2.764 2.559-2.764 1.439 0 2.561 1.209 2.561 2.764 0 1.555-1.122 2.764-2.561 2.764-1.44 0-2.559-1.383-2.559-2.764z"
            fill="#CD5C5C"
          />
          <g
            className={classNames({ [classes.notebookLines]: active })}
            stroke="#9E9914"
            strokeWidth={2.5}
          >
            <path d="M288 393L335 393" />
            <path d="M288 403L335 403" />
            <path d="M288 413L335 413" />
            <path d="M260 423L335 423" />
          </g>
          <g fill="#420D09">
            <path d="M313.032 430.668h-13.598c-.96 0-1.601.691-1.601 1.728v22.968c0 1.037.641 1.727 1.601 1.727h13.598c.96 0 1.598-.69 1.598-1.727v-22.968c0-.865-.799-1.728-1.598-1.728zm-1.601 23.143h-10.398v-19.69h10.398v19.69zM333.668 430.668H320.07c-.96 0-1.598.691-1.598 1.728v22.968c0 1.037.638 1.727 1.598 1.727h13.598c.96 0 1.6-.69 1.6-1.727v-22.968c0-.865-.64-1.728-1.6-1.728zm-1.599 23.143h-10.398v-19.69h10.398v19.69zM292.235 430.668h-13.598c-.96 0-1.601.691-1.601 1.728v22.968c0 1.037.641 1.727 1.601 1.727h13.598c.96 0 1.598-.69 1.598-1.727v-22.968c0-.865-.638-1.728-1.598-1.728zm-1.601 23.143h-10.399v-19.69h10.399v19.69zM271.596 430.668H257.84c-.961 0-1.601.691-1.601 1.728v22.968c0 1.037.64 1.727 1.601 1.727h13.756c.961 0 1.601-.69 1.601-1.727v-22.968c0-.865-.799-1.728-1.601-1.728zm-1.598 23.143h-10.56v-19.69h10.56v19.69z" />
          </g>
        </g>

        {/* human */}
        <g>
          <path
            d="M352.463 412.377l9.689-.19c3.356 0 6.088-2.725 6.088-6.076v-25.61c0-13.19-6.129-25.618-17.255-34.998-6.704-5.651-14.768-9.785-23.291-12.078a37.04 37.04 0 0 0 4.18-3.461c22.595 7.223 40.979 26.408 40.979 50.537v25.61c0 5.835-4.792 10.568-10.701 10.568h-9.689M250.898 412.187h-1.112c-3.358 0-6.088-2.725-6.088-6.076v-25.61c0-13.19 6.127-25.618 17.256-34.998 6.704-5.651 14.766-9.785 23.29-12.078a36.963 36.963 0 0 1-4.181-3.461c-22.596 7.223-40.979 26.408-40.979 50.537v25.61c0 5.835 4.791 10.568 10.702 10.568h1.112v-4.492z"
            fill="#D77223"
          />
          <path
            d="M305.969 335.434c17.831 0 32.289-14.074 32.289-31.437 0-17.36-14.458-31.434-32.289-31.434-17.834 0-32.288 14.074-32.288 31.434 0 17.363 14.454 31.437 32.288 31.437zm-21.121-48.821l2.528 2.461a2.333 2.333 0 0 0 1.631.658c.592 0 1.181-.219 1.631-.658a2.203 2.203 0 0 0 0-3.177l-2.528-2.461a27.945 27.945 0 0 1 15.553-6.281v3.491c0 1.242 1.032 2.246 2.306 2.246 1.273 0 2.306-1.004 2.306-2.246v-3.491a27.927 27.927 0 0 1 15.551 6.281l-2.526 2.463a2.203 2.203 0 0 0 0 3.175 2.33 2.33 0 0 0 1.631.658c.589 0 1.181-.219 1.631-.658l2.527-2.461c3.619 4.16 5.963 9.396 6.453 15.141h-3.587c-1.274 0-2.308 1.005-2.308 2.243 0 1.242 1.034 2.246 2.308 2.246h3.587c-.49 5.745-2.834 10.983-6.453 15.141l-2.529-2.461a2.355 2.355 0 0 0-3.262 0 2.208 2.208 0 0 0 0 3.177l2.528 2.461a27.927 27.927 0 0 1-15.551 6.281v-3.491c0-1.241-1.033-2.246-2.306-2.246-1.274 0-2.306 1.005-2.306 2.246v3.491a27.933 27.933 0 0 1-15.551-6.281l2.529-2.461a2.205 2.205 0 0 0 0-3.177 2.356 2.356 0 0 0-3.263 0l-2.528 2.463c-3.619-4.16-5.964-9.398-6.453-15.143h3.586c1.275 0 2.306-1.004 2.306-2.246 0-1.238-1.031-2.243-2.306-2.243h-3.586c.489-5.745 2.834-10.981 6.451-15.141z"
            fill="#D7722C"
          />
          <g>
            <path
              stroke="#F79862"
              d="M306 306L295 295"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <path
              stroke="#F79862"
              d="M306 306L320 283"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </>
  );
}

export default ThirdHexagonContentStyles(ThirdHexagonContent);