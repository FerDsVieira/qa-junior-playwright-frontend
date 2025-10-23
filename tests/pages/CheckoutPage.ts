import { Page } from '@playwright/test'

export class CheckoutPage {
   page: Page
   nameInput
   lastNameInput
   postalCodeInput
   continueButton
   finishButton
   messageSucess
   

  constructor(page: Page) {
    this.page = page
    this.nameInput = page.locator('[data-test="firstName"]')
    this.lastNameInput = page.locator('[data-test="lastName"]')
    this.postalCodeInput = page.locator('[data-test="postalCode"]')
    this.continueButton = page.locator('[data-test="continue"]')
    this.finishButton = page.locator('[data-test="finish"]')
    this.messageSucess = page.locator('[data-test="complete-header"]')
  }

}