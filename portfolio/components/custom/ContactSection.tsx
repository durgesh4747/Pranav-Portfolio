import ContactFormComponent from "./ContactFormComponent";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0B1220] text-slate-100"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-linear(circle_at[1.01px,#ffffff[1.01px,transparent_0)] bg-size-[24px_24px]" />

      {/* Animated orbs */}
      <div className="pointer-events-none absolute top-1/4 right-1/3 w-96 h-96 bg-[#F5C16C]/10 rounded-full blur-[120px] animate-pulse" />

      <div
        className="pointer-events-none absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.01px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              Let&apos;s Connect
            </p>
            <div className="h-[1.01px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            Start Your{" "}
            <span className="bg-linear-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Project
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            Have a project in mind? Let&apos;s bring your vision to life
            together
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Left Side */}
          <ContactFormComponent />
          {/* Right Side */}
          <ContactsInfo/>
        </div>
        {/* Bottom Decorative Element */}
        <div className="mt-20 flex items-center justify-center gap-2 opacity-50">
          <div className="h-[1.01px] w-12 bg-linear-to-r from-transparent to-slate-700" />
          <svg
            className="w-4 h-4 text-slate-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="h-[1.01px] w-12 bg-linear-to-l from-transparent to-slate-700" />
        </div>
      </div>
    </section>
  );
}

const ContactsInfo = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      {/* Quick Contact Cards */}
      <div className="space-y-4">
        {/* Email Card */}
        <div className="group relative bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5 hover:border-[#F5C16C]/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F5C16C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5C16C]/20 transition-colors duration-300">
              <svg
                className="w-6 h-6 text-[#F5C16C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                Email
              </p>
              <a
                href="mailto:pranav@example.com"
                className="text-slate-200 hover:text-[#F5C16C] transition-colors text-sm"
              >
                pranavpargi32@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group relative bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5 hover:border-[#F5C16C]/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F5C16C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5C16C]/20 transition-colors duration-300">
              <svg
                className="w-6 h-6 text-[#F5C16C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                Phone
              </p>
              <a
                href="tel:+911234567890"
                className="text-slate-200 hover:text-[#F5C16C] transition-colors text-sm"
              >
                +91 6354561329
              </a>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="group relative bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-5 hover:border-[#F5C16C]/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F5C16C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5C16C]/20 transition-colors duration-300">
              <svg
                className="w-6 h-6 text-[#F5C16C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                Location
              </p>
              <p className="text-slate-200 text-sm">Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest">
          Social Media
        </p>
        <div className="flex gap-3">
          <a
            href="https://wa.me/qr/N5INELBB2CC6I1"
            rel="noopener noreferrer"
            target="_blank"
            className="group w-11 h-11 rounded-lg bg-slate-900/60 border border-slate-700/30 flex items-center justify-center hover:border-[#F5C16C]/50 hover:bg-[#F5C16C]/10 transition-all duration-300"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-[#F5C16C] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/pranaveditsss?igsh=MWtzOXI2MGw2c3kycw=="
            rel="noopener noreferrer"
            target="_blank"
            className="group w-11 h-11 rounded-lg bg-slate-900/60 border border-slate-700/30 flex items-center justify-center hover:border-[#F5C16C]/50 hover:bg-[#F5C16C]/10 transition-all duration-300"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-[#F5C16C] transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
