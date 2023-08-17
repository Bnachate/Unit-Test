import { describe, it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData'};

describe('http request', () => {
    const testFetch = vi.fn((url, options) => {
        return new Promise((resolve, reject) => {
            if (typeof options.body !== 'string') {
                return reject('Not a string.');
            }
            const testResponse = {
                ok: true,
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData);
                    });
                },
            };
            resolve(testResponse)
        });
    });
    vi.stubGlobal('fetch', testFetch);

    it('should return any available responsa data', () => {
        const testData = { data: 'testy' }
        return expect(sendDataRequest(testData)).resolves.toBe(testResponseData);
    });
    // better way to test that is :
    it('shoud convert the provided data to JSON before sending the request', async() => {
        const testData = { data: 'testy' }
        let errorMessage;
        try {
            await expect(sendDataRequest(testData));
        } catch (error) {
            errorMessage = error;
        }
        expect(errorMessage).toBeUndefined();
    });

    it('should throw an HttpError', () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const testResponse = {
                    ok: false,
                    json() {
                        return new Promise((resolve, reject) => {
                            resolve(testResponseData);
                        });
                    },
                };
                resolve(testResponse)
            });
        });
        const testData = { data: 'testy' }
        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
        // return expect(sendDataRequest(testData)).rejects.toThrow(/Sending the request failed./);
    });
});