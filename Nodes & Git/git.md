git branch 查看当前的本地分支

git branch -a 查看远程所有分支
git pull  拉取远程
clear  清空
箭头上键 历史命令
git  log  查看你的提交记录


git checkout 切换分支   git checkout jsCode 切换分支
我是在 jsCdeo 分支  ,我要把main分支的代码 复制过来、合并过来


我现在是在主分支 main   我要以主分支为基础，再拉一个新的分支， 我拉出新的分支 ，代码是和主分支一样的
git branch  name  :  create a  new branch ;
git chekcout branchName    switch to your  new branch 


git checkout -b brancNname  first: create new branch  ,second: switch to the branch 

合并代码到另外一个分支

我是在main  分支 ，我要把我在cssCode 写的代码 ， 拿到main分支上：
我当前所在的分支是  main  ,然后执行 git mereg cssCode

git merge 合并分支得名字     git merge   name  


css:cssCode 
js：jsCode
main:main


git  add . 保存所有文件的变更
git commmit -b '尝试使用commit' 



git remote -v	查看远程仓库地址


--------------------------------------------------------------
…or create a new repository on the command line
echo "# VUE--2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/...
git push -u origin main

--------------------------------------------------------------------------------

…or push an existing repository from the command line
git remote add origin https://github.com/....
git branch -M main
git push -u origin main