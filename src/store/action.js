export const login = (value) => {
    return {
        type:'login',
        value:value
    }
};
export const logout = () => {
    return {
        type:'logout'
    }
};

export const handleAnswer = (index,value) => {
    return {
        type:'handleAnswer',
        index:index,
        value:value
    }
}
