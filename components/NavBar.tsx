import Link from "next/link";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 px-6 py-4 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/" className="text-lg font-bold text-pink-700 md:text-xl">
                    Alpha&apos;s Glam
                </Link>

                <div className="flex gap-4 text-sm text-gray-700 sm:gap-6">
                    <Link href="/services">Services</Link>
                    <Link href="/#contact">Contact Us</Link>
                    <Link href="/policy">Terms & Conditions</Link>
                </div>
            </nav>
        </header>
    );
}