import { Page, expect } from '@playwright/test'

export class CartPage {
   page: Page
   cartItems
   checkoutButton
   cartButton
   removeItemButton
   cartBadge

  constructor(page: Page) {
    this.page = page
    this.cartItems = page.locator('.cart_item')
    this.checkoutButton = page.locator('[data-test="checkout"]')
    this.cartButton = page.locator('[data-test="shopping-cart-link"]')
    this.removeItemButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
    this.cartBadge =  page.locator('[data-test="shopping-cart-badge"]')

  }

  // Adiciona um produto ao carrinho pelo productId do data-test
  async addToCart(productId: string) {
    await this.page.locator(`[data-test="add-to-cart-${productId}"]`).click();
  }

  // Adiciona vários produtos ao carrinho
  async addMultipleProducts(productIds: string[]) {
    for (const id of productIds) {
      await this.addToCart(id);
    }
  }


}