import { describe, test, expect } from '@jest/globals'
import { Modulo } from './modulo.js'

describe('Modulo function tests', () => {
    test('should return correct remainder for positive numbers', () => {
        expect(Modulo(10, 3)).toBe(1)
        expect(Modulo(20, 5)).toBe(0)
    })

    test('should return dividend when divisor is larger than dividend', () => {
        expect(Modulo(3, 10)).toBe(3)
    })

    test('should handle negative dividend', () => {
        expect(Modulo(-10, 3)).toBe(-1)
    })

    test('should handle negative divisor', () => {
        expect(Modulo(10, -3)).toBe(1)
    })

    test('should handle both dividend and divisor as negative', () => {
        expect(Modulo(-10, -3)).toBe(-1)
    })
})
