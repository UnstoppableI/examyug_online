export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login Required</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <p className="text-muted-foreground mb-6">Please log in to continue</p>
        <a href="/login" className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90">
          Go to Login
        </a>
      </div>
    </div>
  )
}
