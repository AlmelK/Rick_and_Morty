import React, { FC } from 'react'
import { Episode } from '../types/types'

interface EpisodeListProps {
    episodes: Episode[];
}

const EpisodeList: FC<EpisodeListProps> = ({ episodes }) => {
    return (
        <div>
            {episodes.map(episode => 
                <div key={episode.id}>
                    {episode.id}. {episode.name}: {episode.air_date}||{episode.episode}
                </div>
            )}
        </div>
    )
}

export default EpisodeList