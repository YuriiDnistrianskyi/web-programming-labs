export const add = (item) => ({
    type: "ADD",
    data: item
});

export const addCount = (idItem) => ({
    type: "ADD_COUNT",
    data: idItem
});

export const removeCount = (idItem) => ({
    type: "REMOVE_COUNT",
    data: idItem
});

export const removeAll = (type) => ({
    type: "REMOVE"
})
