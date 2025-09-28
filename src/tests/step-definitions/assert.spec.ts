/*import {test, expect} from '@playwright/test';

test('playing with assertions',async ({page})=>{
await page.goto('http://uitestingplayground.com/textinput');

await expect(page.locator('#newButtonName')).toBeVisible();
await expect(page.locator('#newButtonName')).toBeEnabled();
await expect(page.locator('#newButtonName')).toBeEmpty();
await page.locator('#newButtonName').fill('hugo');

await expect(page.locator('#newButtonName')).toBeEmpty();
await page.locator('#updatingButton').click();
await expect(page.locator('#updatingButton')).toHaveText('hugo');
await expect(page.locator('#updatingButton')).toContainText('hugo');



})

*/