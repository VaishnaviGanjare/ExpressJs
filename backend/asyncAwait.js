async function alpha(){
    try{

    function alpha1(){ 
        return new Promise((resolve)=>{      
            resolve("a");   
    });
}

    function alpha2(){ 
        return new Promise((resolve)=>{     
            resolve("b");    
    });
}

    function alpha3(){ 
        return new Promise((resolve)=>{
            resolve("c");
    });
}

    function alpha4(){ 
        return new Promise((resolve)=>{
            resolve("d");
    }); 
}
    function alpha5(){ 
        return new Promise((resolve)=>{
            resolve("e");
    });
}

function alpha6(){ 
    return new Promise((resolve)=>{  
        resolve("f");  
    });
}
    const data1=await alpha1();
    console.log(data1);

    const data2=await alpha2();
    console.log(data2);

    const data3=await alpha3();
    console.log(data3);

    const data4=await alpha4();
    console.log(data4);

    const data5=await alpha5();
    console.log(data5);

    const data6=await alpha6();
    console.log(data6);

    
    }
    catch(err){
    console.log(err);
}
}
alpha();
