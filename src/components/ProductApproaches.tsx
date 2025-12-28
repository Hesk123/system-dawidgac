"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Wrench, Shirt, Check, AlertTriangle, Users, Zap, ChevronDown, Target, Search, HelpCircle, Brain, Package, MessageCircle, Star, Globe, Megaphone, Lightbulb, Sparkles, TrendingUp, Gem, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApproachContent {
  characteristics: string[];
  section2Title: string;
  section2Items: string[];
  section3Title: string;
  section3Content: string;
  section4Title: string;
  section4Items: string[];
}

interface Approach {
  id: "problem-solving" | "fashion-lifestyle" | "passive-system";
  title: string;
  tagline: string;
  color: string;
  icon: typeof Wrench;
  content?: ApproachContent;
  comingSoon?: boolean;
}

const approaches: Approach[] = [
  {
    id: "problem-solving",
    title: "PROBLEM-SOLVING",
    tagline: "Produkty rozwiazujace konkretne problemy",
    color: "#00f5ff",
    icon: Wrench,
    content: {
      characteristics: [
        "Jasno zdefiniowany problem i rozwiazanie",
        "Latwy do wytlumaczenia w reklamie",
        "Wysoka wartosc postrzegana przez klienta",
        "Mozliwosc budowania lojalnosci",
      ],
      section2Title: "Przykladowe nisze",
      section2Items: [
        "Produkty zdrowotne i wellness",
        "Gadgety usprawniajace codzienne zycie",
        "Rozwiazania dla zwierzat domowych",
      ],
      section3Title: "Dla kogo",
      section3Content: "Dla osob ktore chca budowac silna marka z glebokim zrozumieniem problemu klienta. Wymaga wiecej researchu ale daje stabilniejsze wyniki.",
      section4Title: "Wyzwania",
      section4Items: [
        "Wymaga glebokiego researchu avatara",
        "Trudniejsze skalowanie bez nowych produktow",
        "Konkurencja z ugruntowanymi brandami",
        "Dluzszy czas do pierwszej sprzedazy",
      ],
    },
  },
  {
    id: "fashion-lifestyle",
    title: "FASHION & LIFESTYLE",
    tagline: "Systematyczne podejscie do mody i lifestyle",
    color: "#ff6b00",
    icon: Shirt,
    content: {
      characteristics: [
        "Szybkie testowanie wielu produktow",
        "Niska bariera wejscia - latwy start",
        "Skalowalne i powtarzalne procesy",
        "Duzy wybor produktow na rynku",
      ],
      section2Title: "Dlaczego to dziala",
      section2Items: [
        "Moda to emocje - ludzie kupuja impulsywnie",
        "Saturacja to zaleta - udowodniony popyt",
        "Nieskonczone mozliwosci targetowania",
      ],
      section3Title: "System Dawida",
      section3Content: "Skup sie na egzekucji a nie produkcie. Ten sam produkt z lepszym systemem = lepsze wyniki. Saturacja oznacza ze ludzie kupuja.",
      section4Title: "Przewagi",
      section4Items: [
        "Szybszy czas do pierwszych wynikow",
        "Latwe testowanie nowych produktow",
        "Sprawdzone procesy i szablony",
        "Mniejsze ryzyko przy starcie",
      ],
    },
  },
  {
    id: "passive-system",
    title: "PASYWNY SYSTEM",
    tagline: "Gwarantowany zysk, pasywny dochod",
    color: "#ffd500",
    icon: Gem,
    comingSoon: true,
  },
];

// Problem-Solving Accordion Data
interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionSection {
  id: string;
  title: string;
  icon: typeof Package;
  description?: string;
  items: AccordionItem[];
}

