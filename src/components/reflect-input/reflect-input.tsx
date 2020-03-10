import { Component, Event, Method, Host, State, h, EventEmitter } from '@stencil/core'
import { Regex, InputData } from '../../utils/utils'

const REGEX_NAME = Regex.name.toString().slice(1, -1)
const REGEX_EMAIL = Regex.email.toString().slice(1, -1)

@Component({
  tag: 'reflect-input',
  styleUrl: 'reflect-input.scss',
  shadow: true
})

/**
 * ReflectInput contains input fields which are accessible as a single, combined value
 *
 * Emits `inputChanged` event per input value change
 *
 * 'getData(): [[InputData]]' get inputs data
 * 'setData(data: [[InputData]]): void' set inputs data
 * 'clear(): void' - clear inputs data
 *
 * ```
 * <reflect-input/>
 * ```
 */
export class ReflectInput {

  @State() name = ''
  @State() email = ''
  @State() message = ''

  private getCombined(): InputData { // returns combined value
    return { name: this.name, email: this.email, message: this.message }
  }

  private onInput = (event) => { // input callback
    this[event.target.name] = event.target.value
    this.inputChanged.emit(this.getCombined())
  }

  /**
   * @event `inputChanged` emitted per input value change
   * @public
   */
  @Event({
    eventName: 'inputChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) inputChanged: EventEmitter<InputData>

  /**
   * @returns data with input fields values of type [[InputData]].
   * @public
   */
  @Method()
  async getData():Promise<InputData> {
    return this.getCombined()
  }

  /**
   * @param data with input fields values of type [[InputData]].
   * @public
   */
  @Method()
  async setData(data: InputData):Promise<void> {
    Object.keys(data).forEach((field: string) =>
      this[field] = data[field])
    this.inputChanged.emit(this.getCombined())
  }

  /**
   * Clears input contents
   * @public
   */
  @Method()
  async clear() {
    await this.setData({ name: '', email: '', message: '' })
  }

  render() {
    return (
      <Host>
        <input name='name'
               placeholder="NAME*"
               type="text"
               value={this.name}
               onInput={this.onInput}
               tabindex="1"
               pattern={REGEX_NAME}
               autoFocus
               maxlength="30"
               required/>
        <input name='email'
               type="email"
               placeholder="EMAIL*"
               value={this.email}
               onInput={this.onInput}
               tabindex="2"
               pattern={REGEX_EMAIL}
               maxlength="30"
               required/>
        <textarea name='message'
                  placeholder="MESSAGE*"
                  value={this.message}
                  onInput={this.onInput}
                  tabindex="3"
                  rows={3}
                  maxlength="500"
                  required/>
      </Host>
    )
  }

}
