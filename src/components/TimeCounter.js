import { useState, useEffect } from 'react';


export default function GitTimer({ dataFromPortfolio }) {
    const calculateTimePassed = () => {
        const gitPushed = dataFromPortfolio.pushed_at
        const difference = +new Date() - +new Date(`${ gitPushed }`);
        let TimePassed = {};
        if (difference > 0) {
            TimePassed = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return TimePassed;
    };
    const [TimePassed, setTimePassed] = useState(calculateTimePassed());
    const [year] = useState(new Date().getFullYear());
    useEffect(() => {
        setTimeout(() => {
            setTimePassed(calculateTimePassed());
        }, 1000);
    });
    const timerComponents = [];
    Object.keys(TimePassed).forEach((interval) => {
        if (!TimePassed[interval]) {
            return;
        }
        timerComponents.push(
            <span>
                {TimePassed[interval]} {interval}{''}
            </span>
        );
    });
    return (
        <div style={{ color: 'black' }}>
            <span><h6 style={{ textAlign:"center", fontWeight: 'bold' }}>Created</h6></span>
      { timerComponents }
    <span style={{ fontWeight: 'bold' }}></span>
      </div >)
}

