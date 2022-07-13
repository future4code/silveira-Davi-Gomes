export class Recipe {

    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: string,
    ) { }
    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getCreatedAt() {
        return this.createdAt
    }

}