// описание типа значений для описания эпизода //
export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}


type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

// тип значений данных, получаемых с сервера //
export type EpisodeProps = {
    info: Info;
    results: Episode[];
}