const reportWebVitals = (onPerfEntry?: any) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        onPerfEntry({ name: 'CLS', value: 0, delta: 0, id: 'cls', navigationType: 'navigate' });
    }
};

export default reportWebVitals;
