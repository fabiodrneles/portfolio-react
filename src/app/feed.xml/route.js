import { feedResponse } from "@/lib/feed";

// Feed do português (idioma padrão, sem prefixo); en e fr ficam em app/[lang]/feed.xml.
export const dynamic = "force-static";

export function GET() {
  return feedResponse("pt");
}
