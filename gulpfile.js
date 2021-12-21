require("dotenv").config();

const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));

gulp.task("css", function () {
  if (process.env.THEME_DEST) {
    return gulp
      .src("./src/**/*.scss")
      .pipe(concat("obsidian.scss"))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("./"))
      .pipe(rename("California Coast.css"))
      .pipe(gulp.dest(process.env.THEME_DEST));
  } else {
    return gulp
      .src("./src/*.scss")
      .pipe(concat("obsidian.scss"))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("css:watch", function () {
  gulp.watch("./src/**/*.scss", gulp.series("css"));
});