const router = require('express').Router();
const multer = require('multer');

const upload = multer({ 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './static/images');
        },
        filename: (req, file, cb) => {
            const { originalname } = file;
            const fileNameArrs =  file.originalname.split('.');
            const fileNameArr = fileNameArrs[fileNameArrs.length -1];
            const ext = fileNameArr;
            const tmpName = (new Date()).getTime() + parseInt(Math.random()) * 9999 + parseInt(Math.random()) * 9999;
            cb(null, `${tmpName}.${ext}`);
        }
    }),
    limits:{
        //限制文件大小10kb
        fileSize: 5000 * 1024,
        //限制文件数量
        files: 5
    },
    fileFilter: function(req, file, cb){
        // 限制文件上传类型，
        const acceptType = [
            'image/png',
            'image/jpg',
            'image/jpeg',
            'image/gif'
        ];
        const { mimetype, filename } = file;
        const types = ['jpg', 'jpeg', 'png', 'gif'];
        const tmpType = mimetype.split('/')[1];
        
        if(acceptType.includes(file.mimetype)) {            
            cb(null, true)
        } else {
            return cb(new Error('goes wrong on the mimetype'));
        }
        
    }
}).single('market');

router.post('/upload', (req, res, next) => {
    upload(req, res, (err) => {        
        console.log(err);        
        if(err !== undefined) {
            if(err.message === 'File too large') {
                res.status(200).send({
                    code: 1,
                    msg: 'File too large (5M)'
                });
            } else if (err == 'Error: goes wrong on the mimetype') {
                res.status(200).send({
                    code: 1,
                    msg: 'goes wrong on the mimetype'
                });            
            }       
        } else {
            res.status(200).send({
                code: 0,
                msg: 'ok',
                url: `/public/images/${req.file.filename}`
            });
        }
    })
})


module.exports = router;