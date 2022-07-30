// 所有会复用的模拟数据的方法
function param2Obj(url) {
    const params = url.split("?")[1];
    if (!params) {
        return {};
    }
    return JSON.parse(
        '{"' +
            decodeURIComponent(params)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}'
    );
}

// 抽取动态添加的 :id参数
function sliceId(url) {
    const arr = url.split("/");
    return arr[arr.length - 1];
}

// 保留小数点后两位并保持Number类型
function parseFloat2Two(num) {
    if (
        num.toString().indexOf(".") > -1 &&
        num.toString().split(".")[1].length > 1
    ) {
        return Number(num.toFixed(2));
    }
    return num;
}

module.exports.param2Obj = param2Obj;
module.exports.sliceId = sliceId;
module.exports.parseFloat2Two = parseFloat2Two;