const problemSolvingAccordions: AccordionSection[] = [
  {
    id: "product-criteria",
    title: "KRYTERIA PRODUKTU",
    icon: Package,
    items: [
      {
        title: "Rozwiazuje PRAWDZIWY problem",
        content: "Produkt musi adresowac konkretny bol lub frustracje. Nie 'fajny gadget' - prawdziwe rozwiazanie.",
      },
      {
        title: "Ludzie chca to kupic DZISIAJ",
        content: "Pilnosc. Problem musi byc na tyle dotkliwy, ze klient nie moze czekac.",
      },
      {
        title: "3x markup mozliwy",
        content: "Musisz miec miejsce na reklamy, zwroty i zysk. Minimum 3x cena zakupu.",
      },
      {
        title: "Element MRR (opcjonalnie)",
        content: "Subskrypcja, refill, consumable. Powtarzalny przychod to swiety graal.",
      },
    ],
  },
  {
    id: "avatar-mastery",
    title: "AVATAR MASTERY",
    icon: Users,
    items: [
      {
        title: "Definicja Avatara",
        content: "Avatar to NIE 'kobieta 25-45 zainteresowana fitness'. To KONKRETNA grupa zjednoczona przez WSPOLNY PROBLEM. Demografika + specyficzny problem = TOZSAMOSC.",
      },
      {
        title: "Za Szeroko vs Avatar",
        content: (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <span className="text-red-400 font-semibold text-xs uppercase tracking-wider">ZLE</span>
              <p className="text-gray-300 text-sm mt-1">&quot;Kobiety ktore chca schudnac&quot; (brak wspolnej tozsamosci)</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 font-semibold text-xs uppercase tracking-wider">DOBRZE</span>
              <p className="text-gray-300 text-sm mt-1">&quot;Kobiety z PCOS walczace z przyrostem wagi hormonalnej&quot; (wspolna kondycja = wspolna tozsamosc)</p>
            </div>
          </div>
        ),
      },
      {
        title: "Przyklady Prawdziwych Awatarow",
        content: (
          <div className="space-y-2">
            {[
              { avatar: "PCOS + Nadwaga", desc: "Kobiety z hormonalnym przyrostem wagi" },
              { avatar: "Tradzik Hormonalny", desc: "Dorosli z tradzkiem spowodowanym hormonami" },
              { avatar: "Mlode Mamy + Rozejscie Miesni", desc: "Specyficzny problem poporodowy" },
              { avatar: "Mezczyzni Tracacy Wlosy w 20s", desc: "Kryzys tozsamosci, nie tylko estetyka" },
              { avatar: "Pracownicy Biurowi + Chroniczny Bol Plecow", desc: "Problemy z postura" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Target className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-white font-medium text-sm">{item.avatar}</span>
                  <span className="text-gray-500 text-sm"> - {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: "research-framework",
    title: "FRAMEWORK RESEARCHU AVATARA",
    icon: Search,
    items: [
      {
        title: "Amazon Reviews",
        content: (
          <div className="space-y-2">
            <p className="text-cyan-400 text-sm font-medium mb-2">Kopalnia prawdziwego jezyka:</p>
            {[
              "Znajdz konkurencyjne produkty",
              "Czytaj recenzje 1-gwiazdkowe I 5-gwiazdkowe",
              "Kopiuj dokladne frazy ktorych uzywaja",
              "Notuj: skargi, zyczenia, emocje",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Reddit i Fora",
        content: (
          <div className="space-y-2">
            <p className="text-cyan-400 text-sm font-medium mb-2">Gdzie ludzie mowia szczerze:</p>
            {[
              'Szukaj "[problem] reddit"',
              "Czytaj watki, nie tylko tytuly",
              "Zrzuty ekranu emocjonalnych postow",
              "Notuj: co probowali, co zawiodlo",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <MessageCircle className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Grupy Facebook",
        content: (
          <div className="space-y-2">
            <p className="text-cyan-400 text-sm font-medium mb-2">Rozmowy spolecznosci:</p>
            {[
              "Dolacz do 5-10 relevantnych grup",
              "Szukaj czestych pytan",
              "Czytaj komentarze pod watkami",
              "Notuj: rady ktore sobie daja",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Users className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Research Konkurencji",
        content: (
          <div className="space-y-2">
            <p className="text-cyan-400 text-sm font-medium mb-2">Co juz dziala:</p>
            {[
              "Studiuj reklamy konkurencji (FB Library)",
              "Czytaj ich recenzje",
              "Sprawdz ich Landing Page",
              "Notuj: angle, hooki, obietnice",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Globe className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: "avatar-questions",
    title: "10 PYTAN O AVATARA",
    icon: HelpCircle,
    items: [
      {
        title: "Kluczowe pytania do odpowiedzenia",
        content: (
          <div className="space-y-2">
            {[
              "Jaki jest ich wspolny problem/kondycja?",
              'Jak sami siebie identyfikuja? (np. "mam PCOS", "zmagam sie z tradzkiem hormonalnym")',
              "Co juz probowali?",
              "Dlaczego uwazaja ze te rzeczy zawiodly?",
              "W co wierza na temat swojego problemu?",
              "Jakich slow i fraz ONI uzywaja?",
              "Gdzie spedzaja czas online?",
              "Jak wygladalby dla nich sukces?",
              "Jakie beda mieli obiekcje?",
              "Jak bardzo sa swiadomi? (poziom awareness)",
            ].map((question, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold text-sm w-5 flex-shrink-0">{i + 1}.</span>
                <span className="text-gray-300 text-sm">{question}</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  {
    id: "awareness-levels",
    title: "5 POZIOMOW SWIADOMOSCI",
    icon: Brain,
    items: [
      {
        title: "NIESWIADOMY (Unaware)",
        content: (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Nie wie ze ma problem.</p>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Przyklady wyszukiwan:</span>
              <p className="text-gray-300 text-sm mt-1">brak - scrolluje social media</p>
            </div>
            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-xs uppercase tracking-wider">Jak dotrzec:</span>
              <p className="text-gray-300 text-sm mt-1">Content edukacyjny, storytelling, viral content</p>
            </div>
          </div>
        ),
      },
      {
        title: "SWIADOMY PROBLEMU (Problem Aware)",
        content: (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Wie ze ma problem, nie zna rozwiazan.</p>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Przyklady wyszukiwan:</span>
              <p className="text-gray-300 text-sm mt-1">&quot;dlaczego przybywam na wadze?&quot;, &quot;czemu boli mnie plecy?&quot;, &quot;jak schudnac?&quot;</p>
            </div>
            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-xs uppercase tracking-wider">Jak dotrzec:</span>
              <p className="text-gray-300 text-sm mt-1">Reklamy ktore odzwierciedlaja ich bol, edukacja o problemie</p>
            </div>
          </div>
        ),
      },
      {
        title: "SWIADOMY ROZWIAZANIA (Solution Aware)",
        content: (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Wie ze rozwiazania istnieja, porownuje opcje.</p>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Przyklady wyszukiwan:</span>
              <p className="text-gray-300 text-sm mt-1">&quot;najlepsze sposoby na schudniecie&quot;, &quot;jak poprawic postawe&quot;, &quot;rozwiazania na bol plecow&quot;</p>
            </div>
            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-xs uppercase tracking-wider">Jak dotrzec:</span>
              <p className="text-gray-300 text-sm mt-1">Pokaz dlaczego Twoje podejscie jest lepsze, porownania metod</p>
            </div>
          </div>
        ),
      },
      {
        title: "SWIADOMY PRODUKTU (Product Aware)",
        content: (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Zna Twoj produkt, nie jest przekonany.</p>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Przyklady wyszukiwan:</span>
              <p className="text-gray-300 text-sm mt-1">&quot;[Twoj produkt] opinie&quot;, &quot;[Twoj produkt] vs [konkurent]&quot;, &quot;czy [produkt] dziala?&quot;</p>
            </div>
            <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-xs uppercase tracking-wider">Jak dotrzec:</span>
              <p className="text-gray-300 text-sm mt-1">Social proof, testimoniale, porownania z konkurencja</p>
            </div>
          </div>
        ),
      },
      {
        title: "NAJBARDZIEJ SWIADOMY (Most Aware)",
        content: (
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Gotowy kupic, potrzebuje impulsu.</p>
            <div className="p-2 rounded bg-white/5">
              <span className="text-gray-500 text-xs uppercase tracking-wider">Przyklady wyszukiwan:</span>
              <p className="text-gray-300 text-sm mt-1">&quot;[Twoj produkt] kod rabatowy&quot;, &quot;gdzie kupic [produkt]&quot;, &quot;[produkt] promocja&quot;</p>
            </div>
            <div className="p-2 rounded bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 text-xs uppercase tracking-wider">Jak dotrzec:</span>
              <p className="text-gray-300 text-sm mt-1">Oferta, urgency, scarcity, prosty checkout</p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "ad-structures",
    title: "STRUKTURA REKLAM WG POZIOMU SWIADOMOSCI",
    icon: Megaphone,
    description: "Nie ma jednej 'wygrywajacej' struktury reklamy. Twoja struktura zalezy od tego, gdzie jest Twoj avatar w swojej podrozy.",
    items: [
      {
        title: "Nieswiadomy / Swiadomy Problemu",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "rgba(255, 213, 0, 0.15)", color: "#ffd500" }}>
                Struktura: Story-Based / Edukacyjna
              </span>
            </div>
            <div className="space-y-2">
              {[
                "Hook z ciekawoscia/historia - zatrzymaj scroll",
                "Podziel sie relatywnym doswiadczeniem - zbuduj polaczenie",
                "Ujawnij problem/insight - moment \"aha\"",
                "Edukuj dlaczego to wazne - pogłęb bol",
                "Miekkie wprowadzenie typu rozwiazania - NIE Twojego produktu",
                "CTA do nauczenia sie wiecej - nie do kupienia",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-sm w-5 flex-shrink-0" style={{ color: "#ffd500" }}>{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg mt-3" style={{ backgroundColor: "rgba(255, 213, 0, 0.08)", border: "1px solid rgba(255, 213, 0, 0.20)" }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#ffd500" }}>Przykladowy Hook:</span>
              <p className="text-gray-300 text-sm mt-1 italic">&quot;Nikt mi nie powiedzial, ze powod dla ktorego nie moglam schudnac nie mial NIC wspolnego z moja dieta...&quot;</p>
            </div>
          </div>
        ),
      },
      {
        title: "Swiadomy Rozwiazania",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "rgba(57, 255, 20, 0.15)", color: "#39ff14" }}>
                Struktura: Skupiona na Mechanizmie
              </span>
            </div>
            <div className="space-y-2">
              {[
                "Hook na frustracji z innych rozwiazan - \"probowalas wszystkiego?\"",
                "Uznaj co juz probowali - pokaz ze rozumiesz",
                "Wytlumacz DLACZEGO te rzeczy nie dzialaly - klucz do zaufania",
                "Przedstaw swoj MECHANIZM - unikalne podejscie",
                "Pokaz dowod ze dziala - wyniki, nie obietnice",
                "CTA z oferta",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-sm w-5 flex-shrink-0" style={{ color: "#39ff14" }}>{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg mt-3" style={{ backgroundColor: "rgba(57, 255, 20, 0.08)", border: "1px solid rgba(57, 255, 20, 0.20)" }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#39ff14" }}>Przykladowy Hook:</span>
              <p className="text-gray-300 text-sm mt-1 italic">&quot;Probowalem kazdego produktu na tradzik na rynku. Oto dlaczego zaden z nich nie dzialal na tradzik hormonalny...&quot;</p>
            </div>
          </div>
        ),
      },
      {
        title: "Swiadomy Produktu",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "rgba(168, 85, 247, 0.15)", color: "#a855f7" }}>
                Struktura: Skupiona na Dowodach i Ofercie
              </span>
            </div>
            <div className="space-y-2">
              {[
                "Hook z wynikiem/testimonialem - natychmiastowy dowod",
                "Szybka historia transformacji - przed/po",
                "Obsłuż glowna obiekcje - \"wiem o czym myslisz...\"",
                "Dodaj wiecej dowodow - social proof stack",
                "Przedstaw oferte jasno - co dostajesz",
                "Urgency + CTA - powod do dzialania teraz",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-sm w-5 flex-shrink-0" style={{ color: "#a855f7" }}>{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg mt-3" style={{ backgroundColor: "rgba(168, 85, 247, 0.08)", border: "1px solid rgba(168, 85, 247, 0.20)" }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#a855f7" }}>Przykladowy Hook:</span>
              <p className="text-gray-300 text-sm mt-1 italic">&quot;30 dni temu moja skora wygladala tak... *pokazuje przed*&quot;</p>
            </div>
          </div>
        ),
      },
      {
        title: "Najbardziej Swiadomy",
        content: (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "rgba(255, 51, 85, 0.15)", color: "#ff3355" }}>
                Struktura: Bezposrednia Oferta
              </span>
            </div>
            <div className="space-y-2">
              {[
                "Hook z oferta - od razu do rzeczy",
                "Szybkie przypomnienie wartosci - dlaczego to dziala",
                "Przedstaw deal - co dokladnie dostajesz",
                "Urgency/scarcity - limitowany czas/ilosc",
                "Bezposrednie CTA - kup teraz",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-sm w-5 flex-shrink-0" style={{ color: "#ff3355" }}>{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-lg mt-3" style={{ backgroundColor: "rgba(255, 51, 85, 0.08)", border: "1px solid rgba(255, 51, 85, 0.20)" }}>
              <span className="text-xs uppercase tracking-wider" style={{ color: "#ff3355" }}>Przykladowy Hook:</span>
              <p className="text-gray-300 text-sm mt-1 italic">&quot;Ostatnia szansa: -40% konczy sie dzisiaj o polnocy&quot;</p>
            </div>
          </div>
        ),
      },
      {
        title: "KEY INSIGHT",
        content: (
          <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(0, 245, 255, 0.10)", border: "1px solid rgba(0, 245, 255, 0.30)" }}>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00f5ff" }} />
              <p className="text-gray-200 text-sm leading-relaxed">
                <span className="font-semibold" style={{ color: "#00f5ff" }}>Wiekszosc ludzi puszcza reklamy w stylu &apos;Product Aware&apos; do audiencji &apos;Problem Aware&apos;.</span>
                {" "}Dlatego ich reklamy nie dzialaja. Dopasuj strukture do tego, gdzie jest Twoj avatar.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
];

// Fashion/Lifestyle Accordion Data
const fashionLifestyleAccordions: AccordionSection[] = [
  {
    id: "why-fashion",
    title: "DLACZEGO MODA?",
    icon: Sparkles,
    items: [
      {
        title: "Zakupy Impulsowe",
        content: "Moda to emocje, nie logika. Ludzie kupuja TERAZ bo im sie podoba, nie bo potrzebuja. Zero przekonywania o problemie - po prostu ladny produkt i gotowe.",
      },
      {
        title: "Ogromny Rynek",
        content: "Kazdy nosi ubrania. Kazdy kupuje akcesoria. Nie musisz szukac niszowej grupy - Twoi klienci sa wszedzie.",
      },
      {
        title: "Wieczny Popyt",
        content: "Moda sie zmienia, ale ludzie zawsze kupuja. Sezonowe trendy = nieskonczone mozliwosci testowania nowych produktow.",
      },
      {
        title: "Prosty Przekaz",
        content: "Nie musisz tlumaczyc jak dziala produkt. Zdjecie + cena = decyzja. Najlatwiejszy marketing.",
      },
    ],
  },
  {
    id: "testing-speed",
    title: "SZYBKOSC TESTOWANIA",
    icon: Zap,
    items: [
      {
        title: "Test w 24-48h",
        content: "Wrzucasz produkt, puszczasz reklame, masz dane. Nie dziala? Nastepny. Zero przywiazania, czysta matematyka.",
      },
      {
        title: "Prosty Sklep",
        content: "Nie potrzebujesz skomplikowanego funnela. Prosta strona produktowa, dobre zdjecia, jasna cena. Mozesz postawic sklep w jeden dzien.",
      },
      {
        title: "Niski Koszt Testu",
        content: "Jeden produkt = 20-50 PLN na reklamy zeby wiedziec czy dziala.",
      },
      {
        title: "Nie Dziala? Nastepny",
        content: "Zero emocjonalnego przywiazania. Dane mowia nie? Idziesz dalej. To gra liczb, nie loteria.",
      },
    ],
  },
  {
    id: "success-math",
    title: "MATEMATYKA SUKCESU",
    icon: TrendingUp,
    items: [
      {
        title: "Prawo Duzych Liczb",
        content: "Testujesz 5 produktow dziennie = 35 tygodniowo = 150 miesiecznie = 1800+ rocznie. NIEMOZLIWE zebys nie trafil na cos co dziala.",
      },
      {
        title: "Jeden Produkt Zmienia Wszystko",
        content: "Wystarczy JEDEN winner zeby zarobic wiecej niz wydales na wszystkie testy. Jeden produkt moze zmienic cala Twoja kariere.",
      },
      {
        title: "Szybka Iteracja",
        content: "Im wiecej testujesz, tym lepiej rozumiesz co dziala. Kazdy test to lekcja, nawet jesli nie sprzedaje.",
      },
      {
        title: "Skalowanie Proste",
        content: "Masz cos co dziala? Zwiekszasz budzet. Moda skaluje sie latwo bo audience jest ogromny.",
      },
    ],
  },
];

// Color mapping for fashion sections
const fashionSectionColors: Record<string, string> = {
  "why-fashion": "#ff6b00",      // Orange
  "testing-speed": "#39ff14",     // Lime
  "success-math": "#00f5ff",      // Cyan
};

export function ProductApproaches() {
  const [selectedApproach, setSelectedApproach] = useState<"problem-solving" | "fashion-lifestyle" | "passive-system" | null>(null);

  const handleSelect = (id: "problem-solving" | "fashion-lifestyle" | "passive-system") => {
    // Don't allow selecting coming soon approaches
    const approach = approaches.find(a => a.id === id);
    if (approach?.comingSoon) return;
    setSelectedApproach(id);
  };

  const handleClose = () => {
    setSelectedApproach(null);
  };

  return (
    <div className="relative min-h-[400px]">
      <AnimatePresence mode="wait">
        {selectedApproach === null ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:gap-6 md:grid-cols-3"
          >
            {approaches.map((approach, index) => (
              approach.comingSoon ? (
                <ComingSoonCard
                  key={approach.id}
                  approach={approach}
                  delay={index * 0.1}
                />
              ) : (
                <ApproachCard
                  key={approach.id}
                  approach={approach}
                  onSelect={handleSelect}
                  delay={index * 0.1}
                />
              )
            ))}
          </motion.div>
        ) : selectedApproach === "problem-solving" ? (
          <ProblemSolvingExpanded
            key="problem-solving-expanded"
            approach={approaches[0]}
            onClose={handleClose}
          />
        ) : (
          <FashionLifestyleExpanded
            key="fashion-lifestyle-expanded"
            approach={approaches[1]}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface ApproachCardProps {
  approach: Approach;
  onSelect: (id: "problem-solving" | "fashion-lifestyle" | "passive-system") => void;
  delay: number;
}

function ApproachCard({ approach, onSelect, delay }: ApproachCardProps) {
  const Icon = approach.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(approach.id)}
      className={cn(
        "glass-card p-6 sm:p-8 cursor-pointer relative overflow-hidden group",
        "transition-all duration-300"
      )}
      style={{
        borderColor: `${approach.color}20`,
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 30px ${approach.color}15, 0 0 20px ${approach.color}20`,
          borderRadius: "12px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${approach.color}15`, border: `1px solid ${approach.color}30` }}
          >
            <Icon className="w-6 h-6" style={{ color: approach.color }} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">{approach.title}</h3>
          </div>
        </div>

        <p className="text-gray-400 text-sm sm:text-base mb-6">{approach.tagline}</p>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            backgroundColor: `${approach.color}10`,
            border: `1px solid ${approach.color}30`,
            color: approach.color,
          }}
        >
          Wybierz
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-10"
        style={{
          background: `radial-gradient(circle at top right, ${approach.color}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

// Coming Soon Card Component
interface ComingSoonCardProps {
  approach: Approach;
  delay: number;
}

function ComingSoonCard({ approach, delay }: ComingSoonCardProps) {
  const Icon = approach.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card p-6 sm:p-8 relative overflow-hidden",
        "cursor-not-allowed select-none"
      )}
      style={{
        borderColor: `${approach.color}15`,
        background: "linear-gradient(135deg, rgba(255, 213, 0, 0.03) 0%, rgba(10, 22, 40, 0.95) 100%)",
      }}
    >
      {/* Subtle pulsing glow animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl"
        animate={{
          boxShadow: [
            `0 0 20px ${approach.color}08, inset 0 0 30px ${approach.color}05`,
            `0 0 40px ${approach.color}15, inset 0 0 40px ${approach.color}08`,
            `0 0 20px ${approach.color}08, inset 0 0 30px ${approach.color}05`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* COMING SOON Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2 }}
        className="absolute top-4 right-4 z-20"
      >
        <div
          className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
          style={{
            backgroundColor: `${approach.color}20`,
            border: `1px solid ${approach.color}40`,
            color: approach.color,
          }}
        >
          <Lock className="w-3 h-3" />
          Coming Soon
        </div>
      </motion.div>

      {/* Blur overlay for content */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ backdropFilter: "blur(0.5px)" }} />

      {/* Content with blur effect */}
      <div className="relative z-5">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${approach.color}10`, border: `1px solid ${approach.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: approach.color, opacity: 0.7 }} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white/80">{approach.title}</h3>
          </div>
        </div>

        <p className="text-gray-500 text-sm sm:text-base mb-4">{approach.tagline}</p>

        {/* Teaser content - blurred hints */}
        <div
          className="space-y-2 p-4 rounded-lg relative overflow-hidden"
          style={{
            backgroundColor: `${approach.color}05`,
            border: `1px solid ${approach.color}10`,
          }}
        >
          {/* Blur overlay for teaser content */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backdropFilter: "blur(2px)",
              background: "linear-gradient(to bottom, transparent 0%, rgba(10, 22, 40, 0.3) 100%)",
            }}
          />

          <div className="relative" style={{ filter: "blur(1px)" }}>
            {[
              "Gwarantowany 100% zysk",
              "Pasywny dochod bez codziennej pracy",
              "Efekt kuli snieznej - Twoje zyski rosna automatycznie",
              "Rewolucyjna metoda ktorej nikt jeszcze nie uczy",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-2 py-1"
              >
                <Gem className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: `${approach.color}60` }} />
                <span className="text-gray-400/70 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Locked indicator */}
        <div
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium opacity-50"
          style={{
            backgroundColor: `${approach.color}08`,
            border: `1px solid ${approach.color}15`,
            color: approach.color,
          }}
        >
          <Lock className="w-4 h-4" />
          Wkrotce dostepne
        </div>
      </div>

      {/* Corner accent - more subtle */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-5"
        style={{
          background: `radial-gradient(circle at top right, ${approach.color}, transparent 70%)`,
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-30"
        style={{
          background: `linear-gradient(to right, transparent, ${approach.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// Accordion Component for Problem-Solving
interface AccordionProps {
  section: AccordionSection;
  isOpen: boolean;
  onToggle: () => void;
  color: string;
  delay: number;
}

function Accordion({ section, isOpen, onToggle, color, delay }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const Icon = section.icon;

  const toggleItem = (title: string) => {
    setOpenItems(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        isOpen
          ? "bg-[#0a1628]/80 border border-cyan-500/30"
          : "bg-white/[0.02] border border-white/10 hover:border-white/20"
      )}
      style={{
        boxShadow: isOpen ? `0 0 20px ${color}15, 0 0 40px ${color}08` : 'none',
      }}
    >
      {/* Section Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
              isOpen ? "bg-cyan-500/20" : "bg-white/5"
            )}
            style={{
              borderColor: isOpen ? `${color}40` : 'transparent',
              borderWidth: '1px'
            }}
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: isOpen ? color : '#9ca3af' }}
            />
          </div>
          <h4
            className={cn(
              "text-base sm:text-lg font-bold transition-colors duration-300",
              isOpen ? "text-white" : "text-gray-300"
            )}
          >
            {section.title}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isOpen ? color : '#6b7280' }}
          />
        </motion.div>
      </button>

      {/* Section Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2">
              {section.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-sm mb-4 pb-3 border-b border-white/5"
                >
                  {section.description}
                </motion.p>
              )}
              {section.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white/[0.02] border border-white/5"
                >
                  <button
                    onClick={() => toggleItem(item.title)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-200">{item.title}</span>
                    <motion.div
                      animate={{ rotate: openItems.includes(item.title) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(item.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm text-gray-400">
                          {typeof item.content === 'string' ? (
                            <p>{item.content}</p>
                          ) : (
                            item.content
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Problem-Solving Expanded View with Accordions
interface ProblemSolvingExpandedProps {
  approach: Approach;
  onClose: () => void;
}

function ProblemSolvingExpanded({ approach, onClose }: ProblemSolvingExpandedProps) {
  const [openSection, setOpenSection] = useState<string | null>("product-criteria");
  const Icon = approach.icon;

  const toggleSection = (id: string) => {
    setOpenSection(prev => prev === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        borderColor: `${approach.color}30`,
        boxShadow: `0 0 30px ${approach.color}15`,
      }}
    >
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
      >
        <motion.div
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.div>
        <span className="text-sm font-medium">Powrot do wyboru</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${approach.color}15`, border: `1px solid ${approach.color}30` }}
        >
          <Icon className="w-7 h-7" style={{ color: approach.color }} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{approach.title}</h3>
          <p className="text-gray-400 text-sm">{approach.tagline}</p>
        </div>
      </motion.div>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-sm mb-6 leading-relaxed"
      >
        Problem-solving to podejscie oparte na glebokiej znajomosci avatara. Kliknij na sekcje ponizej,
        aby poznac kompletny framework.
      </motion.p>

      {/* Accordions */}
      <div className="space-y-3">
        {problemSolvingAccordions.map((section, index) => (
          <Accordion
            key={section.id}
            section={section}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            color={approach.color}
            delay={0.15 + index * 0.05}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${approach.color}, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom left, ${approach.color}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

// Fashion/Lifestyle Accordion Component with color-coded sections
interface FashionAccordionProps {
  section: AccordionSection;
  isOpen: boolean;
  onToggle: () => void;
  sectionColor: string;
  delay: number;
}

function FashionAccordion({ section, isOpen, onToggle, sectionColor, delay }: FashionAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const Icon = section.icon;

  const toggleItem = (title: string) => {
    setOpenItems(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        isOpen
          ? "bg-[#0a1628]/80"
          : "bg-white/[0.02] border border-white/10 hover:border-white/20"
      )}
      style={{
        boxShadow: isOpen ? `0 0 20px ${sectionColor}15, 0 0 40px ${sectionColor}08` : 'none',
        borderColor: isOpen ? `${sectionColor}30` : undefined,
        borderWidth: isOpen ? '1px' : undefined,
      }}
    >
      {/* Section Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
            )}
            style={{
              backgroundColor: isOpen ? `${sectionColor}20` : 'rgba(255,255,255,0.05)',
              borderColor: isOpen ? `${sectionColor}40` : 'transparent',
              borderWidth: '1px'
            }}
          >
            <Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: isOpen ? sectionColor : '#9ca3af' }}
            />
          </div>
          <h4
            className={cn(
              "text-base sm:text-lg font-bold transition-colors duration-300",
              isOpen ? "text-white" : "text-gray-300"
            )}
          >
            {section.title}
          </h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isOpen ? sectionColor : '#6b7280' }}
          />
        </motion.div>
      </button>

      {/* Section Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2">
              {section.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="rounded-lg overflow-hidden bg-white/[0.02] border border-white/5"
                >
                  <button
                    onClick={() => toggleItem(item.title)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-200">{item.title}</span>
                    <motion.div
                      animate={{ rotate: openItems.includes(item.title) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown
                        className="w-4 h-4"
                        style={{ color: openItems.includes(item.title) ? sectionColor : '#6b7280' }}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(item.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm text-gray-400">
                          {typeof item.content === 'string' ? (
                            <p>{item.content}</p>
                          ) : (
                            item.content
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Fashion/Lifestyle Expanded View with Color-Coded Accordions
interface FashionLifestyleExpandedProps {
  approach: Approach;
  onClose: () => void;
}

function FashionLifestyleExpanded({ approach, onClose }: FashionLifestyleExpandedProps) {
  const [openSection, setOpenSection] = useState<string | null>("why-fashion");
  const Icon = approach.icon;

  const toggleSection = (id: string) => {
    setOpenSection(prev => prev === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        borderColor: `${approach.color}30`,
        boxShadow: `0 0 30px ${approach.color}15`,
      }}
    >
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
      >
        <motion.div
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.div>
        <span className="text-sm font-medium">Powrot do wyboru</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${approach.color}15`, border: `1px solid ${approach.color}30` }}
        >
          <Icon className="w-7 h-7" style={{ color: approach.color }} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{approach.title}</h3>
          <p className="text-gray-400 text-sm">{approach.tagline}</p>
        </div>
      </motion.div>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-sm mb-6 leading-relaxed"
      >
        Moda i lifestyle to najprostszy sposob na start w e-commerce. Kliknij na sekcje ponizej,
        aby poznac kompletny system szybkiego testowania.
      </motion.p>

      {/* Accordions with individual colors */}
      <div className="space-y-3">
        {fashionLifestyleAccordions.map((section, index) => (
          <FashionAccordion
            key={section.id}
            section={section}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            sectionColor={fashionSectionColors[section.id] || approach.color}
            delay={0.15 + index * 0.05}
          />
        ))}
      </div>

      {/* Key Message Callout Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 sm:p-5 rounded-xl"
        style={{
          backgroundColor: "rgba(255, 107, 0, 0.08)",
          border: "1px solid rgba(255, 107, 0, 0.25)",
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: "rgba(255, 107, 0, 0.15)" }}
          >
            <Lightbulb className="w-4 h-4" style={{ color: "#ff6b00" }} />
          </div>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#ff6b00" }}>
              PAMIETAJ
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              W modzie nie szukasz &apos;JEDYNEGO&apos; produktu. Szukasz SYSTEMU ktory pozwala Ci szybko testowac
              i znajdowac rzeczy ktore sie sprzedaja. Jeden winner wystarczy zeby wszystko zmienic.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${approach.color}, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom left, ${approach.color}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}

interface ExpandedApproachProps {
  approach: Approach;
  onClose: () => void;
}

function ExpandedApproach({ approach, onClose }: ExpandedApproachProps) {
  const Icon = approach.icon;
  const { content } = approach;

  // Guard for approaches without content (like coming soon approaches)
  if (!content) return null;

  const sectionIcons = {
    characteristics: Check,
    section2: approach.id === "problem-solving" ? Zap : Zap,
    section3: Users,
    section4: approach.id === "problem-solving" ? AlertTriangle : Check,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card p-6 sm:p-8 relative overflow-hidden"
      style={{
        borderColor: `${approach.color}30`,
        boxShadow: `0 0 30px ${approach.color}15`,
      }}
    >
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
      >
        <motion.div
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.div>
        <span className="text-sm font-medium">Powrot do wyboru</span>
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${approach.color}15`, border: `1px solid ${approach.color}30` }}
        >
          <Icon className="w-7 h-7" style={{ color: approach.color }} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{approach.title}</h3>
          <p className="text-gray-400 text-sm">{approach.tagline}</p>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* Charakterystyka */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-5 rounded-xl"
          style={{ backgroundColor: `${approach.color}08`, border: `1px solid ${approach.color}20` }}
        >
          <div className="flex items-center gap-2 mb-4">
            <sectionIcons.characteristics className="w-4 h-4" style={{ color: approach.color }} />
            <h4 className="text-base font-semibold text-white">Charakterystyka</h4>
          </div>
          <div className="space-y-3">
            {content.characteristics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${approach.color}20` }}
                >
                  <Check className="w-3 h-3" style={{ color: approach.color }} />
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="p-4 sm:p-5 rounded-xl bg-white/3 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <sectionIcons.section2 className="w-4 h-4" style={{ color: approach.color }} />
            <h4 className="text-base font-semibold text-white">{content.section2Title}</h4>
          </div>
          <div className="space-y-3">
            {content.section2Items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="font-medium text-sm w-5" style={{ color: approach.color }}>{i + 1}.</span>
                <span className="text-gray-400 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-5 rounded-xl bg-white/3 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <sectionIcons.section3 className="w-4 h-4" style={{ color: approach.color }} />
            <h4 className="text-base font-semibold text-white">{content.section3Title}</h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{content.section3Content}</p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="p-4 sm:p-5 rounded-xl"
          style={{
            backgroundColor: approach.id === "problem-solving" ? "rgba(255,51,85,0.05)" : `${approach.color}08`,
            border: `1px solid ${approach.id === "problem-solving" ? "rgba(255,51,85,0.15)" : `${approach.color}20`}`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <sectionIcons.section4
              className="w-4 h-4"
              style={{ color: approach.id === "problem-solving" ? "#ff3355" : approach.color }}
            />
            <h4 className="text-base font-semibold text-white">{content.section4Title}</h4>
          </div>
          <div className="space-y-3">
            {content.section4Items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: approach.id === "problem-solving" ? "rgba(255,51,85,0.15)" : `${approach.color}15`,
                  }}
                >
                  {approach.id === "problem-solving" ? (
                    <AlertTriangle className="w-3 h-3" style={{ color: "#ff3355" }} />
                  ) : (
                    <Check className="w-3 h-3" style={{ color: approach.color }} />
                  )}
                </div>
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${approach.color}, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom left, ${approach.color}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
