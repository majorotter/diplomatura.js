// 8) Importar helpers desde su propio módulo
import {
  printResult,
  Universidades,
  Profesores,
  Materias,
  Provincias,
  Totales,
  addNota,
} from './helpers';

// 2) Implementar una función que obtenga una universidad por Id
printResult('Univarsidad 1:', Universidades.getById(1));

// 3) Implementar una función que obtenga un profesor por Id
printResult('Profesor 1:', Profesores.getById(1));

// 4) Implementar una función que obtenga una materia por Id
printResult('Materia 1:', Materias.getById(1));

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
const provinciaId = Provincias.add({ nombre: 'Tierra del Fuego' });
printResult('Provincia:', Provincias.getById(provinciaId));

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
printResult('Materia:', Materias.getByIdMap(1));

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
Totales();

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
addNota('Rigoberto Manchu', 'Análisis matemático', 7.7); // Existing
addNota('Eduardo Cuomo', 'Ingeniería', 7.7); // New

Totales();
