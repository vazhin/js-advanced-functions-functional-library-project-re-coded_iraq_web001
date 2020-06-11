const fi = (function () {
    return {
        libraryMethod: function () {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function (collection, callback) {
            for (let key in collection) {
                callback(collection[`${key}`], key, collection)
            }
            return collection
        },

        map: function (collection, callback) {
            let newCollection = []
            for (let key in collection) {
                newCollection.push(callback(collection[`${key}`], key, collection))
            }
            return newCollection
        },

        reduce: function (collection, callback, acc) {
            let i;
            if (!acc) {
                acc = collection[0]
                i = 1;
            } else {
                i = 0;
            }
            for (i; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection)
            }
            return acc
        },

        find: function (collection, predicate) {
            let result = undefined;
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    result = collection[i];
                    break
                }
            }
            return result
        },

        filter: function (collection, predicate) {
            let result = [];
            for (let i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    result.push(collection[i])
                }
            }
            return result
        },

        size: function (collection) {
            let counter = 0;
            for (let item in collection) {
                counter++
            }
            return counter
        },

        first: function (array, n) {
            if (!n) {
                return array[0]
            }
            let result = []
            for (let i = 0; i < n; i++) {
                result.push(array[i])
            }
            return result
        },

        last: function (array, n) {
            if (!n) {
                return array[array.length - 1]
            }
            n = array.length - n
            let result = []
            for (let i = n; i < array.length; i++) {
                result.push(array[i])
            }
            return result
        },

        compact: function (array) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (array[i]) {
                    result.push(array[i])
                }
            }
            return result
        },

        sortBy: function (array, callback) {
            let newArr = [...array]
            function compare(a, b) {
                return callback(a) - callback(b)
            }
            return newArr.sort(compare)
        },

        flatten: function (array, shallow) {

            if (shallow) {
                let result = []
                for (let element of array) {
                    if (Array.isArray(element)) {
                        for (let elementInside of element) {
                            result.push(elementInside)
                        }
                    } else {
                        result.push(element)
                    }
                }
                return result
            } else {
                let result = []

                let current = array
                let next = []

                while (current || current === 0) {

                    if (Array.isArray(current)) {
                        for (let i = 0; i < current.length; i++) {
                            next.push(current[i])
                        }
                    } else {
                        result.push(current)
                    }
                    current = next.shift()
                }
                return result.sort()
            }
        },

        uniq: function (array, isSorted, callback) {
            if (!callback) {
                for (let i = 0; i < array.length; i++) {
                    for (let j = i + 1; j < array.length; j++) {
                        if (array[i] === array[j]) {
                            array.splice(j, 1);
                        }
                    }
                }
                return array
            } else {
                let result = []
                let values = []
                for (let element of array) {
                    if (!values.includes(callback(element))) {
                        values.push(callback(element));
                        result.push(element);
                    }
                }
                return result
            }
        },

        keys: function (object) {
            let result = []
            for (let key in object) {
                result.push(key)
            }
            return result
        },

        values: function (object) {
            let result = []
            for (let key in object) {
                result.push(object[key])
            }
            return result
        },

        functions: function (object) {
            let result = []
            for (let key in object) {
                if (typeof (object[key]) === 'function') {
                    result.push(key)
                }
            }
            return result.sort()
        },

    }
})()

fi.libraryMethod()
