let s = [1,3,5].includes(1)
console.log(s)

let v = Array.from('foo');

let fn = async function ss() {
    let a = await new Promise((resolve, reject) => {
        resolve(2)
    })
    console.log(a)
}
fn()

let fun = function *vv(){
    let a = yield new Promise((resolve, reject) => {
        resolve(1)
    })
    return a
}
for (var n of fun()) {
    console.log("n:::", n); //n::: Promise { 1 }
}
