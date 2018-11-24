const burger = require('burgerjs');
    
burger.module([
    [{name: 'header'},{type: 'component'},{selector: 'nem-header'}],
    [{name: 'quienes-somos'},{type: 'page'},{order: '0'},{route: '/'}],
]);