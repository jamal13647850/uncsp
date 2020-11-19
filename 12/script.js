window.addEventListener("DOMContentLoaded", (event) => {
  const addbtn = document.getElementById("add");
  const testbtn = document.getElementById("test");
  const startbtn = document.getElementById("start");
  const locationbtn = document.getElementById("location");
  let firstNameInput = document.getElementById("firstname");
  let lastNameInput = document.getElementById("lastname");

  let users = [];
  let backupOfUsers = [];
  let usersTest = [];
  let usersRegisterdApril = [];

  let date = new Date();
  const add = () => {
    let firstName = (firstNameInput.value).trim();
    let lastname = (lastNameInput.value).trim();
    if(firstName==="" ||lastname==="") {
        alert('Please fill all fields')
    }
    else{
        let dayOfWeek = date.getDay();

        let month = date.getMonth();
        
        let hour = date.getHours();
        let minute = date.getMinutes();
    
        users.push({
          firstName,
          lastname,
          dayOfWeek,
          month,
          hour,
          minute
        });
        backupOfUsers = [...users];

        firstNameInput.value = null;
        lastNameInput.value = null;
    }
    
  };

  addbtn.addEventListener("click", (e) => {
    
    add();
    
    return false;
  });

  const oddDays = [0, 2, 4];
  testbtn.addEventListener("click", () => {
    delStackByPopEvenDays(users);
    if(usersTest.length>0){
        alert(`Registered users on odd days is ${JSON.stringify(usersTest)}`);
    }
    else{
        alert("No user registered on odd days");
    }
    
  });

  const delStackByPopEvenDays = (st) => {
    if (st === undefined || st.length == 0) return;

    let x = st[st.length - 1];
    st.pop();

    delStackByPopEvenDays(st);

    if (oddDays.indexOf(x.dayOfWeek) > -1) {
      usersTest.push(x);
    }
  };

  const april = 3;
  startbtn.addEventListener('click', ()=>{
    for(let i=0 ;i<=backupOfUsers.length-1;i++){
        if(backupOfUsers[i].month==april && backupOfUsers[i].hour>=8 && backupOfUsers[i].minute<=15){
            usersRegisterdApril.push(backupOfUsers[i]);
        }
    }

    if(usersRegisterdApril.length>0){
        alert(`Registered users on April bitween 8 to 15 is ${JSON.stringify(usersRegisterdApril)}`);
    }
    else{
        alert("No user registered on April bitween 8 to 15");
    }
    
  })


  locationbtn.addEventListener('click',()=>{
    let timeZoneOffset = date.getTimezoneOffset();
    if(timeZoneOffset =-210){
        alert("Very good . Location is correct")
    }
    else{
        alert("ops!? Location is  incorrect !!!")
    }
  })
  
});
