-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 h51811.administrator 结构
CREATE TABLE IF NOT EXISTS `administrator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(50) DEFAULT '0',
  `username` varchar(50) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 正在导出表  h51811.administrator 的数据：1 rows
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` (`id`, `password`, `username`) VALUES
	(1, '123', '123');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;

-- 导出  表 h51811.cake 结构
CREATE TABLE IF NOT EXISTS `cake` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` char(50) DEFAULT NULL,
  `test` char(50) DEFAULT NULL,
  `scale` char(50) DEFAULT NULL,
  `pname` char(50) DEFAULT NULL,
  `lable` char(50) DEFAULT NULL,
  `price` char(50) DEFAULT NULL,
  `del` int(11) NOT NULL DEFAULT '1' COMMENT '0表示删除',
  `type` int(11) DEFAULT NULL COMMENT '1表示蛋糕 2表示土司 3表示礼品 ',
  PRIMARY KEY (`cid`),
  UNIQUE KEY `pname` (`pname`)
) ENGINE=MyISAM AUTO_INCREMENT=86 DEFAULT CHARSET=utf8 COMMENT='诺心蛋糕店\r\n';

-- 正在导出表  h51811.cake 的数据：78 rows
/*!40000 ALTER TABLE `cake` DISABLE KEYS */;
INSERT INTO `cake` (`cid`, `imgurl`, `test`, `scale`, `pname`, `lable`, `price`, `del`, `type`) VALUES
	(1, '../../static/cake1.jpg', '雪域鲜乳4.9', '15-20人食', '雪域牛乳芝士蛋糕·浓4.9', '专享价', '￥298', 1, 1),
	(2, '../../static/cake2.gif', '慕斯口味', '2-4人食', '玩味魔法蛋糕', '专享价', '￥298', 1, 1),
	(3, '../../static/cake6.jpg', '奶油口味', '2-4人食', '数字蛋糕', '第二件半价 第三件免单', '￥218', 1, 1),
	(4, '../../static/cake7.jpg', '芝士口味', '15-20人食', '美刀刀蛋糕', '', '￥298', 1, 1),
	(5, '../../static/cake5.jpg', '雪域口味', '15-20人食', '雪域牛乳芝士蛋糕', '专享价', '￥218', 1, 1),
	(6, '../../static/cake9.jpg', '慕斯口味', '15-20人食', '提拉米苏·写意蛋糕', '专享价', '￥298', 1, 1),
	(7, '../../static/cake3.jpg', '雪域鲜乳4.9', '15-20人食', '雪域莓莓芝士蛋糕·浓4.9', '专享价', '￥298', 1, 1),
	(8, '../../static/cake8.jpg', '奶油口味', '10-12人食', '草莓千层蛋糕', '', '￥218', 1, 1),
	(9, '../../static/cake4.jpg', '雪域鲜乳4.9', '15-20人食', '雪域曲奇芝士蛋糕·浓4.9', '专享价', '￥298', 1, 1),
	(10, '../../static/cake10.jpg', '奶油口味', '10-12人食', '原味千层蛋糕', '', '￥218', 1, 1),
	(11, '../../static/cake11.jpg', '雪域鲜乳4.9', '5-8人食', '雪域粉爱拍档蛋糕·浓4.9', '专享价', '￥298', 1, 1),
	(12, '../../static/cake12.jpg', '鲜果口味', '15-20人食', '草莓拿破仑蛋糕', '', '￥218', 1, 1),
	(13, '../../static/cake13.jpg', '雪域鲜乳4.9', '5-8人食', '雪域莓飞色舞蛋糕·浓4.9', '', '￥298', 1, 1),
	(14, '../../static/cake14.jpg', '鲜果口味', '15-20人食', '蓝莓拿破仑蛋糕', '专享价', '￥218', 1, 1),
	(15, '../../static/cake15.jpg', '雪域鲜乳4.9', '5-8人食', '雪域奇趣天成蛋糕·浓4.9', '专享价', '￥298', 1, 1),
	(16, '../../static/cake16.jpg', '慕斯口味', '15-20人食', '环游世界蛋糕', '58元升级', '￥218', 1, 1),
	(17, '../../static/cake17.jpg', '慕斯口味', '5-8人食', '诺心花园·春鸣蛋糕', 'HOT', '￥218', 1, 1),
	(18, '../../static/cake18.jpg', '雪域口味', '15-20人食', '草莓雪域芝士蛋糕', '', '￥218', 1, 1),
	(19, '../../static/cake19.jpg', '奶油口味', '2-4人食', '怦然心动蛋糕', '专享价', '￥218', 1, 1),
	(20, '../../static/cake20.jpg', '慕斯口味', '2-4人食', '真爱“粉钻”蛋糕', '专享价', '￥298', 1, 1),
	(21, '../../static/cake21.jpg', '雪域口味', '15-20人食', '玫瑰雪域芝士蛋糕', '专享价', '￥218', 1, 1),
	(22, '../../static/cake22.jpg', '巧克力味', '10-12人食', '粉色玫瑰森林蛋糕', '', '￥218', 1, 1),
	(23, '../../static/cake23.jpg', '雪域口味', '15-20人食', '雪域蓝莓芝士蛋糕', '专享价', '￥218', 1, 1),
	(24, '../../static/cake24.jpg', '雪域口味', '15-20人食', '雪域大理石芝士蛋糕', '专享价', '￥218', 1, 1),
	(25, '../../static/cake25.jpg', '雪域口味', '15-20人食', '牛乳蓝莓雪域双拼蛋糕', '专享价', '￥218', 1, 1),
	(26, '../../static/cake26.jpg', '慕斯口味', '5-8人食', '猪光宝气蛋糕', '专享价', '￥368', 1, 1),
	(27, '../../static/cake27.jpg', '慕斯口味', '2-4人食', '携手·环游世界蛋糕', '', '￥228', 1, 1),
	(28, '../../static/cake28.jpg', '奶油口味', '5-8人食', '红圆舞蛋糕', '', '￥218', 1, 1),
	(29, '../../static/cake29.jpg', '慕斯口味', '10-12人食', '实栗派核桃栗蓉蛋糕', 'HOT +58升级', '￥218', 1, 1),
	(30, '../../static/cake30.jpg', '巧克力味', '10-12人食', '公主蛋糕', '', '￥218', 1, 1),
	(31, '../../static/cake31.jpg', '巧克力味', '15-20人食', '王子蛋糕', '', '￥218', 1, 1),
	(32, '../../static/cake32.jpg', '巧克力味', '15-20人食', '巧克力四重奏蛋糕', '58元升级', '￥218', 1, 1),
	(33, '../../static/cake33.jpg', '巧克力味', '15-20人食', '巧克力松露蛋糕', '专享价', '￥218', 1, 1),
	(34, '../../static/cake34.jpg', '慕斯口味', '15-20人食', '和风抹茶红豆蛋糕', '58元升级', '￥218', 1, 1),
	(35, '../../static/cake35.jpg', '奶油口味', '5-8人食', '莓果缤纷蛋糕', '198蛋糕卡免差', '￥336', 1, 1),
	(36, '../../static/cake36.jpg', '芝士口味', '15-20人食', '海盐乳酪芝士蛋糕', '58元升级', '￥218', 1, 1),
	(37, '../../static/cake37.jpg', '雪域口味', '15-20人食', '牛乳大理石雪域双拼蛋糕', '', '￥218', 1, 1),
	(38, '../../static/cake38.jpg', '慕斯口味', '10-12人食', '阿尔蒙麦香蛋糕', '58元升级', '￥218', 1, 1),
	(39, '../../static/cake39.jpg', '慕斯口味', '15-20人食', '阿尔蒙洛克蛋糕', '58元升级', '￥218', 1, 1),
	(40, '../../static/bread5.jpg', '饼干', '1个(半条装)', '巧克力吐司（半条）', '人气明星', '￥68', 1, 2),
	(41, '../../static/bread2.jpg', '饼干', '1个(整条装)', '巧克力吐司（整条）', '人气明星', '￥88', 1, 2),
	(42, '../../static/bread6.jpg', '饼干', '1个(半条装)', '原味匠心吐司（半条）', '金牌土司', '￥58', 1, 2),
	(43, '../../static/bread1.jpg', '饼干', '1个(整条装)', '原味匠心吐司（整条）', '金牌土司', '￥78', 1, 2),
	(44, '../../static/bread7.jpg', '饼干', '1个(半条装)', '橙香提子吐司（半条）', '', '￥58', 1, 2),
	(45, '../../static/bread8.jpg', '饼干', '1个(整条装)', '橙香提子吐司（整条）', '', '￥78', 1, 2),
	(46, '../../static/bread9.jpg', '饼干', '1个(半条装)', '彩虹吐司（半条）', '', '￥58', 1, 2),
	(47, '../../static/bread10.jpg', '饼干', '1个(整条装)', '彩虹吐司（整条）', '', '￥78', 1, 2),
	(48, '../../static/bread11.jpg', '饼干', '1个(半条装)', '芝麻吐司（半条）', '', '￥58', 1, 2),
	(49, '../../static/bread12.jpg', '饼干', '1个(整条装)', '芝麻吐司（整条）', '', '￥78', 1, 2),
	(50, '../../static/bread13.jpg', '饼干', '1个(半条装)', '栗子吐司（半条）', '', '￥58', 1, 2),
	(51, '../../static/bread14.jpg', '饼干', '1个(整条装)', '栗子吐司（整条）', '', '￥58', 1, 2),
	(52, '../../static/bread15.jpg', '饼干', '1个(半条装)', '莓粉吐司（草莓风味半条装）', '', '￥58', 1, 2),
	(53, '../../static/bread16.jpg', '饼干', '1个(整条装)', '莓粉吐司（草莓风味整条装）', '', '￥78', 1, 2),
	(54, '../../static/bread17.jpg', '饼干', '1个(半条装)', '软萌小白吐司（半条）', '', '￥48', 1, 2),
	(55, '../../static/bread18.jpg', '饼干', '1个(半条装)', '莓你不行吐司（草莓风味半条装）', '', '￥58', 1, 2),
	(56, '../../static/bread19.jpg', '饼干', '四种口味(整条装)', '吐司超值套餐', '', '￥108', 1, 2),
	(57, '../../static/bread3.jpg', '饼干', '四种口味(整条装)', '吐司经典套餐', '', '￥198', 1, 2),
	(58, '../../static/bread4.jpg', '饼干', '四种口味(整条装)', '吐司尊享套餐', '', '￥298', 1, 2),
	(59, '../../static/gift1.jpg', '饼干', '一份', '喵叽叽·傲娇小花礼包', '专享价', '￥396', 1, 3),
	(60, '../../static/gift2.jpg', '饼干', '一份', '喵叽叽·元气宠溺礼包', '专享价', '￥396', 1, 3),
	(61, '../../static/gift3.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒·好奇四拼（原味+咖啡味+抹茶味+巧克力味）', '专享价', '￥238', 1, 3),
	(62, '../../static/gift4.jpg', '饼干', '280克', '喵叽叽云顶小花曲奇礼盒·傲娇三拼（咖啡味+巧克力味+抹茶味）', '专享价', '￥158', 1, 3),
	(63, '../../static/gift5.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒·宠溺双拼（原味+咖啡味）', '专享价', '￥158', 1, 3),
	(64, '../../static/gift6.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒·元气双拼（原味+巧克力味）', '专享价', '￥158', 1, 3),
	(65, '../../static/gift7.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒·软萌双拼（咖啡味+抹茶味）', '专享价', '￥158', 1, 3),
	(66, '../../static/gift8.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒（原味）', '专享价', '￥158', 1, 3),
	(67, '../../static/gift9.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒（巧克力味）', '专享价', '￥158', 1, 3),
	(68, '../../static/gift10.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒（咖啡味）', '专享价', '￥158', 1, 3),
	(69, '../../static/gift11.jpg', '饼干', '560克', '喵叽叽云顶小花曲奇礼盒（抹茶味）', '专享价', '￥158', 1, 3),
	(70, '../../static/gift12.jpg', '饼干', '三盒装(每盒12片)', '金喜新年礼包', '', '￥198', 1, 3),
	(71, '../../static/gift13.jpg', '饼干', '一盒', '千层蝴蝶酥•月影礼盒（24片装）', '', '¥168', 1, 3),
	(72, '../../static/gift14.jpg', '饼干', '一盒', '千层蝴蝶酥•拾光礼盒（39片装）', '', '¥298', 1, 3),
	(73, '../../static/gift15.jpg', '饼干', '一盒/8枚入', '费南雪金砖形礼盒（8枚入）', '顺丰物流配送', '¥128', 1, 3),
	(74, '../../static/gift16.jpg', '饼干', '一盒', '核桃曲奇礼盒（迷迭紫）', '', '¥98', 1, 3),
	(75, '../../static/gift17.jpg', '饼干', '一件', '浪漫巴黎曲奇礼包（混合装）', '', '¥68', 1, 3),
	(76, '../../static/gift18.jpg', '特殊商品', '五款主题 随机一款', '个性字母透明挎包', '秀场街拍潮品', '¥68', 1, 3),
	(77, '../../static/gift19.jpg', '饼干', '一盒', '千层蝴蝶酥·For Me（原味）', '', '¥98', 1, 3),
	(78, '../../static/gift20.jpg', '饼干', '一盒', '乐熊熊曲奇礼盒', '', '¥128', 1, 3);
/*!40000 ALTER TABLE `cake` ENABLE KEYS */;

-- 导出  表 h51811.pic 结构
CREATE TABLE IF NOT EXISTS `pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` char(200) DEFAULT '0',
  `yzm` varchar(50) DEFAULT '0',
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  h51811.pic 的数据：4 rows
/*!40000 ALTER TABLE `pic` DISABLE KEYS */;
INSERT INTO `pic` (`id`, `url`, `yzm`) VALUES
	(1, '../../static/dpdh.png', 'dpdh'),
	(2, '../../static/kpbo.png', 'kpbo'),
	(3, '../../static/mont.png', 'mont'),
	(4, '../../static/peva.png', 'peva');
/*!40000 ALTER TABLE `pic` ENABLE KEYS */;

-- 导出  表 h51811.shopping 结构
CREATE TABLE IF NOT EXISTS `shopping` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` char(50) DEFAULT NULL,
  `test` char(50) DEFAULT NULL,
  `scale` char(50) DEFAULT NULL,
  `pname` char(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '1表示蛋糕 2表示土司 3表示礼品 ',
  `price` char(50) DEFAULT NULL,
  `lable` char(50) DEFAULT NULL,
  `piece` int(11) NOT NULL DEFAULT '1' COMMENT '商品件数',
  PRIMARY KEY (`sid`),
  UNIQUE KEY `pname` (`pname`)
) ENGINE=MyISAM AUTO_INCREMENT=131 DEFAULT CHARSET=utf8 COMMENT='购物车商品信息';

