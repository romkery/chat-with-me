import React, {FC, useEffect, useState} from 'react';
import './Message.scss';
import classNames from 'classnames';
import CheckIcon from '../CheckIcon/CheckIcon';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime';
import waveSvg from '../../assets/img/wave.svg';
import pauseSvg from '../../assets/img/pause.svg';
import playSvg from '../../assets/img/play.svg';

const Message: FC<PropsType> = ({avatar, text, date, user, isMe, isChecked, attachments, isTyping, audio}) => {
        console.log(isMe);
        return (
            <div className={classNames('message', {
                'message--isMe': isMe,
                'message--is-typing': isTyping,
                'message--is-audio': audio,
                'message--image': attachments?.length === 1,
            })}>
                <div className="message__content">
                    {/*<div className="message__avatar">*/}
                    {/*    <img src={avatar} alt={`User ${user?.fullName}`}/>*/}
                    {/*</div>*/}
                    <div className="message__info">
                        {(audio || text || isTyping) &&
                        <div className="message__bubble">
                            <div className="message__text">
                                {text && <p>{text}</p>}
                            </div>
                            {audio && <MessageAudio audio={audio}/>}
                            {isTyping && <div className="message__typing">
                                <span/>
                                <span/>
                                <span/>
                            </div>}
                            <div className="message__time">
                                <span className={'message__date'}>{date.getHours() + ':' + date.getMinutes()}</span>
                                {isMe &&
                                <CheckIcon isChecked={isChecked} isMe={isMe}/>}
                            </div>
                        </div>
                        }
                        {attachments &&
                        <div className="message__attachments">
                            {attachments.map(item =>
                                <div className="message__attachments-item" key={item.url}>
                                    <img src={item.url} alt={item.filename}/>
                                </div>
                            )}
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
;

export default Message;

const MessageAudio = ({audio}: any) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [audioElem] = useState(new Audio(audio));
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        isPlaying ? audioElem.play() : audioElem.pause();
    }, [isPlaying]);

    useEffect(() => {
            audioElem.addEventListener('loadedmetadata', () => {
                setCurrentTime(audioElem.duration);
            });

            if (audioElem) {
                audioElem.addEventListener('ended', () => {
                    setIsPlaying(false);
                    setProgress(0);
                    setCurrentTime(0);
                    document.querySelector<HTMLElement>('.message__audio-progress')!.style.transition = '0s';
                }, false);
            }

            if (audioElem) {
                audioElem.addEventListener('playing', () => {
                    document.querySelector<HTMLElement>('.message__audio-progress')!.style.transition =
                        `${(audioElem.duration - audioElem.currentTime).toString()}s linear`;
                    setIsPlaying(true);
                    if (!isPlaying) {
                        setInterval(() => {
                            setCurrentTime(audioElem.duration - audioElem.currentTime);
                        }, 999);
                    }
                    setProgress(100);
                }, false);
            }
            if (audioElem) {
                audioElem.addEventListener('pause', () => {
                    setIsPlaying(false);
                    setProgress((audioElem.currentTime / audioElem.duration) * 100);
                }, false);
            }
        }, []
    );

    return <>
        <div className="message__audio">
            <audio src={audio} preload='auto'/>
            <div className="message__audio-progress"
                 style={{width: progress + '%'}}/>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        <img src={!isPlaying ? playSvg : pauseSvg} alt='Play svg'/>
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="wave svg"/>
                </div>
            </div>
            <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </span>
        </div>
    </>;
};

type PropsType = {
    audio?: any
    avatar: string
    text?: string
    date: Date
    user?: {
        fullName?: string
    }
    isMe?: boolean
    isChecked?: boolean
    attachments?: Array<{
        filename: string
        url: string
    }>
    isTyping?: boolean
}
