window.addEventListener("DOMContentLoaded", (event) => {
  let fullName = prompt("لطفا نام و نام خانوادگی خود را وارد نمایید");
  let date = new Date();
  let month = date.getMonth();
  let hour = date.getHours();
  let minute = date.getMinutes();
  const now = hour * 60 + minute;
  const start = 17 * 60 + 30;
  const end = 19 * 60 + 30;
  //december=11
  if (month!=11 && !(now>=start && now<=end)) {
    alert("خطا! \n ساعت سیستم بین ۱۷:۳۰ تا ۱۹:۳۰ نیست")
  }

  let okbtn=document.getElementById("ok");

  okbtn.addEventListener('click', (event)=>{
    setTimeout(()=>{
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      const now = hour * 60 + minute;
      if (month!=11 && !(now>=start && now<=end)) {
        alert("خطا! \n ساعت سیستم بین ۱۷:۳۰ تا ۱۹:۳۰ نیست")
      }
    },2000)
  })
});
