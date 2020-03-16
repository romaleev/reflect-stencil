import { newE2EPage } from '@stencil/core/testing'

const MockValidInput = { name: 'Roma', email: 'email@example.com', message: 'Hi' }

describe('reflect-form', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-form></reflect-form>')

    const element = await page.find('reflect-form')
    expect(element).toHaveClass('hydrated')
  });

  it('renders Submit button enabled/disabled state correctly', async () => {
    const page = await newE2EPage()

    await page.setContent('<reflect-form></reflect-form>')

    const input = await page.find('reflect-form >>> reflect-input')
    const buttonSubmit = await page.find('reflect-form >>> button')

    expect(await buttonSubmit.getProperty('disabled')).toBeTruthy()

    await input.focus()
    await page.keyboard.type(MockValidInput.name)
    await page.keyboard.press('Tab')
    await page.keyboard.type(MockValidInput.email)
    await page.keyboard.press('Tab')
    await page.keyboard.type(MockValidInput.message)

    await page.waitForChanges()

    expect(await buttonSubmit.getProperty('disabled')).toBeFalsy()

    await buttonSubmit.click()

    await page.waitForChanges()

    expect(await buttonSubmit.getProperty('disabled')).toBeTruthy()
  })
})
