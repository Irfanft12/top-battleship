function ship(length = 1) {
    let shipHitTimes = 0;
    const shipLength = () => length;
    const timesHit = () => shipHitTimes;
    const hit = () => shipHitTimes++;
    const isSunk = () => shipHitTimes >= shipLength();

    return {
        shipLength,
        timesHit,
        hit,
        isSunk
    }
};

export default ship;