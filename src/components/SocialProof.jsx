import { Star, Shield, BadgeCheck } from 'lucide-react'

const testimonials = [
  { name: 'Laura M.', text: 'Einfach, sicher und extrem professionell. Unsere Conversion ist spürbar gestiegen.', rating: 5 },
  { name: 'Tobias K.', text: 'Wirkt seriös und vertrauenswürdig – genau das, was Kunden erwarten.', rating: 5 },
  { name: 'Miriam M.', text: 'Ein klarer Mehrwert: weniger Warenkorbabbrüche, mehr Umsatz.', rating: 4 },
]

export default function SocialProof() {
  return (
    <section id="bewertungen" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Bewährt und empfohlen</h2>
            <p className="mt-3 text-gray-600">Echte Stimmen, echte Resultate – Vertrauen, das verkauft.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill={i < t.rating ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <p className="mt-3 text-gray-700">“{t.text}”</p>
                  <p className="mt-3 text-sm text-gray-500">{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <BadgeCheck className="mx-auto text-emerald-600" />
              <p className="mt-2 text-sm text-gray-700">30 Tage Geld-zurück-Garantie</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <Shield className="mx-auto text-gray-900" />
              <p className="mt-2 text-sm text-gray-700">Sichere Zahlung</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-center col-span-2">
              <p className="text-2xl font-semibold text-gray-900">10.000+ zufriedene Kunden</p>
              <p className="text-sm text-gray-600">Beliebt bei modernen E‑Commerce‑Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
