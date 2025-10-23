import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { CartPage } from './pages/CartPage'

test('Remove produtos do carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page) // Cria instância da página de login
  const cartPage = new CartPage(page) // Cria instância da página do carrinho/inventário

  await loginPage.goto() // Acessa a página de login
  await loginPage.usernameInput.fill('standard_user') // Preenche usuário válido
  await loginPage.passwordInput.fill('secret_sauce') // Preenche senha correta
  await loginPage.loginButton.click() // Clica no botão de login
  const produtos = ['sauce-labs-backpack']// Lista de produtos
  await cartPage.addMultipleProducts(produtos)// Adiciona item ao carrinho
  await cartPage.cartButton.click() // Clica no ícone do carrinho para abrir
  await cartPage.removeItemButton.click() // Remove o item do carrinho
  await expect(cartPage.cartBadge).toBeHidden() // Valida que a badge sumiu (carrinho vazio)
})