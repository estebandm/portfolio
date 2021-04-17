import ListUsersPng from 'assets/images/projects/list-users.png'
import ListPokemonsPng from 'assets/images/projects/poke-api.png'
import ListHeros from 'assets/images/projects/list-heros.png'
import ToDoList from 'assets/images/projects/to-do-list.png'

export const tutorialSteps = [
  {
    title: 'Usuarios',  
    description: 'Pequeña aplicación que muestra una lista de usuarios, cada usuario contiene tareas. También contiene una página de login y otra para registrarse donde guarda los datos de usuario en localStorage , API JSONPlaceholder',
    imgPath: ListUsersPng,
    gitHub: 'https://github.com/estebandm/list-users.git',
    live: 'https://list-users-7bdca.web.app/login'
  },
  {
    title: 'Pokemones',  
    description: 'App que lista de a 5 pokemones y en cada uno se puede ver su detalle, consumiendo una API pública "PokeApi"',
    imgPath: ListPokemonsPng,
    gitHub: 'https://github.com/estebandm/PokeAPI.git',
    live: 'https://pokemon-fb1da.web.app/poke/list'
  },
  {
    title: 'Héroes de marvel',  
    description: 'Lista héroes de marvel, consumiendo la API Marvel Developer Portal',
    imgPath: ListHeros,
    gitHub: 'https://github.com/estebandm/heros-marvel.git',
    live: 'https://heros-marvel.web.app/'
  },
  {
    title: 'Gestor de tareas',  
    description: 'Añadir y eliminar tareas. Cada tarea tendrá su título, a cargo de quién estará, una pequeña descripción, y una prioridad (baja, media, o alta).',
    imgPath: ToDoList,
    gitHub: 'https://github.com/estebandm/todo-list.git',
    live: 'https://to-do-list-45ecb.web.app'
  }
];
