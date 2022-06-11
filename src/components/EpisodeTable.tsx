import React, { FC } from 'react'
import { Episode } from '../types/types'
import { Table, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

interface EpisodeTableProps {
    episodes: Episode[];
} 

const EpisodeTable: FC<EpisodeTableProps> = ({ episodes }) => {
    return (
        <>           
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Air date</th>
                        <th>Season</th>
                        <th>Characters count</th>
                    </tr>
                </thead>
                <tbody>
                {episodes.map(episode =>
                    <tr key={episode.id}>
                        <td>{episode.id}</td>
                        <td>{episode.name}</td>
                        <td>{episode.air_date}</td>
                        <td>{episode.episode}</td>
                        <td>{episode.characters.length}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    )
}

export default EpisodeTable;