export class Movie {
    title: string;
    releaseDate: Date;
    cast: Array<Cast> = [];

    constructor(title: string,
        releaseDate: Date,
        cast: Array<Cast>) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.cast = cast;


    }
}
export class Cast {
    actor: string;
    role: string;

    constructor(actor: string, role: string) {
        this.actor = actor;
        this.role = role;
    }
}
