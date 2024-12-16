
export default class APIService {
    base = '';
    _token = '';

    constructor(base: string = 'http://localhost:8000'){
        this.base = base;
    }

    set token(t:string){
        this._token = t
    }

    async get(url: string){
        return fetch(this.base + url);
    }

    async post(url:string, body: any){
        return fetch(this.base + url, {
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(body)
            }
        );
    }
}