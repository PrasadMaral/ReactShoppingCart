export class HomePage
{
    constructor(page)
    {
        this.page = page;
        this.cartButton = page.locator('button').filter({ hasText: 'Cart' }).first();
        this.cartCount = page.locator('body');
        this.sizeCheckboxes = page.locator('input[type="checkbox"][data-testid="checkbox"]');
        this.productCount = page.locator('p').filter({ hasText: /Product\(s\) found/i }).first();
        this.closeCartButton = page.locator('button').filter({ hasText: 'X' }).first();
        this.productCards = page.locator("div[tabindex='1']");
        this.cartDrawer = page.locator('div').filter({ hasText: 'SUBTOTAL' }).filter({ hasText: 'Cart' }).first();
    }

    async navigate()
    {
        await this.page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
        await this.productCards.first().waitFor({state: 'visible'});
    }

    async openCart()
    {
        await this.cartButton.click();
        await this.page.waitForTimeout(500);
    }

    async closeCart()
    {
        await this.closeCartButton.click();
    }

    async extractCardData(card)
    {
        const cardText = (await card.textContent()).replace(/\s+/g, ' ').trim();
        const name = (await card.locator('p').first().textContent()).replace(/\s+/g, ' ').trim();
        const priceMatch = cardText.match(/\$([0-9]+(?:\.[0-9]{2})?)/);
        const price = priceMatch ? priceMatch[1] : '0.00';

        return { name, price };
    }
    
    async addProductsByPrice(prices)
    {
        const selectedProducts = [];
        const matchingProducts = [];
        const count = await this.productCards.count();
        console.log("\n==========Scanning Products==========\n");
        for (let i = 0; i < count; i++)
        {
            const card = this.productCards.nth(i);
            if (!(await card.isVisible().catch(() => false)))
            {continue;}
            
            const { name, price } = await this.extractCardData(card);
            console.log(`Card ${i}: ${name} - ${price}`);
            if (prices.includes(price))
            {
                matchingProducts.push({ name, price });
                await card.getByRole('button', { name: 'Add to cart' }).click();
                selectedProducts.push({ name, price });
                if (await this.closeCartButton.isVisible().catch(() => false))
                {await this.closeCart();}
            }
        }
        
        console.log("\n==========products priced at $10.90 and $14.90==========\n");
        matchingProducts.forEach(product =>console.log(`Adding: ${product.name} - ${product.price}`));
        return selectedProducts;
    }
    
    async getCatalogProducts()
    {
        const products = [];
        const count = await this.productCards.count();
        for (let i = 0; i < count; i++)
            {
                const card = this.productCards.nth(i);
                if (!(await card.isVisible().catch(() => false)))
                    {continue;}
                const { name, price } = await this.extractCardData(card);
                products.push({ name, price });
            }
        return products;
    }
    
    async getCartProducts()
    {
        const products = [];
        const cartItems = this.cartDrawer.locator("div.sc-11uohgb-0");
        const count = await cartItems.count();
        for (let i = 0; i < count; i++)
        {
            const item = cartItems.nth(i);
            const name = (await item.locator("p.sc-11uohgb-2").textContent()).trim();
            const details = await item.locator("p.sc-11uohgb-3").textContent();
            const quantity = Number(details.match(/Quantity:\s*(\d+)/)[1]);
            const priceText = await item.locator("div.sc-11uohgb-4 > p").textContent();
            const price = priceText.replace("$", "").trim();
            const subtotal = (Number(price) * quantity).toFixed(2);
            
            products.push({
            name,
            price,
            quantity,
            subtotal
        });
        }
        return products;
    }
    async getCartSummary()
    {
        const cartText = (await this.cartDrawer.textContent()).replace(/\s+/g, ' ').trim();
        const cartProducts = await this.getCartProducts();
        const totalQuantity = cartProducts.reduce((total, product) => total + product.quantity,0);
        const subtotalMatch = cartText.match(/SUBTOTAL[^0-9]*([0-9]+\.[0-9]{2})/);
        const grandTotal = subtotalMatch ? subtotalMatch[1] : '0.00';

        return {
            totalQuantity,
            grandTotal
        };
    }
}