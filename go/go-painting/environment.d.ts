declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_TO_NAME: string,
            NEXT_PUBLIC_EJS_SERVICE: string,
            NEXT_PUBLIC_EJS_TEMPLATE: string,
            NEXT_PUBLIC_EJS_USER_ID: string
        }
    }
}

// conv to module
export {}