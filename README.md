
##### 1、数据库操作
        1.1  创建数据库，questionare 
        1.2、将本项目根目录下install.sql 导入数据库中，
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

####安装依赖
npm install

####为生产环境打包成压缩版本
npm run build

启动
nohup npm run dev &

完成后通知部署需求人员


