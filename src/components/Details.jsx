import { Layers, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react'

export default function Details() {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Warum electronics?</h2>
          <p className="mt-3 text-gray-600">Wir lösen das zentrale Problem im Checkout: Vertrauen und Klarheit. Kunden kaufen, wenn sie sich sicher fühlen und den Nutzen erkennen.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 p-6">
            <ShieldCheck className="text-gray-900" />
            <h3 className="mt-4 font-semibold text-gray-900">Problem → Lösung</h3>
            <p className="mt-2 text-gray-600">Unsicherheit bremst Käufe. Wir signalisieren Sicherheit durch klare Sprache, Siegel und Vertrauenselemente.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <Zap className="text-gray-900" />
            <h3 className="mt-4 font-semibold text-gray-900">Conversion-Optimiert</h3>
            <p className="mt-2 text-gray-600">Reduzierte Schritte, klare CTAs, minimales Design – für maximalen Fokus auf den Kauf.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <Layers className="text-gray-900" />
            <h3 className="mt-4 font-semibold text-gray-900">Besser als Alternativen</h3>
            <p className="mt-2 text-gray-600">Professioneller Auftritt, moderne Technologie und echte Kundenerfolge – sichtbar und messbar.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Konvertierungs‑Booster inklusive</h3>
            <p className="mt-2 text-gray-600">Garantie, Social Proof, klare Vorteile und dezente Knappheit – sauber, seriös, wirkungsvoll.</p>
          </div>
          <a href="#cta" className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-gray-800 transition-colors">
            Jetzt starten <ArrowUpRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
