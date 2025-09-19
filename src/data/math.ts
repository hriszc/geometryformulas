import type {Locale} from '@/i18n/routing';
import {pickLocalized, type LocalizedString} from '@/lib/localize';

interface MathFormula {
  mathml: string;
  note?: LocalizedString;
}

const mathContent = {
  arithmetic: [
    {mathml: '<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math>'},
    {mathml: '<math><mrow><mi>a</mi><mo>-</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math>'},
    {mathml: '<math><mrow><mi>a</mi><mo>×</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math>'},
    {mathml: '<math><mrow><mi>a</mi><mo>÷</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math>'},
    {
      mathml:
        '<math><mrow><mover><mi>x</mi><mo>¯</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mo>…</mo><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub></mrow><mi>n</mi></mfrac></mrow></math>',
      note: {
        en: 'Average of n values',
        zh: 'n 个数的平均值'
      }
    }
  ],
  algebra: [
    {
      mathml:
        '<math display="block"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo>-</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>',
      note: {
        en: 'Quadratic formula',
        zh: '二次方程公式'
      }
    },
    {
      mathml:
        '<math><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>-</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>-</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>',
      note: {
        en: 'Slope between two points',
        zh: '两点间斜率'
      }
    },
    {
      mathml:
        '<math><mrow><mi>d</mi><mo>=</mo><msqrt><msup><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>-</mo><msub><mi>x</mi><mn>1</mn></msub></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>-</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mn>2</mn></msup></msqrt></mrow></math>',
      note: {
        en: 'Distance between two points',
        zh: '两点间距离'
      }
    }
  ],
  geometry: [
    {
      mathml: '<math><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>',
      note: {
        en: 'Area of a circle',
        zh: '圆的面积'
      }
    },
    {
      mathml: '<math><mrow><mi>V</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>',
      note: {
        en: 'Volume of a sphere',
        zh: '球体体积'
      }
    }
  ]
} satisfies Record<string, MathFormula[]>;

export function getMathSections(locale: Locale) {
  return {
    arithmetic: mathContent.arithmetic.map((entry) => ({
      mathml: entry.mathml,
      note: entry.note ? pickLocalized(entry.note, locale) : undefined
    })),
    algebra: mathContent.algebra.map((entry) => ({
      mathml: entry.mathml,
      note: entry.note ? pickLocalized(entry.note, locale) : undefined
    })),
    geometry: mathContent.geometry.map((entry) => ({
      mathml: entry.mathml,
      note: entry.note ? pickLocalized(entry.note, locale) : undefined
    }))
  };
}
