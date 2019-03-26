


##### 1、数据库操作
        1.1  创建数据库，questionare (如已存在忽略此步骤)
        1.2 将本项目根目录下install.sql 导入数据库中
        
##### 2 克隆仓库
        2.1
           git clone http://git.51daxuetong.cn:3000/dxz_php/micro_questionnaire_system.git  (如已存在忽略此步骤)
        2.2 更新代码
           git checkout 对应分支    
           git pull origin 对应分支
        2.3 、修改配置文件
            进入api目录下application/config目录下 
            cp database.php.bak  database.php
            将里面的配置 根据环境修改为正确配置
        2.4 node 打包 安装依赖
        npm install
         为生产环境打包成压缩版本
        npm run build
###### 3、配置nginx 

     删除上次部署留下的 nginx server 配置文件目录内 quesion.conf
    lsof -i:8083 
    确认本地8083 端口无占用，然后将本项目目录下wenjuan.jjl.conf 放置于正确的nginx server 配置文件目录内
    如目录变化按需调整
    nginx -t 测试
    确认无误后 重启nginx
    nginx -s reload
    
###### 4、配置go代码     
         进入opt目录
        cd /opt
        克隆仓库 （ 如已存在仓库 可不克隆仓库 )
        git clone http://git.51daxuetong.cn:3000/dxz_php/go_questionnaire.git 
        rm -f nohup.out
  
        进入配置文件目录
        cd go_questionnaire/config
        复制改名配置文件
        cp conf.yaml.bak conf.yaml
        //修改配置文件 保存退出
        vim conf.yaml  
        //走到上级目录
        cd ..
        执行go程序
        nohup ./go_questionnaire_exec &
        如果有nohup.out 查看nohup.out尾部 里面是否有错误 
###### 5、 完成后通知相关人员


