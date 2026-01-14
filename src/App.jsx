import Header from "./Components/header/header";
import WeatherBoard from "./Components/weather/WeatherBoard";

import { WeatherProvider } from "./provider";

function App() {
    return (
        <WeatherProvider>
            <div className="grid place-items-center h-screen">
                <Header />
                <main>
                    <section>
                        <WeatherBoard />
                    </section>
                </main>
            </div>
        </WeatherProvider>
    );
}

export default App;
