import React, { FC } from 'react'
import { IEpizode } from '../types/types'

interface EpizodeListProps {
    epizodes: IEpizode[];
}

const EpizodeList: FC<EpizodeListProps> = ({ epizodes }) => {

    return (
        <div>
            {epizodes.map(epizode => 
                <div key={epizode.id}>
                    {epizode.id}. {epizode.name}: {epizode.air_date}|| {epizode.episode}
                </div>
            )}
        </div>
    )
}

export default EpizodeList