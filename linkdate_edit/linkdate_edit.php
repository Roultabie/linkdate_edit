<?php
/**
 * Hook render_footer.
 * Executed on every page redering.
 *
 * Template placeholders:
 *   - text
 *   - endofpage
 *   - js_files
 *
 * Data:
 *   - _PAGE_: current page
 *
 * @param array $data data passed to plugin
 *
 * @return array altered $data.
 */
function hook_linkdate_edit_render_footer($data)
{
    //Only execute when editlink is rendered.
    if ($data['_PAGE_'] == Router::$PAGE_EDITLINK) {
        $data['js_files'][] = PluginManager::$PLUGINS_PATH . '/linkdate_edit/linkdate_edit.js';
    }
    return $data;
}

/**
 * Hook render_editlink.
 *
 * Template placeholders:
 *   - field_plugin: add link fields after tags.
 *
 * @param array $data data passed to plugin
 *
 * @return array altered $data.
 */
function hook_linkdate_edit_render_editlink($data)
{
    // Load HTML into a string
    $html = file_get_contents(PluginManager::$PLUGINS_PATH .'/linkdate_edit/linkdate_edit.html');

    //$html = sprintf($html, '');

    // field_plugin
    $data['edit_link_plugin'][] = $html;

    return $data;
}
