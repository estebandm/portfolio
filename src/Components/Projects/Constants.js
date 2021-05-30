import ListUsersPng from 'assets/images/projects/list-users-min.jpg'
import ListPokemonsPng from 'assets/images/projects/poke-api-min.jpg'
import ListHeros from 'assets/images/projects/list-heros-min.jpg'
import ToDoList from 'assets/images/projects/to-do-list-min.jpg'
import Movies from 'assets/images/projects/movies-min.jpg'
import RickAndMorty from 'assets/images/projects/rick-and-morty-min.jpg'

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
  },
  {
    title: 'Películas',  
    description: 'App hecha en nextjs que muestra películas paginadas de a 20, también cuenta con filtros de búsqueda',
    imgPath: Movies,
    gitHub: 'https://github.com/estebandm/movies',
    live: 'https://tevix-pedia.vercel.app'
  },
  {
    title: 'Rick and Morty',  
    description: 'App que lista todos los personajes de rick and morty con infinite scroll, también cuenta con dark mode',
    imgPath: RickAndMorty,
    gitHub: 'https://github.com/estebandm/rink-and-morty',
    live: 'https://rick-and-morty-67c08.web.app/'
  }
];
