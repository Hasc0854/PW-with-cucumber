/* import {test, expect} from '@playwright/test';

test('Reto para agregar 3 articulos de un producto en tienda online',async ({page})=>{

    await page.goto('https://automationexercise.com/');
    await page.locator("a[href='/product_details/1']").hover();
    await page.locator("a[href='/product_details/1']").click();
    await page.locator('#quantity').fill('3');
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.locator('.modal-content >div .modal-title')).toContainText('Added!');
    await page.locator('.modal-footer button').click();
    await expect(page.locator('.modal-content')).not.toBeVisible();

})

*/