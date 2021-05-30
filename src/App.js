import React, { useState ,useEffect} from "react";
import "./App.css";

const App = () => {
const [login, setLogin] = useState("");
const [avatar, setAvatar] = useState("");
const [name, setName] = useState("");
const [repos, setRepos] = useState("");
const [bio, setBio] = useState("");
const [input, setInput] = useState("");

useEffect(() => {
    fetch("https://api.github.com/users/kartikey110813")
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data);
    })
}, [])

const setData = ({login,avatar_url,name,public_repos,bio}) => {
  setLogin(login)
  setAvatar(avatar_url)
  setName(name)
  setRepos(public_repos)
  setBio(bio)
}

  const submitHandler = (e) => {
    e.preventDefault();
   fetch(`https://api.github.com/users/${input}`)
   .then(res => res.json())
   .then(data => {
     setData(data)
   })
  };


  return (
    <div className="App">
      <form className="w-50 mx-auto" onSubmit={submitHandler}>
        <div className="">
          <label for="exampleInputEmail1" className="form-label">
            Enter Github Profile
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary m-5">
          Submit
        </button>
      </form>

      <div className="card mx-auto  " style={{width: "18rem"}}>
  <img src= {avatar} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Name {name}</h5>
    <h5 className="card-title">Username {login}</h5>
    <h5 className="card-title">{repos} repositories</h5>
    <p className="card-text">Bio :- {bio}</p>
    
  </div>
</div>
    </div>
  );
};

export default App;
