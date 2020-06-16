const gulp = require("gulp");
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript2");
const uglify = require("gulp-uglify");

gulp.task("build", () => {
	return rollup
		.rollup({
			input: "./app/main.ts",
			plugins: [rollupTypescript()],
		})
		.then((bundle) => {
			return bundle.write({
				file: "./dist/library.js",
				format: "umd",
				name: "library",
				sourcemap: true,
			});
		});
});

gulp.task("watch", () => {
	gulp.watch("./app/**/*.ts", gulp.task("build"));
});

gulp.task("min", (callback) => {
	//混淆压缩js文件任务  TODO 目前这个方法只支持es5的js代码混淆   需要优化
	return gulp.src("./dist/library.js").pipe(uglify()).pipe(gulp.dest("./dist/"));
});
