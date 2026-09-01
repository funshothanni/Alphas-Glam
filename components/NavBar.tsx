import Link from "next/link";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 bg-[#f4ede8] px-6 py-4">
            <nav className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* LOGO */}
                <Link
                    href="/"
                    className="font-serif text-xl font-semibold text-[#2f2421] md:text-2xl"
                >
                    Alpha&apos;s Glam
                </Link>

                {/* NAVIGATION */}
                <div className="flex gap-4 text-sm text-[#665b57] sm:gap-7">
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
                        Book Appointment
                    </Link>

                    <Link
                        href="/policy"
                        className="transition hover:text-[#7d4f4a]"
                    >
                        Terms & Conditions
                    </Link>
                </div>

            </nav>
        </header>
    );
}