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

        // Check if customer already exists
        let customerId: number;
        const { data: existingCustomer } = await supabase
            .from("customers")
            .select("id")
            .eq("email", email)
            .maybeSingle();

        if (existingCustomer) {
            customerId = existingCustomer.id;
        } else {
            const { data: newCustomer, error: customerError } = await supabase
                .from("customers")
                .insert({ name, email })
                .select("id")
                .single();

            if (customerError || !newCustomer) {
                setError("Something went wrong. Please try again.");
                setLoading(false);
                return;
            }

            customerId = newCustomer.id;
        }

        // Create booking
        const { error: bookingError } = await supabase
            .from("bookings")
            .insert({ customer_id: customerId, service, date, time });

        if (bookingError) {
            setError("Something went wrong. Please try again.");
            setLoading(false);
            return;
        }

        // Notify admin by email
        await fetch("/api/notify-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerName: name, customerEmail: email, service, date, time }),
        });

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
        <section id="booking">
            <div className="max-w-2xl">
                {error && (
                    <div className="mb-6 border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {submitted && (
                    <div className="mb-6 border border-[#b8c6b2] bg-[#eef3eb] px-5 py-4 text-sm text-[#4f6548]">
                        Booking request submitted successfully ✨
                    </div>
                )}

                {!submitted && (
                    <div className="space-y-6">

                        {/* NAME */}
                        <div>
                            <label className="mb-2 block text-sm text-[#665b57]">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setError("");
                                }}
                                className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] placeholder:text-[#9a8f8a] outline-none transition focus:border-[#7d4f4a]"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="mb-2 block text-sm text-[#665b57]">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] placeholder:text-[#9a8f8a] outline-none transition focus:border-[#7d4f4a]"
                            />
                        </div>

                        {/* DATE + TIME */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm text-[#665b57]">
                                    Preferred Date
                                </label>

                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                        setError("");
                                    }}
                                    className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition focus:border-[#7d4f4a]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-[#665b57]">
                                    Preferred Time
                                </label>

                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                        setError("");
                                    }}
                                    className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition focus:border-[#7d4f4a]"
                                />
                            </div>
                        </div>

                        {/* SERVICE */}
                        <div>
                            <label className="mb-2 block text-sm text-[#665b57]">
                                Service
                            </label>

                            <select
                                value={service}
                                onChange={(e) => {
                                    setService(e.target.value);
                                    setError("");
                                }}
                                className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition focus:border-[#7d4f4a]"
                            >
                                <option value="">Select a service</option>
                                <option value="Soft Glam Makeup">
                                    Soft Glam — $100
                                </option>
                                <option value="Full Glam Makeup">
                                    Full Glam — $120
                                </option>
                                <option value="Bridal Glam Trial">
                                    Bridal Glam Trial — $150
                                </option>
                                <option value="Bridal Glam In Studio">
                                    Bridal Glam + In Studio — $400
                                </option>
                                <option value="Bridal Glam Home Service">
                                    Bridal Glam + Home Service — $450
                                </option>
                                <option value="Bridal Glam Home Service + Trial">
                                    Bridal Glam + Home Service + Trial — $500
                                </option>
                            </select>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="inline-flex cursor-pointer items-center justify-center bg-[#7d4f4a] px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#633e3a] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Request"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
