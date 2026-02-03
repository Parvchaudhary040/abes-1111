const fs= require('fs');
//fs.writeFile("./ds-b.txt","hello abes college",()=>{});
//fs.writeFileSync("./abes.txt","abes college");
// const result = fs.readFileSync("./abes.txt","utf-8");
// console.log(result);
fs.readFile("./ds-b.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(data);
    }
 });