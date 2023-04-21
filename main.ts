let x = 0
basic.forever(function () {
    x = Math.round(Math.map(input.soundLevel(), 0, 235, 1, 5))
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (x == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
    } else if (x == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (x == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                . . . . .
                # . # . #
                `)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            basic.showString("keep quiet!")
        }
    }
})
