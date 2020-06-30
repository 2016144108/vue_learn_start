//默认导出{ default: fn }
export default function (a, b) {
    return a+b;
}

//具名导出(普通导出){double: fn }
export function double(a) {
    return a*a;
}

//具名导出(普通导出){n: fn }
export var n=3;

console.log("普通输出");
