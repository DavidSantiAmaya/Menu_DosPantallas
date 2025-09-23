Navegación entre dos páginas con menú en Ionic Angular

Para implementar navegación entre dos pantallas en Ionic con Angular, 
utilizamos el enrutador de Angular junto con componentes de Ionic 
como ion-router-outlet y ion-toolbar. En la raíz de la aplicación (por ejemplo en app.component.html) 
debemos incluir el componente <ion-router-outlet> que actuará como 
contenedor donde se cargarán las páginas según la ruta activa
(Ionic framework, n.d.). Luego definimos en el archivo de rutas 
(por ejemplo app.routes.ts) los objetos de ruta (Routes), 
asignando a cada path el componente que debe mostrarse. Por ejemplo:

// src/app/app.routes.ts
export const routes: Routes = [
  { path: 'home', component: HomePage }, 
  { path: 'paginaN2', component: PaginaN2Page }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

Este arreglo de rutas vincula la ruta /home al componente HomePage y /paginaN2 al componente PaginaN2Page
La ruta vacía '' redirige por defecto a home. En Ionic Angular moderno (v7/v8) suele usarse
además loadComponent para lazy loading de componentes, pero el principio es el mismo: definir las rutas 
vinculadas a cada página. (Define routes, n.d.)

Con las rutas definidas, podemos crear el menú de navegación. En Ionic es común usar una barra de herramientas 
(ion-toolbar) dentro de un encabezado (ion-header). Allí colocamos botones o enlaces que usen la directiva 
routerLink para navegar a las rutas deseadas. Por ejemplo, en home.page.html podríamos tener:

<ion-header>
  <ion-toolbar>
    <ion-title>Mi App</ion-title>
    <ion-buttons slot="end">
      <ion-button routerLink="/home">Home</ion-button>
      <ion-button routerLink="/paginaN2">PaginaN2</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <h1>Página Home</h1>
</ion-content>

El atributo [routerLink] en el botón indica la ruta a la que se navegará al hacer clic
Internamente esto funciona como un enlace HTML, pero sincroniza la navegación con el 
router de Angular para cargar el componente correspondiente sin recargar la página
Debemos repetir el mismo bloque de menú (o crearlo como un componente compartido) 
en ambas páginas para que el menú (navbar) aparezca en las dos vistas. Por ejemplo, 
en paginaN2.page.html ponemos un encabezado igual (solo cambiando el título y contenido):
(Angular Navigation, n.d.)

<ion-header>
  <ion-toolbar>
    <ion-title>Mi App</ion-title>
    <ion-buttons slot="end">
      <ion-button routerLink="/home">Home</ion-button>
      <ion-button routerLink="/paginaN2">PaginaN2</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <h1>Página N2</h1>
</ion-content>

Con esto, al pulsar los botones se carga la ruta correspondiente dentro del mismo
ion-router-outlet. Ionic proporciona los componentes visuales (ion-header, ion-toolbar, ion-buttons) 
pero la navegación es manejada por Angular Router con routerLink
Así logramos un menú de navegación simple entre las dos páginas Home y PaginaN2.
(Angular Navigation, n.d.)

References
Angular Navigation. (s/f). Ionic Framework Docs. Recuperado el 23 de septiembre de 2025, de https://ionicframework.com/docs/angular/navigation

ChatGPT. (n.d.). ChatGPT. Retrieved September 23, 2025, from https://chatgpt.com/c/68d31ffb-7c5c-8325-a37d-57243611152b

Define routes. (s/f). Angular.dev. Recuperado el 23 de septiembre de 2025, de https://angular.dev/guide/routing/define-routes

Ionic framework. (s/f). Ionic Framework Docs. Recuperado el 23 de septiembre de 2025, de https://ionicframework.com/docs/api/router-outlet
