import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link
                className="px-3 py-1 rounded-[4px] bg-amber-100 hover:bg-amber-200"
                href="/"
            >Главная</Link>
            <Link
                className="px-3 py-1 rounded-[4px] bg-amber-100 hover:bg-amber-200"
                href="/about"
            >О нас</Link>

            <Link
                className="px-3 py-1 rounded-[4px] bg-amber-100 hover:bg-amber-200"
                href="/blog"
            >Блог</Link>
        </header>
    )
}
export default Header