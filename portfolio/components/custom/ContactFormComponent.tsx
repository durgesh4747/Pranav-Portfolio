"use client";

import { ContactFormState, sendEmail } from "@/actions/sendEmail";
import { useActionState } from "react";

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};
export default function ContactFormComponent() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState,
  );
  return (
    <div className="md:col-span-3">
      <form
        className="space-y-6"
        action={formAction}
        onSubmit={(e) => {
          if (!formAction) e.preventDefault();
        }}
      >
        {/* Name & Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="group relative">
            <label
              htmlFor="name"
              className="block text-xs text-slate-400 uppercase tracking-widest mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-900/60 border border-slate-700/30 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#F5C16C]/50 focus:bg-slate-900/80 transition-all duration-300"
              placeholder="Enter your Name"
            />
            <div className="absolute inset-0 rounded-lg bg-[#F5C16C]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {state.errors?.name && (
              <p className="text-yellow-500 text-sm">{state.errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="group relative">
            <label
              htmlFor="email"
              className="block text-xs text-slate-400 uppercase tracking-widest mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-slate-900/60 border border-slate-700/30 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#F5C16C]/50 focus:bg-slate-900/80 transition-all duration-300"
              placeholder="Enter your Email"
            />
            <div className="absolute inset-0 rounded-lg bg-[#F5C16C]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {state.errors?.email && (
              <p className="text-yellow-500 text-sm ml-2">
                {state.errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="group relative">
          <label
            htmlFor="message"
            className="block text-xs text-slate-400 uppercase tracking-widest mb-2"
          >
            Tell Me About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-slate-900/60 border border-slate-700/30 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#F5C16C]/50 focus:bg-slate-900/80 transition-all duration-300 resize-none"
            placeholder="Share your ideas and requirements..."
          ></textarea>
          <div className="absolute inset-0 rounded-lg bg-[#F5C16C]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          {state.errors?.message && (
            <p className="text-yellow-500 text-sm">{state.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="group relative flex-1 bg-linear-to-r from-[#F5C16C] to-amber-400 text-[#0B1220] font-medium py-4 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,193,108,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isPending ? <>Sending...</> : <>Send Message</>}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-[#F5C16C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
        {state.message && (
          <p
            className={`text-center text-sm mt-4 ${state.success ? "text-green-500" : "text-yellow-500"}`}
          >
            {state.message}
          </p>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-slate-500 text-center">
          Your information is safe with me. I&apos;ll get back to you within few
          hours.
        </p>
      </form>
    </div>
  );
}
