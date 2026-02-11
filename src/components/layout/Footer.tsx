import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  SITE_NAME,
  CONTACT,
  FOOTER_SERVICES,
  FOOTER_EXPLORE,
  FOOTER_ABOUT,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{SITE_NAME}</h3>
            <p className="text-white/60 text-sm">
              Aerial advertising in Southern Ontario
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2">
              {FOOTER_EXPLORE.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
              About
            </h4>
            <ul className="space-y-2">
              {FOOTER_ABOUT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red" />
                {CONTACT.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red" />
                {CONTACT.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red" />
                {CONTACT.serviceArea}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-red" />
                {CONTACT.officeHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
