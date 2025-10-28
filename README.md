# 部署流程

## 1. node版本
  v22.19.0

## 2. 安装依赖
   node 运行命令 
   ``pnpm i``
   
## 3. 打包项目文件
  node 运行命令
  ``pnpm build``

## 4. 移动文件
  打包后生成dist文件夹，将文件夹内的文件，移动到web服务器

## 5. 因路由问题，第一次部署时，nginx需添加重定向
  ```
  location / {
    try_files $uri $uri/ /index.html;
  }
   