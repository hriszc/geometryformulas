import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://geometryformulas.example'),
  title: {
    default: 'Geometry Formulas Knowledge Base',
    template: '%s | Geometry Formulas Knowledge Base'
  },
  description:
    'Printable geometry and math formula references covering 2D shapes, 3D solids, trigonometry and algebra.',
  openGraph: {
    type: 'website',
    url: 'https://geometryformulas.example',
    title: 'Geometry Formulas Knowledge Base',
    description:
      'Printable geometry and math formula references covering 2D shapes, 3D solids, trigonometry and algebra.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Geometry Formulas Knowledge Base'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geometry Formulas Knowledge Base',
    description:
      'Printable geometry and math formula references covering 2D shapes, 3D solids, trigonometry and algebra.',
    images: ['/opengraph-image']
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}
