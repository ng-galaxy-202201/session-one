# Angular 14 - Sesión 1

## Como generar un proyecto - configuración base

La opción `--defaults` habilita la configuración mas basica (sin rutas y con css puro)

```
ng new nombre-del-proyecto --defaults
```

## Ejecutar el proyecto

Las opciones `-o` o `--open` abren el navegador luego de ejecutar el proyecto

```
ng serve
ng serve -o
ng serve --open
```

`npm start` o `npm run start` lee el script configurado en el `package.json`

## Crear un componente

Forma completa

```
ng generate component nombre-del-componente
ng generate component nombre-de-la-carpeta/nombre-del-componente
ng generate component nombre-de-la-carpeta/nombre-de-la-subcarpeta/nombre-del-componente
```

Forma corta

```
ng g c nombre-del-componente
ng g c nombre-de-la-carpeta/nombre-del-componente
ng g c nombre-de-la-carpeta/nombre-de-la-subcarpeta/nombre-del-componente
```

## Crear un modulo

```
ng generate module nombre-del-componente
ng generate module nombre-de-la-carpeta/nombre-del-componente
ng generate module nombre-de-la-carpeta/nombre-de-la-subcarpeta/nombre-del-componente
```

```
ng g m nombre-del-componente
ng g m nombre-de-la-carpeta/nombre-del-componente
ng g m nombre-de-la-carpeta/nombre-de-la-subcarpeta/nombre-del-componente
```

## Tarea 1

- Colegio
  - Asistencia
    - Salon
    - Curso
    - Alumno
    - Profesor

Crear un proyecto con la siguiente estructura representada en modulos

- Cada modulo debe tener un componente
- Cada component de los submodulos de Asistencia debe estar en el html de asistencia
- Asistencia debe verse en el app component html

- enviar un video mostrando resultado y codigo (explicado)
- enviar a luis.vilcarromero.ortiz@gmail.com con asunto [Angular14] Apellido y Nombre 

