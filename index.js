let vueServerRender
let vueRouter

// if global.window exsits, which is a TSW inner variable
if (typeof global.window === 'object') {
    let windowCopy = global.window

    if (typeof window.disable === 'function') {
        window.disable()
    }

    // 在这里加载一下vue-router，防止后面使用的时候require报错
    vueRouter = require('vue-router')
    vueServerRender = require('vue-server-renderer')

    if (typeof windowCopy.enable === 'function') {
        windowCopy.enable()
    }
}

module.exports = vueServerRender
