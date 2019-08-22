export const Type = {
    CHANGE_VALUE: "CHANGE_VALUE",
};


export const changeValue = value=> ({
    type: Type.CHANGE_VALUE,
    payload: value,
})