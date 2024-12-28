export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  readonly color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('this is very bad trianlge');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('this is very bad triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  readonly color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public readonly radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('this is very bad circle');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  readonly color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public readonly width: number,
    public readonly height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('this is very bad rectangle');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
