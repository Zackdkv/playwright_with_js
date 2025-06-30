import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('');
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('iphone');
  await page.getByRole('link', { name: 'iphone 15 in Mobiles' }).click();
  await page.getByRole('link', { name: 'Bestseller Apple iPhone 15 (Black, 128 GB) Add to Compare Apple iPhone 15 (' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Bestseller Apple iPhone 15 (Black, 128 GB) Add to Compare Apple iPhone 15 (' }).click({
    button: 'right'
  });
  await expect(page.locator('#container')).toContainText('Apple iPhone 15 (Black, 128 GB)');
});