const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const eve = new CustomEvent();

eve.on('test', () => {
    console.log('this is a test!');
});

setInterval(() => {
    eve.emit('test');
}, 500);



// 浏览器端 自定义事件
// var eve = new Event('custome')      // 'custome' 是事件名称 eve 是事件本身
// element.addEventListener('custome', function() {
//     console.log('custome')
// })
// element.dispatchEvent(eve)

// node端，新建的事件实例就相当于 浏览器端的 绑定元素
// 触发事件的时候，浏览器端是派发事件本身，而node端则是派发事件的名称
