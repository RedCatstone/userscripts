// ==UserScript==
// @name        Utils Mod
// @namespace   Catstone
// @match       https://neal.fun/infinite-craft/
// @grant       GM.xmlHttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @version     1.4
// @author      Catstone
// @license     MIT
// @description Combines Infinite Craft Selection Utils, Tab Utils, Unicode Utils and more misc stuff!
// @downloadURL https://github.com/InfiniteCraftCommunity/userscripts/raw/master/userscripts/Utils_Mod/index.user.js
// @updateURL   https://github.com/InfiniteCraftCommunity/userscripts/raw/master/userscripts/Utils_Mod/index.user.js
// ==/UserScript==

(function() {
    'use strict';

    const closeIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNjAwIj48cGF0aCBkPSJNMzAwLjAwMDAyLDM0OS44MzIzM0w2MC4xMDc4Miw1ODkuNzIzMzJjLTYuNTQ2ODksNi41NDc2OS0xNC43NzY0Myw5Ljg5NzE4LTI0LjY4ODYsMTAuMDQ4NTEtOS45MTEzOCwuMTUyMS0xOC4yOTIyNC0zLjE5NzQtMjUuMTQyNTYtMTAuMDQ4NTFDMy40MjU1Nyw1ODIuODcyOTgsLjAwMDAyLDU3NC41Njc4LDAsNTY0LjgwNzc0Yy4wMDAwMi05Ljc2MDA3LDMuNDI1NTctMTguMDY1MjYsMTAuMjc2NjYtMjQuOTE1NTZsMjM5Ljg5MTAxLTIzOS44OTIyTDEwLjI3NjY4LDYwLjEwNzc4QzMuNzI4OTksNTMuNTYwOTIsLjM3OTUsNDUuMzMxMzYsLjIyODE3LDM1LjQxOTIyLC4wNzYwNywyNS41MDc4OCwzLjQyNTU3LDE3LjEyNywxMC4yNzY2OCwxMC4yNzY2NiwxNy4xMjcwMiwzLjQyNTUzLDI1LjQzMjIsMCwzNS4xOTIyNiwwczE4LjA2NTI2LDMuNDI1NTMsMjQuOTE1NTYsMTAuMjc2NjZsMjM5Ljg5MjIsMjM5Ljg5MDk3TDUzOS44OTIyMiwxMC4yNzY1OWM2LjU0Njg2LTYuNTQ3NzIsMTQuNzc2NDMtOS44OTcyLDI0LjY4ODU2LTEwLjA0ODUxLDkuOTExMzQtLjE1MjE3LDE4LjI5MjIyLDMuMTk3MzgsMjUuMTQyNTYsMTAuMDQ4NTEsNi44NTExMyw2Ljg1MDI3LDEwLjI3NjY2LDE1LjE1NTUyLDEwLjI3NjY2LDI0LjkxNTU2cy0zLjQyNTUzLDE4LjA2NTIyLTEwLjI3NjY2LDI0LjkxNTU2bC0yMzkuODkwOTcsMjM5Ljg5MjI3LDIzOS44OTEwNSwyMzkuODkyMmM2LjU0NzcyLDYuNTQ2ODksOS44OTcyLDE0Ljc3NjQzLDEwLjA0ODUxLDI0LjY4ODYsLjE1MjE3LDkuOTExMzgtMy4xOTczOCwxOC4yOTIyNC0xMC4wNDg1MSwyNS4xNDI1Ni02Ljg1MDI3LDYuODUxMS0xNS4xNTU1MiwxMC4yNzY2NC0yNC45MTU1NiwxMC4yNzY2Ni05Ljc2MDA0LS4wMDAwMi0xOC4wNjUyMi0zLjQyNTU3LTI0LjkxNTU2LTEwLjI3NjY2bC0yMzkuODkyMjctMjM5Ljg5MTAxWiIvPjwvc3ZnPg==';
    const css = document.createElement('style');
    css.textContent = `
.utils-settings-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    display: none;
}

.utils-settings-container {
	display: flex;
	flex-direction: column;
	gap: 28px;
	min-width: 30vw;
  padding: 10px;
}

.utils-setting-block {
	color: var(--text-color);
	display: flex;
	flex-direction: column;
	font-size: 16.4px;
  padding: 5px;
  min-height: 90px;
}

.utils-setting-block h1 {
	font-size: 20px;
	font-family: Roboto, sans-serif;
	line-height: 35px;
	color: var(--text-color);
	user-select: none;
	display: flex;
	justify-content: space-between;
}

.utils-settings-header {
	font-size: 20px;
	font-family: Roboto, sans-serif;
	color: var(--text-color);
	user-select: none;
	display: flex;
	justify-content: space-between;
	margin-bottom: -10px;
}

.utils-setting-block p {
	max-width: calc(100% - 5vw);
}

.utils-input-description {
  margin-bottom: 5px;
}

.utils-input-wrapper {
  margin-bottom: 10px;
}

.utils-setting-block label[for*="input"] {
	float: left;
	margin-right: 7px;
	margin-top: 5px;
}

.utils-setting-block {
  position: relative;
	background: transparent;
	border: 1px solid var(--border-color);
	border-radius: 5px;
	padding: 5px 7px;
	color: var(--text-color);
	outline: 0;
	font-size: 16.4px;
	width: calc(100% - 5vw);
  overflow: hidden;
}

.utils-input-description {
    margin-left: 30px;
    text-indent: 0px;
    font: caption;
}

.checkbox-container {
	position: relative;
	display: inline-block;
	width: 50px;
	height: 30px;
	cursor: pointer;
}

.checkbox-container input {
	opacity: 0;
	width: 0;
	height: 0;
}

.checkbox-slider {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--border-color);
	transition: 0.4s;
	border-radius: 15px;
	z-index: -2;
}

.checkbox-slider:before {
	position: absolute;
	content: "";
	height: 22px;
	width: 22px;
	left: 4px;
	bottom: 4px;
	background-color: var(--background-color);
	transition: 0.4s;
	border-radius: 50%;
	z-index: -1;
}

.utils-color-input {
  outline: var(--custom-outline);
  border-width: 0;
  background-color: var(--custom-background);
  animation: var(--chroma-animation);
  padding-left: 59px;
  padding-top: 10px;
  width: 69px;
  height: 20px;
  margin: 5px;
}

.utils-number-input {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.utils-dropdown {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  padding: 5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}


.utils-dropdown option {
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode .checkbox-slider:before {
	background-color: var(--text-color);
}

input:checked + .checkbox-slider {
	background-color: #70b565;
}

input:checked + .checkbox-slider:before {
	transform: translateX(19px);
}

.utils-setting-block:has(h1 > .checkbox-container > input[type="checkbox"]:not(:checked)) .utils-input-wrapper {
	margin-top: -33px;
  pointer-events: none;
	opacity: 0;
}

.label-toggle-container {
  align-items: center;
  display: flex;
}

.label-toggle-container label {
  margin-right: 10px;
}

.selectionbox {
  position: absolute;
  z-index: 6942069;
  outline: var(--custom-outline);
  background-color: var(--custom-background);
  animation: var(--chroma-animation);
}

@keyframes chromaCycleOutline {
  0%  { outline-color: rgb(255, 0,   0  ); } /* Red */
  10% { outline-color: rgb(255, 127, 0  ); } /* Orange */
  20% { outline-color: rgb(255, 255, 0  ); } /* Yellow */
  30% { outline-color: rgb(127, 255, 0  ); } /* Lime */
  40% { outline-color: rgb(0,   255, 0  ); } /* Green */
  50% { outline-color: rgb(0,   255, 255); } /* Aqua */
  60% { outline-color: rgb(0,   127, 255); } /* Light Blue */
  70% { outline-color: rgb(0,   0,   255); } /* Blue */
  80% { outline-color: rgb(127, 0,   255); } /* Purple */
  90% { outline-color: rgb(255, 0,   255); } /* Magenta */
  100%{ outline-color: rgb(255, 0,   127); } /* Pink */
}
@keyframes chromaCycleBackground {
  0%  { background-color: rgba(255, 0,   0,   0.3); } /* Red */
  10% { background-color: rgba(255, 127, 0,   0.3); } /* Orange */
  20% { background-color: rgba(255, 255, 0,   0.3); } /* Yellow */
  30% { background-color: rgba(127, 255, 0,   0.3); } /* Lime */
  40% { background-color: rgba(0,   255, 0,   0.3); } /* Green */
  50% { background-color: rgba(0,   255, 255, 0.3); } /* Aqua */
  60% { background-color: rgba(0,   127, 255, 0.3); } /* Light Blue */
  70% { background-color: rgba(0,   0,   255, 0.3); } /* Blue */
  80% { background-color: rgba(127, 0,   255, 0.3); } /* Purple */
  90% { background-color: rgba(255, 0,   255, 0.3); } /* Magenta */
  100%{ background-color: rgba(255, 0,   127, 0.3); } /* Pink */
}
@keyframes rotateBorder {
  100% { transform: rotate(360deg); }
}









#tabBar {
    position: absolute;
    top: 5px;
    display: flex;
    align-items: start;
    background-color: transparent;
    padding: 5px;
    scrollbar-color: #525252 #262626;
    white-space: nowrap;
    z-index: 69420;
    pointer-events: none;
}
.tabs {
    display: flex;
    align-items: center;
    overflow: auto;
    pointer-events: auto;
}
.tab, .addButton {
    user-select: none;
    display: flex;
    background-color: #333;
    color: #ccc;
    border: none;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    margin-left: 3px;
    margin-right: 3px;
    max-width: 200px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: auto;
}
.tab.selected {
    background-color: #555;
    color: #fff;
}
.tab:not(.selected):hover, .addButton:hover {
    background-color: #444;
}
.tab.disabled{
    pointer-events: none;
}
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
#contextMenu {
    position: absolute;
    background-color: #333;
    color: #ccc;
    border: 1px solid #555;
    border-radius: 5px;
    padding: 5px;
    z-index: 1000;
}
.contextMenuOption {
    padding: 5px;
    cursor: pointer;
}
.contextMenuOption:hover {
    background-color: #444;
    color: #ddd;
}
.contextMenuOption.delete {
    color: red;
}




.unicode-container {
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	padding: 9px;
	border: 0px;
	border-bottom: 1px;
	border-style: solid;
	border-color: var(--border-color);
}

.unicode-header {
    display: flex;
    align-items: center;
}

.unicode-title {
	margin: 4px;
	font-size: 15px;
	font-family: Roboto, sans-serif;
	color: var(--text-color);
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	pointer-events: none;
}

#unicode-checkbox {
    appearance: none; /* Remove default styling */
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border: 2px solid var(--border-color);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    position: relative;
    background-color: #000; /* Background color when unchecked */
    transition: background-color 0.2s ease;
}
#unicode-checkbox:hover {
    background-color: #242424; /* Light background on hover */
}
#unicode-checkbox:checked {
    background-color: var(--border-color); /* Background color when checked */
}
#unicode-checkbox:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0; /* Checkmark shape */
    transform: rotate(45deg); /* Rotate to form checkmark */
}


.modal-subtitle {
    font-size: 14px;
    color: #fff;
    margin-top: 4px;
    font: caption;
    user-select: text;
}

.modal-subtitle a {
	  opacity: 0.7;
	  cursor: pointer;
	  text-decoration: underline dotted;
    user-select: none;
}
.modal-subtitle a:hover, .modal-subtitle a:focus {
	  opacity: 1;
}
`
document.head.appendChild(css);


    // Variables to store the init states
    let selectionUtilsInit = false;
    let tabUtilsInit = false;
    let unicodeInit = false;
    let spawnInit = false;

    let chromaAnimation;
    const mouseData = {
	  	  down: false,
        button: 0,
	  	  x: null,
	  	  y: null,
	  	  deltaX: null,
	  	  deltaY: null
	  }

    const defaultSettings = {
        sel: {
            enabled: false,
            customColor: '#ff0000',
            borderStyle: 'solid',
            borderWidth: 3,
            chromaSpeed: 0
        },
        tabs: {
            enabled: false
        },
        uni: {
            search : false,
            maxShown: 250,
            sort: true,
            showMultiCharacterEmojis: false,
            infoInRecipeModal: true
        },
        copy: {
            enabled: false
        },
        spawn: {
            enabled: false,
            ghosts: true
        },
        misc: {

        }
    };

    function mergeSettings(saved, defaults) {
        for (let key in defaults) {
            if (defaults.hasOwnProperty(key)) {
                if (typeof defaults[key] === 'object' && !Array.isArray(defaults[key])) {
                    saved[key] = mergeSettings(saved[key] || {}, defaults[key]);
                } else if (saved[key] === undefined) {
                    saved[key] = defaults[key];
                }
            }
        }
        return saved;
    }
    function saveSettings() {
        GM_setValue('settings', settings);
        document.documentElement.style.setProperty('--custom-outline', `${settings.sel.borderWidth}px ${settings.sel.borderStyle} ${settings.sel.customColor}`);
        document.documentElement.style.setProperty('--custom-background', hexToRgba(settings.sel.customColor, 0.3));

        const chromaSpeed = 10 / settings.sel.chromaSpeed;
        chromaAnimation = `chromaCycleOutline ${Math.abs(chromaSpeed)}s infinite linear${chromaSpeed < 0 ? ' reverse' : ''}, ` +
                          `chromaCycleBackground ${Math.abs(chromaSpeed)}s infinite linear${chromaSpeed < 0 ? ' reverse' : ''}` +
                          `${settings.sel.borderWidth >= 30 ? `, rotateBorder ${Math.abs(chromaSpeed)}s infinite linear${chromaSpeed < 0 ? ' reverse' : ''}` : ''}`
        document.documentElement.style.setProperty('--chroma-animation', chromaAnimation);
    }

    const handler = {
        set(target, property, value) {
            target[property] = value;
            saveSettings();  // Save settings whenever a property is set
            return true;
        },
        get(target, property) {
            if (typeof target[property] === 'object' && target[property] !== null) {
                return new Proxy(target[property], handler);  // Recursively apply the proxy to nested objects
            }
            return target[property];
        }
    };

    const mergedsettings = mergeSettings(GM_getValue('settings', {}), defaultSettings);
    const settings = new Proxy(mergedsettings, handler);






    function toggleSelectionUtils() {
        if (settings.sel.enabled) deselectAllInstances();
        else if (!selectionUtilsInit) initSelectionUtils();

        settings.sel.enabled = !settings.sel.enabled;
    }

    let externalSaveCurrentTab;
    let externalAddTab;
    function toggleTabUtils() {
        if (settings.tabs.enabled) {
            externalSaveCurrentTab();
            document.getElementById('tabBar').style.display = 'none'
        }
        else {
            if (!tabUtilsInit) initTabUtils();
            else document.getElementById('tabBar').style.display = 'flex';
        }

        settings.tabs.enabled = !settings.tabs.enabled;
        // location.reload();
    }

    let externalUpdateUnicodeSearch;
    let externalSearchUnicodeElements;
    function toggleUnicodeSearch() {
        if (settings.uni.search) {
            document.getElementById('unicode-checkbox').checked = false;
            document.querySelector('.unicode-container').style.display = 'none';
            externalUpdateUnicodeSearch([]);
        }
        else {
            if (!unicodeInit) initUnicodeSearch();
            document.querySelector('.unicode-container').style.display = 'block';
        }

        settings.uni.search = !settings.uni.search;
    }

    function toggleCopyPasteUtils() {
        settings.copy.enabled = !settings.copy.enabled;
    }


    let externalSpawnImage;
    function toggleSpawnUtils() {
        if (settings.spawn.enabled) {
            externalSpawnImage.style.display = 'none';
        }
        else {
            if (!spawnInit) initSpawnUtils();
            else externalSpawnImage.style.display = 'block';
        }

        settings.spawn.enabled = !settings.spawn.enabled;
    }




    // Add buttons to toggle the modules
    function addToggleButtons() {
        const settingsContent = document.querySelector(".settings-content");
        if (settingsContent == null) {
            console.log("This script requires Infinite Craft Helper to function!");
            return;
        }

        const utilsSettingsContainer = document.createElement('div');
        utilsSettingsContainer.classList.add('setting');
        const utilsSettingsText = document.createTextNode('Utils Settings ');
        const utilsSettingsEmoji = document.createElement('span');
        utilsSettingsEmoji.textContent = '⚙️';
        utilsSettingsContainer.appendChild(utilsSettingsText);
        utilsSettingsContainer.appendChild(utilsSettingsEmoji);
        settingsContent.appendChild(utilsSettingsContainer);

        utilsSettingsContainer.addEventListener('click', function(e) {
            showUtilsSettingsMenu();
        });

        initUtilsSettingsMenu();
    };


    window.addEventListener('load', () => {
        addToggleButtons();
        if (settings.sel.enabled) initSelectionUtils();
        if (settings.tabs.enabled) initTabUtils();
        if (settings.uni.search) initUnicodeSearch();
        if (settings.spawn.enabled) initSpawnUtils();
        patchGhostElements();
    });





    const settingsModal = document.createElement('dialog');
    const settingsTitle = document.createElement('h1');
    const settingsContainer = document.createElement('div');
    let settingsEntries = [
        {
            name: "Selection Utils",
            description: "Enables Multi-selecting, Multi-copying and Multi-deleting using Right Click!",
            toggle: true,
            toggleState: () => settings.sel.enabled,
            toggleHandle: (elements) => toggleSelectionUtils(),
            inputs: [{
                label: "Color: ",
                type: "colorPicker",
                content: () => settings.sel.customColor,
                handle(elements) {
                    settings.sel.customColor = elements.value;
                }
            },
            {
                label: "Border Style: ",
                type: "dropdown",
                options: ["solid", "dashed", "dotted", "double", "groove", "ridge", "inset", "outset"],
                content: () => settings.sel.borderStyle,
                handle(value) {
                    settings.sel.borderStyle = value;
                }
            },
            {
                label: "Border Width: ",
                type: "number",
                content: () => settings.sel.borderWidth,
                handle(elements) {
                    settings.sel.borderWidth = Math.min(elements.value, 30);
                }
            },
            {
                label: "Chroma Speed: ",
                type: "number",
                content: () => settings.sel.chromaSpeed,
                handle(elements) {
                    settings.sel.chromaSpeed = Number(elements.value);
                }
            }]
        },
        {
            name: "Tab Utils",
            description: "saves all elements on screen into one Tab\n- Tabs save on reloading/closing Infinite Craft\n- Downloading/Uploading Tabs\n- Spawning entire Alphabets (right click the Add Button)",
            toggle: true,
            toggleState: () => settings.tabs.enabled,
            toggleHandle: (elements) => toggleTabUtils(),
        },
        {
            name: "Unicode Utils",
            description: "",
            inputs: [{
                label: "Unicode Search",
                description: "Enables searching in:\n- the Unicode Codepoint (e.g. U+0069)\n- the Unicode Name (e.g. LATIN CAPITAL LETTER A)",
                type: "toggle",
                content: () => settings.uni.search,
                handle(elements) {
                    toggleUnicodeSearch();
                }
            },
            {
                label: "Max Elements Displayed",
                type: "number",
                content: () => settings.uni.maxShown,
                handle(elements) {
                    settings.uni.maxShown = Number(elements.value);
                    externalSearchUnicodeElements();
                }
            },
            {
                label: "Sort Unicode Search",
                type: "toggle",
                content: () => settings.uni.sort,
                handle(elements) {
                    settings.uni.sort = !settings.uni.sort;
                    externalSearchUnicodeElements();
                }
            },
            {
                label: "Show Multi-character Emojis",
                type: "toggle",
                content: () => settings.uni.showMultiCharacterEmojis,
                handle(elements) {
                    settings.uni.showMultiCharacterEmojis = !settings.uni.showMultiCharacterEmojis;
                    externalSearchUnicodeElements();
                }
            },
            {
                label: "Show Unicode Info in Recipe Menu",
                description: "e.g. U+0069 - LATIN SMALL LETTER I",
                type: "toggle",
                content: () => settings.uni.infoInRecipeModal,
                handle(elements) {
                    settings.uni.infoInRecipeModal = !settings.uni.infoInRecipeModal;
                }
            }]
        },
        {
            name: "Copy Paste Utils",
            description: "Ctrl + C   to copy the text of a hovered Element\nCtrl + Shift + V   to paste Element(s)\nCopy works on Selections!\nPaste works on gigantic lists, for example all countries (just seperate each \"Word\" with a new line)",
            toggle: true,
            toggleState: () => settings.copy.enabled,
            toggleHandle: (elements) => toggleCopyPasteUtils()
        },
        {
            name: "Spawn Utils",
            description: "Adds a Spawn Button to the bottom!\n- Spawn Alphabets easily!\n- Spawn Unicodes easily!",
            toggle: true,
            toggleState: () => settings.spawn.enabled,
            toggleHandle: (elements) => toggleSpawnUtils(),
            inputs: []
        },
        {
            name: "Misc",
            description: "",
            inputs: [{
                label: "Spawn non-crafted Elements as Ghosts: ",
                description: "Works with Copy Paste Utils and Spawn Utils",
                type: "toggle",
                content: () => settings.spawn.ghosts,
                handle(elements) {
                    settings.spawn.ghosts = !settings.spawn.ghosts;
                }
            }]
        }
    ];

    function initUtilsSettingsMenu() {
    settingsModal.classList.add('modal');
    document.querySelector(".container").appendChild(settingsModal);

    const settingsHeader = document.createElement('div');
    settingsHeader.classList.add('modal-header');

    settingsTitle.classList.add('modal-title');
    settingsTitle.appendChild(document.createTextNode('Utils Settings'));
    settingsHeader.appendChild(settingsTitle);

    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.classList.add('close-button-container');

    const closeButton = document.createElement('img');
    closeButton.src = closeIcon.trim();
    closeButton.classList.add('close-button');
    closeButtonContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => settingsModal.close());
    settingsHeader.appendChild(closeButtonContainer);

    settingsModal.appendChild(settingsHeader);

    settingsContainer.classList.add('utils-settings-container');
    settingsModal.appendChild(settingsContainer);

    settingsEntries.forEach(entry => {
        const block = document.createElement("div");
        block.classList.add("utils-setting-block");

        const name = document.createElement("h1");
        name.appendChild(document.createTextNode(entry.name));
        block.appendChild(name);

        if (entry.toggle) {
            const checkboxContainer = document.createElement("label");
            checkboxContainer.classList.add("checkbox-container");

            const toggleCheckbox = document.createElement("input");
            toggleCheckbox.classList.add("checkbox");
            toggleCheckbox.setAttribute("type", "checkbox");

            checkboxContainer.appendChild(toggleCheckbox);
            toggleCheckbox.checked = entry.toggleState();

            toggleCheckbox.addEventListener("change", function () {
                return entry.toggleHandle.call(this);
            });

            const slider = document.createElement("span");
            slider.classList.add("checkbox-slider");
            checkboxContainer.appendChild(slider);

            name.appendChild(checkboxContainer);
        }

        const description = document.createElement("p");
        description.classList.add("utils-input-description");
        description.innerHTML = entry.description.replaceAll("\n", "<br>");
        block.appendChild(description);

        // Handle inputs
        if (entry.inputs) {
            entry.inputs.forEach(input => {
                const inputWrapper = document.createElement("div");
                inputWrapper.classList.add("utils-input-wrapper");

                // Create label and toggle container
                const labelToggleContainer = document.createElement("div");
                labelToggleContainer.classList.add("label-toggle-container");

                const label = document.createElement("label");
                label.textContent = input.label;
                labelToggleContainer.appendChild(label);

                // Handle different input types
                if (input.type === "colorPicker") {
                    const colorInput = document.createElement("input");
                    colorInput.classList.add('utils-color-input');
                    colorInput.setAttribute("type", "color");
                    colorInput.value = input.content();
                    colorInput.addEventListener("input", function () {
                        input.handle(this);
                    });
                    labelToggleContainer.appendChild(colorInput);
                }

                if (input.type === "toggle") {
                    const toggleContainer = document.createElement("label");
                    toggleContainer.classList.add("checkbox-container");

                    const toggleCheckbox = document.createElement("input");
                    toggleCheckbox.classList.add("checkbox");
                    toggleCheckbox.setAttribute("type", "checkbox");
                    toggleContainer.appendChild(toggleCheckbox);

                    toggleCheckbox.checked = input.content();
                    toggleCheckbox.addEventListener("input", function () {
                        input.handle(this);
                    });

                    const toggleSlider = document.createElement("span");
                    toggleSlider.classList.add("checkbox-slider");
                    toggleContainer.appendChild(toggleSlider);
                    labelToggleContainer.appendChild(toggleContainer);
                }

                if (input.type === "number") {
                    const numberInput = document.createElement("input");
                    numberInput.classList.add('utils-number-input');
                    numberInput.setAttribute("type", "number");
                    numberInput.value = input.content();
                    numberInput.addEventListener("input", function () {
                        input.handle(this);
                    });
                    labelToggleContainer.appendChild(numberInput);
                }

                if (input.type === "dropdown") {
                    const dropdown = document.createElement("select");
                    dropdown.classList.add('utils-dropdown');
                    input.options.forEach(option => {
                        const optionElement = document.createElement("option");
                        optionElement.value = option;
                        optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
                        if (option === input.content()) optionElement.selected = true;
                        dropdown.appendChild(optionElement);
                    });
                    dropdown.addEventListener("change", function () {
                        input.handle(this.value);
                    });
                    labelToggleContainer.appendChild(dropdown);
                }

                // Append label and toggle to inputWrapper
                inputWrapper.appendChild(labelToggleContainer);

                // Add description if it exists
                if (input.description) {
                    const subDescription = document.createElement("p");
                    subDescription.classList.add("utils-input-description");
                    subDescription.innerHTML = input.description.replaceAll("\n", "<br>");
                    inputWrapper.appendChild(subDescription);
                }

                block.appendChild(inputWrapper);
            });
        }

        settingsContainer.appendChild(block);
    });
}




function showUtilsSettingsMenu() {
    settingsModal.showModal();
}



















//            _______ _________ _____    _________   ______ _________ _____   ____   ____  _____
//           /  ___  |_   ___  |_   _|  |_   ___  |./ ___  |  _   _  |_   _|.'    \.|_   \|_   _|
//          |  (__ \_| | |_  \_| | |      | |_  \_| ./   \_|_/ | | \_| | | /  .--.  \ |   \ | |
//           '.___\-.  |  _|  _  | |   _  |  _|  _| |          | |     | | | |    | | | |\ \| |
//          |\\____) |_| |___/ |_| |__/ |_| |___/ | \.___.'\  _| |_   _| |_\  \--'  /_| |_\   |_
//          |_______.'_________|________|_________|\._____.' |_____| |_____|\.____.'|_____|\____|

    function initSelectionUtils() {
        let startX, startY, endX, endY, isSelecting = false, isDragging = false;
        let selectionBox = document.createElement('div');
        let dragStartX, dragStartY;


        // Call the function to add the button when the DOM is fully loaded
        selectionUtilsInit = true;
        init();


        function init() {

            const sidebarDiv = document.querySelector('.sidebar');

            // Create the Selection Box
            selectionBox.classList.add('selectionbox')
            selectionBox.style.display = 'none';
            document.querySelector('.container.dark-mode').insertBefore(selectionBox, document.querySelector('.instances'));
            saveSettings();


            // Patching duplicateInstance
            const originalDuplicateInstance = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].duplicateInstance;
            unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].duplicateInstance = function duplicateSelection(originalInstance, leftOffset = 10, topOffset = -10) {
                const duplicatedInstance = originalDuplicateInstance.call(this, originalInstance, leftOffset, topOffset);
                if (originalInstance.utilsSelected) {
                    getSelectedInstances().forEach(instance => {
                        if (instance != originalInstance && instance != duplicatedInstance && !instance.disabled) {
                            deselectInstance(instance);
                            const instanceCopy = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].duplicateInstance(instance, 0, 0);
                            selectInstance(instanceCopy);
                            isDragging = true;
                            dragStartX = mouseData.x, dragStartY = mouseData.y;
                        }
                    });
                    deselectInstance(originalInstance);
                    selectInstance(duplicatedInstance);
                }
                return duplicatedInstance;
            }
            // Patching selectInstance
            const originalSelectInstance = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].selectInstance;
            unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].selectInstance = function draggingOnSelectInstance(mouseEvent, instance) {
                const og = originalSelectInstance.call(this, mouseEvent, instance);
                if (mouseData.button === 2) {
                    if (instance.utilsSelected) deleteAllSelected();
                    isSelecting = false;
                    selectionBox.style.display = 'none';
                }
                else if ((mouseData.button === 0 || mouseData.button === 1) && instance.utilsSelected) {
                    isDragging = true;
                    dragStartX = mouseData.x, dragStartY = mouseData.y;
                }
                return og;
            }
        }

        document.addEventListener('mousedown', function(e) {
            mouseData.button = e.button;
            if (settings.sel.enabled && mouseData.button === 2 && // Right mouse button
                mouseData.x < window.innerWidth - document.getElementsByClassName('sidebar')[0].getBoundingClientRect().width) {
                startX = e.clientX;
                startY = e.clientY;
                isSelecting = true
                // Initialize the selection box
                selectionBox.style.left = `${startX}px`;
                selectionBox.style.top = `${startY}px`;
                selectionBox.style.width = '0px';
                selectionBox.style.height = '0px';
                selectionBox.style.display = 'block';
            }
        }, true);

        document.addEventListener('mousemove', function(e) {
            mouseData.x = e.clientX;
            mouseData.y = e.clientY;
            if (isSelecting) {
                // Update selection box position and size
                let width = Math.abs(mouseData.x - startX);
                const sidebarLimit = window.innerWidth - document.getElementsByClassName('sidebar')[0].getBoundingClientRect().width;
                if (mouseData.x > sidebarLimit) width = sidebarLimit - startX;
                else if (mouseData.x < 0) width = startX;

                let height = Math.abs(mouseData.y - startY);
                const bottomLimit = window.innerHeight;
                if (mouseData.y > bottomLimit) height = bottomLimit - startY;
                else if (mouseData.y < 0) height = startY;

                selectionBox.style.width = `${width}px`;
                selectionBox.style.height = `${height}px`;
                if (mouseData.x < startX) {
                    if (mouseData.x < 0) selectionBox.style.left = `${0}px`;
                    else selectionBox.style.left = `${mouseData.x}px`;
                }
                else selectionBox.style.left = `${startX}px`;
                if (mouseData.y < startY) {
                    if (mouseData.y < 0) selectionBox.style.top = `${0}px`;
                    else selectionBox.style.top = `${mouseData.y}px`;
                }
                else selectionBox.style.top = `${startY}px`;

            } else if (isDragging) {
                const deltaX = mouseData.x - dragStartX;
                const deltaY = mouseData.y - dragStartY;
                dragStartX = mouseData.x, dragStartY = mouseData.y;


                // Move all selected instances
                if (!e.ctrlKey) {
                    getSelectedInstances().forEach(instance => {
                        unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].setInstancePosition(
                            instance,
                            instance.left + deltaX,
                            instance.top  + deltaY);
                    });
                }
            }
        });

        document.addEventListener('mouseup', function(e) {
            if (e.button === 2 && isSelecting) { // Right Click
                isSelecting = false;
                endX = e.clientX;
                endY = e.clientY;
                selectionBox.style.display = 'none';

                // console.log(`Selected area from (${startX}, ${startY}) to (${endX}, ${endY})`);
                if (Math.abs(startX - endX) <= 20 && Math.abs(startY - endY) <= 20) deselectAllInstances();
                else {
                    const onScreenInstances = getAllInstances();
                    const newZIndex = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.instanceId++;
                    onScreenInstances.forEach((instance) => {
                        const {left, top, height, width} = instance;
                        if (isInstanceInSelectedArea(left, top, height, width) && !instance.utilsSelected) {
                            selectInstance(instance);
                            instance.elem.style.setProperty("z-index", newZIndex);
                        }
                    });
                }
            }

            if (isDragging) {
                isDragging = false;
                if ((e.button === 1 || e.button === 0) // Left Click or Middle Click and beyond sidebar
                    && mouseData.x > window.innerWidth - document.getElementsByClassName('sidebar')[0].getBoundingClientRect().width) {
                    deleteAllSelected();
                }
            }
        });

        function isInstanceInSelectedArea(instanceLeft, instanceTop, instanceHeight, instanceWidth) {
            const selectionLeft = Math.min(startX, endX);
            const selectionRight = Math.max(startX, endX);
            const selectionTop = Math.min(startY, endY);
            const selectionBottom = Math.max(startY, endY);

            return !(instanceLeft + instanceWidth < selectionLeft || instanceLeft > selectionRight ||
                     instanceTop + instanceHeight < selectionTop || instanceTop > selectionBottom);
        }
    }

    function getSelectedInstances() {
        return getAllInstances().filter(x => x.utilsSelected);
    }

    function selectInstance(instance) {
        setTimeout(() => {
            instance.utilsSelected = true;
            instance.elem.style.animation = instance.elem.style.animation ? instance.elem.style.animation + ', ' + chromaAnimation : chromaAnimation;
            instance.elem.style.outline = 'var(--custom-outline)';
            instance.elem.style.background = 'var(--custom-background)';
            instance.elem.style.borderColor = 'transparent';
        }, 0);
    }
    function deselectInstance(instance) {
        instance.utilsSelected = false;
        instance.elem.style.animation = instance.elem.style.animation
            .split(',')
            .filter(anim =>
                !anim.includes('chromaCycleOutline') &&
                !anim.includes('chromaCycleBackground') &&
                !anim.includes('rotateBorder')
            )
            .join(', ');
        instance.elem.style.outline = '';
        instance.elem.style.background = '';
        instance.elem.style.borderColor = '';
    }

    function deselectAllInstances() {
        getSelectedInstances().forEach(instance => deselectInstance(instance));
    }
    function deleteAllSelected() {
        getSelectedInstances().forEach(instance => deleteInstance(instance));
    }

































