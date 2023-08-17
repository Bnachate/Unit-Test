import { describe, it, expect } from 'vitest'
import { generateTokenPromise, generateToken } from './async-example';

describe('asynchronious test', () =>{
    it('should generate a token value', (done) => {
        const testUserEmail = 'test@test.fr';
        generateToken(testUserEmail, (err, token) => {
            try {
              expect(token).toBeDefined();
              // expect(token).toBe(2);
              done();
            }catch (err) {
            done(err);
            }
        });
    });
    it('should generate a token value', () => {
        const testUserEmail = 'test@test.fr';
        return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
        // return expect(generateTokenPromise(testUserEmail)).resolves.toBe(34);
    });
    it('should generate a token value', async () => {
        const testUserEmail = 'test@test.fr';
        const token = await generateTokenPromise(testUserEmail);
        expect(token).toBeDefined();
    });
});