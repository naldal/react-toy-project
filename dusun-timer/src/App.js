import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimver = () => {
        const CountdownDate = new Date("December 13, 2020 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = CountdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimver();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span className="mdi mdi-calendar-clock timer-icon"></span>
                    <h2>조두순 타이머</h2>
                    <p>조두순이 출소하기까지</p>
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p>
                            <small>일</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p>
                            <small>시간</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p>
                            <small>분</small>
                        </p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p>
                            <small>초</small>
                        </p>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default App;
