const fs= require('fs');
//fs.writeFileSync("./ds-b.txt","hello abes college");
//fs.writeFileSync("./abes.txt","abes college");
const result = fs.readFileSync("./abes.txt","utf-8");
console.log(result);
const result2 = fs.readFileSync("./ds-b.txt","utf-8");
console.log(result2);