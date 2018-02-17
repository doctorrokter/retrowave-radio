'use strict';

function stringifyParams(params) {
    let str = '';
    for(let param in params) {
        str = str.concat(param).concat('=').concat(params[param]).concat('&');
    }
    return str.substr(0, str.lastIndexOf('&'));
}

function request(method, url, params, headers) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        let body = null;

        req.open(method, url, true);

        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (headers) {
            for(let h in headers) {
                req.setRequestHeader(h, headers[h]);
            }
        }

        if (params) {
            body = stringifyParams(params);
        }

        req.onload = () => {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject({status: req.status, message: req.responseText});
            }
        };

        req.onerror = () => {
            reject(Error('Network Error'));
        };

        req.send(body);
    });
}

class Request {
    static get(url, params, headers) {
        return request('GET', url, params, headers);
    }

    static post(url, params) {
        return request('POST', url, params);
    }
}

export default Request;