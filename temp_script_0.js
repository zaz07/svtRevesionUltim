
        // Tab switching logic
        function switchLabTab(tabId, btn) {
            // Hide all tab contents
            const contents = document.querySelectorAll('.lab-tab-content');
            contents.forEach(content => content.classList.remove('active'));

            // Show selected tab content
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
                activeContent.classList.add('active');
            }

            // Reset tab button states
            const buttons = document.querySelectorAll('.lab-tab-btn');
            buttons.forEach(b => b.classList.remove('active'));

            // Set current button active
            btn.classList.add('active');

            // Specific tab init logic
            if (tabId === 'lab-arcade') {
                closeGameStage(); // Reset to hub when clicking the tab
            } else if (tabId === 'lab-atp') {
                runAtpSimulation();
                setSarcomereStep(1);
            } else if (tabId === 'lab-geology') {
                selectMetamorphicZone('subduction');
            } else if (tabId === 'lab-water') {
                switchWaterMode('demo');
                runPollutionSimulation();
                drawPollutionChart(); 
            } else if (tabId === 'lab-immuno') {
                switchImmunoMode('demo');
                setMhcScenario('normal');
                updateHivTimeline();
            }
        }
    