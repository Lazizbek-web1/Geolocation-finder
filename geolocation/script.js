let a = document.querySelector(".info")
const f = ()=>{
    const s = (p)=>{
        console.log(p.coords.latitude + "\n" + p.coords.longitude);
        a.innerHTML="your latitude: " + p.coords.latitude + "<br>" + "your longitude: " + p.coords.longitude
    }
    const e = (a)=>{
        console.log(a);
        a.innerHTML=a
    }
    navigator.geolocation.getCurrentPosition(s, e);
}