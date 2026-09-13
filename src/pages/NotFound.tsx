import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: '#0d0f12' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-10"
          style={{ width: 600, height: 600 }}
        />
      </div>

      <div className="relative text-center max-w-md">
        <div className="mb-6 relative">
          <span
            style={{
              fontSize: 120,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: '#4f8ef7',
              lineHeight: 1,
            }}
          >
            404
          </span>
        </div>

        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#e8eaed', marginBottom: 10, letterSpacing: '-0.02em' }}>
          Halaman tidak ditemukan
        </h1>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, marginBottom: 32 }}>
          Halaman yang kamu cari tidak ditemukan, dipindahkan, atau kamu tidak memiliki izin untuk melihatnya.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="default"
            onClick={() => navigate(-1)}
            className="rounded-xl p-[22px] text-sm font-medium transition-all"
            style={{ background: '#1c2030', color: '#9aa0b0', border: '1px solid #1f2433' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e8eaed')}
            onMouseLeave={e => (e.currentTarget.style.color = '#9aa0b0')}
          >
            Go back
          </Button>
          <Button variant="default"
            onClick={() => navigate('/dashboard')}
            className="rounded-xl p-[22px] text-sm font-medium transition-all hover:text-[#64748b]"
            style={{ background: 'rgba(79, 142, 247, 0.2)', color: '#fff'}}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
