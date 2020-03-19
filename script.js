const config = {
    popupTime: 60 * 1000 // 1 min
};

$(document).ready(function() {
    const data = serverData();

    setLabs(data.labs);
});


function setLabs(labs) {
    const labs_table = $("#labs_data");

    for(let lab of labs) {
        let status = convert_status(lab.status);
        labs_table.append(`
            <tr class="${status.color}">
                <td>${lab.name}</td>
                <td>${lab.progress_percentile}%</td>
                <td>${status.text}</td>
            </tr>
        `);
    }
}

function convert_status(status) {
    if(status == 'SUCCESS')
        return {
            text: 'הצליח',
            color: 'table-success'
        };
    if(status == 'FAILED')
        return {
            text: 'נכשל',
            color: 'table-danger'
        };
    if(status == 'IN_PROGRESS')
        return {
            text: 'בתהליך',
            color: 'table-warning'
        };
}

function serverData() {
    return {
        labs: [
            {
                "id": "1",
                "name": "חן",
                "status": "SUCCESS",
                "progress_percentile": 100
            },
            {
                "id": "2",
                "name": "דן",
                "status": "FAILED",
                "progress_percentile": 100
            },
            {
                "id": "3",
                "name": "דביר",
                "status": "IN_PROGRESS",
                "progress_percentile": 80
            },
            {
                "id": "4",
                "name": "עמית",
                "status": "FAILED",
                "progress_percentile": 100
            },
            {
                "id": "5",
                "name": "אריאל",
                "status": "IN_PROGRESS",
                "progress_percentile": 25
            },
            {
                "id": "6",
                "name": "יוני",
                "status": "IN_PROGRESS",
                "progress_percentile": 13
            },
            {
                "id": "7",
                "name": "ליאת",
                "status": "IN_PROGRESS",
                "progress_percentile": 32
            },
            {
                "id": "8",
                "name": "אופיר",
                "status": "SUCCESS",
                "progress_percentile": 30
            },
            {
                "id": "9",
                "name": "רועי",
                "status": "FAILED",
                "progress_percentile": 23
            },
            {
                "id": "10",
                "name": "עדי",
                "status": "IN_PROGRESS",
                "progress_percentile": 97
            },
            {
                "id": "11",
                "name": "יעל",
                "status": "FAILED",
                "progress_percentile": 21
            }
        ]
    };
}
