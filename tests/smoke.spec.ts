import { test, expect } from '@playwright/test';

const PAGES = [
    { path: '/', heading: 'David Zhou' },
    { path: '/about', heading: 'About' },
    { path: '/projects', heading: 'Projects' },
    { path: '/blog', heading: 'Blog' },
    { path: '/contact', heading: 'Contact' },
];

for (const { path, heading } of PAGES) {
    test(`/${path} — page loads with correct heading`, async ({ page }) => {
        await page.goto(path);
        await expect(page).toHaveTitle(new RegExp(heading));
    });
}

for (const { path, heading } of PAGES) {
    test(`/${path} — no console errors`, async ({ page }) => {
        const errors: string[] = [];
        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });
        await page.goto(path);
        await page.waitForLoadState('networkidle');
        expect(errors).toHaveLength(0);
    });
}

for (const { path } of PAGES) {
    test(`/${path} — nav is present`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator('nav')).toBeVisible();
    });
}

for (const { path } of PAGES) {
    test(`/${path} — footer is present`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator('footer')).toBeVisible();
    });
}
