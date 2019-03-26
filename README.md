


##### 1、数据库操作
        1.1  创建数据库，questionare 
        1.2 将本项目根目录下install.sql 导入数据库中，
        1.3 CREATE TABLE `questionare`.`user_question_relation` (
              `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
              `uid` INT NOT NULL COMMENT '用户uid',
              `nid` INT NOT NULL COMMENT '问卷id',
              `c_time` DATETIME NOT NULL COMMENT '创建时间',
              PRIMARY KEY (`id`));
              ALTER TABLE `questionare`.`user_question_relation` 
              CHANGE COLUMN `c_time` `c_time` DATETIME NOT NULL DEFAULT current_timestamp COMMENT '创建时间' ;
        1.4 ALTER TABLE `questionare`.`naire` 
            CHANGE COLUMN `n_creattime` `n_creat_time` VARCHAR(14) NOT NULL COMMENT '创建时间' ;    
      

ALTER TABLE `questionare`.`question` 
ADD COLUMN `del` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '删除 0位不删除 1为删除' AFTER `u_time`,
ADD COLUMN `del_time` DATETIME NULL COMMENT '删除时间' AFTER `del`



##### 2、进入api目录下application/config目录下

 cp database.php.bak  database.php
 将里面的配置 根据环境修改为正确配置
 
###### 3、配置nginx 
    确认本地8888端口无占用，然后将本项目目录下ngin.conf 改名wenjuan.jjl.cn.conf 放置于正确的nginx server 配置文件目录内
    如目录变化按需调整
    nginx -t 测试
    确认无误后 重启nginx
    nginx -s reload
    
###### 4、配置node    

     安装依赖
    npm install

     为生产环境打包成压缩版本
    npm run build

    启动
    nohup npm run dev &

###### 5、 完成后通知相关人员


