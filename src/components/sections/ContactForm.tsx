"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { CONTACT, CAMPAIGN_TYPES } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      campaignType: (form.elements.namedItem("campaignType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Tell us about your campaign and we&apos;ll create a custom proposal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="rounded-xl border border-blue/30 bg-card p-8 text-center shadow-sm">
                <CheckCircle className="h-12 w-12 text-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-heading mb-2">
                  Quote Request Sent!
                </h3>
                <p className="text-muted">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <Button
                  className="mt-6"
                  variant="secondary"
                  onClick={() => setStatus("idle")}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-card-border bg-card p-6 space-y-5 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-heading mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-card-border bg-background-alt px-4 py-2.5 text-heading placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-heading mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-card-border bg-background-alt px-4 py-2.5 text-heading placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-heading mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-card-border bg-background-alt px-4 py-2.5 text-heading placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="campaignType" className="block text-sm font-medium text-heading mb-1.5">
                      Campaign Type *
                    </label>
                    <select
                      id="campaignType"
                      name="campaignType"
                      required
                      className="w-full rounded-lg border border-card-border bg-background-alt px-4 py-2.5 text-heading focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
                    >
                      {CAMPAIGN_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-heading mb-1.5">
                    Tell us about your campaign *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What's your message? Where and when would you like to fly? Any specific requirements?"
                    className="w-full rounded-lg border border-card-border bg-background-alt px-4 py-2.5 text-heading placeholder-muted focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red text-sm">{errorMsg}</p>
                )}

                <Button type="submit" size="large" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Request Quote"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="rounded-xl border border-card-border bg-card p-6 h-fit shadow-sm">
            <h3 className="text-lg font-semibold text-heading mb-5">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-heading">Phone</span>
                  <span className="text-sm text-muted">
                    {CONTACT.phone}
                    <br />({CONTACT.phoneFormatted})
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-heading">Email</span>
                  <span className="text-sm text-muted">{CONTACT.email}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-heading">Service Area</span>
                  <span className="text-sm text-muted">
                    {CONTACT.serviceArea}
                    <br />{CONTACT.cities}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-red mt-0.5 shrink-0" />
                <div>
                  <span className="block text-sm font-medium text-heading">Office Hours</span>
                  <span className="text-sm text-muted">
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
