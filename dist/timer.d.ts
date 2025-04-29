declare let currentTime: number;
type Tistory = {
    startedAt: string;
    stoppedAt: string;
};
declare let oneMin: number, oneHour: number, halfHour: number, fiftenMins: number, fiveMins: number;
declare let record: Tistory;
declare function setTime(): string;
declare function clock(): void;
declare function timeReached(): Tistory;
