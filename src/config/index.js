const devConfig = {
    BASE_URL : 'http://localhost:5000/api/v1',
    ENV : 'development'
};

const prodConfig = {
    BASE_URL : 'http://52.47.181.47:3000/api/v1',
    ENV : 'production'
};

const defaultConfig = {
    APP_NAME : 'Verity',
}

const envConfig = (env)=>{
    if(env === 'development'){
        return {
            ...defaultConfig,
            ...devConfig
        }
    } else {
        return {
            ...defaultConfig,
            ...prodConfig
        }
    }
}


export default envConfig('development');
