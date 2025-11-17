import { useEffect, useState } from 'react'
import { Menu, X, Shield, ShoppingCart } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 })

  const navItems = [
    { label: 'Vorteile', href: '#vorteile' },
    { label: 'Bewertungen', href: '#bewertungen' },
    { label: 'Details', href: '#details' },
    { label: 'Produkte', href: '#produkte' },
    { label: 'FAQ', href: '#faq' },
  ]

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? 'bg-white/80 backdrop-blur border-b border-gray-200' : 'bg-white/40 backdrop-blur-sm'}`}>
      <motion.div className="h-0.5 bg-gray-900 origin-left" style={{ scaleX }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 16 }} className="h-8 w-8 rounded-md bg-gray-900 text-white grid place-items-center">
              <Shield size={18} />
            </motion.div>
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
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden pb-4">
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
          </motion.div>
        )}
      </div>
    </header>
  )
}
