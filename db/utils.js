// 所有会复用的模拟数据的方法
function param2Obj(url) {
  const params = url.split('?')[1]
  if (!params) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(params)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

function sliceId(url) {
  const arr = url.split('/')
  return arr[arr.length - 1]
}
module.exports.param2Obj = param2Obj
module.exports.sliceId = sliceId
