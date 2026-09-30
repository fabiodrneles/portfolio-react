/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compatibilidade com as variáveis antigas do CRA (REACT_APP_*) já cadastradas
  // na Vercel: se as NEXT_PUBLIC_* não existirem, reaproveita as antigas.
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  },
};

export default nextConfig;
