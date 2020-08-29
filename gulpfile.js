/* commomJS规范 */
const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const connect = require("gulp-connect");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webserver = require("gulp-webserver");

const path = require('path');
const fileSystem = require('fs');

//拷贝index主页
gulp.task("index", function () {
    return gulp.src("origin/index.html")
        .pipe(gulp.dest("publish/"))
        .pipe(connect.reload())
})

//拷贝.html
gulp.task("html", function () {
    return gulp.src("origin/html/*.html")
        .pipe(gulp.dest("publish/html"))
        .pipe(connect.reload())
})

//拷贝.css
gulp.task("css", function () {
    return gulp.src("origin/css/*.css")
        .pipe(gulp.dest("publish/css"))
        .pipe(connect.reload())
})

//编译scss并拷贝
gulp.task("sass", function () {
    return gulp.src("origin/sass/index.scss")
        .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>;') }))
        .pipe(sass())
        .pipe(gulp.dest("publish/css"))
        .pipe(minifyCSS())
        .pipe(rename("index-min.css"))
        .pipe(gulp.dest("publish/css"))
        .pipe(connect.reload())
})

gulp.task("sassAll", function () {
    return gulp.src("origin/sass/*.scss")
        .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>;') }))
        .pipe(sass())
        .pipe(gulp.dest("publish/css"))
        .pipe(connect.reload())
})

//拷贝js
gulp.task("scripts", function () {
    return gulp.src("origin/js/*.js")
        // .pipe(concat("index.js"))
        .pipe(gulp.dest("publish/js"))
        .pipe(connect.reload())
})


//拷贝data
gulp.task("data", function () {
    return gulp.src("origin/data/{*.json,*.xml}")
        .pipe(gulp.dest("publish/data"))
        .pipe(connect.reload())
})

//拷贝图片
gulp.task("images", function () {
    return gulp.src("origin/images/**/*")
        .pipe(gulp.dest("publish/images"))
        .pipe(connect.reload())
})

//拷贝php
gulp.task("php", function () {
    return gulp.src("origin/php/*.php")
        .pipe(gulp.dest("publish/php"))
        .pipe(gulp.dest("C:/phpStudy/PHPTutorial/WWW/php"))
        .pipe(connect.reload())
})

//启动实时监听，与跨域代理
gulp.task('webserver', function () {
    gulp.src('publish')
      .pipe(webserver({
        host: '127.0.0.1',
        port: 81,
        livereload: true,
        open: '',
        // directoryListing: {
        //   enable: true,
        //   path: './'
        // },
        proxies: [
          {
              source: '/php', 
              target: 'http://127.0.0.1:80/php'
          }
        ]
      }))
  });



//一次性执行多个任务
gulp.task("build", ["index", "html", "css", "sass", "sassAll", "scripts", "data", "images","php"], function () {
    console.log("- - - - - - gulp执行完毕,已启动监听任务... - - - - - - ")
})

//启动监听任务
gulp.task("watch", function () {
    gulp.watch("origin/index.html", ["index"]);
    gulp.watch("origin/html/*.html", ["html"]);
    gulp.watch("origin/css/*.css", ["css"]);
    gulp.watch("origin/sass/index.scss", ["sass"]);
    gulp.watch("origin/sass/*.scss", ["sassAll"]);
    gulp.watch("origin/js/*.js", ["scripts"]);
    gulp.watch("origin/data/{*.json,*.xml}", ["data"]);
    gulp.watch("origin/images/**/*", ["images"]);
    gulp.watch("origin/php/*.php", ["php"]);
})



//同时启动监听和服务，gulp
gulp.task("default", ["build", "watch", "webserver"])
