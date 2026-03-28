import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/guide/',
  '/reference/',
  '/reference/prd',
  '/reference/adr',
  '/reference/requirements',
  '/zh-CN/',
  '/zh-TW/',
  '/fa/',
  '/fa-Latn/',
];

for (const route of routes) {
  test(`loads ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveTitle(/phenotype-xdd/i);
    await expect(page.locator('body')).toBeVisible();
  });
}
