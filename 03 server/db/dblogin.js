const dbutils=require('../utils/dbutils.js');

function selectByUserNameAndPwd(tel,password,cb){
    dbutils.pool.getConnection(function (err,con) {
        if (err) {
            console.log(err);
        }else {
            var sql='select tel,password from user where tel=? and password = ?'
            con.query(sql,[tel,password],function(err2,results){
                cb(results)
                con.release();
            })
        }
    })
}

function insertUser(tel,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='insert into user(tel) values(?)'
        con.query(sql,[tel],function(err2,results){
            cb(results)
            con.release();
        })
    })
}

function yzm(cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='Select yzm from yzm order by rand() limit 1; '
        con.query(sql,[yzm],function(err2,results){
            cb(results)
            con.release();
        })
    })
}
function one1(id,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='select tel from user where tel=? '
        con.query(sql,[id],function(err2,results){
            cb(results)
            con.release();
        })
    })
}
function four1(tel,password,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='UPDATE user SET password=? WHERE tel=? '
        con.query(sql,[password,tel],function(err2,results){
            console.log(results)
            cb(results)
            con.release();
        })
    })
}
function acquirepic1(cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='Select * from pic order by rand() limit 1'
        con.query(sql,function(err2,results){
            console.log(results)
            cb(results)
            con.release();
        })
    })
}
exports.acquirepic1=acquirepic1;
exports.four1=four1;
exports.yzm=yzm;
exports.insertUser=insertUser;
exports.one1=one1;
exports.selectByUserNameAndPwd=selectByUserNameAndPwd;

//管理员

function userlist1(cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='select id,tel,password from user where state=1'
        con.query(sql,function(err2,results){
            cb(results)
            con.release();
        })
    })
}

function shoplist1(start,end,cb){
    console.log(start,end)
    dbutils.pool.getConnection(function (err,con) {
        var sql='select cid,imgurl,test,scale,pname,lable,price,type from cake where del=1 limit ?,?'
        con.query(sql,[start,end],function(err2,results){   
            cb(results)
            con.release();
        })
    })
}

function delshop1(id,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='update cake set del=0 where cid=?'
        con.query(sql,[id],function(err2,results){
            cb(results)
            con.release();
        })
    })
}
//商品

//用户
function deluser1(id,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='update user set state=0 where id=?'
        con.query(sql,[id],function(err2,results){
            console.log(results)
            cb(results)
            con.release();
        })
    })
}

function useradd1(tel,password,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='insert into user(tel,password) values(?,?)'
        con.query(sql,[tel,password],function(err2,results){
            cb(results)
            con.release();
        })
    })
}



function administrator1(username,password,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='select username,password from administrator where username=? and password=?'
        con.query(sql,[username,password],function(err2,results){
            cb(results)
            con.release();
        })
    })
}


function shopadd1(imgurl,test,scale,pname,lable,price,type,cb){
    dbutils.pool.getConnection(function (err,con) {
        var sql='insert into cake(imgurl,test,scale,pname,lable,price,type) values(?,?,?,?,?,?,?)'
        con.query(sql,[imgurl,test,scale,pname,lable,price,type],function(err2,results){
            cb(results)
            con.release();
        })
    })
}



function changeshop1(id,number,change,cb){
    dbutils.pool.getConnection(function (err,con) {
        if(number==1){
            var sql='update cake set cid=? where cid=?'
        }else if(number==2){
            var sql='update cake set imgurl=? where cid=?'
        }else if(number==3){    
            var sql='update cake set test=? where cid=?' 
        }else if(number==4){
            var sql='update cake set scale=? where cid=?'
        }else if(number==5){
            var sql='update cake set pname=? where cid=?'
        }else if(number==6){
            var sql='update cake set lable=? where cid=?'
        }else if(number==7){
            var sql='update cake set price=? where cid=?'
        }else if(number==8){
            var sql='update cake set type=? where cid=?'
        }
        con.query(sql,[change,id],function(err2,results){
            console.log(results)
            cb(results)
            con.release();
        })
       
    })
}


function changeuser1(id,number,change,cb){
    dbutils.pool.getConnection(function (err,con) {
        if(number==1){
            var sql='update user set id=? where id=?'
        }else if(number==2){
            var sql='update user set tel=? where id=?'
        }else if(number==3){    
            var sql='update user set password=? where id=?' 
        }
        con.query(sql,[change,id],function(err2,results){
            console.log(results)
            cb(results)
            con.release();
        })
       
    })
}
exports.changeuser1=changeuser1;
exports.changeshop1=changeshop1;
exports.shopadd1=shopadd1;
exports.delshop1=delshop1;
exports.shoplist1=shoplist1;
exports.administrator1=administrator1;
exports.useradd1=useradd1;
exports.deluser1=deluser1;
exports.userlist1=userlist1;
