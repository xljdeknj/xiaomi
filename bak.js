// gulp.task("scripts",function(){
//     return gulp.src(["origin/js/*.js","!origin/js/bootstrap.min.js","!origin/js/jquery.min.js","!origin/js/require.js"])
//     .pipe(concat("index.js"))
//     .pipe(uglify())
//     .pipe(rename("index.min.js"))
//     .pipe(gulp.dest("publish/js"))
//     .pipe(connect.reload())
// })

// js压缩要分开写，分别命名
// gulp.task("scripts",function(){
//     return gulp.src(["origin/js/*.js","!bootstrap.min.js","!jquery.min.js"])
//     // .pipe(concat("index.js"))
//     .pipe(uglify())
//     .pipe(rename("index.min.js"))
//     .pipe(gulp.dest("publish/js"))
//     .pipe(connect.reload())
// })


// gulp.task("del",function(){
// 	gulp.watch('./origin/test/**/**.png')
// 		// .on('add', buildJs)
// 		// .on('change', buildJs)
// 		.on('unlink', function(file){
//             //删除文件
//             console.log(`File ${file} was removed`);
// 			var distFile = './publish/' + path.relative('./test', file); //计算相对路径
// 			fileSystem.existsSync(distFile) && fileSystem.unlink(distFile);
// 		});
// })