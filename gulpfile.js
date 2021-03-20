const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

const config = require("./dev-config");

gulp.task("css", function () {
  if (config.themeDestination) {
    return gulp
      .src("./src/*.css")
      .pipe(concat("obsidian.css"))
      .pipe(gulp.dest("./"))
      .pipe(rename("California Coast.css"))
      .pipe(gulp.dest(config.themeDestination));
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
