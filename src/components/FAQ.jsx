import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  { q: 'Wie sicher ist die Zahlung?', a: 'Sehr sicher. Wir nutzen moderne Verschlüsselung, Betrugserkennung und sind DSGVO‑konform.' },
  { q: 'Gibt es eine Garantie?', a: 'Ja. 30 Tage Geld‑zurück, ohne wenn und aber – wir wollen, dass Sie überzeugt sind.' },
  { q: 'Wie schnell bin ich startklar?', a: 'In wenigen Minuten. Klarer Ablauf, keine komplizierte Einrichtung.' },
  { q: 'Welche Zahlungsmethoden werden unterstützt?', a: 'Alle gängigen Methoden wie Visa, Mastercard, Apple Pay und mehr.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center">Häufige Fragen</h2>
        <p className="mt-3 text-gray-600 text-center">Transparente Antworten auf typische Einwände.</p>

        <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 focus:outline-none">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">{item.q}</p>
                <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </div>
              {open === i && (
                <p className="mt-2 text-gray-600">{item.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
