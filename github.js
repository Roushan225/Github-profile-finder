const APIURL="https://api.github.com/users/";
const pic=document.querySelector(".profile-pic");
const searchbtn=document.querySelector(".searchbtn");
const inputbox=document.querySelector(".inputbox");
const Repos=document.querySelector(".repos");
const Followers=document.querySelector(".Followers");
const Following=document.querySelector(".Following");
const profilename=document.querySelector(".username");
const joined=document.querySelector(".joined")
const place=document.querySelector(".place");
const twitter=document.querySelector(".twitter");
const gitlink =document.querySelector(".gitlink");
const id=document.querySelector(".id");


const getapi= async(username)=>{
    const response=await fetch(APIURL+username);
    const data=await response.json();
    
    console.log(data);
    console.log(inputbox.value);
    
    pic.src=data.avatar_url;
    Repos.innerText=data.public_repos;
    Followers.innerText=data.followers;
    Following.innerText=data.following;
    profilename.innerText=data.name;
    id.innerText=`ID : ${data.id}`;
    joined.innerText=data.created_at;
    
    if(data.twitter_username==null){
        twitter.innerText="Not available"
    }else{
        twitter.innerText=data.twitter_username;
    }
    if(data.location==null){
        location.innerText="Not available"
    }else{
        place.innerText=data.location;
    }
    
    gitlink.innerText=data.url;
;
}






inputbox.addEventListener("keyup",(evt)=>{
    if(evt.key="Enter"){
        getapi(inputbox.value);
    }
})



