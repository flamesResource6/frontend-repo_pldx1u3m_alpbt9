export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gray-900 font-semibold">electronics</p>
            <p className="text-sm text-gray-500">Vertrauen. Sicherheit. Klarer Nutzen.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Kontakt</a>
            <a href="#" className="hover:text-gray-900">Impressum</a>
            <a href="#" className="hover:text-gray-900">Datenschutz</a>
            <a href="#" className="hover:text-gray-900">AGB</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} electronics. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
