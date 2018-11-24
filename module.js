const burger = require('burgerjs');
    
burger.module([
    [{name: 'header'},{type: 'component'},{selector: 'nem-header'}, {properties: []}],
    [{name: 'card'},{type: 'component'},{selector: 'nem-card'}, {properties: ['text']}],
    [{name: 'quienes-somos'},{type: 'page'},{order: '0'},{route: '/quienes-somos'}],
    [{name: 'servicios'},{type: 'page'},{order: '1'},{route: '/servicios'}],
    [{name: 'empresa'},{type: 'page'},{order: '2'},{route: '/empresa'}],
    [{name: 'novedades'},{type: 'page'},{order: '3'},{route: '/novedades'}],
    [{name: 'contacto'},{type: 'page'},{order: '4'},{route: '/contacto'}],
]);