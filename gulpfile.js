require("dotenv").config();

const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

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
