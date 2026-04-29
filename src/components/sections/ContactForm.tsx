"use client";

import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Paperclip } from "lucide-react";
import { upload } from "@vercel/blob/client";
import { Button } from "@/components/ui";
import { CONTACT, CAMPAIGN_TYPES } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formStartRef = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      campaignType: (form.elements.namedItem("campaignType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.name.trim()) { setErrorMsg("Please enter your name."); return; }
    if (!emailRegex.test(data.email.trim())) { setErrorMsg("Please enter a valid email address."); return; }
    if (!data.campaignType) { setErrorMsg("Please select a campaign type."); return; }
    if (data.message.trim().length < 10) { setErrorMsg("Please tell us a bit more about your campaign."); return; }

    setStatus("sending");

    try {
      // Upload any attached files to Vercel Blob
      const fileUrls: string[] = [];
      for (const file of selectedFiles) {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
        });
        fileUrls.push(blob.url);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          fileUrls,
          _timing: Date.now() - formStartRef.current,
          _hp: "",
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong");
      }

      setStatus("success");
      setSelectedFiles([]);
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  const inputClass = "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue";

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red mb-5">
            Limited Availability
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Take Your Message to the{" "}
            <span className="text-red">Sky?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            One of the only aerial advertising providers in Southern Ontario.
            Tell us about your campaign and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="rounded-xl border border-blue/20 bg-blue/5 p-8 text-center">
                <CheckCircle className="h-12 w-12 text-blue-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-white/60">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  className="mt-6 border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                  variant="outline"
                  onClick={() => { setStatus("idle"); formStartRef.current = Date.now(); }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-5"
              >
                {/* Honeypot — hidden from real users, bots will fill it */}
                <input type="text" name="_hp" aria-hidden="true" tabIndex={-1} className="sr-only" autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                      Name *
                    </label>
                    <input type="text" id="name" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1.5">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="campaignType" className="block text-sm font-medium text-white mb-1.5">
                      Campaign Type *
                    </label>
                    <select
                      id="campaignType"
                      name="campaignType"
                      required
                      className={inputClass}
                    >
                      {CAMPAIGN_TYPES.map((type) => (
                        <option key={type.value} value={type.value} className="bg-[#0D1117] text-white">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1.5">
                    Tell us about your campaign *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What's your message? Where and when would you like to fly? Any specific requirements?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Attach Files <span className="text-white/40 font-normal">(logos, photos, design briefs — optional)</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/60 hover:border-blue hover:text-white transition-colors cursor-pointer"
                  >
                    <Paperclip className="h-4 w-4" />
                    {selectedFiles.length === 0
                      ? "Choose files…"
                      : `${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""} selected`}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.eps,.ai,.svg,.doc,.docx,.ppt,.pptx"
                    className="sr-only"
                    onChange={(e) => setSelectedFiles(Array.from(e.target.files ?? []))}
                  />
                  {selectedFiles.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {selectedFiles.map((f) => (
                        <li key={f.name} className="text-xs text-white/50 truncate">
                          {f.name} ({(f.size / 1024 / 1024).toFixed(1)} MB)
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red text-sm">{errorMsg}</p>
                )}

                <Button type="submit" size="large" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-4 w-4 mr-2 shrink-0" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Request Quote <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 h-fit">
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-white">Phone</span>
                  <span className="text-sm text-white/60">
                    {CONTACT.phone}
                    <br />({CONTACT.phoneFormatted})
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-white">Email</span>
                  <span className="text-sm text-white/60">{CONTACT.email}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-white">Service Area</span>
                  <span className="text-sm text-white/60">
                    {CONTACT.serviceArea}
                    <br />{CONTACT.cities}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-white">Office Hours</span>
                  <span className="text-sm text-white/60">
                    {CONTACT.officeHours}
                    <br />{CONTACT.weekendHours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
