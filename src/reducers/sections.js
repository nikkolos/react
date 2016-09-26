const initialState = {
    sections: [
        {
            id: 1,
            name: 'Раздел 1'
        },
        {
            id: 2,
            name: 'Раздел 2'
        },
        {
            id: 3,
            name: 'Раздел 3'
        },
        {
            id: 4,
            name: 'Раздел 4'
        },
    ]
}

export default function products(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}