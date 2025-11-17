import { ArrowRight, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 ring-1 ring-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Mehr Vertrauen. Mehr Käufe.</h2>
              <p className="mt-3 text-gray-300">Starten Sie heute – 30 Tage risikofrei testen. Sichere Zahlung inklusive.</p>
              <p className="mt-2 inline-flex items-center text-sm text-gray-400"><Clock className="mr-2" size={16} /> Nur begrenzte Plätze pro Monat verfügbar.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                Jetzt kaufen <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#faq" className="inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-white/90 hover:text-white transition-colors">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
