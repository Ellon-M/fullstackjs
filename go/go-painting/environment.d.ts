declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TO_NAME: string,
            EJS_SERVICE: string,
            EJS_TEMPLATE: string,
            EJS_USER_ID: string
        }
    }
}

// conv to module
export {}