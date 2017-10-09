#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

process.chdir("c:/Users/HP/Desktop") // cd ~/Desktop
if (!fs.existsSync("./" + dirName)) {
    fs.mkdirSync("./" + dirName) // mkdir $1
    process.chdir("./" + dirName) // cd $1
    fs.mkdirSync('css') // mkdir css
    fs.mkdirSync('js') // mkdir js

    fs.writeFileSync("./index.html", "<!DOCTYPE> \n<title>Hello</title> \n<h1>Hi<h1>")
    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = 'Hello World' \nalert(string)")

    console.log("create: " + dirName +" success")
    process.exit(0)
} else {
    console.log("error: " + dirName +" is exists")
    process.exit(1)
}