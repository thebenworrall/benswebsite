function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const day = date.getDate();
    let daySuffix;

    if (day > 3 && day < 21) {
        daySuffix = 'th';
    } else {
        switch (day % 10) {
            case 1:
                daySuffix = 'st';
                break;
            case 2:
                daySuffix = 'nd';
                break;
            case 3:
                daySuffix = 'rd';
                break;
            default:
                daySuffix = 'th';
        }
    }

    return formattedDate.replace(day, `${day}${daySuffix}`);
}

export default formatDate;