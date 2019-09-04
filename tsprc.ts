class a {
  a1: string ;
  a2: number;
  constructor(a: string, b: number){
  this.a1= a;
  this.a2=b;
  };
}; // why cant we add let const var inside the class 
  let obj= new a("a string", 500);
  let abc = `This is a string ${obj.a1} this is the value of a ${obj.a2} ` ;
  document.body.innerHTML = abc;
