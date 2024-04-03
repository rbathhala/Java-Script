let Camera={
    Brand : "Canon",
    Color : "Black",
    Price : 150000,
    MFD : "2022-june-20"
}
console.log(Camera)
console.log(Camera.Brand)
console.log(`Price is : ${Camera.Price}`)


//Nested Objet

let Student={
    Sno : 101,
    Sname : 'Rajesh',
    Pno : 900042424,
    Fee : 10000,
    Address : {
         Village : 'NR Puram',
         Dist : 'Nellore',
         State : 'AP',
         Pin : 524152

    }
    
}
//Access the Object
console.log(Student)
//Access the Nested-Object
console.log(Student.Address)

//CRUD Operations in Object

  // Create Operation

     let Mobile={

                }
     Mobile.Brand="Apple"
     Mobile.Color="Silver"
     Mobile.Price=100000
     Mobile.Insured=true
     console.log(Mobile)

  //Read Operations
  console.log(Mobile.Brand)

  //Update Operation
   Mobile.Price=150000
   console.log(Mobile)

 //Delete Operation
   delete Mobile.Insured;
   console.log(Mobile)

    

