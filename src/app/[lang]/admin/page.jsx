import Admin from "@/components/admin/Admin";

export const metadata = {
  title: "Admin — Fabio Dorneles",
  robots: { index: false, follow: false },
};

// O painel só existe em português (/admin); /en/admin e /fr/admin dão 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "pt" }];
}

export default function AdminPage() {
  return <Admin />;
}
