function validateRequest(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^(\*|[a-zA-Z\d\.]+)$/gim;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/gim;

    if (!methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!uriPattern.test(request.uri) || !request.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!versions.includes(request.version) || !request.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!messagePattern.test(request.message) || !request.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));