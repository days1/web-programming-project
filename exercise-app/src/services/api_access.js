const api_root = "http://localhost:80";
export let userId = null;

export function Home(){
    return myFetch(api_root + "/");
}
export function Profile(){
    return myFetch(api_root + "/profile/" + userId);
}
export function AddExercise(exercise, link){
    return myFetch(api_root + "/profile/" + userId + "/exerciseList", {userId: userId, exercise: exercise, link: link})
}
export function MyExercises(){
    return myFetch(api_root + "/profile/" + userId + "/exerciseList")
}
export function Exercises(){
    return myFetch(api_root + "/exercises");
}
export function Login(name, fbid, access_token){
    return myFetch(api_root + "/users", { name: name, fbid: fbid, access_token: access_token })
            .then(x=> userId = x.id);
}



  function myFetch(url = ``, data = null) {
      let options = {
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                userId: userId
            }
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