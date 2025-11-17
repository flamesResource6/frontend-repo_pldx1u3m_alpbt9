import { useState } from 'react'
import { Menu, X, Shield, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Vorteile', href: '#vorteile' },
    { label: 'Bewertungen', href: '#bewertungen' },
    { label: 'Details', href: '#details' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur supports-backdrop-blur:border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gray-900 text-white grid place-items-center">
              <Shield size={18} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">electronics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors">
              <ShoppingCart size={16} /> Jetzt kaufen
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white text-center">
                Jetzt kaufen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
