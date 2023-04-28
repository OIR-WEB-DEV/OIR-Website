export const EventStats = {
    labels: [['Event1',' May 12, 2022'], ['Event2',' May 13, 2022'], ['Event3',' May 14, 2022'], ['Event4',' May 15, 2022']],

    datasets: [{
        label: 'Expected FootFall',
        lineTension: 0.4,
        data: [30, 20, 40, 35, 40],
        borderWidth:2,
        borderColor: '#FE6C19',
        pointBorderColor: '#FE6C19',
        backgroundColor:'#FE6C19',
        pointBackgroundColor: '#FE6C19',
        borderBackgroundColor: '#FE6C19',

    },
    {
        label: 'Actual Footfall',
        data: [40, 15, 25, 45, 50],
        lineTension: 0.4,
        borderColor: '#814DBC',
        backgroundColor:'#814DBC',
        pointBorderColor: '#814DBC',
        pointBackgroundColor: '#814DBC',
        borderBackgroundColor: '#814DBC'
    }],
}
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',

        },
        tooltip:{
            cornerRadius:15,
        },
        title: {
            fullSize: false,
            display: true,
            position: 'top',
            align: 'start',
            text: 'Event Attendees Statistics',
            padding: {
                top: 0,
                bottom: 0
            }
        },
    },
};