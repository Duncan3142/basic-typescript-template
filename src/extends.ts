export interface Extends {
	covariant: {
		scalar: {
			good: 0 | 1 extends number ? true : false
			bad: number extends 0 | 1 ? true : false
		}
		object: {
			good: { a: 0 | 1; b: "meow" | "woof" } extends { a: number; b: string } ? true : false
			bad: { a: 0 | 1; b: "meow" | "woof" } extends { a: number; b: string; c: symbol }
				? true
				: false
		}
	}
	contravariant: {
		good: ((a: number) => string) extends (a: 0 | 1) => string ? true : false
		bad: ((a: 0 | 1) => string) extends (a: number) => string ? true : false
	}
}
