import { useStore } from "effector-react";
import { FC, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { $episodes_store, fetchEpisodes } from "../store/Episodes";
import { Episode } from "../types/types";
import EpisodeTable from "./EpisodeTable";

const filterArr = (arr: Episode[], season: number) => {
    return arr.filter((a) => {
        return a.episode.includes('S0' + season)
    })
}

const EpisodeTab: FC = () => {
    useEffect(() => {
        fetchEpisodes()
    }, []);

    const episodes = useStore($episodes_store)
    
    return (
        <>
            <Tabs defaultActiveKey="1">
            <Tab eventKey="1" title="Season 1">
                    <EpisodeTable episodes={filterArr(episodes, 1)} />
                </Tab>
                <Tab eventKey="2" title="Season 2">
                    <EpisodeTable episodes={filterArr(episodes, 2)} />
                </Tab>
                <Tab eventKey="3" title="Season 3">
                    <EpisodeTable episodes={filterArr(episodes, 3)} />
                </Tab>
                <Tab eventKey="4" title="Season 4">
                    <EpisodeTable episodes={filterArr(episodes, 4)} />
                </Tab>
                <Tab eventKey="5" title="Season 5">
                    <EpisodeTable episodes={filterArr(episodes, 5)} />
                </Tab>
            </Tabs>
        </>
    )
}

export default EpisodeTab;