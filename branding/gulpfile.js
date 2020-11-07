/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const noop = require("gulp-noop");
const streamqueue = require("streamqueue");

function srcDir(sub) {
  return `./src/main/frontend/${sub}`;
}
function distDir(sub) {
  return `./target/frontend/dist/${sub}`;
}

gulp.task("assets", () =>
  gulp
    .src([srcDir("img/*")])
    .pipe(gulp.dest(distDir("jcr_root/static/clientlibs/oec/img")))
);

gulp.task("fonts", () =>
  gulp
    .src(["./node_modules/jam-icons/fonts/*", srcDir("fonts/*")])
    .pipe(gulp.dest(distDir("jcr_root/static/clientlibs/oec/fonts")))
);

gulp.task("styles", () =>
  streamqueue(
    { objectMode: true },
    gulp
      .src(srcDir("scss/cms.scss"))
      .pipe(sass().on("error", sass.logError))
      .pipe(cleanCSS()),
    gulp.src([
      "./node_modules/jam-icons/css/jam.min.css",
      "./node_modules/js-autocomplete/auto-complete.css",
    ])
  )
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest(distDir("jcr_root/static/clientlibs/oec/css")))
);

gulp.task("default", gulp.series(["assets", "fonts", "styles"]));
