'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {

  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            className={isActive ? "px-3 py-1 rounded-[4px] bg-amber-200" : "px-3 py-1 rounded-[4px] bg-amber-100 hover:bg-amber-200"}
            href={link.href} key={link.label}
          >{link.label}</Link>
        )

      })}

   </>
  )
}

export { Navigation }