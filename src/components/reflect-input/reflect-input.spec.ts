import { newSpecPage } from '@stencil/core/testing'
import { ReflectInput } from './reflect-input'

const MockEmptyInput = { name: '', email: '', message: ''}
const MockFilledInput = { name: 'Roma', email: 'email@example.com', message: 'Hi'}

describe('reflect-input', () => {
  it('builds and renders', () => {
    const reflectInput = new ReflectInput()
    expect(reflectInput).toBeTruthy()
    expect(reflectInput).toMatchSnapshot();
  })

  it('should have getData(), setData(...), clear() methods and inputChanged event working property', async () => {

    const page = await newSpecPage({
      components: [ ReflectInput ],
      html: `<reflect-input></reflect-input>`
    })

    let eventSpy = jest.fn()
    page.doc.addEventListener('inputChanged', eventSpy)

    const reflectInput = await document.querySelector('reflect-input')

    expect(await reflectInput.getData()).toEqual(MockEmptyInput)

    await reflectInput.setData(MockFilledInput)

    expect(eventSpy).toHaveBeenCalled()
    expect(eventSpy.mock.calls[eventSpy.mock.calls.length - 1][0].detail).toEqual(MockFilledInput)

    expect(await reflectInput.getData()).toEqual(MockFilledInput)

    await reflectInput.clear()

    expect(eventSpy).toHaveBeenCalled()
    expect(eventSpy.mock.calls[eventSpy.mock.calls.length - 1][0].detail).toEqual(MockEmptyInput)

    expect(await reflectInput.getData()).toEqual(MockEmptyInput)
  })
})
