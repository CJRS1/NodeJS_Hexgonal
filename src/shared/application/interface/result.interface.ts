export default interface Result<T> {
    /* traceId sale seguimiento */
    /* Usuario no se pudo registrar, para saber donde esta el error */
    /* Para saber donde fue front o back */
    traceId: string;
    payload: {
        data: Partial<T> | Partial<T>[],
        total?: number;
    }
}

/* Se le da formato */