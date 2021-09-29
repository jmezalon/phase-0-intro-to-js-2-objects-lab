// Write your solution in this file!
const employee = {
    name: "Ruth Pierre",
    streetAddress: "1463 E 96th St Brooklyn NY 11236"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key] : value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj}

    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}