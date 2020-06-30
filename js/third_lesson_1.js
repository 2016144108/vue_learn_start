//导入默认导出default
import sum from "./third_lesson_2.js";
console.log(sum(2,3));

//导入具名为double的导出
import { double } from "./third_lesson_2.js";
console.log(double(2));

//导入具名为n的导出
import { n } from "./third_lesson_2.js";
console.log(n);

//导入所有导出
import * as obj from "./third_lesson_2.js";
console.log(obj);

//直接读入使用
import "./third_lesson_2.js";

