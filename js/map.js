

$(document).ready(function(){});

function initialize() {
    var myLatlng1 = new google.maps.LatLng(-34.088398, 18.842346);
    var mapOptions = {
        zoom : 16,
        center : myLatlng1,
        scrollwheel: false,
        styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#707070"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#be2026"},{"lightness":"0"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"hue":"#ff000a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#575757"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#999999"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"saturation":"-52"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    var map = new google.maps.Map(document.getElementById('map1'),
            mapOptions);

    var contentString1 = '<b>TRUE Survival Somerset West</b><br>75 Victoria Road (1st Floor)'

    var infowindow = new google.maps.InfoWindow({});

    var marker1 = new google.maps.Marker({
        position : myLatlng1,
        map : map,
        title : 'TRUE Survival Somerset West'
    });
    google.maps.event.addListener(marker1, 'click', function initialize() {
        infowindow.close();//hide the infowindow
        infowindow.setContent(contentString1);//update the content for this marker
        infowindow.open(map, marker1);

    });

    // var myLatlng2 = new google.maps.LatLng(-33.934561, 18.854858);
    // var mapOptions2 = {
    //     zoom : 16,
    //     center : myLatlng2,
    //     scrollwheel: false,
    //     styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"42"},{"lightness":"-43"},{"visibility":"simplified"},{"gamma":"7.59"},{"weight":"0.75"},{"color":"#9b2743"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#009ca6"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#9b2743"},{"saturation":"-59"},{"lightness":"30"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff1800"},{"saturation":"2"},{"lightness":"2"},{"weight":"0.75"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"-51"},{"color":"#cbcbcb"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2c3e50"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#009ca6"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#041e42"}]},{"featureType":"water","elementType":"labels","stylers":[{"color":"#475777"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"weight":"1.00"},{"color":"#475777"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}]
    //     };

    // var map2 = new google.maps.Map(document.getElementById('map2'),
    //         mapOptions2);

    // var contentString2 = '<b>TRUE Survival Stellenbosch</b><br>Van Der Stel'

    // var infowindow = new google.maps.InfoWindow({});

    // var marker2 = new google.maps.Marker({
    //     position : myLatlng2,
    //     map : map2,
    //     title : 'TRUE Survival Stellenbosch'
    // });
    // google.maps.event.addListener(marker2, 'click', function initialize() {
    //     infowindow.close();//hide the infowindow
    //     infowindow.setContent(contentString2);//update the content for this marker
    //     infowindow.open(map2, marker2);

    // });
}
