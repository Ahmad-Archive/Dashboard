export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="rounded-2xl flex items-baseline mb-6" style={{ width:'56', height:'56', background:'linear-gradient(135deg, #4f8ef7, #7c6ff7)' }}>
        <span style={{ color: '#fff', fontWeight: '800', fontSize: '24', fontFamily: 'sans-serif' }}>A</span>
      </div>

      <div className="flex gap-1.5 mb-6">
        {[0, 1, 2].map(i => (
          <div key={i} className="rounded-full" style={{ width: '8px', height: '8px', background: '#4f8ef7', animation: `bounce ease-in-out ${i * 0.2}s infinite` }}></div>
        ))}
      </div>

      <p style={{ fontSize: '14', color: '#6b7280' }}>Loading...</p>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-5px);
            opacity: 0.5;
          }
        }
        `}
      </style>
    </div>
  )
}
