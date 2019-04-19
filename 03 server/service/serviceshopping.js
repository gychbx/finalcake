const dbshopping=require('../db/dbshopping.js');
//加入购物车
function addToMyShopping(imgurl,test,scale,pname,type,price,lable,cb){
    dbshopping.addToShoppingByInfo(imgurl,test,scale,pname,type,price,lable,function(results){
        cb(results)
    })
}
function getShopping(cb){
    dbshopping.getShoppingInfo(function(results){
        cb(results)
    })
}
//更新购物车的件数
function updateShopping(piece,sid,cb){
    dbshopping.updatePieceBySid(piece,sid,function(results){
        cb(results)
    })
}
//按sid删除购物车商品
function delShopping(sid,cb){
    dbshopping.delShoppingBySid(sid,function(results){
        cb(results)
    })
}
//删除所有购物车商品
function delShoppingAllGoods(cb){
    dbshopping.delShoppingAll(function(results){
        cb(results)
    })
}
//删除所有购物车商品
function insertGoods(cb){
    dbshopping.delShoppingAll(function(results){
        cb(results)
    })
}
//获取购物车商品件数
function getShoppingGoodsPiece(cb){
    dbshopping.getShoppingPiece(function(results){
        cb(results)
    })
}
exports.addToMyShopping=addToMyShopping;
exports.getShopping=getShopping;
exports.updateShopping=updateShopping;
exports.delShopping=delShopping;
exports.delShoppingAllGoods=delShoppingAllGoods;
exports.getShoppingGoodsPiece=getShoppingGoodsPiece;