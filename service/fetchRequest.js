
export default async (request, opts) => {
    const response = await $fetch(`${request}`, opts)
        .catch((err) => {
            if (err.statusCode === 404) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Page not found'
                })
            }
        });
    if (typeof response === "object") {
        return response
    } else {
        return JSON.parse(response)
    }

    // return response

}