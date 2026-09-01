import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-[#f4ede8]">
            <div className="mx-auto grid min-h-[88vh] max-w-7xl lg:grid-cols-2">

                <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16">
                    <div className="max-w-xl">
                        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#9b6f68]">
                            Luxury Makeup Artistry
                        </p>

                        <h1 className="font-serif text-5xl leading-[0.95] text-[#2f2421] sm:text-6xl md:text-7xl lg:text-8xl">
                            Beauty,
                            <br />
                            beautifully
                            <br />
                            yours.
                        </h1>

                        <p className="mt-8 max-w-md text-base leading-7 text-[#665b57] sm:text-lg">
                            Elevated makeup experiences designed to enhance your natural beauty
                            and make every moment feel unforgettable.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/services"
                                className="bg-[#7d4f4a] px-8 py-4 text-center text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#633e3a]"
                            >
                                Book Your Glam
                            </Link>

                            <Link
                                href="/services"
                                className="border border-[#7d4f4a] px-8 py-4 text-center text-sm uppercase tracking-[0.18em] text-[#7d4f4a] transition hover:bg-[#7d4f4a] hover:text-white"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative min-h-[420px] lg:h-[620px] lg:self-center">
                    <Image
                        src="/screenshots/hero.png"
                        alt="Alpha's Glam makeup artistry"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <p className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.3em] text-white">
                        Alpha&apos;s Glam
                    </p>
                </div>

            </div>
        </section>
    );
}