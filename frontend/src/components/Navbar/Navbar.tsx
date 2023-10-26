import Link from "next/link";
import NavLink, { NavLinkProps } from "./NavLink";

export default function () {
  const navItems: NavLinkProps[] = [
    { text: "Home", to: "/" },
    { text: "New", to: "/new" },
    {
      text: "Log In",
      to: "/login",
      classes: "bg-primary !text-white py-2 px-4 rounded-lg font-semibold",
    },
    { text: "Sign In", to: "/signin", classes: "text-primary font-semibold" },
  ];

  return (
    <nav className="w-full h-24 border-b-2 border-b-textColor/20">
      <div className="w-4/5 h-full mx-auto flex flex-row">
        <ul className="w-1/3 flex flex-row items-center justify-start">
          <li className="text-4xl font-semibold text-primary">
            <Link href={"/"}>BlogApp</Link>
          </li>
        </ul>
        <ul className="w-2/3 flex flex-row items-center justify-end gap-10 mx-10">
          {navItems.map((navItem) => (
            <NavLink {...navItem} key={navItem.text} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
