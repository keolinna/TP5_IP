const db1={
  "1":{
     "id":1,
     "sex":"M",
     "pic":"hehe"
  },
  "4":{
    "id":1,
     "sex":"M",
     "pic":"hehe"
  },
  "6":{
     "id":1,
     "sex":"M",
     "pic":"hehe"
  }
}

const db2={
  "2":{
    "id":2,
     "sex":"F",
     "pic":"hehe"
  },
  "5":{
    "id":5,
     "sex":"M",
     "pic":"hehe"
  }
}

const db3={
  "3":{
    "id":3,
     "sex":"M",
     "pic":"hehe"
  }
}

//ask
const metaData={
  "1":"db1",
  "2":"db2",
  "3":"db3",
  "4":"db1",
  "5":"db2",
  "6":"db1",
}

const userData = {
  "1":{
     "name":"Boupha",
     "age":18,
     "private":false
  },
  "2":{
     "name":"Chkra",
     "age":22,
     "private":true
  },
  "3":{
     "name":"Champey",
     "age":17,
     "private":false
  },
  "4":{
     "name":"Dara",
     "age":20,
     "private":false
  },
  "5":{
     "name":"Daevy",
     "age":19,
     "private":true
  },
  "6":{
     "name":"Chhorvon",
     "age":22,
     "private":false
  }
}



// var check1 = metaData["7"];
// var check2 = db1["1"].id;
// var check3= userData["1"];
var data1;
var data2;
var data3;
var input =1+"";


let promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    var check1 = metaData[input];
     if(check1.length!=0){
       data1=check1;
       resolve(check1);
     }else{
       reject("ID out of range");
     }
  },200)

})
let promise2 = new Promise((resolve,reject)=>{
 
      promise1.then((result)=>{
        setTimeout(()=>{
          if(result=="db1"){
            resolve(db1[input]);
          }else if(result=="db2"){
            resolve(db2[input]);  
          }else if(result=="db3"){
            resolve(db3[input]);
          }else{
            reject("CANNOT FIND DATABASE");
          }
        },200)  
    })
 

})
let promise3 = new Promise((resolve,reject)=>{
 
  setTimeout(()=>{
    let check3 = userData[input];
    if(check3){
      resolve(check3);   
    }
    
  },200)

})
 


Promise.all([promise1,promise2,promise3])
  .then(function(result){
    
    var data={};

    data.id = result[0];
    data.name = result[2].name;
    data.sex=result[1].sex;
    data.age=result[2].age;
    data1.pic=result[1].pic;
   
    

  })






