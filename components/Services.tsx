import Image from "next/image";

const services = [
    {
        name: "Soft Glam",
        price: "$100",
        time: "Approx. 1 Hour 30 Minutes",
        description: [
            "Light to medium coverage",
            "One matte eyeshadow shade",
            "Soft glam finishing",
            "Light lashes",
        ],
    },
    {
        name: "Full Glam",
        price: "$120",
        time: "Approx. 2 Hours",
        description: [
            "Full face application",
            "Full eyeshadow blending",
            "Glitters and shimmers",
            "Medium to volume lashes",
        ],
    },
];

const bridalServices = [
    {
        title: "Bridal Glam Trial",
        price: "$150",
        detail: "Approx. 2 Hours",
    },
    {
        title: "Bridal Glam — In Studio",
        price: "$400",
        detail: "Wedding-day bridal glam in studio",
    },
    {
        title: "Bridal Glam — Home Service",
        price: "$450",
        detail: "Includes touch-up kit. Trial not included.",
    },
    {
        title: "Bridal Glam — Home Service + Trial",
        price: "$500",
        detail: "Includes bridal trial and touch-up kit.",
    },
];

const galleryImages = [
    "/screenshots/full-glam.png",
    "/screenshots/soft-glam.png",
    "/screenshots/hero.png",
];

export default function Services() {
    return (
        <section
            id="services"
            className="min-h-screen bg-[#f4ede8] px-6 py-16 md:py-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9b6f68]">
                        Alpha&apos;s Glam
                    </p>

                    <h1 className="font-serif text-5xl font-semibold leading-none text-[#2f2421] sm:text-6xl">
                        Services & Prices
                    </h1>

                    <p className="mt-6 max-w-xl leading-7 text-[#665b57]">
                        Explore our makeup services and find the experience that
                        best fits your occasion and desired look.
                    </p>
                </div>

                {/* SERVICES + GALLERY */}
                <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        {services.map((service) => (
                            <article
                                key={service.name}
                                className="border border-[#cbb7ae] p-7 sm:p-8"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <h2 className="font-serif text-3xl text-[#2f2421]">
                                            {service.name}
                                        </h2>

                                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#9b6f68]">
                                            {service.time}
                                        </p>
                                    </div>

                                    <span className="font-serif text-2xl text-[#7d4f4a]">
                                        {service.price}
                                    </span>
                                </div>

                                <ul className="mt-6 space-y-2 text-[#665b57]">
                                    {service.description.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-3 leading-7"
                                        >
                                            <span className="text-[#9b6f68]">—</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}

                        {/* BRIDAL */}
                        <div className="pt-10">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#9b6f68]">
                                Bridal Services
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#2f2421]">
                                Bridal Glam
                            </h2>

                            <div className="mt-6 space-y-4">
                                {bridalServices.map((service) => (
                                    <article
                                        key={service.title}
                                        className="border border-[#cbb7ae] p-6"
                                    >
                                        <div className="flex items-start justify-between gap-5">
                                            <div>
                                                <h3 className="font-serif text-xl text-[#2f2421]">
                                                    {service.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-6 text-[#665b57]">
                                                    {service.detail}
                                                </p>
                                            </div>

                                            <span className="font-serif text-xl text-[#7d4f4a]">
                                                {service.price}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE GALLERY */}
                    <div className="grid h-fit grid-cols-2 gap-4 lg:sticky lg:top-28">
                        <div className="relative h-[290px] overflow-hidden">
                            <Image
                                src={galleryImages[0]}
                                alt="Alpha's Glam makeup gallery"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative h-[360px] overflow-hidden">
                            <Image
                                src={galleryImages[1]}
                                alt="Alpha's Glam makeup gallery"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="relative col-span-2 h-[360px] overflow-hidden">
                            <Image
                                src={galleryImages[2]}
                                alt="Alpha's Glam makeup gallery"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}