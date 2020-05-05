# fa-list-gen

Make fontawesome font list array like below.

you can export `fab.json`, `far.json`, `fas.json`, `fab.js`, `far.js`, `fas.js`

fab.json
```
["fab fa-500px","fab fa-accessible-icon", ...]
```

## Usage

You should install these packages first

```json
"@fortawesome/free-brands-svg-icons": "^5.11.2",
"@fortawesome/free-regular-svg-icons": "^5.11.2",
"@fortawesome/free-solid-svg-icons": "^5.10.2",
```

Then run following commands

```sh
$ npx fa-list-gen -d ./fonts
```