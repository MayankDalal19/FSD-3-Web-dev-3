const bcrypt=require("bcrypt");

const password= "John@1234"
const password2= "John@1234"

const hashPassword=async(password)=>{
    const salt= await bcrypt.genSalt(10);
    console.log("Salt:",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password:",hashedPassword);

    const isMatch=await bcrypt.compare(password,hashedPassword);
    console.log("Is Match:",isMatch);
    // is match mei upar password ki jagah
    // upar john@123455 daal k dekho - wrong pass btw
    // o/p mei False dega
    // if pass = right -> o/p mei True dega   
    
    
}

hashPassword(password);
hashPassword(password2);

