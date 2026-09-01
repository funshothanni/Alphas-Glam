import Image from "next/image";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#f4ede8] py-16 md:py-20"
        >
            <div className="relative w-full overflow-hidden">

                <Image
                    src="/screenshots/contact-glam.png"
                    alt="Alpha's Glam makeup and beauty products"
                    width={1920}
                    height={800}
                    sizes="100vw"
                    className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px] lg:h-[560px]"
                />

                {/* Dark overlay for text visibility */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Contact content */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="w-full max-w-2xl" style={{ color: "#f4ede8" }}>

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] sm:text-xs">
                            Get in Touch
                        </p>

                        <h2 className="font-serif text-5xl font-bold leading-none sm:text-6xl md:text-7xl">
                            Contact Us
                        </h2>

                        <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-6 sm:text-base sm:leading-7 md:text-lg">
                            Have a question about services, availability, or your
                            <br className="hidden sm:block" />
                            appointment?
                        </p>

                        <p className="mt-2 text-sm font-medium sm:text-base md:text-lg">
                            Reach out and we&apos;ll be happy to help.
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                Instagram
            </span>

                            <a
                                href="https://www.instagram.com/alphas.glam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-serif text-base font-semibold italic hover:underline sm:text-lg"
                                style={{ color: "#f4ede8" }}
                            >
                                @alphas.glam
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}