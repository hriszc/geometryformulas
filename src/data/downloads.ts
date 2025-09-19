import type {Locale} from '@/i18n/routing';
import type {LocalizedString} from '@/lib/localize';

export interface DownloadLink {
  href: string;
  title: LocalizedString;
  description: LocalizedString;
}

export const downloadLinks: DownloadLink[] = [
  {
    href: '/pdfs/Keystone_Formula_Sheet-Geometry.pdf',
    title: {
      en: 'Keystone Geometry Formula Sheet',
      zh: 'Keystone 几何公式手册'
    },
    description: {
      en: 'Concise reference aligned with Keystone exam topics.',
      zh: '与 Keystone 考试主题一致的精简速查表。'
    }
  },
  {
    href: '/pdfs/PDF-LINK_M-G2_Geometric_Formulas.pdf',
    title: {
      en: 'M-G2 Geometric Formulas',
      zh: 'M-G2 几何公式汇编'
    },
    description: {
      en: 'Collection of 2D and 3D formulas with illustrative diagrams.',
      zh: '涵盖二维与三维公式，包含示意图。'
    }
  },
  {
    href: '/pdfs/Math_Resources_Geometry_Formulas.pdf',
    title: {
      en: 'Math Resources Geometry Formulas',
      zh: '数学资源：几何公式'
    },
    description: {
      en: 'General resource covering common geometry relationships.',
      zh: '涵盖常见几何关系的通用资料。'
    }
  },
  {
    href: '/pdfs/geometric-formulas.pdf',
    title: {
      en: 'Comprehensive Geometric Formulas',
      zh: '几何公式全书'
    },
    description: {
      en: 'Compact sheet summarizing fundamental equations.',
      zh: '汇总基础公式的精简手册。'
    }
  }
];

export function getDownloadLinks(locale: Locale) {
  return downloadLinks.map((item) => ({
    href: item.href,
    title: item.title[locale] ?? item.title.en,
    description: item.description[locale] ?? item.description.en
  }));
}
