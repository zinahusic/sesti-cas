let UV = 0
servos.P1.setAngle(0)
basic.forever(function () {
    UV = pins.analogReadPin(AnalogPin.P0)
    if (UV > 150) {
        basic.showString("Otvori suncobran")
        servos.P1.setAngle(180)
    } else {
        basic.showString("Zatvori suncobran")
        servos.P1.setAngle(0)
    }
})
