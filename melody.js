import '@g-js-api/g.js';

// Song 643859 46100–46500 ms 440 Hz
// Time of start, speed, duration, volume, channel
const melody = [
    [1.00, 0, 0.35, 1, 0], // A4
[1.25, 2, 0.35, 1, 1], // B4
[1.50, 3, 0.35, 1, 0], // C5
[1.75, 5, 0.35, 1, 1], // D5
[2.00, 7, 0.60, 1, 0], // E5
[2.50, 5, 0.35, 1, 1], // D5
[2.75, 3, 0.35, 1, 0], // C5
[3.00, 0, 0.75, 1, 1]  // A4
];

await $.exportConfig({
    type: 'live_editor',
    options: {
        info: true,
        replacePastObjects: true,
        triggerPositioningAllowed: true
    }
});

$.add(trigger({
    OBJ_ID: 3605,
    SONG_CHANNEL: 0,
    SONG_VOLUME: 0,
    CHANGE_VOLUME: true,
    DURATION: 0
}));

for (const [time, speed, duration, volume, channel] of melody) {
    const play = trigger_function(() => {
        song(643859, true, false, channel, volume, speed, 46100, 46500);
        wait(duration);
        $.add(trigger({
            OBJ_ID: 3605,
            SONG_CHANNEL: channel,
            SONG_STOP: true,
            DURATION: 0
        }));
    });

    play.call(time);
}
