import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage.js';
import productData from '../test-data/productData.json' with { type: 'json' };

let homePage;

test.beforeEach(async ({ page }) =>
{
    homePage = new HomePage(page);
    await homePage.navigate();
});

test('Validate products selected by price', async () =>
{
    const catalogProducts = await homePage.getCatalogProducts();
    const expectedProducts = catalogProducts.filter((product) => productData.prices.includes(product.price));

    expect(expectedProducts.length).toBeGreaterThan(0);

    const selectedProducts = await homePage.addProductsByPrice(productData.prices);
    expect(selectedProducts.length).toBe(expectedProducts.length);

    await homePage.openCart();
    const cartProducts = await homePage.getCartProducts(productData.prices);
    const cartSummary = await homePage.getCartSummary();

    expect(cartProducts.length).toBe(expectedProducts.length);
    
    for (const expectedProduct of expectedProducts)
        {
            const cartProduct = cartProducts.find(product => product.name === expectedProduct.name);
            
            expect(cartProduct).toBeDefined();
            expect(cartProduct.name).toBe(expectedProduct.name);
            expect(cartProduct.price).toBe(expectedProduct.price);
            expect(cartProduct.quantity).toBeGreaterThan(0);
            const expectedSubtotal = (Number(cartProduct.price) * cartProduct.quantity).toFixed(2);
            expect(cartProduct.subtotal).toBe(expectedSubtotal);
        }

    expect(cartSummary.totalQuantity).toBe(cartProducts.reduce((total, product) => total + product.quantity, 0));
    const expectedGrandTotal = cartProducts.reduce((total, product) => total + Number(product.subtotal), 0).toFixed(2);
    expect(cartSummary.grandTotal).toBe(expectedGrandTotal);
});