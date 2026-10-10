"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [service, setService] = useState("");
    const [notes, setNotes] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const submittedName = formData.get("name") as string;
        const submittedEmail = formData.get("email") as string;
        const submittedDate = formData.get("date") as string;
        const submittedTime = formData.get("time") as string;
        const submittedService = formData.get("service") as string;
        const submittedNotes = formData.get("notes") as string;

        if (
            !submittedName ||
            !submittedEmail ||
            !submittedService ||
            !submittedDate ||
            !submittedTime
        ) {
            setError("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        setError("");

        // Check if customer already exists
        let customerId: number;

        const { data: existingCustomer } = await supabase
            .from("customers")
            .select("id")
            .eq("email", submittedEmail)
            .maybeSingle();

        if (existingCustomer) {
            customerId = existingCustomer.id;
        } else {
            const { data: newCustomer, error: customerError } = await supabase
                .from("customers")
                .insert({
                    name: submittedName,
                    email: submittedEmail,
                })
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
            .insert({
                customer_id: customerId,
                service: submittedService,
                date: submittedDate,
                time: submittedTime,
                notes: submittedNotes || null,
            });

        if (bookingError) {
            console.error("Booking error:", bookingError);

            setError("Something went wrong. Please try again.");
            setLoading(false);
            return;
        }

        // Notify admin by email
        await fetch("/api/notify-admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                customerName: submittedName,
                customerEmail: submittedEmail,
                service: submittedService,
                date: submittedDate,
                time: submittedTime,
                notes: submittedNotes,
            }),
        });

        setLoading(false);
        setSubmitted(true);

        // Reset form
        setName("");
        setEmail("");
        setService("");
        setDate("");
        setTime("");
        setNotes("");

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
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* NAME */}
                        <div>
                            <label className="mb-2 block text-sm text-[#665b57]">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
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
                                name="email"
                                required
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
                                    name="date"
                                    required
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

                                <select
                                    name="time"
                                    required
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                        setError("");
                                    }}
                                    className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition focus:border-[#7d4f4a]"
                                >
                                    <option value="">Select a time</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="09:30">9:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="12:30">12:30 PM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="13:30">1:30 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="14:30">2:30 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                    <option value="15:30">3:30 PM</option>
                                    <option value="16:00">4:00 PM</option>
                                    <option value="16:30">4:30 PM</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="17:30">5:30 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                </select>
                            </div>
                        </div>


                        {/* SERVICE */}
                        <div>
                            <label className="mb-2 block text-sm text-[#665b57]">
                                Service
                            </label>

                            <select
                                name="service"
                                required
                                value={service}
                                onChange={(e) => {
                                    setService(e.target.value);
                                    setError("");
                                }}
                                className="block w-full border border-[#cbb7ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition focus:border-[#7d4f4a]"
                            >
                                <option value="">
                                    Select a service
                                </option>

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

                        {/* NOTES */}
                        <div>
                            <label
                                htmlFor="notes"
                                className="mb-2 block text-sm text-[#665b57]"
                            >
                                Additional Notes{" "}
                                <span className="text-[#9b918d]">
                                    (Optional)
                                </span>
                            </label>

                            <textarea
                                id="notes"
                                name="notes"
                                rows={4}
                                value={notes}
                                onChange={(e) => {
                                    setNotes(e.target.value);
                                    setError("");
                                }}
                                placeholder="Tell us anything else you'd like us to know about your desired look or appointment..."
                                className="w-full resize-none border border-[#cdb8ae] bg-transparent px-4 py-4 text-[#2f2421] outline-none transition placeholder:text-[#9b918d] focus:border-[#8f554d]"
                            />
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex cursor-pointer items-center justify-center bg-[#7d4f4a] px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#633e3a] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Request"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}