export function elementWithAttr(a, attr, value) {
    for(var i = 0; i < a.length; i += 1) {
        if(a[i][attr] === value) {
            return a[i];
        }
    }
    return null;
};