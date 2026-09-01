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
                    <div
                        className="max-w-2xl"
                        style={{ color: "#f4ede8" }}
                    >
                        {/* Small heading */}
                        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] sm:text-sm">
                            Get in Touch
                        </p>

                        {/* Main heading */}
                        <h2 className="font-serif text-5xl font-bold italic leading-[1.15] drop-shadow-lg sm:text-6xl md:text-7xl">
                            Contact Us
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-10 max-w-xl text-base font-medium leading-8 drop-shadow-md sm:text-lg sm:leading-9 md:text-xl md:leading-10">
                            Have a question about services, availability, or your
                            appointment?
                            <br className="hidden sm:block" />
                            <span className="inline-block mt-2">
                Reach out and we&apos;ll be happy to help.
            </span>
                        </p>

                        {/* Decorative line */}
                        <div
                            className="mx-auto my-10 h-px w-20"
                            style={{ backgroundColor: "#f4ede8" }}
                        />

                        {/* Instagram */}
                        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] sm:text-sm">
                Instagram
            </span>

                            <a
                                href="https://www.instagram.com/alphas.glam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-serif text-xl font-semibold italic underline-offset-4 transition duration-300 hover:underline sm:text-2xl"
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