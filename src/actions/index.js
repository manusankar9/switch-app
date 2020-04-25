import {getSwitchData,posttoggleSwitch} from '../components/service';

export const fetchSwitchApi = ()=>{

    return async dispatch=>{
        const response = await getSwitchData();
        const payload = await response.json();

        dispatch({
            type:"FETCH_SWITCH_DATA",
            payload
        })
    }
}

export const toggleSwitch = payload =>{

    return async dispatch =>{

        const response = await posttoggleSwitch(payload);
        const data = await response.json();

        if(data.ok){

            const response = await getSwitchData();
            const payload = await response.json();

        }

        dispatch({
            type:"TOGGLE",
            payload
        })
    }
}