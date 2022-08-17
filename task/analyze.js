const { src } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function analyze() {
  return src("./build/*/*", { base: "./build" }).pipe(
    $.flatmap((stream, dir) =>
      src(`${dir.path}/**/*`).pipe(
        $.sizereport({
          title: JSON.stringify(dir.path)
            .replace('"', "")
            .replace('"', "")
            .split("build\\")[1]
            .replace("\\", "")
            .replace("\\", ""),
          "*": {
            maxSize: 300000,
          },
        })
      )
    )
  )
}