//             _________      __      ______    _______
//            |  _   _  |    /  \    |_   _ \  /  ___  |
//            |_/ | | \_|   / /\ \     | |_) ||  (__ \_|
//                | |      / ____ \    |  __/. '.___\-.
//               _| |_   _/ /    \ \_ _| |__) |\\____) |
//              |_____| |____|  |____|_______/|_______.'

    function initTabUtils() {
        let currentTab = GM_getValue('currentTab', 0);
        const defaultData = [{elements: [], name: "Tab 1"}];
        if (GM_getValue('tabData') === undefined) {
            GM_setValue('tabData', defaultData);
        }

        const initIfElementsDataExists = () => {
            const elementsData = unsafeWindow.$nuxt?.$root?.$children[2]?.$children[0]?.$children[0]?._data?.elements;
            if (elementsData && elementsData.length > 0) {
                tabUtilsInit = true;
                externalSaveCurrentTab = saveCurrentTab;
                externalAddTab = addTab;
                init();
                return true;
            }
        };
        // Initial check
        if (!initIfElementsDataExists()) {
            // Set up the observer only if the initial check fails
            const observer = new MutationObserver((mutations, obs) => {
                if (initIfElementsDataExists()) {
                    obs.disconnect();
                }
            });
            observer.observe(document, { childList: true, subtree: true });
        }

        function init() {
            const tabBar = document.createElement('div');
            tabBar.id = 'tabBar';

            const tabs = document.createElement('div');
            tabs.classList.add('tabs');
            tabBar.appendChild(tabs);

            const addButton = document.createElement('button');
            addButton.classList.add('addButton');
            addButton.textContent = '+';
            addButton.onclick = () => addTab(-1);
            addButton.oncontextmenu = (e) => {
                e.preventDefault();
                showContextMenu(e, 1);
            };
            tabBar.appendChild(addButton);

            document.querySelector('.container.dark-mode').appendChild(tabBar);
            positionTabBar();
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                const resizeObserver = new ResizeObserver(() => positionTabBar());
                resizeObserver.observe(sidebar);
            }
            try {
                refreshTabButtons();
                loadTab(currentTab);
            }
            catch (e) {
                console.error('Error loading tab data:', e);
                console.log(GM_getValue('tabData'));
                GM_setValue('currentTab', 0);
            }

            window.addEventListener('beforeunload', function() {
                saveCurrentTab();
            });
        }

        function positionTabBar() {
            const siteTitle = document.querySelector('.site-title');
            const sidebar = document.querySelector('.sidebar');
            if (siteTitle && sidebar) {
                const tabBar = document.getElementById('tabBar');
                tabBar.style.left = `${225}px`;
                tabBar.style.right = `${document.getElementsByClassName('sidebar')[0].getBoundingClientRect().width + 200}px`;
            }
        }

        function saveCurrentTab() {
            const elements = getAllInstances().map(instance => ({
                name: instance.text,
                x: instance.left,
                y: instance.top
            }));
            const tabData = GM_getValue('tabData');
            tabData[currentTab].elements = elements;
            GM_setValue('tabData', tabData);
        }

        function loadTab(index) {
            const tabData = GM_getValue('tabData');
            if (index >= tabData.length) index = 0;
            const tab = tabData[index];

            // Delete all except for selected
            if (getAllInstances().filter(x => x.utilsSelected).length > 0) {
                if (confirm('Do you want to copy the Selected Elements to the new Tab?')) {
                    getAllInstances().filter(x => !x.utilsSelected).forEach(instance => deleteInstance(instance));
                    getAllInstances().filter(x => x.utilsSelected).forEach(instance => unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].setInstancePosition(instance, instance.left - 5, instance.top - 5));
                }
                else unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].clearInstances();
            }
            else unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].clearInstances();

            spawnElements(tab.elements);

            currentTab = index;
            GM_setValue('currentTab', currentTab);
        }

        function addTab(index = -1, data = null) {
            saveCurrentTab();
            const tabData = GM_getValue('tabData');
            const newTab = data || { elements: [], name: `Tab ${tabData.length + 1}` };
            let newIndex = index;
            if (index === -1 || index >= tabData.length) {
                tabData.push(newTab);
                newIndex = tabData.length - 1;
            } else {
                tabData.splice(index, 0, newTab);
            }

            GM_setValue('tabData', tabData);
            refreshTabButtons();
            switchTab(newIndex);

            const animatedTab = document.getElementById(`tab-${newIndex}`);
            animatedTab.style.animation = "slideIn 0.2s ease-out";
        }

        function duplicateTab(index) {
            saveCurrentTab();
            const tabData = GM_getValue('tabData');
            const newTab = JSON.parse(JSON.stringify(tabData[index]));
                addTab(index + 1, newTab);
        }

        function deleteTab(index) {
            const tabData = GM_getValue('tabData');
            if (tabData.length <= 1) {
                GM_setValue('tabData', defaultData);
                refreshTabButtons();
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].clearInstances();
            } else {
                tabData.splice(index, 1);
                if (currentTab > 0) currentTab--;
                GM_setValue('tabData', tabData);
                GM_setValue('currentTab', currentTab);
                loadTab(currentTab);

                const deletedTab = document.getElementById(`tab-${index}`);
                const sizer = document.createElement('div');
                sizer.classList.add('sizer');
                sizer.style.width = `${deletedTab.offsetWidth}px`;
                setTimeout(() => {
                    sizer.style.width = '0';
                    sizer.style.transition = 'width 0.2s ease-out';
                    sizer.addEventListener('transitionend', () => {
                        sizer.remove();
                    });
                }, 0);

                refreshTabButtons();
                const tabsContainer = document.querySelector('.tabs');
                const tabs = tabsContainer.querySelectorAll('.tab');
                tabsContainer.insertBefore(sizer, tabs[index]);
            }
        }

        function switchTab(index) {
            if (currentTab !== index) {
                saveCurrentTab();
                loadTab(index);
                document.querySelectorAll('.tab').forEach(button => button.classList.remove('selected'));
                document.getElementById(`tab-${index}`).classList.add('selected');
            }
        }

        function renameTab(index) {
            const tabData = GM_getValue('tabData');
            const newName = prompt('Enter new name for the tab:', tabData[index].name || `Tab ${index + 1}`);
            if (newName) {
                tabData[index].name = newName;
                GM_setValue('tabData', tabData);
                document.getElementById(`tab-${index}`).textContent = newName;
            }
        }

        function downloadTab(index) {
            saveCurrentTab();
            const tab = GM_getValue('tabData')[index];
            const blob = new Blob([JSON.stringify(tab)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ICTAB ${tab.name}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function uploadTab() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'application/json,text/plain';
            input.onchange = event => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = e => {
                    try {
                        if (file.type === 'application/json') {
                            const data = JSON.parse(e.target.result);

                            data.elements.forEach((element, index) => { // Check each element in the elements array
                                if (typeof element.name !== 'string' || typeof element.x !== 'number' || typeof element.y !== 'number') {
                                    throw new Error(`Invalid element at index ${index}: Must have "name" (string), "x" (number), and "y" (number) properties`);
                                }
                            });
                            addTab(-1, data); // Adding the uploaded tab at the end
                        }
                        else if (file.type === 'text/plain') {
                            const text = e.target.result;
                            const lines = text.split('\n');
                            const elements = [];
                            let colIndex = 0, rowIndex = 0;

                            lines.forEach(line => {
                                if (line.trim() === '') {
                                    colIndex++;
                                    rowIndex = 0;
                                } else {
                                    elements.push({
                                        name: line.trim(),
                                        x: 100 + colIndex * 100,
                                        y: 50 + rowIndex * 50
                                    });
                                    rowIndex++;
                                }
                            });

                            addTab(-1, {elements, name: `Tab ${GM_getValue('tabData').length + 1}`});
                        } else {
                            throw new Error('Unsupported file type');
                        }
                    } catch (error) {
                        alert(`Error uploading file: ${error.message}`);
                        console.error('Upload error:', error);
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        function createTabButton(index, name) {
            const tabs = document.querySelector('.tabs');
            const tabButton = document.createElement('button');
            tabButton.id = `tab-${index}`;
            tabButton.classList.add('tab');
            if (currentTab === index) tabButton.classList.add('selected');

            tabButton.textContent = name || `Tab ${index + 1}`;
            tabButton.draggable = true;
            tabButton.addEventListener('dragstart', (e) => handleDragStart(e, index));
            tabButton.addEventListener('dragover', handleDragOver);
            tabButton.addEventListener('drop', (e) => handleDrop(e, index));
            tabButton.onmousedown = () => switchTab(index);
            tabButton.oncontextmenu = (e) => {
                e.preventDefault();
                showContextMenu(e, 0, index);
            };

            tabButton.addEventListener('animationend', () => {
                tabButton.style.animation = 'none';
            });

            const tabBar = document.getElementById('tabs');
            const referenceNode = document.getElementById(`tab-${index + 1}`) || tabs.querySelector('.addButton');
            tabs.insertBefore(tabButton, referenceNode);
        }

        function refreshTabButtons() {
            const tabs = document.querySelector('.tabs');
            const storedTabs = GM_getValue('tabData');
            tabs.querySelectorAll('.tab').forEach(tab => tabs.removeChild(tab));
            storedTabs.forEach((tab, index) => createTabButton(index, tab.name));

            tabs.querySelectorAll('.sizer').forEach(sizer => sizer.remove());
        }

        function showContextMenu(event, menu, index) {
            const existingMenu = document.getElementById('contextMenu');
            if (existingMenu) {
                document.body.removeChild(existingMenu);
            }

            const contextMenu = document.createElement('div');
            contextMenu.id = 'contextMenu';

            if (menu === 0) { // tab menu
                const renameOption = document.createElement('div');
                renameOption.classList.add('contextMenuOption');
                renameOption.textContent = 'Rename';
                renameOption.onclick = () => renameTab(index);
                contextMenu.appendChild(renameOption);

                const duplicateOption = document.createElement('div');
                duplicateOption.classList.add('contextMenuOption');
                duplicateOption.textContent = 'Duplicate';
                duplicateOption.onclick = () => duplicateTab(index);
                contextMenu.appendChild(duplicateOption);

                const downloadOption = document.createElement('div');
                downloadOption.classList.add('contextMenuOption');
                downloadOption.textContent = 'Download Tab';
                downloadOption.onclick = () => downloadTab(index);
                contextMenu.appendChild(downloadOption);

                const deleteOption = document.createElement('div');
                deleteOption.classList.add('contextMenuOption', 'delete');
                deleteOption.textContent = 'Delete';
                deleteOption.onclick = () => deleteTab(index);
                contextMenu.appendChild(deleteOption);
            }
            else if (menu === 1) { // add button menu
                const uploadOption = document.createElement('div');
                uploadOption.classList.add('contextMenuOption');
                uploadOption.textContent = 'Upload Tab';
                uploadOption.onclick = uploadTab;
                contextMenu.appendChild(uploadOption);
            }


            document.body.appendChild(contextMenu);
            contextMenu.style.left = `${event.pageX}px`;
            contextMenu.style.top = `${event.pageY}px`;

            document.addEventListener('click', () => {
                if (document.body.contains(contextMenu)) {
                    document.body.removeChild(contextMenu);
                }
            }, { once: true });
        }

        let draggedIndex = null;

        function handleDragStart(e, index) {
            draggedIndex = index;
            e.dataTransfer.effectAllowed = 'move';
            switchTab(index);
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }

        function handleDrop(e, index) {
            e.preventDefault();
            if (draggedIndex !== null && draggedIndex !== index) {
                const tabData = GM_getValue('tabData');
                const draggedTab = tabData.splice(draggedIndex, 1)[0];
                tabData.splice(index, 0, draggedTab);
                GM_setValue('tabData', tabData);
                currentTab = index;
                refreshTabButtons();
            }
            draggedIndex = null;
        }
    }
































//            _____  _____ ____  _____ _____   ______   ____   ________   _________      _______ _________      __      _______      ______ ____  ____
//           |_   _||_   _|_   \|_   _|_   _|./ ___  |.'    \.|_   ___ \.|_   ___  |    /  ___  |_   ___  |    /  \    |_   __ \   ./ ___  |_   ||   _|
//             | |    | |   |   \ | |   | | / ./   \_|  .--.  \ | |   \. \ | |_  \_|   |  (__ \_| | |_  \_|   / /\ \     | |__) | / ./   \_| | |__| |
//             | '    ' |   | |\ \| |   | | | |      | |    | | | |    | | |  _|  _     '.___\-.  |  _|  _   / ____ \    |  __ /  | |        |  __  |
//              \ \--' /   _| |_\   |_ _| |_\ \.___.'\  \--'  /_| |___.' /_| |___/ |   |\\____) |_| |___/ |_/ /    \ \_ _| |  \ \_\ \.___.'\_| |  | |_
//               \.__.'   |_____|\____|_____|\._____.'\.____.'|________.'|_________|   |_______.'_________|____|  |____|____| |___|\._____.'____||____|
//

    function initUnicodeSearch() {
        const unicodeMap = {};
        fetchUnicodeData();

        const unicodeContainer = document.createElement("div");
        const header = document.createElement('div');
        const unicodeTitle = document.createElement('div');
        const unicodeCheckbox = document.createElement('input');

        init();
        unicodeInit = true;
        externalUpdateUnicodeSearch = updateUnicodeSearch;
        externalSearchUnicodeElements = searchUnicodeElements;

        function init() {
            unicodeCheckbox.type = 'checkbox';
            unicodeCheckbox.id = 'unicode-checkbox';
            unicodeCheckbox.checked = unicodeCheckbox.checked;
            unicodeCheckbox.addEventListener('change', toggleUnicodeSearch);

            unicodeContainer.classList.add('unicode-container');

            header.classList.add('unicode-header');

            unicodeTitle.classList.add('unicode-title');
            unicodeTitle.appendChild(document.createTextNode('Unicode Search - 0'));

            header.appendChild(unicodeCheckbox);
            header.appendChild(unicodeTitle);
            unicodeContainer.appendChild(header);

            document.querySelector(".pinned").after(unicodeContainer);

            // Event listener on search
            const search = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].$refs.search;
            search.addEventListener("input", function(e) {
                searchUnicodeElements(e.target.value);
            });


            // MutationObserver on Recipe Modal Open
            const recipeModal = document.querySelector('.modal');

            function checkModalOpen() {
                if (settings.uni.infoInRecipeModal && recipeModal.hasAttribute('open')) {
                    const titleElement = recipeModal.querySelector('.modal-title');
                    const titleText = titleElement.childNodes[1].nodeValue.trim()
                    let existingSubtitle = recipeModal.querySelector('.modal-subtitle');

                    if (!existingSubtitle) {
                        if (isSingleUnicodeCharacter(titleText)) addUnicodeInfoToModal();
                        else {
                            const showUnicodeInfo = document.createElement("a");
			                      showUnicodeInfo.textContent = "Show Unicode Info";
                            const unicodeInfoContainer = document.createElement('div');
                            unicodeInfoContainer.classList.add('modal-subtitle');
                            titleElement.appendChild(unicodeInfoContainer);
                            unicodeInfoContainer.appendChild(showUnicodeInfo);
                            showUnicodeInfo.addEventListener("click", () => {
                                addUnicodeInfoToModal();
                            });
                        }
                    }
                    function addUnicodeInfoToModal() {
                        const existingSubtitles = recipeModal.querySelectorAll('.modal-subtitle')
                        existingSubtitles.forEach(subtitle => subtitle.remove());

                        const subtitleHTML = Array.from(titleText)
                            .map(char => {
                                const codePoint = char.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
                                const unicodeName = unicodeMap[codePoint] || '';
                                return `U+${codePoint.padStart(4, '0')} - ${unicodeName || "no name found"} - ${char}`;
                            })
                            .join('<br>');

                        const subtitle = document.createElement('div');
                        subtitle.innerHTML = subtitleHTML.trim();
                        subtitle.classList.add('modal-subtitle');
                        titleElement.appendChild(subtitle);
                    }
                }
            }
            const observer = new MutationObserver(checkModalOpen);
            observer.observe(recipeModal, { attributes: true, subtree: true });

            // Patch getCraftResponse
            const getCraftResponse = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse;
		        unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse = exportFunction((...args) => new window.Promise(async (resolve) => {
		        	  const response = await getCraftResponse(...args);
                if (unicodeCheckbox.checked && isSingleUnicodeCharacter(response.result)) setTimeout(() => searchUnicodeElements(), 0);
                return resolve(response);
            }));

            // Watch for changes in showDiscoveredOnly using $watch method
            unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].$watch('showDiscoveredOnly', function(newVal, oldVal) {
                searchUnicodeElements();
            });
        }

        function isSingleUnicodeCharacter (char, bothChecks=false) {
            if (!settings.uni.showMultiCharacterEmojis) return Array.from(char).length === 1;
            if (settings.uni.showMultiCharacterEmojis || bothChecks) {
                if (/^[🇦-🇿]{2}$/u.test(char)) return true; // 2 of REGIONAL INDICATOR SYMBOL LETTER -> Flag Emojis
                if (/^.(\p{Emoji_Modifier}|[\uFE00-\uFE0F])*(\u200D.(\p{Emoji_Modifier}|[\uFE00-\uFE0F])*)+$/u.test(char)) return true; // Zero Width Joiner + Skin Tone Modifier + Variants Stuff
                if (/^.(\p{Emoji_Modifier}|[\uFE00-\uFE0F])$/u.test(char)) return true; // Skin Tone Modifier + Variants Stuff
            }
        }

        function toggleUnicodeSearch() {
            // Hide search results and disable search
            if (!unicodeCheckbox.checked) updateUnicodeSearch([]);
            // Search with current Searchquery
            else searchUnicodeElements();
        }

        function fetchUnicodeData() {
            GM.xmlHttpRequest({
                method: "GET",
                url: "https://unicode.org/Public/UNIDATA/UnicodeData.txt",
                onload: function(response) {
                    if (response.status === 200) {
                        const parsedData = parseUnicodeData(response.responseText);
                        Object.assign(unicodeMap, parsedData); // Populate the unicodeMap
                    } else {
                        console.error("Failed to load Unicode data:", response.status, response.statusText);
                    }
                },
                onerror: function(error) {
                    console.error("Error fetching Unicode data:", error);
                }
            });
        }

        function parseUnicodeData(unicodeText) {
            const unicodeMap = {};
            const lines = unicodeText.trim().split('\n');
            lines.forEach(line => {
                const fields = line.split(';');
                const codePoint = fields[0];
                const name = fields[1];
                if (codePoint && name) {
                    unicodeMap[codePoint] = name;
                }
            });
            return unicodeMap;
        }

        function updateUnicodeSearch(elements = []) {
            unicodeContainer.innerHTML = ""; // Clear container content
            unicodeContainer.appendChild(header);

            const sidebarUnicodeElements = fetchEmojiAndDiscovery(elements);
            unicodeTitle.textContent = "Unicode Search - " + sidebarUnicodeElements.length;

            for (const unicodeElement of sidebarUnicodeElements.slice(0, settings.uni.maxShown)) {
                const elementDiv = document.createElement('div');
                elementDiv.classList.add('item');
                if (unicodeElement.discovered) elementDiv.classList.add("item-discovered");
                const elementEmoji = document.createElement('span');
                elementEmoji.classList.add('item-emoji');
                elementEmoji.appendChild(document.createTextNode(unicodeElement.emoji ?? '⬜'));
                elementDiv.appendChild(elementEmoji);
                elementDiv.appendChild(document.createTextNode(` ${unicodeElement.text} `));
                elementDiv.addEventListener('mousedown', (e) => {
                    unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].selectElement(e, cloneInto(unicodeElement, unsafeWindow));
                });
                unicodeContainer.appendChild(elementDiv);
            }
        }

        function searchUnicodeElements(query = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].searchQuery) {
            if (!unicodeCheckbox.checked) return;
            const showDiscoveredOnly = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].showDiscoveredOnly;
            const filteredElements = Object.values(unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements)
                .filter(element => {
                    if (!isSingleUnicodeCharacter(element.text) || (showDiscoveredOnly && !element.discovered)) return false;

                    const codePoint = element.text.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
                    const name = unicodeMap[codePoint] || "";
                    return ("U+" + codePoint).includes(query.toUpperCase()) || name.includes(query.toUpperCase()); // Match code point or name
                })
                .map(el => el.text);
            if (settings.uni.sort) filteredElements.sort((a, b) => a.codePointAt(0) - b.codePointAt(0));
            updateUnicodeSearch(filteredElements);
        }
    }





































