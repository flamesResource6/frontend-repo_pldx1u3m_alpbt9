import { ShieldCheck, Timer, CreditCard, Sparkles, Headphones, Lock } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Maximale Sicherheit', desc: 'Bankenstarke Verschlüsselung und Betrugsschutz – Vertrauen ab dem ersten Klick.' },
  { icon: Timer, title: 'Schneller Checkout', desc: 'Optimierte Abläufe reduzieren Absprünge und steigern die Conversion.' },
  { icon: CreditCard, title: 'Alle gängigen Zahlungen', desc: 'Visa, Mastercard, Apple Pay & mehr – bezahlt wird so, wie Kunden es möchten.' },
  { icon: Sparkles, title: 'Modern & minimal', desc: 'Ein klares, hochwertiges Design, das Professionalität ausstrahlt.' },
  { icon: Headphones, title: 'Persönlicher Support', desc: 'Schnelle Hilfe, wenn es zählt – zuverlässig und kompetent.' },
  { icon: Lock, title: 'Datenschutz nach DSGVO', desc: 'Transparente Verarbeitung, sichere Speicherung, volle Kontrolle.' },
]

export default function Benefits() {
  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Ihre Vorteile auf einen Blick</h2>
          <p className="mt-3 text-gray-600">Klar, fokussiert, verkaufsstark – so steigern Sie Vertrauen und Umsatz.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <Icon className="text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
