import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [repos, setRepos] = useState("");
  const [bio, setBio] = useState("");
  const [input, setInput] = useState("");
  const [html_url, setHtml_url] = useState("");
  const [followers, setFollowers] = useState("");
  const [error, setError] = useState("");
  const [numberOfRepos, setNumberOfRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kartikey110813")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    login,
    avatar_url,
    name,
    public_repos,
    bio,
    html_url,
    followers,
  }) => {
    setLogin(login);
    setAvatar(avatar_url);
    setName(name);
    setRepos(public_repos);
    setBio(bio);
    setHtml_url(html_url);
    setFollowers(followers);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError("Sorry This repository does not exist!");
        } else {
          setData(data);
          setError("");
        }
      });

      fetch(`https://api.github.com/users/${input}/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNumberOfRepos([data])
      })
  };

  const showNumberOfRepositories = (e) => {
    e.preventDefault();
    document.getElementById("reposId").style.display = "block"

  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand">
            Github Account Details
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <br />
            <br />
            <form className="d-flex mx-auto" onSubmit={submitHandler}>
              <input
                id="exampleInputEmail1"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Enter Github Account"
                className="form-control me-2"
                type="search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {error ? (
        <h2 className="text-center badge bg-danger">{error}</h2>
      ) : (
        <div
          className="card mx-auto"
          style={{ width: "40vh", marginTop: "5rem", border: "none" }}
        >
          <img
            src={avatar}
            className="card-img-top img-fluid"
            style={{ borderRadius: "50%" }}
            alt="..."
          ></img>
          <div className="card-body container">
            <h3 className="card-title text-center">{name}</h3>
            <a href={html_url} target="blank">
              {" "}
              <img
                className=" d-flex mx-auto img-fluid"
                src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
                alt=""
                width="15%"
              />
            </a>
            <p className="card-title text-center">@{login}</p>
            <h5 className="badge bg-info text-dark">
             <button type="button" onClick ={showNumberOfRepositories} style={{background:"transparent", border:"none"}}>{repos} repositories</button> 
            </h5>{" "}
            <br />
           

         <div id="reposId" style={{display:"none"}}>
            {numberOfRepos.map((repos) => (
                
              <h5 key = {Math.floor(Math.random()*10)}>
              {
                
                <p>
                {repos.map((repo) => (
                  <span key = {repo.id}>{repo.name} <br /></span>
                ))}
                </p>
                  
              }
              </h5>
            
            ))}
      
            </div>


            <br />
            <h5 className="badge bg-warning text-dark">
              {followers} followers
            </h5>{" "}
            <br />
            <p className="card-text text-center" style={{ fontWeight: "bold" }}>
              {" "}
              {bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
