String.prototype.formatDateString = function() {
    const d = new Date(this);
    const today = new Date();
    const fullYear = d.getFullYear();
    const date = d.getDate();
    const month = d.getMonth();
    if (date == today.getDate() && month == today.getMonth() && fullYear == today.getFullYear()) {
        return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
    } else {
        return `${fullYear}-${(month + 1).toString().padStart(2, "0")}-${date.toString().padStart(2, "0")} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
    }
};

export default null;


Map.prototype.first = function<V>() {
    return this.values().next() as V;
}

Map.prototype.where = function*<V> (predicate: (v: V) => boolean) {
    for (let [key, value] of this) {
        if (predicate(value)) {
            yield value as V;
        }
    };
};

Map.prototype.maxBy = function<V> (predicate: (v: V) => any) {
    let result: V;
    let highest: V;
    for (let [key, value] of this) {
        if (result === undefined) {
            result = value;
            highest = predicate(value)
        } else {
            const current = predicate(value);
            if (current > highest) {
                result = value;
                highest = current;
            }
        }
    };
    return result;
};

Map.prototype.switchByKeys = function (key1: string, key2: string) {
    const array = Array.from(this.entries()) as [];
    const keys = Array.from(this.keys());
    const key1Idx = keys.indexOf(key1);
    const key2Idx = keys.indexOf(key2);
    [array[key1Idx], array[key2Idx]] = [array[key2Idx], array[key1Idx]];
    return new Map(array);
}