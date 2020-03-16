import { newE2EPage } from '@stencil/core/testing'

const MockValidInput = { name: 'Roma', email: 'email@example.com' }
const MockInvalidInput = { name: 'R1', email: 'email@examplecom' }
const Red = 'rgb(255, 0, 0)'

describe('reflect-input', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-input></reflect-input>')

    const element = await page.find('reflect-input')
    expect(element).toHaveClass('hydrated')
  });

  it('renders Name field correctly', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-input></reflect-input>')
    const inputName = await page.find('reflect-input >>> input[name="name"]')

    await inputName.type(MockValidInput.name)
    await page.waitForChanges()

    expect((await inputName.getComputedStyle()).color).not.toEqual(Red)

    await inputName.type(MockInvalidInput.name)
    await page.waitForChanges()

    await page.waitFor(500) // wait for red color fade in
    expect((await inputName.getComputedStyle()).color).toEqual(Red)
  })

  it('renders Email field correctly', async () => {
    const page = await newE2EPage()
    await page.setContent('<reflect-input></reflect-input>')
    const inputEmail = await page.find('reflect-input >>> input[name="email"]')

    await inputEmail.type(MockValidInput.email)
    await page.waitForChanges()

    expect((await inputEmail.getComputedStyle()).color).not.toEqual(Red)

    await inputEmail.type(MockInvalidInput.email)
    await page.waitFor(500) // wait for red color fade in

    expect((await inputEmail.getComputedStyle()).color).toEqual(Red)
  })
})
