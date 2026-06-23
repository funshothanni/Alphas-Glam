import ServiceCard from "@/components/ServiceCard";

const services = [
    {
        name: "Soft Glam",
        price: "$80",
        description: "A soft, elegant makeup look featuring:\n" +
            "\n" +
            "light to medium coverage,\n" +
            "one matte eyeshadow shade,\n" +
            "soft glam finishing,\n" +
            "and light lashes.\n",
        time: "Approx. 1 Hour 30 Minutes",
    },
    {
        name: "Full Glam",
        price: "$100",
        description: "A more dramatic and detailed makeup look including:\n" +
            "\n" +
            "full face application,\n" +
            "full eyeshadow blending,\n" +
            "glitters and shimmers,\n" +
            "and medium to volume lashes.\n",
        time: "Approx. 2 Hours",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-pink-700">
                    Our Services
                </h2>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.name}
                            name={service.name}
                            time={service.time}
                            price={service.price}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}