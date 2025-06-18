interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const FlagIcon: React.FC<IconProps> = ({
  width = 18,
  height = 18,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      enableBackground="new 0 0 50 50"
      style={style}
      className={className}
    >
      <style type="text/css">
        {`
          .st0{fill:currentColor;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}
        `}
      </style>
      <path
        className="st0"
        d="M25.3,48.8C12.2,48.8,1.5,38.1,1.5,25S12.2,1.3,25.3,1.3S49,11.9,49,25S38.4,48.8,25.3,48.8z M25.3,6.2
        C14.9,6.2,6.4,14.7,6.4,25s8.4,18.8,18.8,18.8S44.1,35.4,44.1,25S35.6,6.2,25.3,6.2z"
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="13.9243"
        y1="25.6342"
        x2="38.9363"
        y2="25.6342"
      >
        <stop offset="0" style={{ stopColor: "#E95504" }} />
        <stop offset="0.7178" style={{ stopColor: "#E04906" }} />
        <stop offset="1" style={{ stopColor: "#D14005" }} />
      </linearGradient>
      <path
        className="st1"
        d="M16.7,31.6c0,0,1.7-1.5,5-1.5c3.9,0,7.1,2.8,10.4,2.8c2.9,0,5-1.2,6.1-2.4c0.4-0.4,0.6-1,0.6-1.6V15.3
        c0-0.7-0.5-1.2-1.2-1.2c-0.5,0-0.8,0.3-1.2,0.6c-0.5,0.5-1.9,1.5-5.2,1.5c-3,0-5.4-2.8-9.3-2.8c-3.8,0-5.4,1.2-5.4,1.2v-1
        c0-0.8-0.6-1.4-1.4-1.4c-0.8,0-1.4,0.6-1.4,1.4v23.9c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4V31.6z M18.9,17.9v8.9
        c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1v-8.9c0-0.6,0.5-1.1,1.1-1.1C18.4,16.7,18.9,17.2,18.9,17.9z"
      />
    </svg>
  );
};

// 這裡可以添加更多圖標組件
// 例如：
export const PinIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 外圈藍底白邊 */}
      <circle
        cx="12.2"
        cy="11.9"
        r="10.9"
        fill="currentColor"
        stroke="#FFFFFF"
        strokeMiterlimit={10}
      />
      {/* 白色圖案 */}
      <path
        fill="#FFFFFF"
        d="M9.9,13.8c-0.8-0.8-1.5-1.5-2.2-2.2c-0.4-0.4-0.4-0.6,0.1-0.9c1-0.7,2.1-0.9,3.2-0.6c0.2,0.1,0.4,0,0.6-0.1
        c0.6-0.5,1.3-1,1.9-1.5c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.3,0.2-0.7,0.3-1c0.1-0.2,0.4-0.3,0.5-0.1c0.8,0.8,1.6,1.6,2.4,2.4
        c0.2,0.2,0.2,0.5-0.1,0.7c-0.3,0.1-0.7,0.2-1,0.3c-0.1,0-0.2,0.1-0.2,0.1c-0.6,0.7-1.1,1.4-1.7,2.1c-0.1,0.1-0.1,0.2-0.1,0.4
        c0.3,1.2,0.1,2.4-0.6,3.4c-0.3,0.4-0.5,0.4-0.8,0.1c-0.7-0.7-1.5-1.5-2.2-2.2c-0.8,0.8-1.5,1.6-2.3,2.3c-0.1,0.1-0.1,0.1-0.2,0.2
        c-0.2,0.1-0.3,0.1-0.5,0c-0.1-0.2-0.2-0.3,0-0.5c0.4-0.4,0.7-0.7,1.1-1.1C8.9,14.7,9.4,14.2,9.9,13.8z"
      />
    </svg>
  );
};

