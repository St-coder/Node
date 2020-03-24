// 文件读取，是一种异步操作
// var fs = require("fs");
// var data = '',
//     readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF-8');
// readerStream.on('data', function(chunk){
//     data += chunk;
// })
// readerStream.on('end', function(){
//     console.log(data,2)
// })
// readerStream.on('error', function(error){
//     console.log(error.stack);
// })
// console.log('文件读取完成');

//写入文件
// var fs = require('fs');
// var data = "hello my first node.js";
// var writerStream = fs.createWriteStream('output.txt');
// writerStream.write(data, 'UTF8');
// writerStream.end();

// writerStream.on('finish', function(){
//     console.log('写入完成');
// })
// writerStream.on('error', function(err){
//     console.log(err.stack)
// })

// console.log('程序运行完毕')

//读取写入  pipe管道流传递数据      覆盖写入
// var fs = require('fs'),
//     readerStream = fs.createReadStream('input.txt'),
//     writerStream = fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log('程序运行完成')


//链式流
    //压缩
// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('input.txt')    //读取文件
//     //zlib.createGzip()创建一个gzip转换流，是一个可读可写流。
//     //通过管道将数据读取出来写入gzip流，然后又通过管道写入一个文件流中
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.gz'))
// console.log('文件压缩完成。')
    //解压
var fs = require('fs'),
    zlib = require('zlib');
fs.createReadStream('input.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input2.txt'))
console.log('解压完成')