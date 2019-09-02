const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0,
    houses: []
}

export const STEP_ONE = "STEP_ONE"
export const STEP_TWO = "STEP_TWO"
export const STEP_THREE = "STEP_THREE"
export const CLEAR = "CLEAR"

export default function reducer (State = initialState, action){
    const {payload} = action
    switch(action.type){
        case STEP_ONE:
            const {
                name,
                address,
                city,
                state,
                zip,
                img,
                mortgage,
                rent
            } = State
            const stepOne = {
                name,
                address,
                city,
                state,
                zip,
                img,
                mortgage,
                rent
            }
            const newHouse = [...state, stepOne.payload]
            return Object.assign({}, state, {...state, houses: newHouse, name: [state.name + payload], address: [state.address + payload], city: [state.city + payload], state: [state.state + payload], zip: [state.zip + payload]})

        case STEP_TWO:
            const stepTwo = {
                name,
                address,
                city,
                state,
                zip,
                img,
                mortgage,
                rent
            }
           return Object.assign({}, state, {...state, stepTwo: stepTwo, img: [state.img + payload]})

        case STEP_THREE:
            const stepThree = {
                name,
                address,
                city,
                state,
                zip,
                img,
                mortgage,
                rent
            }
           return Object.assign({}, state, {...state, stepThree: stepThree, mortgage: [state.mortgage + payload], rent: [state.rent + payload]})

        case CLEAR: 
            const clear = {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0,
                houses: []
            }
            return Object.assign({}, state, {...state, state: clear})
        

        
        default:
            return State
    }
}