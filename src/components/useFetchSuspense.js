import lru from 'lru-cache'
import md5 from 'md5'
import produce from 'immer'
import actions from '../consts/actions'

const cache = new lru(50);

const useFetchSuspense = (url, options = {}) => {

    const key = `${url}.${md5(JSON.stringify(options))}`;
    const value = cache.get(key) || { status: actions.NEW, data: null }

    console.log(value);

    if (value.status === actions.RESOLVED) {
        return value.data;
    }

    const promise = fetch(url).then((res) => res.json());

    promise.then(data => {
        cache.set(key, produce(value, draft => {
            draft.status = actions.RESOLVED;
            draft.data = data;
        }));

    });

    throw promise;

}

export default useFetchSuspense
