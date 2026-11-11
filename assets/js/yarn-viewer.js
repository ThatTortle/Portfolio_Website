'use strict';

const yarnScript = document.getElementById("yarn-script");

if (yarnScript) {

    const yarnFilePath =
        "./assets/images/A-walk-in-the-woods/Dialogue_script.yarn";

    fetch(yarnFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            return response.text();
        })
        .then(script => {
            yarnScript.textContent = script;
        })
        .catch(error => {
            yarnScript.textContent = "Unable to load dialogue script.";
            console.error("Yarn viewer error:", error);
        });
}