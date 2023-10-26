import Link from "next/link";

export interface NavLinkProps {
  text: string;
  to: string;
  classes?: string;
}

export default function NavLink({ text, to, classes }: NavLinkProps) {
  return (
    <li
      className={`flex flex-row items-center justify-end gap-14 text-2xl ${classes}`}
    >
      <Link href={to}>{text}</Link>
    </li>
  );
}
