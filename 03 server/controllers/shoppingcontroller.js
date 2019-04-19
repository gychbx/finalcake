const serviceshopping=require('../service/serviceshopping.js');
//加入购物车
var addShopping=function(req,res){
    var imgurl=req.body.imgurl;
    var test=req.body.test;
    var scale=req.body.scale;
    var pname=req.body.pname;
    var type=req.body.type;
    var price=req.body.price;
    var lable=req.body.lable;
    serviceshopping.addToMyShopping(imgurl,test,scale,pname,type,price,lable,function(results){
                if(results){
                    res.json('success')
                }else{
                    res.json('fail')
                }
    })
}
//获取购物车信息
var getShoppingCar=function(req,res){
    serviceshopping.getShopping(function(results){
                res.json(results);
    })
}
//更新购物车的件数
var updateMyShopping=function(req,res){
    var piece=req.body.piece;
    var sid=req.body.sid;
    serviceshopping.updateShopping(piece,sid,function(results){
        res.json(results);
    })
}
//按sid删除购物车商品
var delMyShopping=function(req,res){
    var sid=req.body.sid;
    serviceshopping.delShopping(sid,function(results){
        res.json(results);
    })
}
//删除购物车所有商品
var delMyAllShopping=function(req,res){
    serviceshopping.delShoppingAllGoods(function(results){
        res.json(results);
    })
}
//获取购物车商品件数
var getAllPiece=function(req,res){
    console.log(789)
    serviceshopping.getShoppingGoodsPiece(function(results){
        res.json(results);
    })
}
exports.addShopping=addShopping;
exports.getShoppingCar=getShoppingCar;
exports.updateMyShopping=updateMyShopping;
exports.delMyShopping=delMyShopping;
exports.delMyAllShopping=delMyAllShopping;
exports.getAllPiece=getAllPiece;
