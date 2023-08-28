input.onGesture(Gesture.Shake, function () {
    escolha = randint(0, 2)
    if (escolha == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (escolha == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(200)
})
let escolha = 0
basic.showIcon(IconNames.Happy)
