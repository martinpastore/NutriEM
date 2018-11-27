function empresaOnInit() {
    switch (routeParams.id) {
        case 'mision':
            document.getElementById('mision').style.display = 'block';
            document.getElementById('vision').style.display = 'none';
            document.getElementById('valores').style.display = 'none';
            document.getElementById('objetivos').style.display = 'none';
            break;
        case 'vision':
            document.getElementById('mision').style.display = 'none';
            document.getElementById('vision').style.display = 'block';
            document.getElementById('valores').style.display = 'none';
            document.getElementById('objetivos').style.display = 'none';
            break;
        case 'valores':
            document.getElementById('mision').style.display = 'none';
            document.getElementById('vision').style.display = 'none';
            document.getElementById('valores').style.display = 'block';
            document.getElementById('objetivos').style.display = 'none';
            break;
        case 'objetivos':
            document.getElementById('mision').style.display = 'none';
            document.getElementById('vision').style.display = 'none';
            document.getElementById('valores').style.display = 'none';
            document.getElementById('objetivos').style.display = 'block';
            break;
    }
}