




export const percentageToSeconds = (percentage, referenceAudio) => {
    const podcastDurationInSecods = Math.floor(referenceAudio.current.duration);
    const divider = percentage / 100;

    return divider * podcastDurationInSecods;
}