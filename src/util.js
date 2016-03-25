// helper functions

// given an array, an attribute and a value, returns an object from the array with the attribute and value
export function elementWithAttr(a, attr, value) {
    for(var i = 0; i < a.length; i += 1) {
        if(a[i][attr] === value) {
            return a[i];
        }
    }
    return null;
};