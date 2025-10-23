import { Page, expect } from '@playwright/test'

export class LoginPage {
    page: Page
    usernameInput
    passwordInput
    loginButton
    errorMessage

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('[data-test="username"]')
    this.passwordInput = page.locator('[data-test="password"]')
    this.loginButton = page.locator('[data-test="login-button"]')
    this.errorMessage = page.locator('[data-test="error"]')
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

}