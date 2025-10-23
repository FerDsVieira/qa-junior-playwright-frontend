import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'

test('Compra de 2 ou mais produtos', async ({ page }) => {
  const loginPage = new LoginPage(page) // Cria instância da página de login
  const cartPage = new CartPage(page) // Cria instância da página do carrinho/inventário
  const checkoutPage = new CheckoutPage(page)

  await loginPage.goto() // Acessa a página de login
  await loginPage.usernameInput.fill('standard_user') // Preenche usuário válido
  await loginPage.passwordInput.fill('secret_sauce') // Preenche senha correta
  await loginPage.loginButton.click() // Clica no botão de login

  const produtos = ['sauce-labs-backpack', 'sauce-labs-bike-light']; // Lista de produtos
  await cartPage.addMultipleProducts(produtos); // Adiciona 2 ou mais produtos ao carrinho
  await cartPage.cartButton.click()
  await cartPage.checkoutButton.click()

  await checkoutPage.nameInput.fill('Teste')
  await checkoutPage.lastNameInput.fill('Da Silva')
  await checkoutPage.postalCodeInput.fill('123456')
  await checkoutPage.continueButton.click()
  await checkoutPage.finishButton.click()
  expect (checkoutPage.messageSucess).toBeVisible()

  
})