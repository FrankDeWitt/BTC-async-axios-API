export class Store {

    constructor() {
        this.type;
        this.defaultType = 'popular';
    }

    getTypeData() {
        if(localStorage.getItem('type') === null){
            this.type = this.defaultType;
        } else {
            this.type = localStorage.getItem('type');
        }

        return this.type;
        
    }

    setTypeData(type) {
        localStorage.setItem('type', type);
    }

}