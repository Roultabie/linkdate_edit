/**
* Used to insert char in string
* From https://www.w3resource.com/javascript-exercises/javascript-string-exercise-14.php
* @package linkdate_edit (shaarli plugin)
* @param {string} mainString string used to add
* @param {string} insString string to add
* @param {integer} pos position of new string
* @return {string} new string assembled
* @link https://github.com/Roultabie/linkdate_edit
*/
var insert = function insert(mainString, insString, pos) {
    if(typeof(pos) == "undefined") {
        pos = 0;
    }
    if(typeof(insString) == "undefined") {
        insString = '';
    }
    return mainString.slice(0, pos) + insString + mainString.slice(pos);
}

/**
 * Change hidden input lf_lindate value from standard date and time.
 * Called by linkdate-edit_date and linkdate-edit_time inputs
 * @author Daniel Douat <daniel@douat.fr>
 * @package linkdate_edit (shaarli plugin)
 * @param {string} dateString given by "date" input form
 * @param {string} timeString given by "time" input form
 * @link https://github.com/Roultabie/linkdate_edit
 */
var formatDateShaarli = function formatDateShaarli(dateString, timeString) {
    if (dateString == "") {
        dateString = newLinkDate.value;
    }
    if (timeString == "") {
        timeString = newLinkTime.value;
    }
    dateString        = dateString.replace(/-/g, "");
    timeString        = timeString.replace(":", "");
    linkDate[0].value = dateString + "_" + timeString + dateTime[2];
}

/**
 * Return array of standard date and time from shaarli date
 * @author Daniel Douat <daniel@douat.fr>
 * @package linkdate_edit (shaarli plugin)
 * @param {string} lfLinkDate date form hidden lf_linkdate shaarli input value
 * @return {array} [date (YYYMMDD, hh:mm, s)]
 * @link https://github.com/Roultabie/linkdate_edit
 */
var formatDateStd = function formatDateStd(lfLinkDate) {
    //var elements    = linkDate[0].value.split("_");
    var e = lfLinkDate.split("_");
    var d = insert(e[0], "-", 4);
    d     = insert(d, "-", 7);
    var t = insert(e[1], ":", 2);
    // We separate seconds from hours:minutes
    t      = insert(t, "-", 5);
    var te = t.split("-");
    return [d, te[0], te[1]];
}

// Get current hidden link date input
var linkDate    = document.getElementsByName("lf_linkdate");

// Get our linkdate "date" and ttime inputs
var newLinkDate = document.getElementById("linkdate-edit_date");
var newLinkTime = document.getElementById("linkdate-edit_time");

// Get array of YYYMMMDD HH:MM and S.
var dateTime      = formatDateStd(linkDate[0].value);

// Update linkdate-edit_date and linkdate-edit_time inputs
newLinkDate.value = dateTime[0];
newLinkTime.value = dateTime[1];