# KEY FEATURES :

- 1. TypeScripts used
- 2. Functional Component used in place of classbased Component
- 2. React Hooks Used
- 3. Redux used for Global State Management
- 4. Common Constants file for managing constants
- 5. Theme folder for manage theming stuff like colors and all
- 6. Utility folder for managing resuable functions
- 7. Tree Structure for Brief Idea of our project

# FOLDER STRUCTURE FOR BRIEFING FOR THIS PROJECT

src/
├── App.test.js
├── App.tsx ::::This is our root component for this project
├── components :::::>> Reusable components folder
│ └── textInput ::::>> Reusable TextInput Forms Folder
│ └── index.tsx ::::TextInput Component for Handling Inputs
├── constants ::::>> A common Constants folder in which you can manage like baseurl ,other contants for which you dont want to go deep dive in code
│ └── index.ts  
├── core ::::> Core -A folder which consists our libraries(Redux/Localisation/Navigation/APIs ...etc)
│ ├── apis  
│ │ ├── endPoints.ts ::::::API EndPoints managed by using Contants
│ │ └── index.ts :::::: API Client Config file for managing axios
│ ├── i18n :::::::> We dont want to use hadrcoded string to localisation added
│ │ ├── constants.ts
│ │ ├── index.ts
│ │ ├── messages :::>> It Consists all language file for as of now only english file is there ex: en.ts
│ │ │ ├── en.ts
│ │ │ └── index.ts
│ │ └── translate.ts ::::::This file is important for ts('LABEL_NAME') that you want to use , translate function you have to import in component
│ └── redux :::::::>Redux used for Global Management in our project
│ ├── actions ::::::> Action Creators folder
│ │ └── index.ts
│ ├── contants :::::> Constants for action creators will be added in this folder
│ │ └── index.ts
│ ├── index.ts
│ ├── reducers
│ │ ├── common.ts
│ │ ├── getNewsReducer.ts
│ │ └── index.ts
│ └── selectors
│ └── index.ts
├── index.tsx ::::::STORE of the redux
├── pages :::::> For this project only dashboard is there (Dashboard is consists: Profile,Search,Result Screen)
│ └── dashboard
│ ├── index.tsx
│ ├── profile.tsx
│ ├── resultList.tsx
│ ├── searchHeader.tsx
│ └── styles.ts
├── react-app-env.d.ts
├── reportWebVitals.js
├── setupTests.js
├── theme :::::> A folder which manage all colors and other theming stuff
│ └── index.ts
└── utility ::::> All reusbale functions will be lie in this folder
└── index.ts
