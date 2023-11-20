# Bienvenue sur mon test

## Page d'acceuil
![simulator_screenshot_8FC1A39B-DDE7-4BCA-BFC3-03270EB293CE](https://github.com/alexdieudonne/Pokedev/assets/59718717/c0cd9847-4aa3-4e78-9ab7-c8ccf0264904)

## Page détail
![simulator_screenshot_02A06518-6BB5-4C02-9130-B7DDFEFED9C6](https://github.com/alexdieudonne/Pokedev/assets/59718717/f656fe6d-f0fb-404d-b697-06aa4869279f)



### Pour installer le projet

- Clone project (Cloner le projet) : `git clone https://github.com/alexdieudonne/Pokedev.git`
- Run this command (Lancer cette commande) : `cd Pokedev && cp .env.example .env`
- Install dependencies (Installer les dépendances) : `yarn install`
- Now launch it using your favourite platform ! (Maintenant lancer le projet en choisissant votre platform)
  - IOS: `npx expo run:ios` 
  - Android: `npx expo run:android`

### Pour lancer les tests
- `yarn test`


## Quelques informations sur le projet
`NB:` Certaines fonctionnalités n'ont pas pu etre implémentées malheuresement par soucis du temps imparti.
Ce sera: 
- La recherche par nom
- La recherche par filtre


### | Conçernant les choix techniques |
- J'ai utilisé `Expo` pour le développement de l'application
- J'ai utilisé `Redux-Rtx Query` pour la gestion des requêtes (Par ailleurs je viens d'en faire la découverte et je le trouve excellent !)
- L'api utilisée ne fournissait pas d'images pour les pokemons (Ou des images moins pertinantes...), j'ai donc utilisé une autre api pour les images en les associant par rapport à l'id du pokemon.
- J'ai utilisé `Jest` pour les tests
- J'ai utilisé `react-native-image-colors` pour récupérer la couleur dominante de l'image du pokemon

### Autres informations
`NB:` Certains tests n'ont pas pu être approfondi.
`NB:` J'ai pas tester sur android !!! (Mais je pense tout fonctionne nickel.).
- Il y a une erreur que vous trouverez lorsque vous lancerez les tests. C'est une erreur que je n'ai pas pu résoudre à temps. Cependant, les tests passent bien.
Il s'agit de  `Cannot log after tests are done. Did you forget to wait for something async in your test?`
- Les tests sont dans des dossier `__tests__` à la racine des composants
- La navigation se retrouvera dans le dossier `app` pour les `paths` et pour essayer de structurer au mieux le projet.
- Le projet contient un semblant de `dark-mode` :)
- Ma manière d'architecturer mon projet se base sur le principe de Class/Functional Component et Sous component, cela me permet de mieux regrouper mes composants en fonction du screen qui les utilise.
```
project
│
└───src
    │
    └───screens
        │   Home
        |   | index.tsx
        │   └───Components
        │           │   Component1
        │   
        └───Details
            │ index.tsx
            └───Components
                    │   Component1
...
```


