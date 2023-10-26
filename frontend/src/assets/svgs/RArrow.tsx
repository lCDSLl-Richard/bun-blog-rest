import { SvgProps } from "@/interfaces/SvgProps";

export default function RArrow({ width, height }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="m517.847-480-184-184L376-706.153 602.153-480 376-253.847 333.847-296l184-184Z" />
    </svg>
  );
}