import Hero from "@/components/home/Hero";
import StackStrip from "@/components/home/StackStrip";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Journey from "@/components/home/Journey";
import Process from "@/components/home/Process";
import AboutWriting from "@/components/home/AboutWriting";
import Contact from "@/components/contact/Contact";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="main">
      <Hero dict={dict} />
      <StackStrip label={dict.stack.label} />
      <Services dict={dict.services} />
      <Work dict={dict.work} />
      <Journey lang={lang} dict={dict.journey} />
      <Process dict={dict.process} />
      <AboutWriting lang={lang} dict={dict} />
      <Contact lang={lang} dict={dict.contact} />
    </div>
  );
}
