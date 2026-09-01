import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import NavBar from "@/components/NavBar";

export default function BookAppointmentPage() {
    return (
        <>
            <NavBar />

            <main className="min-h-screen bg-[#f4ede8] px-6 py-12 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">

                    {/* LEFT SIDE */}
                    <div className="w-full">
                        <div className="mb-10">
                            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9b6f68]">
                                Alpha&apos;s Glam
                            </p>

                            <h1 className="font-serif text-5xl font-semibold leading-none text-[#2f2421] sm:text-6xl">
                                Book an
                                <br />
                                Appointment
                            </h1>

                            <p className="mt-6 max-w-xl leading-7 text-[#665b57]">
                                Tell us a little about your desired look, preferred date,
                                and service. We&apos;ll follow up to confirm availability.
                            </p>
                        </div>

                        <BookingForm />
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="relative hidden w-full md:block">
                        <Image
                            src="/screenshots/booking-glam.png"
                            alt="Alpha's Glam makeup appointment"
                            width={650}
                            height={820}
                            priority
                            className="h-[640px] w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/10" />

                        <div className="absolute bottom-8 left-8 max-w-sm text-white">
                            <p className="text-xs uppercase tracking-[0.3em]">
                                Your Glam Experience
                            </p>

                            <p className="mt-3 font-serif text-3xl font-medium leading-tight">
                                Created for your moment.
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}