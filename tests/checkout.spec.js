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
  await cartPage.cartButton.click() // Clica no ícone do carrinho para acessar a tela do carrinho
  await cartPage.checkoutButton.click()  // Clica no botão de checkout para iniciar o processo de finalização

  await checkoutPage.nameInput.fill('Teste') // Preenche o campo do primeiro nome no checkout
  await checkoutPage.lastNameInput.fill('Da Silva') // Preenche o campo do sobrenome
  await checkoutPage.postalCodeInput.fill('123456') // Preenche o código postal
  await checkoutPage.continueButton.click()  // Clica no botão “Continue” para seguir para a revisão da compra
  await checkoutPage.finishButton.click() // Clica no botão para finalizar a compra
  expect (checkoutPage.messageSucess).toBeVisible() // Validação: garante que a mensagem de sucesso da compra está visível

  
})