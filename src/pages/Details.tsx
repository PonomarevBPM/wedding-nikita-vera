import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    },
    detailsHeading: {
        fontFamily: theme.font.rammillas,
        fontSize: 36,
        textTransform: 'uppercase',
        marginBottom: 30
    },
    detailsText: {
        fontFamily: theme.font.commons,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    contact: {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
}));

export function Details() {
    const classes = useStyles();

    return (
        <AnimatedBaseLayout>
            <div className={classes.detailsContainer}>
                <span className={classes.detailsHeading}>Контакты</span>

                <span className={classes.detailsText}>
                    По всем вопросам Вы можете обращаться
                    <br />
                    к нашим свадебным организаторам:
                    <br />
                    <br />
                    <div
                        className={classes.contact}
                        onClick={() => {
                            window
                                .open('https://t.me/+79772578747', '_blank')
                                ?.focus();
                        }}
                    >
                        Анастасия +7 977 257-87-47
                    </div>
                    <br />
                    <div
                        className={classes.contact}
                        onClick={() => {
                            window
                                .open('https://t.me/+79096607972', '_blank')
                                ?.focus();
                        }}
                    >
                        Валерия +7 909 660-79-72
                    </div>
                </span>
                <img
                    src={`${import.meta.env.BASE_URL}imgs/details/dart_logo.png`}
                    style={{ width: 250, height: 100, objectFit: 'cover' }}
                />
            </div>
        </AnimatedBaseLayout>
    );
}
