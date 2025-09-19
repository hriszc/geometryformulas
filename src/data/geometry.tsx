import type {ReactNode} from 'react';
import type {Locale} from '@/i18n/routing';
import {pickLocalized, type LocalizedString} from '@/lib/localize';

interface Formula {
  label: LocalizedString;
  mathml: string;
  note?: LocalizedString;
}

interface Shape {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  variables: LocalizedString[];
  formulas: Formula[];
  diagrams?: ReactNode[];
}

const triangleDiagram = (
  <svg viewBox="0 0 200 150" className="h-32 w-full" role="img" aria-label="Triangle">
    <polygon points="20,120 170,120 70,30" fill="none" stroke="#111827" strokeWidth="2" />
    <line x1="70" y1="30" x2="70" y2="120" stroke="#111827" strokeDasharray="5 4" strokeWidth="1" />
    <path d="M70 120h10v-10" fill="none" stroke="#111827" strokeWidth="1" />
    <text x="90" y="135" fontSize="12">b</text>
    <text x="72" y="75" fontSize="12">h</text>
  </svg>
);

const circleDiagram = (
  <svg viewBox="0 0 200 200" className="h-32 w-full" role="img" aria-label="Circle">
    <circle cx="100" cy="100" r="70" fill="#c7d2fe" stroke="#111827" strokeWidth="2" />
    <line x1="100" y1="100" x2="170" y2="100" stroke="#111827" strokeWidth="1" />
    <text x="140" y="92" fontSize="12">r</text>
  </svg>
);

const cylinderDiagram = (
  <svg viewBox="0 0 200 200" className="h-32 w-full" role="img" aria-label="Cylinder">
    <ellipse cx="100" cy="40" rx="60" ry="20" fill="#e0e7ff" stroke="#111827" strokeWidth="2" />
    <ellipse cx="100" cy="160" rx="60" ry="20" fill="#c7d2fe" stroke="#111827" strokeWidth="2" />
    <line x1="40" y1="40" x2="40" y2="160" stroke="#111827" strokeWidth="2" />
    <line x1="160" y1="40" x2="160" y2="160" stroke="#111827" strokeWidth="2" />
    <text x="162" y="104" fontSize="12">h</text>
  </svg>
);

const coneDiagram = (
  <svg viewBox="0 0 200 200" className="h-32 w-full" role="img" aria-label="Cone">
    <ellipse cx="100" cy="160" rx="60" ry="20" fill="#c7d2fe" stroke="#111827" strokeWidth="2" />
    <line x1="40" y1="160" x2="100" y2="40" stroke="#111827" strokeWidth="2" />
    <line x1="160" y1="160" x2="100" y2="40" stroke="#111827" strokeWidth="2" />
    <line x1="100" y1="40" x2="100" y2="160" stroke="#111827" strokeDasharray="5 4" strokeWidth="1" />
    <text x="104" y="96" fontSize="12">h</text>
  </svg>
);

