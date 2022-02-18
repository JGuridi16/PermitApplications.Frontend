export default class Base {
    public id?: number;
    public deleted: boolean;

    constructor() {
        this.id = undefined;
        this.deleted = false;
    }
}