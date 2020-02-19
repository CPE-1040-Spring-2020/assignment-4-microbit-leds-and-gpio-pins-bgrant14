led.enable(false)
pins.analogWritePin(AnalogPin.P6, 0)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P9, 0)
basic.forever(function () {
    for (let index = 0; index <= 3071; index++) {
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P6, index)
            } else {
                pins.analogWritePin(AnalogPin.P6, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P6, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P8, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P8, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P9, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P9, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P9, 0)
        }
        control.waitMicros(1000)
    }
})
