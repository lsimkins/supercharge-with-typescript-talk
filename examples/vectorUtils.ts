// vectorUtils.ts
export module VectorUtils {
  export function normalize(vector: number[]) {
    const magnitude = VectorUtils.magnitude(vector);
    return vector.map(n => n/magnitude);
  }

  export function magnitude(vector: number[]) {
    return Math.sqrt(
      vector.map(Math.pow).reduce((a, b) => a + b)
    );
  }
}
