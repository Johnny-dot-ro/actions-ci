import { describe, it, expect } from "vitest"

export function add(...args: number[]): number {
    return args.reduce((a, b) => a + b, 0)
}

describe("add", () => {
    it("adds two numbers", () => {
        expect(add(2, 3)).toBe(5)
    })
})
