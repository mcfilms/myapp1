/*
 * JS for startScreen generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '2eb0f177-3285-4aa7-837a-004b7fe60898';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Appery.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Appery.adjustContentHeightWithPadding();
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "page3",
    "location": "page3.html"
}, {
    "name": "page2",
    "location": "page2.html"
}];

startScreen_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_3': 'startScreen_mobilelabel_3',
        'mobileimage_4': 'startScreen_mobileimage_4',
        'mobilebutton_5': 'startScreen_mobilebutton_5',
        'video_2': 'startScreen_video_2'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    startScreen_beforeshow = function() {
        Appery.CurrentScreen = "startScreen";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_3671_onLoad = startScreen_onLoad = function() {
        screen_3671_elementsExtraJS();

        // TODO fire device events only if necessary (with JS logic)
        startScreen_deviceEvents();
        startScreen_windowEvents();
        screen_3671_elementsEvents();
    }

    // screen window events
    screen_3671_windowEvents = startScreen_windowEvents = function() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            adjustContentHeightWithPadding();
        });

    }

    // device events
    startScreen_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_3671_elementsExtraJS = startScreen_elementsExtraJS = function() {
        // screen (startScreen) extra code

    }

    // screen elements handler
    screen_3671_elementsEvents = startScreen_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#startScreen_mobilecontainer1 [name="mobilebutton_5"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Appery.navigateTo('page2', {
                        transition: 'slideup',
                        reverse: false
                    });

                }
            },
        });

    }

    $("#startScreen").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }

}

$("#startScreen").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    startScreen_js();
});