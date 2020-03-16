import { ReflectForm } from './reflect-form';
import { newSpecPage } from '@stencil/core/testing'

describe('reflect-form', () => {
  it('builds and renders', () => {
    const reflectForm = new ReflectForm()

    expect(reflectForm).toBeTruthy()
    expect(reflectForm).toMatchSnapshot();
  })

  it('should not be submittable with invalid input', async () => {
    const page = await newSpecPage({
      components: [ ReflectForm ],
      html: `<reflect-form></reflect-form>`
    })
    const reflectForm = await document.querySelector('reflect-form')
    const reflectFormButton = await reflectForm.shadowRoot.querySelector('button')
    const eventSpy = jest.fn()
    page.doc.addEventListener('formSubmitted', eventSpy)

    await reflectFormButton.click()

    expect(eventSpy).not.toHaveBeenCalled()
  })
})
