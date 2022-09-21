
var matn = document.querySelector('.matn');
var date = document.querySelector('.date');

var ur = window.location.pathname;
var fullUrl = window.location;
var ar = ur.split('.');
var loc= ar[0];

var target = document.querySelector('.sec1-art1 :nth-child(2) a')

target.innerHTML = loc;
target.setAttribute('href',fullUrl);

var xhr;

if(window.XMLHttpRequest){
   xhr = new XMLHttpRequest(); 
}else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

xhr.open("GET","/API/blogs.json");
xhr.onreadystatechange = ()=>{
    if(xhr.status === 200 && xhr.readyState === 4){
        var blogs = JSON.parse(xhr.response);
        console.log(blogs);
        matn.innerHTML = blogs[0].blog;
        date.innerHTML = blogs[0].date;
    }else{
        console.log("error");
    }
}
xhr.send()