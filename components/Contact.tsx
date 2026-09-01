export default function Contact() {
    return (
        <section id="contact" className="bg-[#f4ede8]">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-pink-700">
                    Contact Us
                </h2>

                <div className="mt-8 space-y-4 text-gray-700">
                    {/*<p>*/}
                    {/*    Email:{" "}*/}
                    {/*    <a href="mailto:---@---.com" className="text-pink-600 hover:underline">*/}
                    {/*        ---@---.com*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    Phone:{" "}*/}
                    {/*    <a href="tel:+12041234567" className="text-pink-600 hover:underline">*/}
                    {/*        (204) 123-4567*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                    <p>
                        Instagram:{" "}
                        <a href="https://www.instagram.com/alphas.glam" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                            @alphas.glam
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}