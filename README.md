# Link date edit - Plugin Shaarli
 
Link date edit is a plugin for [Shaarli](https://github.com/shaarli/Shaarli)  give capabilities to change date and time of a shaar (link).
 
## Installation

Clone repository and copy linkdate_edit folder under your plugins directory.
```git clone https://github.com/Roultabie/linkdate_edit
cp -R linkdate_edit/linkdate_edit /path/to/your/shaarli/plugins/
```

Then you can enable the plugin in the plugin administration page from your shaarli instance
or edit the `data/config.json.php` file and add `linkdate_edit` in `$GLOBALS['config']['ENABLED_PLUGINS']`.

```$GLOBALS['config']['ENABLED_PLUGINS'] = array (
    '...',
    'linkdate_edit'
);
```

## Usage

Just edit a shaare and change date and/or time and save it.

## TODO

Add message to be careful.