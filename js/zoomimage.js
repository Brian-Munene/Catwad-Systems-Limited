
    (function($) {
        var initLayout = function() {
            //interior
            $('a.interior').zoomimage();
            //apartments
            $('a.apartments').zoomimage({
                border: 20,
                centered: true,
                hideSource: true
            });
            //homes
            $('a.homes').zoomimage();
            //school
            $("a.school").zoomimage();
            //farm
            $('a.farm').zoomimage();
            //commercial
            $('a.commercial').zoomimage({
                controlTrigger: 'mouseover',
                className: 'custom',
                shadow: 40,
                controls: false,
                opacity: 1,
                beforeZoomIn: function(boxID) {
                    $('#' + boxID)
                        .find('img')
                        .css('opacity', 0)
                        .animate({
                            'opacity': 1
                        }, {
                            duration: 600,
                            queue: false
                        });
                },
                beforeZoomOut: function(boxID) {
                    $('#' + boxID)
                        .find('img')
                        .css('opacity', 1)
                        .animate({
                            'opacity': 0
                        }, {
                            duration: 600,
                            queue: false
                        });
                }
            });
        };
        EYE.register(initLayout, 'init');
    })(jQuery)
