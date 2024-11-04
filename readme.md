# Qurik Assist DX (Download)[https://github.com/FlaringK/Quirk-Assist-DX/releases]

A plugin for (Better Discord)[https://betterdiscord.app/] that adds a quirk to your discord message after you press send! The DX stands for Discord X

This plugin edits the contents of your message before it's sent to discords servers, so it looks like plain text

### Known bugs
- Quirks don't apply to text when media is also uploaded with the message

## Using Qurik Assist DX 

Once you place the QuirkAssistDX.plugin.js file into your plugin folder and active it, if you open it's settings there will be 24 custom quirks for you to make. Each quirk has four fields for you to change, the first being preloaded with an example quirk. The four fields are:

### Proxy Tag
This this is the proxy that your message will have to match for a quirk to be applied to it, akin to (PluralKit)[https://pluralkit.me/]. Often, these will be a pair of brackets, an emoji prefix, or something similar.

You'll need to "pretend" you're proxying the word `text` - just the word itself, all-lowercase. This often gets a bit confusing, so here are a couple of examples with various patterns:

```
GC:text
[text]
🌸text
text -Q
```

### Keep proxy after sending message?
By default the proxy tag you use with the message will not be removed, setting this will remove or keep the proxy tag as part of the message you send to discord.

### Find list & Replace list
This is the bread and butter of this plugin. Each quirk has a list of text it will find, and list of text it will replace with the corresponding found text. Each list is seperated by commas. For exmaple: a quirk's find list could be:
```
A,I,E
```
and it's replace list could be:
```
4,1,3
```
Then, when you send a message with the correct proxy, the quirk would look at the first element in the find list, "A", and replace all the "A"s with the first element in the replace list, "4". Then it would get the next element in the find list, "I", and replace them with "1"s, and same for teh "E"s and the "3"s.

Tips:
- If you want to use a comma as part of a find or replace, you can use a backslash before a comma to escape it: \\,
- An element in the find list can be plain text or a Regular Expression
- There are two functions in the replace list that you can use, "upper()" to transfrom the text to uppercase, and "lower()" to transfrom the text to lower case, these are only really useful while also using Regular Expression Groups

### And that's it!
