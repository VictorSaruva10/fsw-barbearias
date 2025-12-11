import Image from "next/image";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-5 py-6">
            <Image src="/logo.svg" alt="logo" width={100} height={26.09} />
        </header>
    )
}

export default Header;