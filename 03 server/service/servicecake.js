const dbcake=require('../db/dbcake.js');
//查询蛋糕信息
function selectCakeInfo(cb){
    dbcake.selectCakeData(function(results){
            cb(results)
    })
}
//查询土司信息
function selectBreadInfo(cb){
    dbcake.selectBreadData(function(results){
            cb(results)
    })
}
//查询礼品信息
function selectGiftInfo(cb){
    dbcake.selectGiftData(function(results){
            cb(results)
    })
}
//按type,piece值查询首页图片信息
function selectHomeInfo(type,piece,cb){
    dbcake.selectHomeData(type,piece,function(results){
            cb(results)
    })
}
//按cake关键字查询
function keywordSearch(keyword1,keyword2,cb){
    dbcake.selectByKeyword(keyword1,keyword2,function(results){
        cb(results)
    })
}
//导航栏cake关键字查询
function navKeywordSearch(searchdata,cb){
    dbcake.navSearch(searchdata,function(results){
        cb(results)
    })
}
//获取后台信息
function getManageInfo(cb){
    dbcake.selectManageData(function(results){
        cb(results);
    })
}
//获取后台信息
function getManageInfo(cb){
    dbcake.selectManageData(function(results){
        cb(results);
    })
}
//按sid将后台商品删除(del=0)
function delManageGoodsData(cid,cb){
    dbcake.delManageData(cid,function(results){
        cb(results);
    })
}
function update(cid,id,text,cb){
    dbcake.updateManageInfo(cid,id,text,function(results){
        cb(results);
    })
}
//将后台数据插入数据库
function insertProduct(imgurl,pname,test,scale,lable,price,type,cb){
    dbcake.insertIntoCake(imgurl,pname,test,scale,lable,price,type,function(results){
        cb(results);
    })
}
exports.selectCakeInfo=selectCakeInfo;
exports.selectBreadInfo=selectBreadInfo;
exports.selectGiftInfo=selectGiftInfo;
exports.selectHomeInfo=selectHomeInfo;
exports.keywordSearch=keywordSearch;
exports.navKeywordSearch=navKeywordSearch;
exports.getManageInfo=getManageInfo;
exports.delManageGoodsData=delManageGoodsData;
exports.update=update;
exports.insertProduct=insertProduct;



