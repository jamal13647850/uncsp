window.addEventListener("DOMContentLoaded", (event) => {
  let goBtn = document.getElementById("go");
  let setBtn = document.getElementById("set");
  let okBtn = document.getElementById("ok");
  let cancelBtn = document.getElementById("cancel");
  let urlInput = document.getElementById("url");
  let exploreBtn = document.getElementById("explore");
  let navigatorDetails = document.getElementById("navigatorDetails");



  goBtn.addEventListener("click", (event) => {
    let pageNumber = window.prompt("لطفا شماره صفحه ای را جهت انتقال وارد نمایید",0);
    window.history.go(pageNumber);
  })



  setBtn.addEventListener("click", (event) => {
    alert("شما ۵ ثانیه فرصت ورود آدرس را دارید");
    let time = 5;
    let timerId=setInterval(() => {
      setBtn.value=time;
      time--;
      if(time==-1){
        alert("زمان شما پایان یافت");
        setBtn.value="Set";
        clearInterval(timerId);
      }
    },1000)
  })

  let OkTimerId;
  okBtn.addEventListener("click",(event)=>{
    if(exploreInterval){
      clearInterval(exploreInterval);
      alert("Explore stoped")
    }
    
    let time = 5;
    OkTimerId=setInterval(() => {
      okBtn.value=time;
      time--;
      if(time==-1){
        
        okBtn.value="OK";
        location.assign(urlInput.value)
        clearInterval(OkTimerId);
      }
    },1000)
  })



  cancelBtn.addEventListener("click",(event)=>{
    clearInterval(OkTimerId);
    
    okBtn.value="OK";
  })

  let exploreInterval ;
  exploreBtn.addEventListener("click",(event)=>{
    navigatorDetails.innerHTML=browserDetails();
    exploreInterval=setInterval(()=>{
      navigatorDetails.innerHTML+=browserDetails();
    },3000)
  })

  const browserDetails = ()=>{
    return (`Browser name: ${navigator.appName}  <br/>Browser version: ${navigator.appName}  <br/>
    Browser language: ${navigator.language}  <br/>Browser cookie is: ${navigator.cookieEnabled?"enabled":"disabled"}  <br/>`);
  }
});
