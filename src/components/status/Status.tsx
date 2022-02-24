import React, {FC} from 'react';
import './Status.scss';

const OnlineStatus: FC<PropsType> = ({online}) => {

    return (<>
            <div className={online ? 'status-online' : 'status'}>
                {online ?
                    <p>
                        {online ? 'online' : ''}
                    </p> :
                    <div>{'Был в сети:' + ' ' + new Date().getMinutes()}</div>
                }
            </div>
        </>
    );
};

export default OnlineStatus;

type PropsType = {
    online: boolean
}