const shapes2d: Shape[] = [
  {
    id: 'triangle',
    title: {en: 'Triangle', zh: '三角形'},
    variables: [
      {en: 'Perimeter P', zh: '周长 P'},
      {en: 'Area A', zh: '面积 A'},
      {en: 'Semi-perimeter s', zh: '半周长 s'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mi>c</mi></mrow></math>`
      },
      {
        label: {en: 'Area (base b, height h)', zh: '面积（底 b，高 h）'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>b</mi><mi>h</mi></mrow></math>`
      },
      {
        label: {en: "Area (Heron's formula)", zh: '面积（海伦公式）'},
        mathml:
          `<math><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><mi>s</mi><mo>(</mo><mi>s</mi><mo>-</mo><mi>a</mi><mo>)</mo><mo>(</mo><mi>s</mi><mo>-</mo><mi>b</mi><mo>)</mo><mo>(</mo><mi>s</mi><mo>-</mo><mi>c</mi><mo>)</mo></mrow></msqrt></mrow></math>`
      }
    ],
    diagrams: [triangleDiagram]
  },
  {
    id: 'right-triangle',
    title: {en: 'Right Triangle', zh: '直角三角形'},
    variables: [
      {en: 'Legs a, b', zh: '直角边 a、b'},
      {en: 'Hypotenuse c', zh: '斜边 c'}
    ],
    formulas: [
      {
        label: {en: 'Pythagorean theorem', zh: '勾股定理'},
        mathml: `<math><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow></math>`
      }
    ]
  },
  {
    id: 'equilateral-triangle',
    title: {en: 'Equilateral Triangle', zh: '等边三角形'},
    variables: [
      {en: 'Side a', zh: '边长 a'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mn>3</mn><mi>a</mi></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>4</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup></mrow></math>`
      }
    ]
  },
  {
    id: 'square',
    title: {en: 'Square', zh: '正方形'},
    variables: [
      {en: 'Side s', zh: '边长 s'},
      {en: 'Diagonal d', zh: '对角线 d'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mn>4</mn><mi>s</mi></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Diagonal', zh: '对角线'},
        mathml: `<math><mrow><mi>d</mi><mo>=</mo><mi>s</mi><msqrt><mn>2</mn></msqrt></mrow></math>`
      }
    ]
  },
  {
    id: 'rectangle',
    title: {en: 'Rectangle', zh: '矩形'},
    variables: [
      {en: 'Length l', zh: '长 l'},
      {en: 'Width w', zh: '宽 w'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>l</mi><mo>+</mo><mi>w</mi><mo>)</mo></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mi>l</mi><mi>w</mi></mrow></math>`
      },
      {
        label: {en: 'Diagonal', zh: '对角线'},
        mathml: `<math><mrow><mi>d</mi><mo>=</mo><msqrt><msup><mi>l</mi><mn>2</mn></msup><mo>+</mo><msup><mi>w</mi><mn>2</mn></msup></msqrt></mrow></math>`
      }
    ]
  },
  {
    id: 'parallelogram',
    title: {en: 'Parallelogram', zh: '平行四边形'},
    variables: [
      {en: 'Base b', zh: '底 b'},
      {en: 'Side a', zh: '侧边 a'},
      {en: 'Height h', zh: '高 h'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mi>b</mi><mi>h</mi></mrow></math>`
      }
    ]
  },
  {
    id: 'trapezoid',
    title: {en: 'Trapezoid', zh: '梯形'},
    variables: [
      {en: 'Bases b₁, b₂', zh: '上底 b₁、下底 b₂'},
      {en: 'Height h', zh: '高 h'}
    ],
    formulas: [
      {
        label: {en: 'Area', zh: '面积'},
        mathml:
          `<math><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>(</mo><msub><mi>b</mi><mn>1</mn></msub><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mo>)</mo><mi>h</mi></mrow></math>`
      }
    ]
  },
  {
    id: 'circle',
    title: {en: 'Circle', zh: '圆'},
    variables: [
      {en: 'Radius r', zh: '半径 r'},
      {en: 'Diameter d', zh: '直径 d'},
      {en: 'Circumference C', zh: '周长 C'}
    ],
    formulas: [
      {
        label: {en: 'Circumference', zh: '周长'},
        mathml: `<math><mrow><mi>C</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>r</mi></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>`
      }
    ],
    diagrams: [circleDiagram]
  },
  {
    id: 'sector',
    title: {en: 'Circular Sector', zh: '扇形'},
    variables: [
      {en: 'Radius r', zh: '半径 r'},
      {en: 'Angle θ (radians)', zh: '圆心角 θ（弧度）'}
    ],
    formulas: [
      {
        label: {en: 'Arc length', zh: '弧长'},
        mathml: `<math><mrow><mi>s</mi><mo>=</mo><mi>r</mi><mi>θ</mi></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>r</mi><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>`
      }
    ]
  },
  {
    id: 'ellipse',
    title: {en: 'Ellipse', zh: '椭圆'},
    variables: [
      {en: 'Semi-major axis a', zh: '长半轴 a'},
      {en: 'Semi-minor axis b', zh: '短半轴 b'}
    ],
    formulas: [
      {
        label: {en: 'Area', zh: '面积'},
        mathml: `<math><mrow><mi>A</mi><mo>=</mo><mi>π</mi><mi>a</mi><mi>b</mi></mrow></math>`
      },
      {
        label: {en: 'Approximate perimeter', zh: '近似周长'},
        mathml:
          `<math><mrow><mi>P</mi><mo>≈</mo><mi>π</mi><mo>[</mo><mn>3</mn><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo><mo>-</mo><msqrt><mo>(</mo><mn>3</mn><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo><mo>(</mo><mi>a</mi><mo>+</mo><mn>3</mn><mi>b</mi><mo>)</mo></msqrt><mo>]</mo></mrow></math>`
      }
    ]
  },
  {
    id: 'regular-polygon',
    title: {en: 'Regular n-gon', zh: '正 n 边形'},
    variables: [
      {en: 'Side length a', zh: '边长 a'},
      {en: 'Apothem aₚ', zh: '中垂线 aₚ'},
      {en: 'Perimeter P', zh: '周长 P'},
      {en: 'Number of sides n', zh: '边数 n'}
    ],
    formulas: [
      {
        label: {en: 'Perimeter', zh: '周长'},
        mathml: `<math><mrow><mi>P</mi><mo>=</mo><mi>n</mi><mi>a</mi></mrow></math>`
      },
      {
        label: {en: 'Area', zh: '面积'},
        mathml:
          `<math><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>P</mi><msub><mi>a</mi><mi>p</mi></msub></mrow></math>`
      }
    ]
  }
];

const shapes3d: Shape[] = [
  {
    id: 'cube',
    title: {en: 'Cube', zh: '正方体'},
    variables: [
      {en: 'Edge a', zh: '棱长 a'}
    ],
    formulas: [
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mn>6</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></mrow></math>`
      }
    ]
  },
  {
    id: 'rectangular-prism',
    title: {en: 'Rectangular Prism', zh: '长方体'},
    variables: [
      {en: 'Length l', zh: '长 l'},
      {en: 'Width w', zh: '宽 w'},
      {en: 'Height h', zh: '高 h'}
    ],
    formulas: [
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml:
          `<math><mrow><mi>SA</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>l</mi><mi>w</mi><mo>+</mo><mi>l</mi><mi>h</mi><mo>+</mo><mi>w</mi><mi>h</mi><mo>)</mo></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mi>l</mi><mi>w</mi><mi>h</mi></mrow></math>`
      }
    ]
  },
  {
    id: 'triangular-prism',
    title: {en: 'Triangular Prism', zh: '三棱柱'},
    variables: [
      {en: 'Base area B', zh: '底面积 B'},
      {en: 'Height h', zh: '高 h'}
    ],
    formulas: [
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mn>2</mn><mi>B</mi><mo>+</mo><mi>P</mi><mi>h</mi></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mi>B</mi><mi>h</mi></mrow></math>`
      }
    ]
  },
  {
    id: 'cylinder',
    title: {en: 'Cylinder', zh: '圆柱'},
    variables: [
      {en: 'Radius r', zh: '半径 r'},
      {en: 'Height h', zh: '高 h'}
    ],
    formulas: [
      {
        label: {en: 'Lateral area', zh: '侧面积'},
        mathml: `<math><mrow><mi>LA</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>r</mi><mi>h</mi></mrow></math>`
      },
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>r</mi><mo>(</mo><mi>r</mi><mo>+</mo><mi>h</mi><mo>)</mo></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></mrow></math>`
      }
    ],
    diagrams: [cylinderDiagram]
  },
  {
    id: 'cone',
    title: {en: 'Right Circular Cone', zh: '直圆锥'},
    variables: [
      {en: 'Radius r', zh: '底面半径 r'},
      {en: 'Height h', zh: '高 h'},
      {en: 'Slant height s', zh: '母线 s'}
    ],
    formulas: [
      {
        label: {en: 'Slant height', zh: '母线'},
        mathml: `<math><mrow><mi>s</mi><mo>=</mo><msqrt><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></msqrt></mrow></math>`
      },
      {
        label: {en: 'Lateral area', zh: '侧面积'},
        mathml: `<math><mrow><mi>LA</mi><mo>=</mo><mi>π</mi><mi>r</mi><mi>s</mi></mrow></math>`
      },
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mi>π</mi><mi>r</mi><mo>(</mo><mi>r</mi><mo>+</mo><mi>s</mi><mo>)</mo></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>h</mi></mrow></math>`
      }
    ],
    diagrams: [coneDiagram]
  },
  {
    id: 'sphere',
    title: {en: 'Sphere', zh: '球体'},
    variables: [
      {en: 'Radius r', zh: '半径 r'}
    ],
    formulas: [
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>`
      }
    ]
  },
  {
    id: 'hemisphere',
    title: {en: 'Hemisphere', zh: '半球'},
    variables: [
      {en: 'Radius r', zh: '半径 r'}
    ],
    formulas: [
      {
        label: {en: 'Curved surface area', zh: '曲面面积'},
        mathml: `<math><mrow><mi>CSA</mi><mo>=</mo><mn>2</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Total surface area', zh: '总表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><mn>3</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>r</mi><mn>3</mn></msup></mrow></math>`
      }
    ]
  },
  {
    id: 'square-pyramid',
    title: {en: 'Square Pyramid', zh: '正四棱锥'},
    variables: [
      {en: 'Base edge a', zh: '底边 a'},
      {en: 'Height h', zh: '高 h'},
      {en: 'Slant height s', zh: '斜高 s'}
    ],
    formulas: [
      {
        label: {en: 'Slant height', zh: '斜高'},
        mathml:
          `<math><mrow><mi>s</mi><mo>=</mo><msqrt><mrow><msup><mfrac><mi>a</mi><mn>2</mn></mfrac><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>`
      },
      {
        label: {en: 'Surface area', zh: '表面积'},
        mathml: `<math><mrow><mi>SA</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>s</mi></mrow></math>`
      },
      {
        label: {en: 'Volume', zh: '体积'},
        mathml: `<math><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>h</mi></mrow></math>`
      }
    ]
  }
];

export function getGeometryContent(locale: Locale) {
  return {
    planar: shapes2d.map((shape) => ({
      id: shape.id,
      title: pickLocalized(shape.title, locale),
      description: shape.description ? pickLocalized(shape.description, locale) : undefined,
      variables: shape.variables.map((value) => pickLocalized(value, locale)),
      formulas: shape.formulas.map((formula) => ({
        label: pickLocalized(formula.label, locale),
        mathml: formula.mathml,
        note: formula.note ? pickLocalized(formula.note, locale) : undefined
      })),
      diagrams: shape.diagrams
    })),
    solids: shapes3d.map((shape) => ({
      id: shape.id,
      title: pickLocalized(shape.title, locale),
      description: shape.description ? pickLocalized(shape.description, locale) : undefined,
      variables: shape.variables.map((value) => pickLocalized(value, locale)),
      formulas: shape.formulas.map((formula) => ({
        label: pickLocalized(formula.label, locale),
        mathml: formula.mathml,
        note: formula.note ? pickLocalized(formula.note, locale) : undefined
      })),
      diagrams: shape.diagrams
    }))
  };
}
