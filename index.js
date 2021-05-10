class Mkulima {
    constructor(product,vendors,farm){
        this.product=[];
        this.vendors=[];
         this.farm=[];
}
}
class AddFarm extends Mkulima{
constructor (farmId,farmerName,phoneNumber,address,farmName){
super(farmId,farmerName,phoneNumber,address,farmName)
console.log(this.farm.push(farmId,farmerName,phoneNumber,address,farmName))
}
     

}
let farm1= new AddFarm(3245667,"Sarah","0745312367",7674,"ukulima",);
console.log(farm1)
let farm2= new AddFarm(3277667,"Elvis","0726354712",6543,"poultry",);
console.log(farm2)

function removeFarm (farmId){
    this.farm.unshift(farmId)
    return this.farm
} 
let farm4= new AddFarm(2008,"manuel","0786543212",9876,"solio");
console.log


let farm3= new AddFarm(3245667,"Sarah","0745312367",7674,"ukulima",);
console.log(farm3)

//updatefarm
let Farm={                                                                                                                                     
    farmId:334,
   farmerName:"Ian",
    phoneNumber:"0789654321",
    address:5643,
    farmName:"pendo",
    set Farm(updateFarm){
        return this.Farm=updateFarm
    }
};
console.log(Farm) 

//getFarm
    let farms={
            farmId:65376,
            farmerName:"Julius",
            phoneNumber:"0716243561",
            address:8743,
            farmName:"Loreto",
            get getFarm(){

                return this.farmId
            }

       }; 
       console.log(farms.getFarm)


class addProduct extends Mkulima{
    constructor(productId,name,price){
    super(productId,name,price)
    console.log(this.product.push(productId,name,price))
    }
}
let product1= new addProduct(180,"soap",1200);
console.log(product1);
let product2= new addProduct(25,"sugar",5653);
console.log(product2);

 function removeProduct (productId){
     this.product.unshift(productId)
     return this.poduct
 } 
 let product3= new addProduct(200,"geisha",300);
 console.log

let products={
    productId:34,
    name:"tealeaves",
    price:650,
    set Products(updateProducts){
        return this.Products=updateProducts
    }
};
console.log(products) 

let product={
    productId:55,
    name:"sugar",
    price:5653,
    get getProduct(){
        return this.productId
    }

 };
// console.log(product.productId);
console.log(product.getProduct)

function productList(){
     var kikapu=""
    return (kikapu);
}
let items =["yoghurt:100, Mango:50, sukumawiki:30, onions:150, bread:50"];
 console.log(items);
let result=productList(items);
console.log(result)

class calculateOrderCost{
constructor (productId,quantity){
    var totalCost=this.product.find(totalCost =>totalCost. productId==productId)
    return totalCostPrice*quantity

}
 }
// let mkulima=new Mkulima([],[],[])
// console.log(mkulima(55*15))