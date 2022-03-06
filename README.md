### MyLearn

#### Tech Stack
- ReactJs
- TypeScript
- SASS with BEM naming methodology (http://getbem.com/naming/)
- AntDesign UI Framework (https://ant.design/components/overview/)
- Vercel for deployment

#### How to run
    Create .env file
    $ npm i
    $ npm run start

#### Folder Structure
```
├── api
    Contains files that hits API endpoint
├── assets
├── components
    Contains re-usable components
├── pages
    ├── {domain}
    Each page has their own domain parent folder
        ├── index.tsx
        UI / View file
        ├── hooks.tsx
        State / Functions file
        ├── index.module.scss
        SCSS File
├── styles
    Global SCSS Files
├── types
    TypeScript types declaration
└── utils
    Reusable helper functions
```