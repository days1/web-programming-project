const api_root = "http://localhost:3000";
export let playerId = null;

export function Home(){
    return myFetch(api_root + "/");
}
export function getExercises(){
    // return myFetch(api_root + `/captions/${playerId}`);\
    console.log('getExercises', api_root);
    return myFetch(api_root + "/exercises")
}
export function Login(name, fbid, access_token){
    return myFetch(api_root + `/players`, { name: name, fbid: fbid, access_token: access_token })
            .then(x=> playerId = x.id);
}



  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin" // include, same-origin, *omit
            // headers: {
            //     playerId: playerId
            // }
      };
      if(data){
          options = { 
            ...options,
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          };
      }
      return fetch(url, options)
      .then(response =>{
        return response.json()
      }); // parses response to JSON
  }