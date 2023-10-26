import { SvgProps } from "@/interfaces/SvgProps";

export default function Avatar({ height, width }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      viewBox="0 -960 960 960"
      width={height}
    >
      <path d="M240.924-268.307q51-37.846 111.115-59.769Q412.154-349.999 480-349.999t127.961 21.923q60.115 21.923 111.115 59.769 37.308-41 59.116-94.923Q800-417.154 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 62.846 21.808 116.77 21.808 53.923 59.116 94.923ZM480-450.001q-54.769 0-92.384-37.615T350.001-580q0-54.769 37.615-92.384T480-709.999q54.769 0 92.384 37.615T609.999-580q0 54.769-37.615 92.384T480-450.001Zm0 350q-79.154 0-148.499-29.77-69.346-29.769-120.654-81.076-51.307-51.308-81.076-120.654-29.77-69.345-29.77-148.499t29.77-148.499q29.769-69.346 81.076-120.654 51.308-51.307 120.654-81.076 69.345-29.77 148.499-29.77t148.499 29.77q69.346 29.769 120.654 81.076 51.307 51.308 81.076 120.654 29.77 69.345 29.77 148.499t-29.77 148.499q-29.769 69.346-81.076 120.654-51.308 51.307-120.654 81.076-69.345 29.77-148.499 29.77Z" />
    </svg>
  );
}