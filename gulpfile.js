require("dotenv").config();

const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));

gulp.task("css", function () {
  if (process.env.THEME_DEST) {
    return gulp
      .src("./src/*.css")
      .pipe(concat("obsidian.css"))
      .pipe(gulp.dest("./"))
      .pipe(rename("California Coast.css"))
      .pipe(gulp.dest(process.env.THEME_DEST));
  } else {
    return gulp
      .src("./src/*.css")
      .pipe(concat("obsidian.css"))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("css:watch", function () {
  gulp.watch("./src/*.css", gulp.series("css"));
});

gulp.task("css2", function () {
  if (process.env.THEME_DEST) {
    return gulp
      .src("./src.v2/**/*.scss")
      .pipe(concat("obsidian.scss"))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("./"))
      .pipe(rename("California Coast.css"))
      .pipe(gulp.dest(process.env.THEME_DEST2));
  } else {
    return gulp
      .src("./src.v2/*.scss")
      .pipe(concat("obsidian.scss"))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest("./"));
  }
});

gulp.task("css2:watch", function () {
  gulp.watch("./src.v2/**/*.scss", gulp.series("css2"));
});