//              ___           ___         ___           ___           ___                    ___                                                 ___
//             /  /\         /  /\       /  /\         /__/\         /__/\                  /__/\          ___       ___                        /  /\
//            /  /:/_       /  /::\     /  /::\       _\_ \:\        \  \:\                 \  \:\        /  /\     /  /\                      /  /:/_
//           /  /:/ /\     /  /:/\:\   /  /:/\:\     /__/\ \:\        \  \:\                 \  \:\      /  /:/    /  /:/      ___     ___    /  /:/ /\
//          /  /:/ /::\   /  /:/~/:/  /  /:/~/::\   _\_ \:\ \:\   _____\__\:\            ___  \  \:\    /  /:/    /__/::\     /__/\   /  /\  /  /:/ /::\
//         /__/:/ /:/\:\ /__/:/ /:/  /__/:/ /:/\:\ /__/\ \:\ \:\ /__/::::::::\          /__/\  \__\:\  /  /::\    \__\/\:\__  \  \:\ /  /:/ /__/:/ /:/\:\
//         \  \:\/:/~/:/ \  \:\/:/   \  \:\/:/__\/ \  \:\ \:\/:/ \  \:\~~\~~\/          \  \:\ /  /:/ /__/:/\:\      \  \:\/\  \  \:\  /:/  \  \:\/:/~/:/
//          \  \::/ /:/   \  \::/     \  \::/       \  \:\ \::/   \  \:\  ~~~            \  \:\  /:/  \__\/  \:\      \__\::/   \  \:\/:/    \  \::/ /:/
//           \__\/ /:/     \  \:\      \  \:\        \  \:\/:/     \  \:\                 \  \:\/:/        \  \:\     /__/:/     \  \::/      \__\/ /:/
//             /__/:/       \  \:\      \  \:\        \  \::/       \  \:\                 \  \::/          \__\/     \__\/       \__\/         /__/:/
//             \__\/         \__\/       \__\/         \__\/         \__\/                  \__\/                                               \__\/
  function initSpawnUtils() {
      spawnInit = true;
      const spawnImage = document.createElement('img');
      const menu = document.createElement('div');
      externalSpawnImage = spawnImage;
      init();

      function init() {
          const spawnIcon = 'data:image/png;base64,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';
	        spawnImage.src = spawnIcon.trim();
	        spawnImage.classList.add('random');
          document.querySelector('.side-controls').appendChild(spawnImage);
          spawnImage.addEventListener('click', (e) => {
              showMenu();
          });

      }

      function showMenu() {

          menu.id = 'contextMenu';
          menu.innerHTML = '';

          if (settings.sel.enabled) {
              const spawnFromSelected = document.createElement('div');
              spawnFromSelected.classList.add('contextMenuOption');
              spawnFromSelected.textContent = 'Spawn From Selected';
              spawnFromSelected.onclick = () => spawnFromSelectedElement();
              menu.appendChild(spawnFromSelected);
          }

          const spawnAlphabets = document.createElement('div');
          spawnAlphabets.classList.add('contextMenuOption');
          spawnAlphabets.textContent = 'Spawn Alphabets';
          spawnAlphabets.onclick = () => promptAlphabets();
          menu.appendChild(spawnAlphabets);

          const spawnUnicodes = document.createElement('div');
          spawnUnicodes.classList.add('contextMenuOption');
          spawnUnicodes.textContent = 'Spawn Unicodes';
          spawnUnicodes.onclick = () => promptUnicodes();
          menu.appendChild(spawnUnicodes);

          setTimeout(() => {
              document.body.appendChild(menu);
              menu.style.right = `${window.innerWidth - spawnImage.getBoundingClientRect().right}px`;
              menu.style.bottom = `${window.innerHeight - spawnImage.getBoundingClientRect().top}px`;

              document.addEventListener('click', () => {
                  if (document.body.contains(menu)) {
                      document.body.removeChild(menu);
                  }
              }, { once: true });
          }, 0);
      }


      function spawnFromSelectedElement() {
          const selectedInstances = getAllInstances().filter(x => x.utilsSelected);
          if (selectedInstances.length > 1) alert(`More than 1 Element is selected: ${selectedInstances.length}`);
          else if (selectedInstances.length < 1) alert("0 Elements are selected");
          else { // Unicode Spawn
              const selected = selectedInstances[0];
              const x = selected.left;
              const y = selected.top;
              if (Array.from(selected.text).length === 1) {
                  const codepoint = selected.text.codePointAt(0);
                  const rows = Number(prompt(`Unicode Spawn: U+${codepoint.toString(16)}\nHow many rows should it spawn?`));
                  if (rows) {
                      deleteInstance(selected);
                      spawnUnicodes(codepoint, rows, x, y);
                  }
              }
              else { // Alphabet Spawn
                  const text = selected.text;
                  const letters = [...text].reduce((map, char, index) => {
                      if (/[a-zA-Z]/.test(char)) map.push({char, index});
                      return map;
                  }, []);
                  let positionChoice
                  if (letters.length === 0) {
                      alert(`i dont know what to do with your element...`);
                      positionChoice = -1;
                  }
                  else if (letters.length === 1) positionChoice = 0;
                  else {
                      const positionsMessage = letters.map((item, i) => `${i + 1} - ${item.char}`).join('\n');
                      positionChoice = Number(prompt(`Alphabet Spawn: ${selected.text}\nWhich letter do you want to select?\n${positionsMessage}`)) - 1;
                  }

                  if (letters[positionChoice]) {
                      const selectedIndex = letters[positionChoice].index;
                      const pattern = text.substring(0, selectedIndex).toUpperCase() + 'x' + text.substring(selectedIndex + 1).toUpperCase();
                      deleteInstance(selected);
                      spawnAlphabets([pattern], 'abcdefghijklmnopqrstuvwxyz'.split(''), x, y);
                  }
                  else if (positionChoice != -1) alert(`${positionChoice + 1} was not one of the options :(`)
              }
          }
      }

      function getAllAlphabets() {
            const counters = {};
            JSON.parse(localStorage.getItem("infinite-craft-data")).elements.map(e => e.text.toLowerCase()).forEach(e => {
                const letters = e.match(/[a-zA-Z]/g);
                if (letters && letters.length === 1) (counters[e.replace(letters[0], 'x')] ||= new Set()).add(letters[0]);
            });
            const alphabets = Object.entries(counters)
                .map(([key, set]) => ({ alphabet: key, completeness: set.size }))
                .filter(e => e.completeness >= 3)
                .sort((a, b) => b.completeness - a.completeness);

            return alphabets;
        }

        function promptAlphabets() {
            const userInput = prompt("Enter Alphabet(s) separated by Double Spaces:\nFor Example: 'x   .x   _x   x!'\n\n- only spawns 'correctly' capitalized elements\n- use a capital X to not replace it\n- Type E to spawn all your E's\n- Type 'all' to spawn all YOUR Alphabets!");
            if (!userInput) return [];
            if (userInput.toLowerCase() === "all") {
                const alphabets = getAllAlphabets();
                console.table(alphabets);
                if (settings.tabs.enabled) externalAddTab(-1, {elements: [], name: `All your Alphabets (${alphabets.filter(a => a.completeness === 26).length}/${alphabets.length})`});
                spawnAlphabets(alphabets.map(e => e.alphabet));
                return;
            }
            if (/^[A-Z]$/.test(userInput)) {  // 1 Letter
                const alphabets = getAllAlphabets();
                spawnAlphabets(alphabets.map(e => e.alphabet), [userInput], 100, 50, true);
            }
            else spawnAlphabets(userInput.split(/  /));
        }

        function spawnAlphabets(patterns, letters='abcdefghijklmnopqrstuvwxyz'.split(''), x=100, y=50, flip = false) {
            const elements = [];
            patterns.forEach((pattern, rowIndex) => {
                if (pattern) letters.forEach((char, colIndex) => {
                    elements.push({
                        name: icCasing(pattern.replace('x', char)),
                        x: flip ? (x + colIndex * 100) : (x + rowIndex * 100),
                        y: flip ? (y + rowIndex * 50) : (y + colIndex * 50)
                    });
                });
            });
            spawnElements(elements);
        }

      function promptUnicodes() {
          const userInput = prompt("Enter a Unicode Codepoint followed by the number of rows it should spawn!\nFor Example: U+0020 2");
          const [codepoint, rows] = userInput.split(' ', 2).map(x => x.trim());
          // Remove the "U+" prefix if present
          spawnUnicodes(parseInt(codepoint.replace(/^[Uu]\+/, ''), 16), rows);
      }

      function spawnUnicodes(codepoint, rows = 1, x=100, y=50) {
          const elements = [];
          const baseCode = codepoint & 0xFFF0;

          for (let row = 0; row < rows; row++) {
              for (let step = 0; step < 16; step++) {
                  const charCode = baseCode + step + (row * 16);
                  const char = String.fromCodePoint(charCode);

                  elements.push({
                      name: char,
                      x: x + (step * 100),
                      y: y + (row * 50)
                  });
              }
          }
          spawnElements(elements);
      }
  }









































