const dbutils=require('../utils/dbutils.js');
//获取cake图片显示数据
function selectCakeData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1'
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
//获取bread图片显示数据
function selectBreadData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where type=2 and del=1'
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
//获取gift图片显示数据
function selectGiftData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where type=3 and del=1'
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
//根据type,piece值获取首页图片数据
function selectHomeData(type,piece,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where del=1 and type=? limit 0,'+piece
            conn.query(sql,[type],(err,results)=>{
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
//按cake关键字查询
function selectByKeyword(keyword1,keyword2,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql=0;
            if(keyword1==='全部'&&keyword2==='全部'){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1';
            }else if(keyword1==="全部"){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1 and scale="'+keyword2+'"';
            }else if(keyword2==="全部"){
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1 and test="'+keyword1+'"';
            }else{
                 sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1 and test="'+keyword1+'" and scale="'+keyword2+'"';
            }
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
//导航栏按关键字搜索
function navSearch(searchdata,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select imgurl,test,scale,pname,lable,price,type from cake where type=1 and del=1 and (pname like "%'+searchdata+'%" or test like "%'+searchdata+'%")'
            conn.query(sql,[searchdata],(err,results)=>{
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
//获取后台显示数据
function selectManageData(cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='select * from cake where del=1'
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
//按sid将后台商品删除(del=0)
function delManageData(cid,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='update cake set del=0 where cid=?'
            conn.query(sql,[cid],(err,results)=>{
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
//修改后台商品信息
function updateManageInfo(cid,id,text,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            if(id==='1'){
                var sql='update cake set imgurl=? where cid=?'
            }else if(id==='2'){
                var sql='update cake set pname=? where cid=?'
            }else if(id==='3'){
                var sql='update cake set test=? where cid=?'
            }else if(id==='4'){
                var sql='update cake set scale=? where cid=?'
            }else if(id==='5'){
                var sql='update cake set lable=? where cid=?'
            }else if(id==='6'){
                var sql='update cake set price=? where cid=?'
            }else if(id==='7'){
                var sql='update cake set type=? where cid=?'
            }
            conn.query(sql,[text,cid],(err,results)=>{
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
//将后台数据插入数据库
function insertIntoCake(imgurl,pname,test,scale,lable,price,type,cb){
    dbutils.pool.getConnection(function(err,conn){
        if(err){
            console.log(err)
        }else{
            var sql='insert into cake(imgurl,pname,test,scale,lable,price,type) values(?,?,?,?,?,?,?)'
            conn.query(sql,[imgurl,pname,test,scale,lable,price,type],(err,results)=>{
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
exports.selectCakeData=selectCakeData;
exports.selectBreadData=selectBreadData;
exports.selectGiftData=selectGiftData;
exports.selectHomeData=selectHomeData;
exports.selectByKeyword=selectByKeyword;
exports.navSearch=navSearch;
exports.selectManageData=selectManageData;
exports.delManageData=delManageData;
exports.updateManageInfo=updateManageInfo;
exports.insertIntoCake=insertIntoCake;


