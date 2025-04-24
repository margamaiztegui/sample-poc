$(document).ready(function() {
    
    getPageName();

    $('#siginBtn').on('click', () => {
        window.location.href = 'profile.html';
    });

    $("#birthdate").datepicker({ 
        autoclose: true, 
        todayHighlight: true,
    }).datepicker('update', new Date());

    const countries = {
        "Africa": ["Nigeria", "South Africa", "Kenya", "Egypt", "Ghana"],
        "Asia": ["China", "India", "Japan", "Filipino", "Indonesia"],
        "Europe": ["Germany", "France", "United Kingdom", "Italy", "Spain"],
        "North America": ["United States", "Canada", "Mexico", "Cuba", "Dominican Republic"],
        "South America": ["Brazil", "Argentina", "Colombia", "Chile", "Peru"],
        "Oceania": ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Samoa"]
      };

    $.each(countries, function(continent, countriesList) {
    let optgroup = $('<optgroup>', { label: continent });
    $.each(countriesList, function(index, country) {
        optgroup.append($('<option>', { value: country, text: country }));
    });
    $('#nationality').append(optgroup);
    });

    function getPageName() {
        let pageName = window.location.pathname.split('/').pop();
        var keywords = ["dashboard", "profile"];

        var matchFound = keywords.some(function(keyword) {
            return pageName.includes(keyword);
        });

        if (matchFound) {
            getSizeScreenSize();
        }
    }

    $(window).resize(function() {
       getSizeScreenSize();
    });

    function getSizeScreenSize() {
    if ($(window).width() <= 991) 
        $('#navBarUserDropdown').removeClass('d-flex');
    else
        $('#navBarUserDropdown').addClass('d-flex');
    }
    
})