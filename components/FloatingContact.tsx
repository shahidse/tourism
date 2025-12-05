"use client";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

            {/* WhatsApp */}
            <a
                href={`https://wa.me/000000000000${process.env.WHATSAPP}`} // change to your number
                target="_blank"
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
            </a>

            {/* Message */}
            <a
                href="/contact"
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
                <img src="/icons/message.svg" alt="Message" className="w-7 h-7" />
            </a>

        </div>
    );
}
