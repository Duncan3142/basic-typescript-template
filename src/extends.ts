export interface Extends {
	covariant: {
		scalar: {
			true: true extends boolean ? true : false
			false: boolean extends true ? true : false
		}
		object: {
			true: { a: true; b: "string" } extends { a: boolean; b: string } ? true : false
			false: { a: true; b: "string" } extends { a: boolean; b: string; c: object }
				? true
				: false
		}
	}
	contravariant: {
		true: ((a: boolean) => boolean) extends (a: true) => boolean ? true : false
		false: ((a: true) => boolean) extends (a: boolean) => boolean ? true : false
	}
}
