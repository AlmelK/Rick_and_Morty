import axios from "axios";
import { createEffect, createStore } from "effector";
import { Episode, EpisodeProps } from "../types/types";

export const fetchEpisodes = createEffect(async () => {
    //первый запрос, чтоб узнать количество страниц
    const res = await axios.get<EpisodeProps>('https://rickandmortyapi.com/api/episode');

    const pagesNum = res.data.info.pages;
    const arr: Episode[] = [];

    //записываем в буфер серии с первой страницы
    arr.push(...res.data.results);

    //записываем серии в буфер, начиная со второй страницы
    for (let i = 1; i < pagesNum; i++) {
        const response = await axios.get<EpisodeProps>('https://rickandmortyapi.com/api/episode?page=' + (i + 1));
        arr.push(...response.data.results);
    }
    return arr;
})

export const $episodes_store = createStore<Episode[]>([]).on(
    fetchEpisodes.doneData,
    (state, episodes_store) => episodes_store
)

$episodes_store.watch((episodes) => console.log(episodes))