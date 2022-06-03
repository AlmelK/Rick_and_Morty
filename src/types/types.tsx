// описание типа значений для описания эпизода //
export interface IEpizode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

// тип значений данных, получаемых с сервера //
export interface getEpizodeProps {
    info: Info;
    results: IEpizode[];
}