interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const MplusMeetIcon: React.FC<IconProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="3.1497"
          y1="17.8679"
          x2="22.4624"
          y2="4.4147"
          gradientTransform="matrix(1 0 0 -1 0 23.8898)"
        >
          <stop offset="0.2061" style={{ stopColor: "currentColor" }} />
          <stop offset="0.6343" style={{ stopColor: "currentColor" }} />
        </linearGradient>
      </defs>
      <path
        fill="currentColor"
        d="M23.7,6.7l-3,1.7V7.1c0-2.1-1.7-3.9-3.9-3.9H0.2v11.2c0,3.5,2.9,6.4,6.4,6.4h14.2V18l2.1,0.9
        c0.5,0.2,1-0.1,1-0.7L23.7,6.7L23.7,6.7z"
      />
      <g>
        <path
          fill="#FFFFFF"
          d="M6.8,10.4c0.8,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3C5.4,9.8,6,10.4,6.8,10.4z"
        />
        <path
          fill="#FFFFFF"
          d="M17.2,12.4V11h-1.1v1.3h-1.2c-0.1-0.7-0.3-1.2-0.7-1.6c-0.6-0.7-1.3-1-2.3-1c-2,0-2.3,1.9-2.3,2.2
          c-0.3-0.9-1.4-1.2-2.2-1.1c-0.9,0.1-1.6,0.4-2.2,1c-0.6,0.6-0.6,1.4-0.5,2.2L5.1,16h2.1l-0.1-1.4c0-0.6,0.4-0.9,0.7-0.9
          c0.2,0,0.4,0.1,0.5,0.3c0.1,0.1,0.1,0.3,0.1,0.6L8.2,16h3.1L11,13.6c0-0.6,0.2-0.8,0.5-0.9c0.3,0,0.5,0.2,0.6,0.3s0.1,0.3,0.1,0.9
          L12.1,16h2.5l0.3-2.5h1.2v1.3h1.1v-1.3h1.3v-1.1C18.6,12.4,17.2,12.4,17.2,12.4z"
        />
        <path
          fill="#FFFFFF"
          d="M13,9.2c0.9,0,1.4-0.7,1.4-1.4C14.5,7,13.8,6.3,13,6.3c-0.9,0-1.4,0.7-1.4,1.4C11.5,8.6,12.2,9.2,13,9.2z"
        />
      </g>
    </svg>
  );
};

// 導出所有圖標
export const Icons = {
  MplusMeet: MplusMeetIcon,
  // 可以在這裡添加更多圖標
} as const;

// 導出圖標類型
export type IconType = keyof typeof Icons;
