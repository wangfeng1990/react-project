/*
 * action 类型
 */

export const type = {
    TEST : 'TEST'
}

export function test(data) {
    return {
        type: type.TEST,
        data
    }
}