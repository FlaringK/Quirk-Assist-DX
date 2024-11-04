/**
 * @param {import("zerespluginlibrary").Plugin} Plugin 
 * @param {import("zerespluginlibrary").Patcher} Patcher
 * @param {import("zerespluginlibrary").DiscordModules} DiscordModules
 * @param {import("zerespluginlibrary").BoundAPI} Library 
 * @param {import("zerespluginlibrary").Logger} Logger 
 * @returns 
 */
module.exports = (Plugin, Library) => {

    const {ContextMenu, DOM, Patcher, UI, Logger} = window.BdApi;
    const {DiscordSelectors, PluginUtilities, DiscordModules, Utilities, ReactTools} = Api;
    
    return class extends Plugin {



        async onStart() {
            console.log("Quirk Assist DX Active!")
            this.currentQuirk = 0
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

            // Reset quirk if no latch or if string starts with /
            console.log(this.currentQuirk)
            if (this.currentQuirk !== 0 && !this.settings.autoProxy) {
                if (!this.settings["character" + this.currentQuirk].autoProxy) {
                    this.currentQuirk = 0
                }
            }

            if (outString.startsWith("\\\\")) { // Two backslashes turn off latch
                this.currentQuirk = 0
            } else if (outString.startsWith("\\")) { // One backslash turns off quirk for single message
                return outString
            }

            for (let i = 0; i < 24; i++) {
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
                this.currentQuirk = index

                // Don't repeat loop this if a quirk is found
                break;

            }

            // Apply quirk
            if (this.currentQuirk) {
                const character = this.settings["character" + this.currentQuirk]
                const proxy = character.proxy.trim()
                const [start, end] = proxy.split("text", 2)

                // Get string without proxy
                if (outString.startsWith(start) && outString.endsWith(end)) {
                    outString = outString.slice(start.length, outString.length - end.length)
                }

                // find and replace have the same size
                let finds = this.splitByComma(character.find)
                let replaces = this.splitByComma(character.replace)

                if (finds.length > replaces.length) {
                    finds.length = replaces.length
                } else {
                    replaces.length = finds.length
                }

                // Do the quirk swap
                finds.forEach((find, j) => {
                    const replace = replaces[j]
                    outString = this.qurikFindReplace(outString, find, replace)
                })

                // Reinsert proxy if keep proxy
                if (character.keepProxy) {
                    outString = start + outString + end
                }
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