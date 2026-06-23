"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        if (!name || !email || !service || !date || !time) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setError("");

        const { data: existingCustomer, error: lookupError } = await supabase
            .from("customers")
            .select("id")
            .eq("email", email)
            .maybeSingle();

        console.log("Lookup result:", existingCustomer, lookupError);

        let customerId: number;

        if (existingCustomer) {
            customerId = existingCustomer.id;
        } else {
            const { data: newCustomer, error: customerError } = await supabase
                .from("customers")
                .insert({ name, email })
                .select("id")
                .single();

            console.log("New customer:", newCustomer, customerError);

            if (customerError || !newCustomer) {
                setError("Something went wrong. Please try again.");
                setLoading(false);
                return;
            }

            customerId = newCustomer.id;
        }

        const { error: bookingError } = await supabase
            .from("bookings")
            .insert({ customer_id: customerId, service, date, time });

        console.log("Booking error:", bookingError);

        if (bookingError) {
            setError("Something went wrong. Please try again.");
            setLoading(false);
            return;
        }

        setLoading(false);
        setSubmitted(true);
        setName("");
        setEmail("");
        setService("");
        setDate("");
        setTime("");

        setTimeout(() => setSubmitted(false), 3000);
    }

    return (
        <section id="booking" className="bg-pink-50 px-6 py-20">
            <div className="mx-auto max-w-xl">
                <h2 className="text-4xl font-bold text-pink-700">
                    Request Appointment
                </h2>

                <p className="mt-4 text-gray-600">
                    Fill out the form below and we'll contact you shortly.
                </p>

                {error && (
                    <p className="mt-4 rounded-lg bg-red-100 p-4 text-red-600">
                        {error}
                    </p>
                )}

                {submitted && (
                    <div className="mt-6 rounded-lg bg-green-100 p-4 text-green-700">
                        Booking submitted successfully ✨
                    </div>
                )}

                {!submitted && (
                    <div className="mt-8 space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setError(""); }}
                            className="block w-full rounded-xl border border-pink-200 bg-white p-4 text-gray-800 placeholder:text-gray-400 focus:border-pink-500 focus:outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(""); }}
                            className="block w-full rounded-xl border border-pink-200 bg-white p-4 text-gray-800 placeholder:text-gray-400 focus:border-pink-500 focus:outline-none"
                        />

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => { setDate(e.target.value); setError(""); }}
                                className="block w-full appearance-none rounded-xl border border-pink-200 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Time
                            </label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => { setTime(e.target.value); setError(""); }}
                                className="block w-full appearance-none rounded-xl border border-pink-200 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none"
                            />
                        </div>

                        <select
                            value={service}
                            onChange={(e) => { setService(e.target.value); setError(""); }}
                            className="block w-full rounded-xl border border-pink-200 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none"
                        >
                            <option value="">Select Service</option>
                            <option value="Soft Glam Makeup">Soft Glam</option>
                            <option value="Full Glam Makeup">Full Glam</option>
                        </select>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="block w-full cursor-pointer rounded-xl bg-pink-600 px-6 py-4 text-lg font-medium text-white transition hover:bg-pink-700 disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Booking"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
