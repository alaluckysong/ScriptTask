if [ -d $1 ]; then
    echo "error: dir $1 exists"
    exit 1
 else   
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
 # -e 激活转义字符  \n 换行且光标移至行首  
    echo -e "<!DOCTYPE> \n<title>Hello</title> \n<h1>Hi<h1>" > index.html   //TODO 优化内容写法
    echo "h1{color: red;}" > css/style.css
    echo -e "var string = 'Hello World' \nalert(string)" > js/main.js
    echo "create dir $1 success "
    exit 0
fi    