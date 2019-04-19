const dbutils=require('../utils/dbutils.js');
//加入购物车
function addToShoppingByInfo(imgurl,test,scale,pname,type,price,lable,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='insert into shopping(imgurl,test,scale,pname,type,price,lable) values(?,?,?,?,?,?,?)'
            conn.query(sql,[imgurl,test,scale,pname,type,price,lable],(err,results)=>{
                if(err){
                    cb(false)
                }else{
                    cb(true)
                }
                conn.release();
            })
        }
    })
}
//得到购物车信息
function getShoppingInfo(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select sid,imgurl,test,scale,pname,lable,price,type,piece from shopping'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//更新购物车的件数
function updatePieceBySid(piece,sid,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='update shopping set piece=? where sid=?'
            conn.query(sql,[piece,sid],(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//按sid删除购物车商品
function delShoppingBySid(sid,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='delete from shopping where sid=?'
            conn.query(sql,[sid],(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//删除所有购物车商品
function delShoppingAll(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='delete from shopping'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
//获取购物车商品件数
function getShoppingPiece(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select count(*) as nums from shopping'
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(results)
                }
                conn.release();
            })
        }
    })
}
exports.addToShoppingByInfo=addToShoppingByInfo;
exports.getShoppingInfo=getShoppingInfo;
exports.updatePieceBySid=updatePieceBySid;
exports.delShoppingBySid=delShoppingBySid;
exports.delShoppingAll=delShoppingAll;
exports.getShoppingPiece=getShoppingPiece;