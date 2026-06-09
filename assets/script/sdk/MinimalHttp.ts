type HttpMethod = 'GET' | 'POST';

interface HttpRequestOptions {
    url: string;
    method?: HttpMethod;
    data?: any;
    headers?: Record<string, string>;
    responseType?: XMLHttpRequestResponseType;
    timeout?: number;
}

export function httpRequest<T = any>(options: HttpRequestOptions): Promise<T> {
    const { url, method = 'GET', data, headers = {}, responseType = 'json', timeout = 10000 } = options;

    return new Promise((resolve, reject) => {
        // 微信小游戏
        const wxLike = typeof wx !== 'undefined' ? wx : (typeof tt !== 'undefined' ? tt : null);

        if (wxLike && typeof wxLike.request === 'function') {
            wxLike.request({
                url,
                method,
                data,
                timeout,
                header: headers,
                success(res: any) {
                    // 微信/抖音统一结构
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                },
                fail(err: any) {
                    reject(err);
                }
            });
            return;
        }

        // 浏览器或模拟环境（如 Creator 模拟器）
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
        });

        xhr.responseType = responseType;

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const res = xhr.responseType === 'text' ? xhr.responseText : xhr.response;
                try {
                    resolve(typeof res === 'string' && responseType === 'json' ? JSON.parse(res) : res);
                } catch (err) {
                    reject(err);
                }
            } else {
                reject(xhr);
            }
        };

        xhr.onerror = () => reject(xhr);
        xhr.send(data ? (typeof data === 'string' ? data : JSON.stringify(data)) : null);
    });
}