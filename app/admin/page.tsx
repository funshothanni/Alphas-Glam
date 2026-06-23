"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Booking = {
    id: number;
    service: string;
    date: string;
    time: string;
    status: string;
    customers: {
        name: string;
        email: string;
    };
};

const ADMIN_PASSWORD = "adekunlegold";

export default function AdminPage() {
    const [authenticated, setAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [loginError, setLoginError] = useState("");
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const session = localStorage.getItem("admin_session");
        if (session === "true") {
            setAuthenticated(true);
            fetchBookings();
        }
    }, []);

    async function fetchBookings() {
        setLoading(true);
        const { data, error } = await supabase
            .from("bookings")
            .select("*, customers(name, email)")
            .order("created_at", { ascending: false });

        if (!error && data) setBookings(data);
        setLoading(false);
    }

    function handleLogin() {
        if (passwordInput === ADMIN_PASSWORD) {
            localStorage.setItem("admin_session", "true");
            setAuthenticated(true);
            setLoginError("");
            fetchBookings();
        } else {
            setLoginError("Incorrect password. Please try again.");
        }
    }

    function handleLogout() {
        localStorage.removeItem("admin_session");
        setAuthenticated(false);
        setPasswordInput("");
        setBookings([]);
    }

    async function updateStatus(booking: Booking, status: string) {
        const { error } = await supabase
            .from("bookings")
            .update({ status })
            .eq("id", booking.id);

        if (error) return;

        setBookings((prev) =>
            prev.map((b) => (b.id === booking.id ? { ...b, status } : b))
        );

        // Send confirmation email to client when confirmed
        if (status === "Confirmed") {
            await fetch("/api/confirm-booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customerName: booking.customers.name,
                    customerEmail: booking.customers.email,
                    service: booking.service,
                    date: booking.date,
                    time: booking.time,
                }),
            });
        }
    }

    async function deleteBooking(id: number) {
        const { error } = await supabase.from("bookings").delete().eq("id", id);
        if (!error) setBookings((prev) => prev.filter((b) => b.id !== id));
    }

    const pending = bookings.filter((b) => b.status === "Pending").length;

    if (!authenticated) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
                <div className="mx-auto w-full max-w-md">
                    <p className="text-sm uppercase tracking-[0.2em] text-pink-500">Admin Access</p>
                    <h1 className="mt-2 text-4xl font-bold text-pink-700">Alpha's Glam</h1>
                    <p className="mt-4 text-gray-500">Enter your password to access the dashboard.</p>

                    {loginError && (
                        <p className="mt-4 rounded-lg bg-red-100 p-4 text-red-600">{loginError}</p>
                    )}

                    <div className="mt-8 space-y-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={(e) => { setPasswordInput(e.target.value); setLoginError(""); }}
                            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                            className="block w-full rounded-xl border border-pink-200 bg-white p-4 text-gray-800 placeholder:text-gray-400 focus:border-pink-500 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="block w-full cursor-pointer rounded-xl bg-pink-600 px-6 py-4 text-lg font-medium text-white transition hover:bg-pink-700"
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-pink-50 px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-pink-500">Admin Dashboard</p>
                        <h1 className="mt-2 text-5xl font-bold text-pink-700">Bookings</h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="rounded-full bg-pink-600 px-6 py-3 text-white">{bookings.length} Total</div>
                        {pending > 0 && (
                            <div className="rounded-full bg-yellow-400 px-6 py-3 text-white">{pending} Pending</div>
                        )}
                        <button onClick={handleLogout} className="rounded-full border border-pink-200 px-6 py-3 text-sm text-pink-600 transition hover:bg-pink-100">
                            Log Out
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="mt-20 text-center text-gray-400">
                        <p className="text-xl">Loading bookings...</p>
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="mt-20 text-center text-gray-400">
                        <p className="text-2xl">No bookings yet.</p>
                        <p className="mt-2 text-sm">Submitted bookings from clients will appear here.</p>
                    </div>
                ) : (
                    <div className="mt-10 grid gap-6">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
                                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">{booking.customers.name}</h2>
                                        <p className="mt-1 text-sm text-gray-400">{booking.customers.email}</p>
                                        <p className="mt-2 text-lg text-pink-600">{booking.service}</p>
                                        <p className="mt-4 text-gray-500">{booking.date} • {booking.time}</p>
                                    </div>

                                    <div className="flex flex-col items-start gap-3 md:items-end">
                                        <span className={`rounded-full px-5 py-2 text-sm font-medium ${
                                            booking.status === "Confirmed"
                                                ? "bg-green-100 text-green-700"
                                                : booking.status === "Cancelled"
                                                    ? "bg-red-100 text-red-500"
                                                    : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                            {booking.status}
                                        </span>

                                        <div className="flex gap-2">
                                            {booking.status !== "Confirmed" && (
                                                <button
                                                    onClick={() => updateStatus(booking, "Confirmed")}
                                                    className="rounded-full bg-green-500 px-4 py-2 text-sm text-white transition hover:bg-green-600"
                                                >
                                                    Confirm
                                                </button>
                                            )}
                                            {booking.status !== "Cancelled" && (
                                                <button
                                                    onClick={() => updateStatus(booking, "Cancelled")}
                                                    className="rounded-full bg-red-400 px-4 py-2 text-sm text-white transition hover:bg-red-500"
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteBooking(booking.id)}
                                                className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-400 transition hover:border-red-300 hover:text-red-400"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
