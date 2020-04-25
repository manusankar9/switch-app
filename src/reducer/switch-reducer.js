let initialState = []

export default (state = initialState,action)=>{
    switch (action.type){
        case "FETCH_SWITCH_DATA":return action.payload;
        case "TOGGLE":return state.map(item=>item.darklaunchid===action.payload.darklaunchid?
                    ({...item,isEnable:action.payload.isEnable}):item)
        default:return state;
    }
}