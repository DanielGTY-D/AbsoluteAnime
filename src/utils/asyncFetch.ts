interface AsyncFunction<T> {
    (): Promise<T>;
}

const asyncFetch = async <T>(fn: AsyncFunction<T>): Promise<T> => {
    const response = await fn();
    return response;
}

export default asyncFetch;