const styles = {
    CV: {
        maxWidth: '595px',
        width: '100%',
        height: '842px',
        border: '1px solid black',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
    },
    leftBar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(30, 30, 30)',
        padding: '20px',
    },
    rightBar: {
        display: 'inline-block',
        backgroundColor: 'rgb(245, 245, 245)',
        padding: '30px',
    }
}

export default styles;