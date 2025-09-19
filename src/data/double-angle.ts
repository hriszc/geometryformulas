export interface DoubleAngleFormula {
  mathml: string;
}

export const doubleAngleFormulas: DoubleAngleFormula[] = [
  {
    mathml:
      '<math display="block"><mrow><mi>sin</mi><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo><mo>=</mo><mn>2</mn><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo><mi>cos</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></math>'
  },
  {
    mathml:
      '<math display="block"><mrow><mi>cos</mi><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mi>cos</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><msup><mrow><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><msup><mrow><mi>cos</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>-</mo><mn>1</mn><mo>=</mo><mn>1</mn><mo>-</mo><mn>2</mn><msup><mrow><mi>sin</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow></math>'
  },
  {
    mathml:
      '<math display="block"><mrow><mi>tan</mi><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>tan</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mrow><mn>1</mn><mo>-</mo><msup><mrow><mi>tan</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow></mfrac></mrow></math>'
  }
];
