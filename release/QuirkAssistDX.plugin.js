/**
 * @name QuirkAssistDX
 * @description A pluigin that adds a quirk to your message after you hit send!
 * @version 0.1.1
 * @author FlaingK
 * @website https://flaringk.github.io/
 * @source https://github.com/FlaringK/Quirk-Assist-DX
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/
const config = {
    main: "index.js",
    id: "",
    name: "QuirkAssistDX",
    author: "FlaingK",
    authorId: "",
    authorLink: "",
    version: "0.1.1",
    description: "A pluigin that adds a quirk to your message after you hit send!",
    website: "https://flaringk.github.io/",
    source: "https://github.com/FlaringK/Quirk-Assist-DX",
    patreon: "",
    donate: "",
    invite: "",
    changelog: [],
    defaultConfig: [
        {
            id: "character1",
            name: "Custom Quirk 1",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: "GC: text"
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: "/([a-z])/g,A,I,E"
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: "upper($1),4,1,3"
                }
            ]
        },
        {
            id: "character2",
            name: "Custom Quirk 2",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character3",
            name: "Custom Quirk 3",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character4",
            name: "Custom Quirk 4",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character5",
            name: "Custom Quirk 5",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character6",
            name: "Custom Quirk 6",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character7",
            name: "Custom Quirk 7",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character8",
            name: "Custom Quirk 8",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character9",
            name: "Custom Quirk 9",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character10",
            name: "Custom Quirk 10",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character11",
            name: "Custom Quirk 11",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character12",
            name: "Custom Quirk 12",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character13",
            name: "Custom Quirk 13",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character14",
            name: "Custom Quirk 14",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character15",
            name: "Custom Quirk 15",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character16",
            name: "Custom Quirk 16",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character17",
            name: "Custom Quirk 17",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character18",
            name: "Custom Quirk 18",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character19",
            name: "Custom Quirk 19",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character20",
            name: "Custom Quirk 20",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character21",
            name: "Custom Quirk 21",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character22",
            name: "Custom Quirk 22",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character23",
            name: "Custom Quirk 23",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        },
        {
            id: "character24",
            name: "Custom Quirk 24",
            collapsible: true,
            type: "category",
            shown: false,
            settings: [
                {
                    type: "textbox",
                    id: "proxy",
                    name: "Proxy Tag",
                    value: ""
                },
                {
                    type: "switch",
                    id: "keepProxy",
                    name: "Keep proxy after sending message?",
                    value: true
                },
                {
                    type: "textbox",
                    id: "find",
                    name: "Find list",
                    value: ""
                },
                {
                    type: "textbox",
                    id: "replace",
                    name: "Replace list",
                    value: ""
                }
            ]
        }
    ]
};
class Dummy {
    constructor() {this._config = config;}
    start() {}
    stop() {}
}
 
if (!global.ZeresPluginLibrary) {
    BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.name ?? config.info.name} is missing. Please click Download Now to install it.`, {
        confirmText: "Download Now",
        cancelText: "Cancel",
        onConfirm: () => {
            require("request").get("https://betterdiscord.app/gh-redirect?id=9", async (err, resp, body) => {
                if (err) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                if (resp.statusCode === 302) {
                    require("request").get(resp.headers.location, async (error, response, content) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), content, r));
                    });
                }
                else {
                    await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                }
            });
        }
    });
}
 
module.exports = !global.ZeresPluginLibrary ? Dummy : (([Plugin, Api]) => {
     const plugin = (Plugin, Library) => {

    const {ContextMenu, DOM, Patcher, UI, Logger} = window.BdApi;
    const {DiscordSelectors, PluginUtilities, DiscordModules, Utilities, ReactTools} = Api;
    
    return class extends Plugin {

        async onStart() {
            console.log("Quirk Assist DX Active!")
            Patcher.before(this.name, DiscordModules.MessageActions, "sendMessage", (_, [, msg]) => {
                msg.content = this.format(msg.content);
            });
        }

        onStop() {
            Patcher.unpatchAll(this.name);
        }

        getSettingsPanel() {
            const panel = this.buildSettingsPanel();
            return panel.getElement();
        }

        format(inString) {

            let outString = inString.trim()

            for (let i = 0; i < 9; i++) {
                const index = i + 1
                const character = this.settings["character" + index]
                const proxy = character.proxy.trim()

                // If valid proxy
                const proxyCheck = proxy.includes("text")
                if (!proxyCheck) { continue }
                    
                // If message matches quirk
                const [start, end] = proxy.split("text", 2)
                if (!(outString.startsWith(start) && outString.endsWith(end))) { continue }

                console.log("Valid quirk Message! " + index)

                // Get string without proxy
                outString = outString.slice(start.length, outString.length - end.length)

                // find and replace have the same size
                let finds = this.splitByComma(character.find)
                let replaces = this.splitByComma(character.replace)

                finds.length = replaces.length
                replaces.length = finds.length

                // Do the quirk swap
                finds.forEach((find, j) => {
                    const replace = replaces[j]
                    outString = this.qurikFindReplace(outString, find, replace)
                })

                // Reinsert proxy if keep proxy
                if (character.keepProxy) {
                    outString = start + outString + end
                }

                // Don't repeat loop this if a quirk is found
                break;

            }

            return outString
        }

        qurikFindReplace(inText, find, replace) {
            let quirkText = inText
            const regExpRegExp = /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/g

            if (regExpRegExp.test(find)) {
                let expression = find.split("/")
                let flags = expression.pop()
                let start = expression.shift()
                let pattern = expression.join("/")

                let findRegex = new RegExp(pattern, flags)

                quirkText = this.processExtra(quirkText.replace(findRegex, replace))

            } else {
                quirkText = this.processExtra(quirkText.split(find).join(replace))
            }

            return quirkText
        }

        processExtra(text) {
            text = text.replace(/upper\((.*?)\)/g, (m, p1) => p1.toUpperCase())
            text = text.replace(/lower\((.*?)\)/g, (m, p1) => p1.toLowerCase())
            // text = text.replace(/scramble\((.*?)\)/g, (m, p1) => shuffle(p1.split("")).join(""))
            
            return text
        }

        splitByComma(text) {
            let outText = text.split("\\,").join("COMMA")
            let splits = outText.split(",")
            splits.forEach((split, i) => {
                splits[i] = split.split("COMMA").join(",")
            })
            return splits
        }
    };

};
     return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
/*@end@*/