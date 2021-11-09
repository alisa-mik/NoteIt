
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Notes } from './components/Notes';
import { Create } from './components/Create';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple } from "@material-ui/core/colors";
import { Layout } from './components/Layout'


const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        },
        secondary: deepPurple,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
    }
})


export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Notes} />
                        <Route path="/create" component={Create} />
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider >

    )
}

