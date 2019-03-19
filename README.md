
1、将本项目根目录下install.sql 导入数据库中
2、进入api目录下application/config目录下
 cp database.php.bak  database.php
 将里面的配置 根据环境修改为正确配置
3、配置nginx 
    将 本地 8888 端口 的监听目录指到api 目录
4、配置node    

####安装依赖
npm install

####服务热重载地址：localhost:8080
测试开发使用
npm run dev

####为生产环境打包成压缩版本
npm run build


