import {ImageResponse} from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px',
          background: '#0f172a',
          color: '#f8fafc',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        <div style={{fontSize: 64, fontWeight: 700, marginBottom: 24}}>Geometry Formulas</div>
        <div style={{fontSize: 32, maxWidth: 760}}>
          Printable references for 2D shapes, 3D solids, trigonometry and algebra.
        </div>
      </div>
    ),
    size
  );
}
