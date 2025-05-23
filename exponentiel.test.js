import { describe, test, expect } from '@jest/globals';
import { Exponentiel } from './exponentiel';

describe('Exponentiel function tests', () => {
    test('should return 1 for Exponentiel(0)', () => {
        expect(Exponentiel(0)).toBeCloseTo(1);
    });

    test('should return Math.exp(1) for Exponentiel(1)', () => {
        expect(Exponentiel(1)).toBeCloseTo(Math.exp(1));
    });

    test('should return Math.exp(-1) for Exponentiel(-1)', () => {
        expect(Exponentiel(-1)).toBeCloseTo(Math.exp(-1));
    });

    test('should return Math.exp(2) for Exponentiel(2)', () => {
        expect(Exponentiel(2)).toBeCloseTo(Math.exp(2));
    });
});