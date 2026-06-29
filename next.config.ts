import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' *.tidio.co *.tidiochat.com",
              "style-src 'self' 'unsafe-inline' *.tidio.co *.tidiochat.com",
              "img-src 'self' data: https://media.skybanners.ca *.tidio.co *.tidiochat.com",
              "media-src 'self' https://media.skybanners.ca",
              "font-src 'self' *.tidio.co *.tidiochat.com",
              "connect-src 'self' *.tidio.co *.tidiochat.com wss://*.tidio.co wss://*.tidiochat.com",
              "frame-src *.tidio.co *.tidiochat.com",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
