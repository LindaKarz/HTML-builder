const fs = require('fs');
const path = require('path');
const wholePath = path.join(__dirname, 'secret-folder')

 fs.readdir(wholePath, {withFileTypes: true}, (err, files) => {
   if(err) {
     console.error(err);
   } else {
     files.filter(file => file.isFile())
       .forEach(file => {
         fs.stat(path.join(wholePath, file.name), (err, res) => {
           console.log(
             path.parse(file.name).name + ' - ' +
             path.extname(file.name).substring(1) + ' - ' + (res.size)
           )
         })
       })
    }
 })