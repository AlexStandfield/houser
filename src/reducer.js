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
                zip,
                img,
                mortgage,
                rent
            } = state
            const stepOne = {
                name,
                address,
                city,
                States,
                zip,
                img,
                mortgage,
                rent
            }
            const newHouse = [...state.houses, stepOne]
            return Object.assign({}, state, {...state, houses: newHouse, name: [state.name + payload], address: [state.address + payload], city: [state.city + payload], States: [state.States + payload], zip: [state.zip + payload]})

        case STEP_TWO:
            const stepTwo = {
                name,
                address,
                city,
                States,
                zip,
                img,
                mortgage,
                rent
            }
            const newHouseStepTwo = [...state.houses, stepTwo]
           return Object.assign({}, state, {...state, houses: newHouseStepTwo, img: [state.img + payload]})

        case STEP_THREE:
            const stepThree = {
                name,
                address,
                city,
                States,
                zip,
                img,
                mortgage,
                rent
            }
            const newHouseStepThree = [...state.houses, stepThree]
           return Object.assign({}, state, {...state, houses: newHouseStepThree, mortgage: [state.mortgage + payload], rent: [state.rent + payload]})

        case CLEAR: 
            const clear = {
                name: '',
                address: '',
                city: '',
                States: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0
            }
            const clearHouse = [...state.houses, clear]
            return Object.assign({}, state, {...state, houses: clearHouse})
        

        
        default:
            return state
    }
}