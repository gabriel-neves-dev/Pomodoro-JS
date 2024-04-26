import React, { useEffect } from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/sToT';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;

}


export function PomodoroTimer(props: Props): JSX.Element {

    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);


    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 
    timeCounting ? 1000 : null,

    );
 
    useEffect(() => {
        if(working) document.body.classList.add('working');
        if(resting) document.body.classList.remove('working');

    }, [working]);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
    };

    const configureRest = (long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        if (long) {
            setMainTime(props.longRestTime);
        } else {
            setMainTime(props.shortRestTime);
        }
    };

    return (
        <div className="pomodoro">
            <h2>Você está: Trabalhando</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text={'Work'} onClick={() => { configureWork() }} />
                <Button text={'Rest'} onClick={() => { configureRest(false) }} />
                <Button 
                className={!working && !resting ? 'hidden' : ''} 
                text={timeCounting ? 'Pause' : 'Play'} 
                onClick={() => { setTimeCounting(!timeCounting) }} />
            </div>

            <div className="details">
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
                <p>Testando: sdkmjaskodj aklsdjkalsjdak sdhka hdklsj dlaksjd</p>
            </div>
        </div>
    )
}