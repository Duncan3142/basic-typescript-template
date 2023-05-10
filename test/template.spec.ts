import { describe, expect, it } from "vitest"

describe("template", () => {
	it("should pass", () => {
		const num = Math.random()
		expect(num).toBeGreaterThanOrEqual(0)
		expect(num).toBeLessThan(1)
	})
})
