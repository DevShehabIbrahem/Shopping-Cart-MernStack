const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("sass", async () => {
  gulp.src("src/Components/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
});

gulp.task("shared", () => {
  gulp.watch("src/shared/styles/*.scss", async () => {
    gulp
      .src("src/Components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});

gulp.task("watching", () => {
  gulp.watch("src/Components/**/*.scss", async () => {
    gulp
      .src("src/Components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});
