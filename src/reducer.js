const initialState = {
    name: '',
    address: '',
    city: '',
    States: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,
    houses: []
}

export const STEP_ONE = "STEP_ONE"
export const STEP_TWO = "STEP_TWO"
export const STEP_THREE = "STEP_THREE"
export const ADD_HOUSE = "ADD_HOUSE"
export const CLEAR = "CLEAR"

export default function reducer (state = initialState, action){
    const {payload} = action
    switch(action.type){
        case STEP_ONE:
            const {
                name,
                address,
                city,
                States,
                zip
            } = payload
            return {
                ...state,
                name,
                address,
                city,
                States,
                zip
            }

        case STEP_TWO:
            const {
                img
            } = payload
            return {
                ...state,
                img
            }

        case STEP_THREE:
            const {
                mortgage,
                rent
            } = payload
            return {
                ...state,
                mortgage,
                rent
            }

        case ADD_HOUSE:
            return {
                name: '',
                address: '',
                city: '',
                States: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0,
                houses: payload
            }

        case CLEAR: 
            return {
                ...state,
                name: '',
                address: '',
                city: '',
                States: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0
            }
        
        default:
            return state
    }
}