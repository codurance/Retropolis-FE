import React from 'react';
import '../public/index.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Retropolis
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;
