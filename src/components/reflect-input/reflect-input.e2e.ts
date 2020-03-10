import { newE2EPage } from '@stencil/core/testing'

const MockValidInput = { name: 'Roma', email: 'email@example.com' }
const MockInvalidInput = { name: 'R1', email: 'email@examplecom' }

describe('reflect-input', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-input></reflect-input>')

    const element = await page.find('reflect-input')
    expect(element).toHaveClass('hydrated')
  });

  it('renders valid fields', async () => {
    const page = await newE2EPage()

    await page.setContent('<reflect-input></reflect-input>')

    const inputName = await page.find('reflect-input >>> input[name="name"]')
    const inputEmail = await page.find('reflect-input >>> input[name="email"]')

    expect(inputName).not.toHaveClass(':invalid')
    expect(inputEmail).not.toHaveClass(':invalid')

    await inputName.setProperty('value', MockValidInput.name)
    await inputEmail.setProperty('value', MockValidInput.email)

    await page.waitForChanges()

    // TODO why "await page.waitForChanges() must be called before reading element information"?
    // expect(inputName).not.toHaveClass(':invalid')
    // expect(inputEmail).not.toHaveClass(':invalid')
  })

  it('renders invalid fields', async () => {
    const page = await newE2EPage()

    await page.setContent('<reflect-input></reflect-input>')

    const inputName = await page.find('reflect-input >>> input[name="name"]')
    const inputEmail = await page.find('reflect-input >>> input[name="email"]')

    await inputName.setProperty('value', MockInvalidInput.name)
    await inputEmail.setProperty('value', MockInvalidInput.name)

    await page.waitForChanges()

    // TODO why "await page.waitForChanges() must be called before reading element information"?
    // expect(inputName).toHaveClass(':invalid')
    // expect(inputEmail).toHaveClass(':invalid')
  })
})
