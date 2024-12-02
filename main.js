const { EventEmitter } = require("stream");

// Answer _1
function FullPath() {
    const pathInfo = require("path")
    let absolutePath = pathInfo.resolve('./main.js')
    console.log(`AbsolutePath: ${absolutePath}`)
}
// FullPath();

// Answer _2
function FileExtension(){
    const fileName = '/path/to/file.txt'; 
    const ext = require("path");
    const extensionInfo = ext.extname(fileName);
    console.log(`Extension : ${extensionInfo}`)
}
// FileExtension();

// Answer _3
function isAbsolute(){
    const path = `/path/to/file.txt`; 
    const info = require('path');
    const result = info.isAbsolute(path);
    console.log(`is Absolute : ${result}`);
}
// isAbsolute();

// Answer _4
function joinPath(){ 
    const input_1 =`/folder1` ;
    const input_2 = `folder2/file.txt`;
    const joinBoth = require('path'); 
    const finalOutput = joinBoth.join(input_1,input_2)
    console.log(`final path : ${finalOutput}`)
}
// joinPath(); 

// Answer _5
function parseFormat(){ 
    const filePath = `/path/to/file.txt`; 
    const infoP = require('path'); 
    const ParsedObject = infoP.parse(filePath); 
    console.log(`Parsed object:${ParsedObject}`)
    const FormattedPath = infoP.format(ParsedObject);
    console.log(`Formated Path : ${FormattedPath}`)
}
// parseFormat();

// Answer _6
function deleteFile(){
  
    const fileN = `./file.txt`; 
    const fs = require('fs'); 
    fs.rm(fileN); 
}
// deleteFile();


// Answer _7
function createFolder(){ 
    const folderName = `newfolder`; 
    const fs = require('fs'); 
    fs.mkdir(`./${folderName}`,(e)=>{console.log(e)})
}
// createFolder();

// Answer _8
function createEvent(){ 
    const ev = new EventEmitter()

    ev.on('greet, Message: Hello Event!',()=>{
        console.log(`The event is triggered and the message Hello Event! is logged.`)
    })
    ev.emit('greet, Message: Hello Event!',()=>{})
}
// createEvent();

