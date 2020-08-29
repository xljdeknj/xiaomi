/*
Navicat MySQL Data Transfer

Source Server         : admin
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : xiaomi

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-08-28 20:26:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createTime` bigint(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('qqq', '3ad35849b43fbaff36e8c4a0a74e4dd8', '1598550648645');
INSERT INTO `userinfo` VALUES ('qq', 'afb7ec1082d36da92c98bfb8a7f748fd', '1598554218946');
INSERT INTO `userinfo` VALUES ('www', '8e406a7dba182e82596b4967baa86b92', '1598557457845');
INSERT INTO `userinfo` VALUES ('ww', 'afb7ec1082d36da92c98bfb8a7f748fd', '1598589585701');
INSERT INTO `userinfo` VALUES ('qw', '4f049315d965684fbb561b55fcc9e0c0', '1598589943228');
INSERT INTO `userinfo` VALUES ('qqqqq', '7a9b477d6863d9b3af33b9efb91591cf', '1598602428853');
