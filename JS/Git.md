

# 1, 常规 提交
 git add .
 git commit -m'提交说明'
 git push       git  push -f  git push -force 强推
 # 2， 分支合并
 1,需求  dev-todolist  分支的内容合并到 master
 2，首先 位于当前分支 例如 master ， git  branch :查看本地分支，以及当前所在的分支 ,确保当前分支是 master
 3， 执行git  merge  dev-todolist 
 # 3， 合并后产生冲突怎么办？
 什么是合并的冲突，例如，有一个文件叫 a.js   开发人员 jack修改第10行的代码， 你也修改了第10行的代码，那么编辑器就会提示你
 当前代码冲突，要采用谁的代码？
 # 4，代码回退
 如果已经提交到远程分支的代码  发现写错了 需要撤回怎么办
 4.1 首先 git log 可以查看所有的提交记录
 4.2 每一次提交都产生了一个唯一的 hash 编号 JS\Image\hash2.png
 4.3  回退到指定的提交  git reset --hard a0dd6fef52367d1e2a0f836e2830e964d5afa374

 4.4  强推覆盖远程 git push ‘分支名字’  --force  危险操作  请确认风险
# 5， 撤销merge   执行 2  分支合并之后 ，发现冲突很多 不想merge了
git reset --hard HEAD~1  撤销merge   git merge --abort 
# 6，撤销commit   本地代码撤销commit
git reset --soft HEAD^ 撤销commit