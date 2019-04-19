const servicelogin=require('../service/servicelogin.js');


var yxreg=function(req, res) {
	servicelogin.reg(function(result){
		if(result){
			res.json(result[0].yzm)
		}else {
			res.json("no")
		}
    })
}

var yxinsert=function(req, res) {
	var tel=req.body.telphone2;
	servicelogin.tianjia(tel,function(result){
		if(result){
			res.json("successful")
		}else {
			res.json("no")
		}
})
}

var yxchaxun=function(req, res) {
  console.log(666)
	var tel=req.body.usename;
	var password=req.body.password;
	servicelogin.chaxun(tel,password,function(result){
		if(result){
			res.json("successful")
		}else {
			res.json("no")
		}
	})
}

var yxone=function(req, res) {
	console.log(666)
	var id=req.body.id;
	servicelogin.one(id,function(result){
		if(result){
			res.json(result[0].tel)
		}else {
			res.json("no")
		}
	})
}


var yxfour=function(req, res) {
	var tel=req.body.mydata;
	var password=req.body.password;
	servicelogin.four(tel,password,function(result){
	console.log(result.affectedRows)
		if(result.affectedRows==1){
			res.json("successful")
		}else {
			res.json("no")
		}
	})
}

var yxacquirepic=function(req, res) {
	servicelogin.acquirepic(function(result){
		if(result){
			res.json(result)
		}else {
			res.json("no")
		}
	})
}


var yxuseradd=function(req, res) {
	var tel=req.body.tel
	var password=req.body.password
	console.log(tel,password)
	servicelogin.useradd(tel,password,function(result){
		if(result){
			res.json("sucessful")
		}else {
			res.json("no")
		}
	})
}

var yxadministrator= function(req, res) {
	var username=req.body.usename
	var password=req.body.pass
	console.log(username,password)
	servicelogin.administrator(username,password,function(result){
		if(result){
			res.json("sucessful")
		}else {
			res.json("no")
		}
	})
}

var yxshoplist=function(req, res) {
	var index=req.body.index
	console.log(index)
	console.log(666)
	servicelogin.shoplist(index,function(result){
		if(result){
			res.json(result)
		}else {
			res.json("no")
		}
	})
}

var yxdelshop=function(req, res) {
	console.log(req)
	var id=req.query.id
	servicelogin.delshop(id,function(result){
		console.log(result)
		if(result){
			res.json(result)
		}else {
			res.json("no")
		}
	})
}

var yxuserlist=function(req, res) {
	servicelogin.userlist(function(result){
		if(result){
			res.json(result)
		}else {
			res.json("no")
		}
	})
}
var yxdeluser=function(req, res) {
	var id=req.query.id
	servicelogin.deluser(id,function(result){
		if(result){
			res.json(result)
		}else {
			res.json("no")
		}
	})
}




var yxshopadd=function(req, res) {
	var imgurl=req.body.imgurl
	var test=req.body.test
	var scale=req.body.scale
	var pname=req.body.pname
	var lable=req.body.lable
	var price=req.body.price
	var type=req.body.type
	console.log(imgurl,test,scale,pname,lable,price,type)
	servicelogin.shopadd(imgurl,test,scale,pname,lable,price,type,function(result){
		if(result){
			res.json("sucessful")
		}else {
			res.json("no")
		}
	})
}

var yxchangeshop=function(req, res) {
	var id=req.body.id
	var number=req.body.number
	var change=req.body.change
	console.log(id,number,change)
	servicelogin.changeshop(id,number,change,function(result){
		if(result){
			res.json("sucessful")
		}else {
			res.json("no")
		}
	})
}

var yxchangeuser=function(req, res) {
	var id=req.body.id
	var number=req.body.number
	var change=req.body.change
	console.log(id,number,change)
	servicelogin.changeuser(id,number,change,function(result){
		if(result){
			res.json("sucessful")
		}else {
			res.json("no")
		}
	})
}
exports.yxreg=yxreg;
exports.yxinsert=yxinsert;
exports.yxchaxun=yxchaxun;
exports.yxone=yxone;
exports.yxfour=yxfour;
exports.yxacquirepic=yxacquirepic;
exports.yxuseradd=yxuseradd;
exports.yxadministrator=yxadministrator;
exports.yxshoplist=yxshoplist;
exports.yxdelshop=yxdelshop;
exports.yxuserlist=yxuserlist;
exports.yxdeluser=yxdeluser;
exports.yxshopadd=yxshopadd;
exports.yxchangeshop=yxchangeshop;
exports.yxchangeuser=yxchangeuser;