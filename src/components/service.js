import fetchData from './fetchData';

export const getSwitchData = async()=>{

    const myData = await fetchData('switch')
    return myData;
}

export const posttoggleSwitch = async(payload)=>{

    const myData = await fetchData('update-switch',{
        method:'POST',
        body:JSON.stringify(payload)
    });
    return myData;
}