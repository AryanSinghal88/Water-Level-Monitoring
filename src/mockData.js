const mockData = {
    1203: {
      latestReading: 1.2,
      monthlyAverage: 1.1,
      dataPoints: [
        // September 2024
        { timestamp: '2024-09-01T08:00:00', height: 1.2 },
        { timestamp: '2024-09-02T08:00:00', height: 1.1 },
        { timestamp: '2024-09-05T08:00:00', height: 1.0 },
        { timestamp: '2024-09-10T08:00:00', height: 1.3 },
        { timestamp: '2024-09-15T08:00:00', height: 1.2 },
        { timestamp: '2024-09-18T08:00:00', height: 1.4 },
        { timestamp: '2024-09-20T08:00:00', height: 1.3 },
        { timestamp: '2024-09-22T08:00:00', height: 1.2 },
        { timestamp: '2024-09-25T08:00:00', height: 1.1 },
        { timestamp: '2024-09-30T08:00:00', height: 1.0 },
  
        // August 2024
        { timestamp: '2024-08-01T08:00:00', height: 1.0 },
        { timestamp: '2024-08-03T08:00:00', height: 1.1 },
        { timestamp: '2024-08-08T08:00:00', height: 1.2 },
        { timestamp: '2024-08-12T08:00:00', height: 1.1 },
        { timestamp: '2024-08-15T08:00:00', height: 1.0 },
        { timestamp: '2024-08-18T08:00:00', height: 1.3 },
        { timestamp: '2024-08-21T08:00:00', height: 1.2 },
        { timestamp: '2024-08-25T08:00:00', height: 1.1 },
        { timestamp: '2024-08-28T08:00:00', height: 1.0 },
        { timestamp: '2024-08-31T08:00:00', height: 1.2 },
  
        // July 2024
        { timestamp: '2024-07-01T08:00:00', height: 1.1 },
        { timestamp: '2024-07-04T08:00:00', height: 1.2 },
        { timestamp: '2024-07-09T08:00:00', height: 1.0 },
        { timestamp: '2024-07-12T08:00:00', height: 1.3 },
        { timestamp: '2024-07-16T08:00:00', height: 1.1 },
        { timestamp: '2024-07-20T08:00:00', height: 1.0 },
        { timestamp: '2024-07-23T08:00:00', height: 1.2 },
        { timestamp: '2024-07-26T08:00:00', height: 1.1 },
        { timestamp: '2024-07-29T08:00:00', height: 1.3 },
        { timestamp: '2024-07-31T08:00:00', height: 1.2 },
      ],
    },
    1312: {
      latestReading: 1.0,
      monthlyAverage: 0.9,
      dataPoints: [
        // September 2024
        { timestamp: '2024-09-01T09:00:00', height: 1.0 },
        { timestamp: '2024-09-03T09:00:00', height: 1.1 },
        { timestamp: '2024-09-07T09:00:00', height: 0.9 },
        { timestamp: '2024-09-11T09:00:00', height: 1.2 },
        { timestamp: '2024-09-14T09:00:00', height: 1.0 },
        { timestamp: '2024-09-17T09:00:00', height: 1.1 },
        { timestamp: '2024-09-20T09:00:00', height: 1.0 },
        { timestamp: '2024-09-23T09:00:00', height: 1.2 },
        { timestamp: '2024-09-26T09:00:00', height: 1.1 },
        { timestamp: '2024-09-29T09:00:00', height: 0.9 },
  
        // August 2024
        { timestamp: '2024-08-01T09:00:00', height: 1.1 },
        { timestamp: '2024-08-05T09:00:00', height: 1.0 },
        { timestamp: '2024-08-09T09:00:00', height: 0.8 },
        { timestamp: '2024-08-13T09:00:00', height: 1.2 },
        { timestamp: '2024-08-17T09:00:00', height: 1.0 },
        { timestamp: '2024-08-20T09:00:00', height: 1.1 },
        { timestamp: '2024-08-23T09:00:00', height: 1.0 },
        { timestamp: '2024-08-27T09:00:00', height: 1.2 },
        { timestamp: '2024-08-29T09:00:00', height: 1.1 },
        { timestamp: '2024-08-31T09:00:00', height: 0.9 },
  
        // July 2024
        { timestamp: '2024-07-01T09:00:00', height: 1.0 },
        { timestamp: '2024-07-03T09:00:00', height: 1.2 },
        { timestamp: '2024-07-07T09:00:00', height: 1.1 },
        { timestamp: '2024-07-10T09:00:00', height: 0.9 },
        { timestamp: '2024-07-14T09:00:00', height: 1.0 },
        { timestamp: '2024-07-17T09:00:00', height: 1.2 },
        { timestamp: '2024-07-21T09:00:00', height: 1.1 },
        { timestamp: '2024-07-24T09:00:00', height: 1.0 },
        { timestamp: '2024-07-28T09:00:00', height: 1.1 },
        { timestamp: '2024-07-31T09:00:00', height: 1.2 },
      ],
    },
    1453: {
      latestReading: 1.3,
      monthlyAverage: 1.2,
      dataPoints: [
        // September 2024
        { timestamp: '2024-09-01T10:00:00', height: 1.3 },
        { timestamp: '2024-09-03T10:00:00', height: 1.2 },
        { timestamp: '2024-09-06T10:00:00', height: 1.1 },
        { timestamp: '2024-09-09T10:00:00', height: 1.4 },
        { timestamp: '2024-09-12T10:00:00', height: 1.2 },
        { timestamp: '2024-09-15T10:00:00', height: 1.3 },
        { timestamp: '2024-09-18T10:00:00', height: 1.1 },
        { timestamp: '2024-09-21T10:00:00', height: 1.2 },
        { timestamp: '2024-09-24T10:00:00', height: 1.3 },
        { timestamp: '2024-09-27T10:00:00', height: 1.4 },
  
        // August 2024
        { timestamp: '2024-08-01T10:00:00', height: 1.2 },
        { timestamp: '2024-08-04T10:00:00', height: 1.1 },
        { timestamp: '2024-08-08T10:00:00', height: 1.3 },
        { timestamp: '2024-08-12T10:00:00', height: 1.2 },
        { timestamp: '2024-08-15T10:00:00', height: 1.1 },
        { timestamp: '2024-08-18T10:00:00', height: 1.3 },
        { timestamp: '2024-08-21T10:00:00', height: 1.2 },
        { timestamp: '2024-08-24T10:00:00', height: 1.1 },
        { timestamp: '2024-08-27T10:00:00', height: 1.2 },
        { timestamp: '2024-08-30T10:00:00', height: 1.3 },
  
        // July 2024
        { timestamp: '2024-07-01T10:00:00', height: 1.2 },
        { timestamp: '2024-07-04T10:00:00', height: 1.3 },
        { timestamp: '2024-07-08T10:00:00', height: 1.1 },
        { timestamp: '2024-07-12T10:00:00', height: 1.2 },
        { timestamp: '2024-07-16T10:00:00', height: 1.3 },
        { timestamp: '2024-07-19T10:00:00', height: 1.2 },
        { timestamp: '2024-07-22T10:00:00', height: 1.1 },
        { timestamp: '2024-07-25T10:00:00', height: 1.3 },
        { timestamp: '2024-07-28T10:00:00', height: 1.2 },
        { timestamp: '2024-07-31T10:00:00', height: 1.1 },
      ],
    },
  };
  
  export default mockData;
  