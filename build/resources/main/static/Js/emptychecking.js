function requireField ( item ) {
    let dataField = true, dataFocus = false, screenPosition = 0;
    for( let i = 0; i < item[ 0 ].length ; i++ ) {
        if( item[ 0 ][ i ] == "" ) {
            if( !dataFocus ) {
                if( window.innerWidth < 993 ) {
                    ( i == 0 ) ? window.scrollTo(0,screenPosition ) : document.querySelector(`#${item[ 1 ][ i - 1 ]}`).scrollIntoView();
                    dataFocus = true;
                } else {
                    window.scrollTo(0,screenPosition);
                }
            }
            document.querySelector(`#${item[ 1 ][ i ]}`).style.backgroundColor = "#ED7F67";
            dataField = false;
        } else {
            document.querySelector(`#${item[ 1 ][ i ]}`).style.backgroundColor = "white";
        }

    }
    return dataField;
}
