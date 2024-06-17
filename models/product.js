const fs=require('fs');
const path=require('path');
const rootDir=require("../util/path");
const p=path.join(rootDir,'data','products.json');

const getProductFromFile = callback =>{    
    fs.readFile(p, (err, fileContent)=>{
       if(err){
        return callback([]);
      }
      else
        {
        const products=JSON.parse(fileContent);
        callback(products);
        }
    });

}

module.exports=class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
            });
        });
    }

    static fetchAll(callback){
       getProductFromFile(callback);
    }
};