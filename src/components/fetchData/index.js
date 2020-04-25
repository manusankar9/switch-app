let switchApi = 'http://localhost:8000';

export default (url,options = {})=>{

    const headers = {
        headers: {
            'Content-Type': 'application/json'
          },
          ...options
    };

    let y = fetch(`${switchApi}/${url}`,headers)
        .then(resp=>resp);
        return y;
}