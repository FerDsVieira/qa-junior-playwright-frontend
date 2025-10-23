import { test, expect } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'

test.describe('Login', () => {

  test('Login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page) // Cria uma instância da página de login (usando o Page Object)

    await loginPage.goto() // Acessa o site https://www.saucedemo.com/
    await loginPage.usernameInput.fill('standard_user') // Preenche o campo de usuário com credenciais válidas
    await loginPage.passwordInput.fill('secret_sauce') // Preenche o campo de senha com a senha correta
    await loginPage.loginButton.click() // Clica no botão de login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html') // Espera até que a URL mude
    const pageTitle = page.locator('.title');
    await expect(pageTitle).toHaveText('Products'); // Valida que após Login o titulo da página tenha 'Products'

  })

  test('Login com dados incorretos', async ({ page }) => {
    const loginPage = new LoginPage(page) // Cria uma instância da página de login (usando o Page Object)

    await loginPage.goto()   // Acessa o site https://www.saucedemo.com/
    await loginPage.usernameInput.fill('erro_user') // Preenche o campo de usuário com credenciais inválidas
    await loginPage.passwordInput.fill('secret_erro') // Preenche o campo de senha com a senha inválida
    await loginPage.loginButton.click() // Clica no botão de login
    await expect(loginPage.errorMessage).toBeVisible() // valida apenas que a mensagem de erro está visível
  })

})
