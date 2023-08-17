import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showError } from './dom'
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);
beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
})
describe('DOM', () => {
    it('should add an error paragraph to the id="errors" element', () => {
        showError('Test');

        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph).not.toBeNull();
    });
    it('should not contain an error paragraph initially', () => {
        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph).toBeNull();
    });
    it('should provided message in the error paragraph', () => {
        const testErrorMessage = "Testy";
        showError(testErrorMessage);

        const errorsEl = document.getElementById('errors');
        const errorParagraph = errorsEl.firstElementChild;
        expect(errorParagraph.textContent).toBe(testErrorMessage);
    });
});