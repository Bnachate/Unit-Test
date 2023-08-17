import { describe, it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import  writeData from './io';

describe('writeData', () => {
    vi.mock('fs');
    vi.mock('path', () =>  {
        return {
            default: {
                join: (...args) => {
                    return args[args.length - 1];
                }
            }
        };
    });
    it('should execute the writeFile method', () => {
      const testData = 'Testytes';
      const testFilename = 'text.txt';
      writeData(testData, testFilename);
    //   return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // writeData(testData, testFilename)
    // expect(fs.writeFile).toBeCalled();

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
    });

    it('should return a promise that resolves to no value if called correctly', () => {
      const testData = 'Testytes';
      const testFilename = 'text.txt';
      writeData(testData, testFilename);
    //   return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    // writeData(testData, testFilename)
    // expect(fs.writeFile).toBeCalled();

    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
    });
});