export const AddFriendIcon: React.FC<IconProps> = ({
  width = 40,
  height = 40,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css">
        {`
          .st0{display:none;}
          .st1{display:inline;}
          .st2{fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}
          .st3{fill-rule:evenodd;clip-rule:evenodd;fill:#1289BC;}
          .st4{display:inline;fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}
          .st5{display:inline;fill-rule:evenodd;clip-rule:evenodd;fill:currentColor;}
          .st6{fill:currentColor;}
          .st7{fill:#1881B2;}
        `}
      </style>
      <g id="圖層_1_拷貝_2">
        <path
          className="st2"
          d="M23,25.3c-1-1.3-2.4-2-4.6-2.3c-0.4-0.1-0.7-0.4-0.7-0.9c0-0.3,1-1.2,1-1.3c1-1.1,1.6-2.8,1.6-4.1
          c0-2.1-1.7-3.7-3.7-3.7c-2.1,0-3.7,1.7-3.7,3.7c0,1.3,0.5,3.1,1.6,4.1c0,0,1,0.9,1,1.2c0,0.5-0.3,0.8-0.8,0.9
          c-2.2,0.2-3.5,0.9-4.5,2.2c-0.3,0.4-0.5,1.2-0.5,1.6c0,0.1,0,1.8,0,1.8c0,0.8,0.6,1.4,1.4,1.4h11c0.8,0,1.4-0.6,1.4-1.4
          c0,0,0-1.7,0-1.8C23.4,26.5,23.3,25.7,23,25.3z"
        />
        <polygon
          className="st2"
          points="30.3,17.4 27.2,17.4 27.2,14.3 25.5,14.3 25.5,17.4 22.3,17.4 22.3,19.1 25.5,19.1 25.5,22.2 27.2,22.2 27.2,19.1 30.3,19.1"
        />
      </g>
    </svg>
  );
};

export const ChatIcon: React.FC<IconProps> = ({
  width = 40,
  height = 40,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="currentColor"
        d="M24.8,12.7h-9.6c-2.6,0-4.8,2.2-4.8,4.8v3.2c0,2.6,2.2,4.8,4.8,4.8H16v4.8l5.5-4.8h3.3c2.6,0,4.8-2.2,4.8-4.8
        v-3.2C29.6,14.8,27.4,12.7,24.8,12.7z M15.2,20.7c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6
        C16.8,19.9,16.1,20.7,15.2,20.7z M20,20.7c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6C21.6,19.9,20.9,20.7,20,20.7z
        M24.8,20.7c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C26.4,19.9,25.7,20.7,24.8,20.7z"
      />
    </svg>
  );
};

export const FriendIcon: React.FC<IconProps> = ({
  width = 40,
  height = 40,
  className,
  style,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7,25.3c-1-1.3-2.4-2-4.6-2.3c-0.4-0.1-0.7-0.4-0.7-0.9c0-0.3,1-1.2,1-1.3c1-1.1,1.6-2.8,1.6-4.1
        c0-2.1-1.7-3.7-3.7-3.7s-3.7,1.7-3.7,3.7c0,1.3,0.5,3.1,1.6,4.1c0,0,1,0.9,1,1.2c0,0.5-0.3,0.8-0.8,0.9c-2.2,0.2-3.5,0.9-4.5,2.2
        c-0.3,0.4-0.5,1.2-0.5,1.6c0,0.1,0,1.8,0,1.8c0,0.8,0.6,1.4,1.4,1.4h11c0.8,0,1.4-0.6,1.4-1.4c0,0,0-1.7,0-1.8
        C23.2,26.4,23,25.6,22.7,25.3z"
      />
      <rect x="22.9" y="14.4" fill="currentColor" width="7.7" height="1.6" />
      <rect x="22.9" y="17.8" fill="currentColor" width="7.7" height="1.6" />
      <rect x="22.9" y="21.2" fill="currentColor" width="7.7" height="1.6" />
    </svg>
  );
};

// 導出所有圖標
export const Icons = {
  Flag: FlagIcon,
  Pin: PinIcon,
  AddFriend: AddFriendIcon,
  Chat: ChatIcon,
  Friend: FriendIcon,
  // 可以在這裡添加更多圖標
} as const;

// 導出圖標類型
export type IconType = keyof typeof Icons;
