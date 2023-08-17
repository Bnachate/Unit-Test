import { it, expect } from 'vitest'
import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
    const text = '';
    const errorText = 'Please  enter a name and a content'
    const validationFn = () => validateNotEmpty(text, errorText)

    expect(text).toBeTypeOf('string');
    expect(text).toBe('');
    expect(errorText).toBeTypeOf('string');
    expect(text.trim()).toHaveLength(0);
    expect(validationFn).toThrow();
});

it('should throw an error if an empty with many space string is provided as a value', () => {
    const text = '   ';
    const validationFn = () => validateNotEmpty(text)
    expect(validationFn).toThrow();
});
it('should throw an error with the provided error message', () => {
    const text = '';
    const errorText = 'should have an error';

    const validationFn = () => validateNotEmpty(text, errorText);
    expect(validationFn).toThrow(errorText);
});