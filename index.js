let vueServerRender

// if global.window exsits, which is a TSW inner variable
if (typeof global.window === 'object') {
    let windowCopy = global.window

    if (typeof window.disable === 'function') {
        window.disable()
    }

    vueServerRender = require('vue-server-renderer')

    if (typeof windowCopy.enable === 'function') {
        windowCopy.enable()
    }
}

module.exports = vueServerRender
