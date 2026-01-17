import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'ATS.PRO | Neural Match Score';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '20%',
            width: '600px',
            height: '600px',
            background: 'rgba(139, 92, 246, 0.15)',
            filter: 'blur(100px)',
            borderRadius: '50%',
          }}
        />

        {/* Branding */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
           <div style={{ background: '#8b5cf6', padding: '10px', borderRadius: '12px', marginRight: '15px' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" />
              </svg>
           </div>
           <span style={{ fontSize: '48px', fontWeight: '900', color: 'white', letterSpacing: '-2px', fontStyle: 'italic' }}>
            ATS<span style={{ color: '#8b5cf6' }}>.PRO</span>
           </span>
        </div>

        {/* Main Title */}
        <h1 style={{ fontSize: '80px', color: 'white', fontWeight: '900', margin: 0, letterSpacing: '-4px', textAlign: 'center', textTransform: 'uppercase' }}>
          NEURAL AUDIT <br /> COMPLETE.
        </h1>

        <p style={{ fontSize: '24px', color: '#64748b', marginTop: '20px', fontWeight: 'bold', letterSpacing: '4px' }}>
          VERIFIED 2026 BENCHMARK
        </p>

        {/* Footer info */}
        <div style={{ position: 'absolute', bottom: '60px', color: '#475569', fontSize: '18px', fontWeight: 'bold', letterSpacing: '2px' }}>
          LOCAL-FIRST • ZERO-KNOWLEDGE • FAANG-GRADE
        </div>
      </div>
    ),
    { ...size }
  );
}
