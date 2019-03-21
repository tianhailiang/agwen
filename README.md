
#####1、将本项目根目录下install.sql 导入数据库中
#####1.1  执行sql
    

CREATE TABLE `questionare`.`user_question_relation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` INT NOT NULL COMMENT '用户uid',
  `nid` INT NOT NULL COMMENT '问卷id',
  `c_time` DATETIME NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`));
  ALTER TABLE `questionare`.`user_question_relation` 
  CHANGE COLUMN `ctime` `ctime` DATETIME NOT NULL DEFAULT current_timestamp COMMENT '创建时间' ;


#####2、进入api目录下application/config目录下
 cp database.php.bak  database.php
 将里面的配置 根据环境修改为正确配置
###### 3、配置nginx 
    确认本地8888端口无占用，然后将本地ngin.conf 改名 放置于正确的nginx server 配置文件目录内
    nginx -t 测试
    确认无误后 重启nginx
    nginx -s reload
######4、配置node    

####安装依赖
npm install

####为生产环境打包成压缩版本
npm run build

启动
nohup npm run dev &




