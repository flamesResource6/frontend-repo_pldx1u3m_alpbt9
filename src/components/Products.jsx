import { useEffect, useMemo, useState } from 'react'
import { Image as ImageIcon, Video, Tag, DollarSign, CheckCircle2, AlertCircle, ShoppingCart, Plus } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

function Media({ images = [], video }) {
  if (video) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
        <video className="h-full w-full object-cover" src={video} controls playsInline />
      </div>
    )
  }
  const first = images?.[0]
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100">
      {first ? (
        <img src={first} alt="Produktbild" className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full w-full place-items-center text-gray-400">
          <ImageIcon />
        </div>
      )}
    </div>
  )
}

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    in_stock: true,
    image_urls: '', // comma separated
    video_url: '',
  })

  const apiBase = useMemo(() => backend.replace(/\/$/, ''), [])

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${apiBase}/api/products`)
      if (!res.ok) throw new Error('Fehler beim Laden der Produkte')
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || undefined,
        price: parseFloat(form.price),
        category: form.category.trim() || undefined,
        in_stock: !!form.in_stock,
        image_urls: form.image_urls
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        video_url: form.video_url.trim() || undefined,
      }
      const res = await fetch(`${apiBase}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Produkt konnte nicht angelegt werden')
      // reset + reload
      setForm({ title: '', description: '', price: '', category: '', in_stock: true, image_urls: '', video_url: '' })
      await load()
      alert('Produkt gespeichert')
    } catch (e) {
      setError(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleBuy = async (id) => {
    try {
      const res = await fetch(`${apiBase}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: id, quantity: 1 }),
      })
      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || 'Checkout fehlgeschlagen')
      }
      const data = await res.json()
      alert(`Bezahlung erfolgreich (Demo). Bestellnummer: ${data.order_id}`)
    } catch (e) {
      alert('Fehler beim Checkout: ' + e.message)
    }
  }

  return (
    <section id="produkte" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Produkte präsentieren und verkaufen</h2>
          <p className="mt-3 text-gray-600">Füge Titel, Beschreibung, Bilder und Videos hinzu – abschließend mit einem Klick verkaufen.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleCreate} className="lg:col-span-1 rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 text-gray-900 font-medium">
              <Plus size={18} /> Neues Produkt hinzufügen
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-gray-700">Titel</label>
                <input name="title" value={form.title} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Beschreibung</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 flex items-center gap-1"><DollarSign size={14}/> Preis (EUR)</label>
                  <input type="number" step="0.01" min="0" name="price" value={form.price} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 flex items-center gap-1"><Tag size={14}/> Kategorie</label>
                  <input name="category" value={form.category} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 flex items-center gap-1"><ImageIcon size={14}/> Bild-URLs (kommagetrennt)</label>
                <input name="image_urls" value={form.image_urls} onChange={handleChange} placeholder="https://...jpg, https://...png" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 flex items-center gap-1"><Video size={14}/> Video-URL (optional)</label>
                <input name="video_url" value={form.video_url} onChange={handleChange} placeholder="https://...mp4" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              </div>
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" name="in_stock" checked={form.in_stock} onChange={handleChange} className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                Auf Lager
              </label>
            </div>
            <button type="submit" disabled={submitting} className="mt-6 inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-white font-medium hover:bg-gray-800 disabled:opacity-60">
              {submitting ? 'Speichern…' : 'Produkt speichern'}
            </button>
            {error && (
              <p className="mt-3 flex items-center gap-2 text-sm text-red-600"><AlertCircle size={16}/> {error}</p>
            )}
            {!error && (
              <p className="mt-3 flex items-center gap-2 text-sm text-emerald-600"><CheckCircle2 size={16}/> DSGVO-konforme Speicherung</p>
            )}
          </form>

          <div className="lg:col-span-2">
            {loading ? (
              <div className="grid place-items-center h-48 text-gray-500">Lade Produkte…</div>
            ) : items.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
                Noch keine Produkte. Füge rechts ein Produkt hinzu.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {items.map((p) => (
                  <div key={p.id} className="rounded-xl border border-gray-200 bg-white p-5">
                    <Media images={p.image_urls} video={p.video_url} />
                    <div className="mt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                          {p.category && <p className="text-sm text-gray-500">{p.category}</p>}
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{p.price.toFixed ? p.price.toFixed(2) : p.price} €</p>
                      </div>
                      {p.description && <p className="mt-2 text-gray-600 line-clamp-3">{p.description}</p>}
                      <div className="mt-4 flex items-center gap-3">
                        <button onClick={() => handleBuy(p.id)} className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-gray-800">
                          <ShoppingCart size={16} className="mr-2"/> Jetzt kaufen
                        </button>
                        <a href="#cta" className="text-sm font-medium text-gray-700 hover:text-gray-900">Mehr erfahren</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
