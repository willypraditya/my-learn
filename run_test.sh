NODE_MODULES=node_modules
if [ ! -d "$NODE_MODULES" ]; then
    echo "$(tput setaf 3)node_modules not found! Running 'npm install'.$(tput sgr 0)"
    npm install
fi

ENV=.env
if [ ! -f "$ENV" ]; then
    echo "$(tput setaf 3)'.env' file not found! Generating .env file.$(tput sgr 0)"
    echo "GENERATE_SOURCEMAP=false" > .env
    echo "REACT_APP_API_URL=https://baee0c5d-15e7-45e2-ae1b-392ba74406a9.mock.pstmn.io/" >> .env
fi

npm run test