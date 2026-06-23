import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex min-h-[80vh] items-center justify-center bg-pink-50 px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-500">
                    Luxury Beauty Experience
                </p>

                <h1 className="text-4xl font-bold leading-tight text-pink-700 sm:text-5xl md:text-6xl">
                   Alpha&#39;s Glam
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    Thank you for choosing Alpha’s Glam. Please review our terms & conditions
                    before booking an appointment.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        href="/services"
                        className="w-full rounded-full bg-pink-600 px-8 py-4 text-center text-white transition hover:bg-pink-700 sm:w-auto"
                    >
                        Services
                    </Link>

                    <Link
                        href="/policy"
                        className="w-full rounded-full border border-pink-300 px-8 py-4 text-center text-pink-700 transition hover:bg-pink-100 sm:w-auto"
                    >
                        Terms & Conditions
                    </Link>

                    <Link
                        href="#contact"
                        className="w-full rounded-full border border-pink-300 px-8 py-4 text-center text-pink-700 transition hover:bg-pink-100 sm:w-auto"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}