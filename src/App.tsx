import { UswdsTheme } from "./themes/uswds-theme";
import { SampleApp } from "./stories/samplepages/sample-app";

import '@mantine/core/styles.css';

function App() {
  return (
    <SampleApp theme={UswdsTheme}/>
  );
}

export default App;