//             ____    ____ _____  _______   ______
//            |_   \  /   _|_   _|/  ___  |./ ___  |
//              |   \/   |   | | |  (__ \_| ./   \_|
//              | |\  /| |   | |  '.___\-.| |
//             _| |_\/_| |_ _| |_|\\____) | \.___.'\
//            |_____||_____|_____|_______.'\._____.'


    // Copy Elements On Hover
    let ctrlCHandled = false;
    let ctrlShiftVHandled = false;
    document.addEventListener('keydown', function(e) {
        if (settings.copy.enabled && e.ctrlKey && e.key.toLowerCase() === 'c' && !ctrlCHandled) {
            let hoveredElement = document.elementFromPoint(mouseData.x, mouseData.y);
            let copyText;
            if (hoveredElement.classList.contains('item-emoji')) copyText = hoveredElement.nextSibling.nodeValue.trim();
            if (hoveredElement.classList.contains('item') || hoveredElement.classList.contains('item-emoji')) {

                if (hoveredElement.classList.contains('instance')) {
                    getAllInstances().forEach(instance => {
                        if (instance.elem === hoveredElement && instance.utilsSelected) {
                            copyText = generateClipboardText(getSelectedInstances())
                        }
                    });
                }

                if (!copyText) {
                    copyText = hoveredElement.childNodes[1].nodeValue.trim();
                }
                navigator.clipboard.writeText(copyText);
                console.log('Copied to clipboard:\n' + copyText);
            }
            ctrlCHandled = true;
        }


        if (settings.copy.enabled && e.ctrlKey && e.shiftKey && e.key === 'V' && !ctrlShiftVHandled && mouseData.x < window.innerWidth - document.getElementsByClassName('sidebar')[0].getBoundingClientRect().width) {
            e.preventDefault();
            navigator.clipboard.readText().then(text => {
                spawnElements(parsePastedText(text));
            }).catch(err => {
                console.error('Failed to read clipboard contents:', err);
            });
            ctrlShiftVHandled = true;
        }
    });
    document.addEventListener('keyup', function(e) {
        // Reset the flags when keys are released
        if (e.key.toLowerCase() === 'c' && e.ctrlKey) {
            ctrlCHandled = false;
        }
        if (e.key === 'V' && e.ctrlKey && e.shiftKey) {
            ctrlShiftVHandled = false;
        }
    });

    function generateClipboardText(elements) {
        return elements.map(element => {
            const xOffset = (element.left - mouseData.x).toFixed(2);
            const yOffset = (element.top - mouseData.y).toFixed(2);
            return `${element.text}  ${xOffset} ${yOffset}`;
        }).join('\n');
    }

    function parsePastedText(text) {
        let coordLessCounter = 0;
        let columnSplit = 25;

        const results = [];
        text.trim().split('\n').forEach(line => {
            const parts = line.split('  '); // Double space separator
            if (parts.length < 1) return; // Skip malformed lines

            let column = -25 + (parseInt(coordLessCounter / columnSplit) * 200);
            let row = -25 + (coordLessCounter % columnSplit * 50);

            // Check if there's a coordinate part
            if (parts[1] && parts[1].split(' ', 2).every(num => !isNaN(num))) {
                [column, row] = parts[1].split(' ', 2).map(Number);
            } else {
                coordLessCounter++;
            }

            // Determine elements to push
            let elements;
            if (parts[0].includes(' = ')) {
                columnSplit = 69420;
                const [firstPart, result] = parts[0].split(' = ', 2);
                const ingredients = firstPart.split(' + ', 2);
                elements = [...ingredients, result.split(/ \/\/| ::/)[0].trim()].map(x => x.trim());
            } else {
                elements = [parts[0].trim()];
            }

            // Push results
            elements.forEach((name, i) => {
                results.push({
                    name: name,
                    x: mouseData.x + column + (i * 200) || mouseData.x,
                    y: mouseData.y + row || mouseData.y
                });
            });
        });

        return results;
    }


    // Unlock Ghost Element when crafted
    function patchGhostElements () {
        const getCraftResponse = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse;
		    unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].getCraftResponse = exportFunction((...args) => new window.Promise(async (resolve) => {
            const response = await getCraftResponse(...args);
            if (settings.spawn.ghosts) {
                const ghostInstances = getAllInstances().filter(instance => instance.disabled && instance.text === response.result);
                ghostInstances.forEach(instance => {
                    // spawnElement({text: response.result, emoji: response.emoji, discovered: response.isNew}, instance.left, instance.top);
                    // deleteInstance(instance);
                    instance.disabled = false;
                    instance.emoji = response.emoji;
                    instance.discovered = response.isNew;
                    instance.elem.style.animation = '';
                    instance.elem.style.border = '';
                    instance.elem.style.color = '';
                });
            }
            return resolve(response);
        }));
    }























