const hoy = new Date();
let dia = 0;
const dias = {
    0: () => 'Domingo',
    1: () => 'Lunes',
    2: () => 'Martes',
    3: () => 'Miercoles',
    4: () => 'Jueves',
    5: () => 'Viernes',
    6: () => 'Sabado',
};

console.log(dias[dia]() || 'No esta definido');