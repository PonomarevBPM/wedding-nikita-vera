import { createUseStyles } from 'react-jss';

export const header = {
    date: '09.08.26',
    names: 'NIKITA & VERA',
    fistInitial: 'N',
    secondInitial: 'V'
};

export function NamedStatementText() {
    return (
        <>
            Один день в этом году будет для нас
            <br />
            особенным и мы хотим провести его
            <br />
            в кругу близких и друзей.
            <br />
            С большим удовольствием приглашаем
            <br />
            вас на нашу свадьбу!
        </>
    );
}

// Timer deadline
export const deadline = '09 Aug 2026 12:00:00 GMT';

const useStyles = createUseStyles({
    link: {
        color: 'black',
        textDecoration: 'underline',
        '&:visited': {
            color: 'black'
        }
    }
});

export function LocationText() {
    const classes = useStyles();

    return (
        <>
            Country Club Polyana
            <br />
            <br />
            <a
                className={classes.link}
                target="_blank"
                href="https://yandex.ru/navi/org/polyana/156426660028?si=5u8q1u2rjakmqn3ejmefwznxwr"
            >
                Поляна, Московская область,
                <br />
                Серпуховский район
            </a>
        </>
    );
}
