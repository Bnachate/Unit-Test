import { describe, it, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
    const statusCode = 205
    const message = 'ony string can be entered in this input'
    const data = {
        title: 'Uncharted',
        content: 'Trop bien !',
        created: '2023-08-15T07:53:46.836Z'
    }
    const httpError = new HttpError(statusCode, message, data);

    it('should have property statusCode, message, data', () => {
        expect(httpError).toHaveProperty('statusCode');
        expect(httpError).toHaveProperty('message');
        expect(httpError).toHaveProperty('data');
    });

    it('should have an statusCode, message, data when we provide it', () => {
        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBeDefined();
    });
});

describe('class ValidationError', () => {
    const message = 'ony string can be entered in this input'
    const validationError = new ValidationError(message)

    it('should have property message', () => {
        expect(validationError).toHaveProperty('message');
    });

    it('should have an message when we provide it', () => {
      expect(validationError.message).toBe(message);
    });
});
