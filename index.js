const vueServerRender

// if global.window exsits, which is a TSW inner variable
if (typeof global.window === 'object') {
    const windowCopy = global.window

    if (typeof window.disable === 'function') {
        window.disable()
    }

    vueServerRender = require('vue-server-render')

    if (typeof window.enable === 'function') {
        windowCopy.enable()
    }
}

module.exports = vueServerRender