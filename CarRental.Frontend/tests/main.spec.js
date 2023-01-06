// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('localhost:3000');
  await expect(page).toHaveTitle("React App");
});



test('show display toast when account not exist', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('input[type="email"]', 'ff@ff.bb');
  await page.fill('input[type="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  const incorrectPasswordToast = await page.$('.Toastify');
  await expect(incorrectPasswordToast).toBeTruthy();
});



test('show display toast when login password is wrong', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('input[type="email"]', 'aa@aa.aa');
  await page.fill('input[type="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  const incorrectPasswordToast = await page.$('.Toastify');
  await expect(incorrectPasswordToast).toBeTruthy();
});



test('should display an warning toast when from date is after until date', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('.fromDate', '2022-12-30');
  await page.fill('.untilDate', '2022-12-29');

  const btn = await page.waitForSelector('div[class*=Hero_search_btn]');
  await btn.click();

  const toast = await page.$('div[class*=Toastify__toast--warning]');
  expect(toast).toBeTruthy();
  const toastText = await page.evaluate(toast => toast.textContent, toast);
  expect(toastText).toBe("From date can't be after until date");
});



test('should display an info toast when date is empty', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const btn = await page.waitForSelector('div[class*=Hero_search_btn]');
  await btn.click();

  const toast = await page.$('div[class*=Toastify__toast--info]');
  expect(toast).toBeTruthy();
  const toastText = await page.evaluate(toast => toast.textContent, toast);
  expect(toastText).toBe("Please select dates");
});



test('should display an warning toast when from date is before today date', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('.fromDate', '1999-12-20');
  await page.fill('.untilDate', '1999-12-29');

  const btn = await page.waitForSelector('div[class*=Hero_search_btn]');
  await btn.click();

  const toast = await page.$('div[class*=Toastify__toast--warning]');
  expect(toast).toBeTruthy();
  const toastText = await page.evaluate(toast => toast.textContent, toast);
  expect(toastText).toBe("From date can't be before today's date");
});



test('should redirect to rent page when data correct', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('.fromDate', '2025-12-20');
  await page.fill('.untilDate', '2025-12-29');

  const btn = await page.waitForSelector('div[class*=Hero_search_btn]');
  await btn.click();

  await expect(page).toHaveURL("http://localhost:3000/rent");
});



test('fill login form', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('input[type="email"]', 'test');
  await page.fill('input[type="password"]', 'test');
  await page.click('button[type="submit"]');
});



test('should be able to login and redirect to home page', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.fill('input[type="email"]', 'aa@aa.bb');
  await page.fill('input[type="password"]', 'password');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("http://localhost:3000/");
});