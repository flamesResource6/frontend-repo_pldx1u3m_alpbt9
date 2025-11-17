import Spline from '@splinetool/react-spline'
import { Check, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Sichere Bezahlung für Ihre Elektronik – schnell, einfach, vertrauenswürdig.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              electronics bietet Ihnen einen reibungslosen Checkout mit höchster Sicherheit. Maximieren Sie Conversion und Vertrauen – ohne Kompromisse.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><Check className="mt-1 text-emerald-600" size={20} />
                <span>SSL-verschlüsselt, DSGVO-konform, 30 Tage Geld-zurück-Garantie</span>
              </li>
              <li className="flex items-start gap-3"><Check className="mt-1 text-emerald-600" size={20} />
                <span>In Minuten startklar – keine komplexe Einrichtung nötig</span>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-white font-medium shadow-sm hover:bg-gray-800 transition-colors">
                Jetzt kaufen
              </a>
              <a href="#vorteile" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-gray-900 font-medium hover:text-gray-700 transition-colors">
                Mehr erfahren <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
