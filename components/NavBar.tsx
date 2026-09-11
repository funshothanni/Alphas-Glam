import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 bg-[#f4ede8] px-6 py-4">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* LOGO */}
                <Link
                    href="/"
                    className={`${playfair.className} text-2xl font-semibold text-[#2f2421]`}
                >
                    Alpha&apos;s Glam
                </Link>

                <div
                    className={`${playfair.className} flex items-center gap-4 text-base font-medium text-[#665b57] sm:gap-7`}
                >
                    <Link
                        href="/services"
                        className="transition hover:text-[#7d4f4a]"
                    >
                        Services
                    </Link>

                    <Link
                        href="/book-appointment"
                        className="transition hover:text-[#7d4f4a]"
                    >
                        Booking
                    </Link>

                    <Link
                        href="/policy"
                        className="transition hover:text-[#7d4f4a]"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        href="/#contact"
                        className="bg-[#8f554d] px-3 py-1.5 text-[#f4ede8] transition hover:bg-[#7d4f4a]"
                    >
                        Contact Us
                    </Link>
                </div>

            </nav>
        </header>
    );
}