//              ______   _________ ____  _____ _________ _______         __      _____        _________ _____  _____ ____  _____   ______ _________ _____   ____   ____  _____  _______
//            .' ___  | |_   ___  |_   \|_   _|_   ___  |_   __ \       /  \    |_   _|      |_   ___  |_   _||_   _|_   \|_   _|./ ___  |  _   _  |_   _|.'    \.|_   \|_   _|/  ___  |
//           / .'   \_|   | |_  \_| |   \ | |   | |_  \_| | |__) |     / /\ \     | |          | |_  \_| | |    | |   |   \ | | / ./   \_|_/ | | \_| | | /  .--.  \ |   \ | | |  (__ \_|
//           | |    ____  |  _|  _  | |\ \| |   |  _|  _  |  __ /     / ____ \    | |   _      |  _|     | '    ' |   | |\ \| | | |          | |     | | | |    | | | |\ \| |  '.___\-.
//           \ \.___]  _|_| |___/ |_| |_\   |_ _| |___/ |_| |  \ \_ _/ /    \ \_ _| |__/ |    _| |_       \ \--' /   _| |_\   |_\ \.___.'\  _| |_   _| |_\  \--'  /_| |_\   |_|\\____) |
//            \._____.' |_________|_____|\____|_________|____| |___|____|  |____|________|   |_____|       \.__.'   |_____|\____|\._____.' |_____| |_____|\.____.'|_____|\____|_______.'


    function getAllInstances() {
        return unsafeWindow.$nuxt._route.matched[0].instances.default._data.instances.filter(x => !x.hide);
    }

    function deleteInstance(instance) {
        const instances = unsafeWindow.$nuxt._route.matched[0].instances.default._data.instances;
        const index = instances.indexOf(instance);
        if (index >= 0) instances.splice(instances.indexOf(instance), 1); // Remove instance from instances array
        else warn("Tried to delete an instance that does not exist:", instance);
    }

    function deleteAllInstances() {
        getAllInstances().forEach(instance => deleteInstance(instance));
    }

    function fetchEmojiAndDiscovery(texts) {
        const elementsMap = unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.elements.reduce((map, elem) => {
            map[elem.text] = elem;
            return map;
        }, {});

        return texts.map(text => elementsMap[text] ? elementsMap[text] : false);
    }

    function spawnElements(elements) {
        const fetchedDataMap = fetchEmojiAndDiscovery(elements.map(e => e.name))
            .reduce((map, item) => {
                map[item.text] = item;
                return map;
            }, {});
        if (elements.length < 500 || confirm(`You are about to spawn ${elements.length} Elements.`)) {
            elements.forEach(savedElem => {
                const data = fetchedDataMap[savedElem.name];
                if (data) spawnElement(data, savedElem.x, savedElem.y);
                else if (settings.spawn.ghosts && savedElem.name.length <= 320) spawnElement({text: savedElem.name, emoji: "​"}, savedElem.x, savedElem.y, true);
            });
        }
    }

    function spawnElement(element, x = 0, y = 0, disabled = false) {
        const data = {
            id: unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.instanceId++,
            text: element.text,
            emoji: element.emoji,
            discovered: element.discovered,
            disabled: false,
            left: 0,
            top: 0,
            offsetX: 0.5,
            offsetY: 0.5,
        };
        const instance = cloneInto(data, unsafeWindow);
        unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]._data.instances.push(instance);
        unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].$nextTick(
            exportFunction(() => {
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].setInstancePosition(
                    instance,
                    x,
                    y
                );
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].setInstanceZIndex(instance, 0);
                unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0].calcInstanceSize(instance);
                if (disabled) { // Ghost Elements, SPOOKYY!!!
                    instance.disabled = disabled;
                    instance.elem.style.animation = 'none';
                    instance.elem.style.border = 'none';
                    instance.elem.style.color = 'rgba(255, 255, 255, 0.3)';
                }
            }, unsafeWindow)
        );
    }

    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function icCasing(str) {
        return str.split('').map((char, index, arr) => {
            if (index === 0 || arr[index - 1] === ' ') {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join('');
    }
})();
