### MyLearn

Deployment URL: https://my-learn-wheat.vercel.app/
#### Tech Stack
- ReactJs
- TypeScript
- SASS with BEM naming methodology (http://getbem.com/naming/)
- AntDesign UI Framework (https://ant.design/components/overview/)
- ESlint with Airbnb Config
- Husky for Pre-Commit hooks
- Vercel for deployment

#### How to run
    $ sh ./run_web.sh

#### Folder Structure
```
├── api
    Contains files that hits API endpoint
├── assets
├── components
    Contains re-usable components
├── mocks
    Mocks files used for MSW
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
├── tests
    Testing files
├── types
    TypeScript types declaration
└── utils
    Reusable helper functions
```

#### Problems
- POST join-class endpoint always returns error.