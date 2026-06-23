import NavBar from "@/components/NavBar";

export default function PolicyPage() {
    return (
        <>
            <NavBar />

            <section className="min-h-screen bg-white px-6 py-20">
                <div className="mx-auto max-w-4xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
                        Alpha’s Glam
                    </p>

                    <h1 className="mt-4 text-5xl font-bold text-pink-700">
                        Terms & Conditions
                    </h1>

                    <div className="mt-16 space-y-14">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Booking & Deposit Policy
                            </h2>

                           <div className="mt-4 space-y-4 text-gray-600">
                                <p>A $20 non-refundable deposit is required to secure all appointments.</p>
                                <p>
                                    Deposits must be sent via Interac e-Transfer to:{" "}
                                    <span className="font-medium text-pink-700">
                    adekunledorcas2019@gmail.com
                  </span>
                                </p>
                                <p>Please include proof of payment after sending your deposit.</p>
                                <p>Appointments are not confirmed until the deposit has been received.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Payment Methods
                            </h2>

                            <div className="mt-4 space-y-4 text-gray-600">
                                <p>The remaining balance is due on the day of your appointment.</p>
                                <p>Payments are preferred in cash.</p>
                                <p>
                                    Interac e-Transfer may be accepted on rare occasions if arranged
                                    beforehand.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Preparation for Your Appointment
                            </h2>

                            <div className="mt-4 space-y-4 text-gray-600">
                                <p>Please arrive with a clean, makeup-free face.</p>
                                <p>
                                    Kindly inform Alpha’s Glam prior to your appointment of any
                                    allergies, skin sensitivities, medical conditions, or skin concerns.
                                </p>
                                <p>
                                    We strictly follow professional hygiene and sanitation practices to
                                    ensure a safe and comfortable experience for every client.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Home Service Policy
                            </h2>

                            <div className="mt-4 space-y-4 text-gray-600">
                                <p>Home service appointments start at an additional $30 travel fee.</p>
                                <p>Travel fees may increase depending on distance and location.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Lateness & Last-Minute Bookings
                            </h2>

                            <div className="mt-4 space-y-4 text-gray-600">
                                <p>
                                    Clients arriving more than 15 minutes late without prior
                                    communication may be charged a $10 late fee.
                                </p>
                                <p>
                                    Excessive lateness may result in appointment cancellation depending
                                    on schedule availability.
                                </p>
                                <p>Appointments should preferably be booked at least 48 hours in advance.</p>
                                <p>
                                    Bookings made within less than 48 hours may attract an additional
                                    $20 last-minute booking fee.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Cancellation Policy
                            </h2>

                            <div className="mt-4 space-y-4 text-gray-600">
                                <p>All deposits are non-refundable.</p>
                                <p>If you need to reschedule, please provide as much notice as possible.</p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-pink-50 p-8 text-center">
                            <p className="text-lg text-gray-700">
                                Thank you for choosing Alpha’s Glam. We look forward to making you
                                feel confident, beautiful, and glamorous ✨
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}