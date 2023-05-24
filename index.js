function superbowlWin(record) {
    if (record.find(element => element.result ==='W') === undefined) {
        return undefined
    }
    else {
        return record.find(element => element.result === 'W').year
    }
}