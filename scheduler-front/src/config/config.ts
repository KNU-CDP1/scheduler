export const config = {
  baseurl: "http://119.201.71.174:8080",
  // baseurl: "http://localhost:8080",
};

interface Dummy {
  scheduleParams: ScheduleParams;
  schedule: Schedule;
  scheduleHistory: ScheduleHistory;
}

export const dummy: Dummy = {
  scheduleParams: {
    riskAlpha: 20,
    cancelCost: 20,
    delayCost: 20,
    time: new Date(),
  },

  schedule: {
    id: -1,
    flightNumber: "abc",
    passengers: 2,
    seats: 4,
    cost: 80,
    plannedDeparture: new Date(),
    plannedArrival: new Date(),
    adjustedDeparture: new Date(),
    adjustedArrival: new Date(),
    weather: "Sunny",
    risk: 20,
    position: 0,
    status: "Delayed",
  },

  scheduleHistory: {
    title: "가제",
    csv: "a.csv",
    details: "디테일",
    author: "작성자",
    uploadDate: new Date(),
  },
};
