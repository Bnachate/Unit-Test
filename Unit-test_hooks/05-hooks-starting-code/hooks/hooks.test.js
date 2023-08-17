import { it, expect, concurrent, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user = new User(testEmail);

beforeAll(() => {
  console.log('beforeAll', user.email)
})

beforeEach(() => {
  // user = new User(testEmail);
  console.log('beforeEach', user.email)
});

afterAll(() => {
  console.log('afterAll', user.email)
});

afterEach(() => {
//   user = new User(testEmail);
  console.log('afterEach', user.email)
})

it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent ('should still have an email property after clearing the email', () => {
  
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
