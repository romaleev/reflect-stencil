import { newE2EPage } from '@stencil/core/testing'

const MockValidInput = { name: 'Roma', email: 'email@example.com', message: 'Hi' }

describe('reflect-form', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-form></reflect-form>')

    const element = await page.find('reflect-form')
    expect(element).toHaveClass('hydrated')
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage()

    await page.setContent('<reflect-form></reflect-form>')

    const inputName = await page.find('reflect-form >>> reflect-input >>> input[name="name"]')
    const inputEmail = await page.find('reflect-form >>> reflect-input >>> input[name="email"]')
    const inputMessage = await page.find('reflect-form >>> reflect-input >>> input[name="message"]')
    const buttonSubmit = await page.find('reflect-form >>> button')

    expect(await buttonSubmit.getProperty('disabled')).toBeTruthy()

    await inputName.setProperty('value', MockValidInput.name)
    await inputEmail.setProperty('value', MockValidInput.email)
    await inputMessage.setProperty('value', MockValidInput.message)

    await page.waitForChanges()

    // TODO why button is still disabled?
    // expect(await buttonSubmit.getProperty('disabled')).toBeFalsy()

    await buttonSubmit.click()

    await page.waitForChanges()

    expect(await buttonSubmit.getProperty('disabled')).toBeTruthy()
  })
})
