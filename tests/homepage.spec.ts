import { test, expect } from '@playwright/test';

test('homepage has Astro in title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Astro/);
});
