// let switchApi = 'http://localhost:8000';
let herokuapi = 'https://switch-toggle.herokuapp.com'

export default (url,options = {})=>{

    const headers = {
        headers: {
            'Content-Type': 'application/json'
          },
          ...options
    };

    let y = fetch(`${herokuapi}/${url}`,headers)
        .then(resp=>resp);
        return y;
}