-- 正在导出表  h51811.shopping 的数据：0 rows
/*!40000 ALTER TABLE `shopping` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping` ENABLE KEYS */;

-- 导出  表 h51811.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `tel` varchar(50) DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '666666',
  `state` int(11) DEFAULT '1' COMMENT '0表示删除 ',
  UNIQUE KEY `tel` (`tel`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- 正在导出表  h51811.user 的数据：19 rows
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `tel`, `password`, `state`) VALUES
	(1, '13198581878', '888888', 1),
	(2, '13113113111', '888888', 1),
	(9, '13113113122', '888888', 1),
	(10, '13113113133', '666666', 1),
	(11, '13113113144', '666666', 1),
	(12, '13113113199', '888888', 1),
	(13, '13113113188', '888888', 1),
	(14, '13113113155', '666666', 1),
	(15, '13113113112', '123456', 1),
	(16, '13113113113', '123456', 1),
	(17, '11111111111', '111111', 1),
	(18, '123456789', '111111', 1),
	(19, '22222222222', '111111', 1),
	(20, '33333333333', '111111', 1),
	(21, '13113113156', '111111', 1),
	(22, '13113113145', '666666', 1),
	(23, '13799999999', '666666', 1),
	(24, '13511111111', '666666', 1),
	(25, '13999999999', '888888', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 h51811.yzm 结构
CREATE TABLE IF NOT EXISTS `yzm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `yzm` varchar(50) DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  h51811.yzm 的数据：4 rows
/*!40000 ALTER TABLE `yzm` DISABLE KEYS */;
INSERT INTO `yzm` (`id`, `yzm`) VALUES
	(1, 'aaaa'),
	(2, 'bbbb'),
	(3, 'cccc'),
	(4, 'dddd');
/*!40000 ALTER TABLE `yzm` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
