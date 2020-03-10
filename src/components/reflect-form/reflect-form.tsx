import { Component, Element, State, Host, h, Listen, Event, EventEmitter } from '@stencil/core'
import { validate, InputData } from '../../utils/utils'

@Component({
  tag: 'reflect-form',
  styleUrl: 'reflect-form.scss',
  shadow: true
})

/**
 * ReflectForm contains ReflectInput which contains input fields
 *
 * Submittable only if all input fields are filled and valid
 *
 * Listens for `inputChanged` event of ReflectInput component
 *
 * Emits `formSubmitted` event per successful form submission
 *
 * ```
 * <reflect-form/>
 * ```
 */
export class ReflectForm {

  @Element() private element: HTMLElement

  @State() valid = false

  inputData: InputData
  reflectForm: HTMLElement
  reflectInput: HTMLReflectInputElement

  /**
   * Listens for `inputChanged` event of ReflectInput component
   */
  @Listen('inputChanged')
  inputChangedHandler(event: CustomEvent<InputData>) {
    this.inputData = event.detail
    this.valid = validate(this.inputData)
  }

  /**
   * @event `formSubmitted` emitted per successful form submission
   * @public
   */
  @Event({
    eventName: 'formSubmitted',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) onSubmit: EventEmitter<InputData>

  componentDidLoad() {
    this.reflectForm = this.element.shadowRoot.querySelector('form')
    this.reflectInput = this.element.shadowRoot.querySelector('reflect-input')
  }

  async handleSubmit(event: UIEvent) { // submit button callback
    event.preventDefault()
    if(this.valid) {
      if(this.onSubmit) {
        this.onSubmit.emit(this.inputData)
      }
      if(this.reflectForm) {
        this.reflectForm.classList.add('animated')
        this.reflectForm.addEventListener('animationend', () =>
          this.reflectForm.classList.remove('animated')) // instead of setTimeout(() => this.reflectForm.classList.remove('animated'), 1000)
      }
      this.reflectInput && await this.reflectInput.clear()
    }
  }

  render() {
    return (
      <Host>
        <form onSubmit={(event: UIEvent) => this.handleSubmit(event)} >
          <h1>CONTACT US</h1>
          <reflect-input />
          {/*<slot /> <!-- we can also put reflect-input here, it would be outside current shadowRoot -->*/}
          <button tabindex="0"
                  disabled={!this.valid}
                  type="submit">
            SUBMIT
          </button>
        </form>
      </Host>
    );
  }

}
