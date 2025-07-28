import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Search' }).fill('J');
  await page.getByRole('combobox', { name: 'Search' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Search' }).fill('Java');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DJava%26sca_esv%3D66a2fff39d7a4bd5%26source%3Dhp%26ei%3DDjRMaPOKD_enseMPsLmvoQQ%26iflsig%3DAOw8s4IAAAAAaExCHrhJ9OyC_64cV9SpEkQiWQlBLb_P%26ved%3D0ahUKEwjzybmqzO6NAxX3U2wGHbDcK0QQ4dUDCA8%26uact%3D5%26oq%3DJava%26gs_lp%3DEgdnd3Mtd2l6IgRKYXZhMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABEiOW1DhCVjfDnABeACQAQCYAY8BoAGKBKoBAzAuNLgBA8gBAPgBAZgCBaAC4QSoAgrCAgoQABgDGOoCGI8BwgINEAAYgAQYsQMYigUYCsICDhAuGIAEGLEDGNEDGMcBwgIIEC4YgAQYsQPCAg4QLhiABBixAxiDARiKBcICBRAuGIAEwgILEC4YgAQY0QMYxwHCAgsQLhiABBixAxiDAZgDDPEFrN4RmBCKc36SBwMxLjSgB54usgcDMC40uAfVBMIHBzItMS4zLjHIB08%26sclient%3Dgws-wiz%26sei%3DHTRMaI63Bd_KseMPvJfGqQ8&q=EgTKiEf7GJ3osMIGIjBSkKiHWT-cxs18zuGEgUC1TNNc6Hdnxrz3Lhlzenb-4szOwkYtoSL8toOTfgv_rIIyAVJaAUM');
});