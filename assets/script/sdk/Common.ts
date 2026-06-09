// 防重入装饰器
export function debounceAsync() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        const pendingKey = `_${propertyKey}_pending`;

        descriptor.value = function (...args: any[]) {
            // 如果距离上次调用时间不足指定延迟，且有正在执行的请求，返回该请求
            if (this[pendingKey]) {
                console.log(`${propertyKey} 防重入: 返回正在执行的请求`);
                return this[pendingKey];
            }
            // 执行原方法并缓存 Promise
            this[pendingKey] = original.apply(this, args)
                .finally(() => {
                    // 请求完成后清理缓存
                    this[pendingKey] = null;
                });

            return this[pendingKey];
        };

        return descriptor;
    };
}