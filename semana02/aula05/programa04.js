/*
Criar algoritmo com dias do final de semana e devolva: 'sextou!', 'sabadou!',
'domingou'
ou 'dia de trabalhar'
*/

let finalDeSemana = 'terça'

switch(finalDeSemana) {
    case 'sexta':
        console.log('sextou!')
        break
    case 'sábado':
        console.log('sabadou!')
        break
    case 'domingo':
        console.log('domingou!')
        break
    default:
        console.log('dia de trabalhar!')
}