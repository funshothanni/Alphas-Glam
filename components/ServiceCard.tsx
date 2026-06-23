type ServiceCardProps = {
    name: string;
    price: string;
    description: string;
    time: string;
};

export default function ServiceCard({
                                        name,
                                        price,
                                        description,
                                        time,
                                    }: ServiceCardProps) {
    return (
        <div className="rounded-3xl border border-pink-200 bg-pink-50 p-8 shadow-sm transition hover:shadow-lg">
            <h3 className="text-3xl font-bold text-pink-700">
                {name}
            </h3>

            <h3 className="text-3xl font-bold text-pink-700">
                {time}
            </h3>


            <p className="mt-4 text-2xl font-semibold text-gray-700">
                {price}
            </p>

            <p className="mt-4 text-gray-500">
                {description}
            </p>
        </div>
    );
}