const servicecake=require('../service/servicecake.js');
//获取蛋糕信息
var getCakeInfo=function(req,res){
    servicecake.selectCakeInfo(function(results){
            res.json(results);
    })
}
var getBreadInfo=function(req,res){
    servicecake.selectBreadInfo(function(results){
            res.json(results);
    })
}
var getGiftInfo=function(req,res){
    servicecake.selectGiftInfo(function(results){
            res.json(results);
    })
}
var getHomeInfo=function(req,res){
    var type=req.query.type;
    var piece=req.query.piece;
    servicecake.selectHomeInfo(type,piece,function(results){
            res.json(results);
    })
}
var getKeywordInfo=function(req,res){
    var keyword1=req.body.keyword1;
    var keyword2=req.body.keyword2;
    servicecake.keywordSearch(keyword1,keyword2,function(results){
        res.json(results);
    })
}
//导航栏cake关键字查询
var getNavKeyWordData=function(req,res){
            var searchdata= req.query.searchdata;
            servicecake.navKeywordSearch(searchdata,function(results){
                        res.json(results);
            })
}
//获取后台数据
var getManageshow=function(req,res){
    servicecake.getManageInfo(function(results){
                res.json(results);
    })
}
//按sid将后台商品删除(del=0)
var delManage=function(req,res){
    var cid=req.body.cid;
    servicecake.delManageGoodsData(cid,function(results){
                res.json(results);
    })
}
//修改后台商品信息
var updateByManage=function(req,res){
    var cid=req.body.cid;
    var id=req.body.id;
    var text=req.body.text;
    servicecake.update(cid,id,text,function(results){
                res.json(results);
    })
}
//向数据库插入后台数据
var insertToMySql=function(req,res){
    var imgurl=req.body.imgurl;
    var pname=req.body.pname;
    var test=req.body.test;
    var scale=req.body.scale;
    var lable=req.body.lable;
    var price=req.body.price;
    var type=req.body.type;
    console.log(imgurl)
    servicecake.insertProduct(imgurl,pname,test,scale,lable,price,type,function(results){
                res.json(results);
    })
}
exports.getCakeInfo=getCakeInfo;
exports.getBreadInfo=getBreadInfo;
exports.getGiftInfo=getGiftInfo;
exports.getHomeInfo=getHomeInfo;
exports.getKeywordInfo=getKeywordInfo;
exports.getNavKeyWordData=getNavKeyWordData;
exports.getManageshow=getManageshow;
exports.delManage=delManage;
exports.updateByManage=updateByManage;
exports.insertToMySql=insertToMySql;
