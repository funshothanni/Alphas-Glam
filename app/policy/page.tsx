import NavBar from "@/components/NavBar";

const policies = [
    {
        title: "Booking & Deposit Policy",
        body: (
            <>
                <p>A $20 non-refundable deposit is required to secure all appointments.</p>

                <p>
                    Deposits must be sent via Interac e-Transfer to:{" "}
                    <span className="font-semibold text-[#7d4f4a]">
                        adekunledorcas2019@gmail.com
                    </span>
                </p>

                <p>Please include proof of payment after sending your deposit.</p>

                <p>
                    Appointments are not confirmed until the deposit has been received.
                </p>
            </>
        ),
    },
    {
        title: "Payment Methods",
        body: (
            <>
                <p>The remaining balance is due on the day of your appointment.</p>

                <p>Payments are preferred in cash.</p>

                <p>
                    Interac e-Transfer may be accepted on rare occasions if arranged
                    beforehand.
                </p>
            </>
        ),
    },
    {
        title: "Preparation for Your Appointment",
        body: (
            <>
                <p>Please arrive with a clean, makeup-free face.</p>

                <p>
                    Kindly inform Alpha&apos;s Glam prior to your appointment of any
                    allergies, skin sensitivities, medical conditions, or skin concerns.
                </p>

                <p>
                    We strictly follow professional hygiene and sanitation practices to
                    ensure a safe and comfortable experience for every client.
                </p>
            </>
        ),
    },
    {
        title: "Home Service Policy",
        body: (
            <>
                <p>Home service appointments start at $200.</p>

                <p>
                    Travel fees may increase depending on distance and location.
                </p>
            </>
        ),
    },
    {
        title: "Lateness & Last-Minute Bookings",
        body: (
            <>
                <p>
                    Clients arriving more than 15 minutes late without prior
                    communication may be charged a $10 late fee.
                </p>

                <p>
                    Excessive lateness may result in appointment cancellation depending
                    on schedule availability.
                </p>

                <p>
                    Appointments should preferably be booked at least 48 hours in advance.
                </p>

                <p>
                    Bookings made within less than 48 hours may attract an additional
                    $20 last-minute booking fee.
                </p>
            </>
        ),
    },
    {
        title: "Cancellation Policy",
        body: (
            <>
                <p>All deposits are non-refundable.</p>

                <p>
                    If you need to reschedule, please provide as much notice as possible.
                </p>
            </>
        ),
    },
];

export default function PolicyPage() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen bg-[#f4ede8] px-6 py-16 md:py-24">
                <div className="mx-auto max-w-7xl">

                    {/* PAGE INTRO */}
                    <div className="mx-auto mb-20 max-w-3xl text-center">
                        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9b6f68]">
                            Alpha&apos;s Glam
                        </p>

                        <h1 className="font-serif text-5xl font-semibold leading-tight text-[#2f2421] sm:text-6xl md:text-7xl">
                            Terms & Conditions
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#665b57] sm:text-lg">
                            Please review our booking, payment, preparation, and
                            appointment policies before requesting your glam session.
                        </p>
                    </div>

                    {/* POLICY CARDS */}
                    <div className="space-y-14 md:space-y-20">
                        {policies.map((policy, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <article
                                    key={policy.title}
                                    className={`w-full border border-[#cbb7ae] bg-[#f7f1ed] p-7 shadow-[0_12px_40px_rgba(47,36,33,0.04)] sm:p-9 md:max-w-[58%] ${
                                        isLeft
                                            ? "md:mr-auto"
                                            : "md:ml-auto"
                                    }`}
                                >
                                    <div className="mb-6 flex items-start justify-between gap-6">
                                        <h2 className="font-serif text-3xl font-semibold leading-tight text-[#2f2421] sm:text-4xl">
                                            {policy.title}
                                        </h2>

                                        <span className="hidden text-xs uppercase tracking-[0.25em] text-[#9b6f68] sm:block">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <div className="space-y-4 text-base leading-7 text-[#665b57]">
                                        {policy.body}
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* CLOSING NOTE */}
                    <div className="mx-auto mt-24 max-w-3xl border-t border-[#cbb7ae] pt-12 text-center">
                        <p className="font-serif text-3xl italic leading-relaxed text-[#2f2421] sm:text-4xl">
                            Thank you for choosing Alpha&apos;s Glam.
                        </p>

                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#665b57]">
                            We look forward to making you feel confident, beautiful,
                            and glamorous.
                        </p>
                    </div>

                </div>
            </main>
        </>
    );
}