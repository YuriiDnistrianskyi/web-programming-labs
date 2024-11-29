export const add = (item) => ({
    type: "ADD",
    data: item
});

export const changeCount = (idItem) => ({
    type: "CHANGE_COUNT",
    data: idItem
})
