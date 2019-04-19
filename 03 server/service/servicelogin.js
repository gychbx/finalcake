const dblogin=require('../db/dblogin.js');


function chaxun(tel,password,cb){
    dblogin.selectByUserNameAndPwd(tel,password,function(results){
        if(results.length==0){
            cb(false)
        }else {
			cb(results);
		}
    })
}

function tianjia(tel,cb){
    dblogin.insertUser(tel,function(results){
        if(typeof results != "undefined"){
            cb(true)
        }else {
			cb(false);
		}
    })
}

function reg(cb){
    dblogin.yzm(function(results){
        if(typeof results != "undefined"){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function one(id,cb){
    dblogin.one1(id,function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function four(tel,password,cb){
    dblogin.four1(tel,password,function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function acquirepic(cb){
    dblogin.acquirepic1(function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

exports.acquirepic=acquirepic;
exports.four=four;
exports.one=one;
exports.reg=reg;
exports.tianjia=tianjia;

exports.chaxun=chaxun;

//管理员

function userlist(cb){
    dblogin.userlist1(function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function shoplist(index,cb){
    var start=index*15
    var end=(parseInt(index)+1)*15
    dblogin.shoplist1(start,end,function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function delshop(id,cb){
    dblogin.delshop1(id,function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}


function deluser(id,cb){
    dblogin.deluser1(id,function(results){
        if(results.length != 0){
            cb(results)
        }else {
			cb(false);
		}
    })
}

function useradd(tel,password,cb){
    dblogin.useradd1(tel,password,function(results){
        // affectedRows
        if(results){
            cb(true)
        }else {
			cb(false);
		}
    })
}


function administrator(username,password,cb){
    dblogin.administrator1(username,password,function(results){
        // affectedRows
        console.log(results)
        if(results.length){
            cb(true)
        }else {
			cb(false);
		}
    })
}



function shopadd(imgurl,test,scale,pname,lable,price,type,cb){
    dblogin.shopadd1(imgurl,test,scale,pname,lable,price,type,function(results){
        // affectedRows
        if(results){
            cb(true)
        }else {
			cb(false);
		}
    })
}


function changeshop(id,number,change,cb){
    dblogin.changeshop1(id,number,change,function(results){
        // affectedRows
        if(results){
            cb(true)
        }else {
			cb(false);
		}
    })
}

function changeuser(id,number,change,cb){
    dblogin.changeuser1(id,number,change,function(results){
        // affectedRows
        if(results){
            cb(true)
        }else {
			cb(false);
		}
    })
}
exports.changeuser=changeuser;
exports.changeshop=changeshop;
exports.shopadd=shopadd;
exports.delshop=delshop;

exports.shoplist=shoplist;
exports.administrator=administrator;
exports.useradd=useradd;
exports.deluser=deluser;
exports.userlist=userlist;