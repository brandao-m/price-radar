function ShareButtons() {

  const currentUrl = window.location.href

  function copyLink() {
    navigator.clipboard.writeText(currentUrl)
    alert("Link copiado!")
  }

  function shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`
    window.open(url, "_blank")
  }

  return (
    <div className="flex justify-center gap-3 mt-4">

      <button
        onClick={shareWhatsApp}
        className="flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-300 transition"
      >
        ⤷ Compartilhar
      </button>

      <button
        onClick={copyLink}
        className="flex items-center gap-2 bg-slate-200 text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-300 transition"
      >
        🔗 Copiar link
      </button>

    </div>
  )
}

export default ShareButtons