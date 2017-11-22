(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./app.component.html',
    '<header class="header"></header>\n' +
    '<div class="container-fluid container-fluid-full web-el-text">\n' +
    '    <div class="row flex-row">\n' +
    '        <sidebar class="col-sm-3 col-lg-3 "></sidebar>\n' +
    '        <main id="main-center" class="col-sm-9 col-lg-9" ui-view></main>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<footer></footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./header.component.html',
    '\n' +
    '            <div class="col-sm-2 col-md-2 col-lg-2">\n' +
    '                <a href="" class="praxhub-logo"><svg id="praxhub-logo" class="ph-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.8 70.4"><style>.praxhub-logo-st0 {fill: #FFFFFF;}.praxhub-logo-st1 {fill: #CC3466;}.praxhub-logo-st2 {fill: #49C2C6;}.praxhub-logo-st3 {fill: #F7CE21;}.praxhub-logo-st4 {fill: #6FBE44;}</style><path class="praxhub-logo-st0" d="M110.9 36.4c0 13.3-6.8 20-20.3 20-2.8 0-5.1-.1-7-.4v9.2c0 3.4-1.6 5.2-4.9 5.2H75c-1.5 0-2.3-.8-2.3-2.3V21.5c0-2.5 1.3-4 4-4.5 4.4-.9 8.9-1.3 13.6-1.3 7.3 0 12.6 1.6 15.8 4.9 3.2 3.2 4.8 8.5 4.8 15.8zm-11.1.2c0-4.4-.6-7.2-1.7-8.6-1.3-1.6-4.1-2.4-8.4-2.4-2.9 0-4.9.2-6.1.7v19.9c1.4.3 3.5.4 6.2.4 3.8 0 6.4-.7 7.8-2.1 1.5-1.5 2.2-4.1 2.2-7.9zM140.9 22l-.1 1.3c-.1 1.6-.9 2.3-2.4 2.3h-7.8c-3.1 0-4.6 1.2-4.6 3.7v24.2c0 1.5-.8 2.3-2.3 2.3h-6.3c-1.5 0-2.3-.8-2.3-2.3v-23c0-9.8 5.3-14.7 15.8-14.7 3.1 0 5.3.1 6.7.4 2.2.4 3.3 1.9 3.3 4.5V22zm37.7 28.7c0 2.5-1.3 4.1-3.9 4.5-3.8.7-8.5 1.1-14.1 1.1-12.2 0-18.3-4.2-18.3-12.7 0-5.8 3.7-9.6 11.2-11.4.4-.1 3.3-.7 8.7-1.7 2.9-.5 4.8-1 5.5-1.3-.1 0-.1-.1-.1-.1 0-1.6-.8-2.7-2.4-3.2-.9-.3-2.4-.4-4.5-.4-3.4 0-6.4.1-9 .4l-3.9.4c-.1-.1-.2-.1-.4.1-1.2 0-1.9-.7-2.2-2.1 0-.1-.1-1.3-.1-3.4 0-2.7 2.1-4.3 6.5-4.9.7-.1 3.9-.1 9.6-.1 11.6 0 17.4 5 17.4 14.9v19.9zm-10.8-4.3v-7.7l-11.7 2.2c-1.8.3-2.7 1.2-2.7 2.7 0 2.2 2.6 3.2 7.8 3.2 2.7.1 4.9-.1 6.6-.4zm93.3 7.1c0 1.5-.8 2.3-2.3 2.3h-6.3c-1.5 0-2.3-.8-2.3-2.3V31.4c0-2.4-.5-4-1.6-4.8-.9-.6-2.5-.9-5-.9-3.6 0-6.4.2-8.3.7v27.1c0 1.5-.8 2.3-2.3 2.3h-6.3c-1.5 0-2.3-.8-2.3-2.3V5.3c0-3.4 1.7-5.1 5-5.1h3.6c1.5 0 2.3.8 2.3 2.3v13.9c2.9-.4 6-.6 9.2-.6 11 0 16.6 4.8 16.6 14.3v23.4zm41.7-3c0 2.5-1.3 4-3.9 4.5-4.3.9-9.5 1.3-15.5 1.3-11.5 0-17.3-4.8-17.3-14.3V21.4c0-3.4 1.7-5.1 5-5.1h3.6c1.5 0 2.3.8 2.3 2.3v22.1c0 2.4.6 4.1 1.7 4.8.9.6 2.6.9 5.2.9 3.8 0 6.5-.2 8.1-.5V21.4c0-3.4 1.7-5.1 5-5.1h3.6c1.5 0 2.3.8 2.3 2.3v31.9h-.1zm44-15c0 6.9-1.2 11.9-3.7 15-3.2 3.9-8.8 5.8-16.9 5.8-4.3 0-8.8-.5-13.6-1.4-2.6-.5-3.9-2-3.9-4.5V5c0-3.4 1.6-5 4.9-5h3.7c1.5 0 2.3.7 2.3 2.2v13.5c1.7-.1 4.1-.2 7.1-.2 13.4 0 20.1 6.7 20.1 20zm-11-.1c0-3.8-.7-6.5-2-7.8-1.3-1.4-3.9-2.1-7.6-2.1-3.3 0-5.5.2-6.6.6v19.8c1.7.2 3.7.4 6.1.4 4.2 0 6.8-.6 8-1.7 1.4-1.4 2.1-4.4 2.1-9.2zM220.5 53.8c0 1.3-.8 1.9-2.3 1.9h-7.6c-1.3 0-2.3-.5-2.8-1.6l-7.1-10.3-7.2 10.4c-.7 1-1.8 1.5-3.2 1.5h-6.7c-1.5 0-2.3-.7-2.3-1.9 0-.5.3-1.2.8-2l12.2-16.3-11.9-15.1c-.7-.4-1-1.1-1-1.9 0-1.4.8-2.2 2.3-2.2h7.3c1.3 0 2.3.5 3 1.4l7.1 9.4 6.8-9.4c.7-1 1.6-1.4 2.7-1.4h6.8c1.7 0 2.5.7 2.5 2.2 0 .8-.3 1.4-.9 1.9l-11.4 14.7 12 16.8c.6.8.9 1.5.9 1.9z"/><path class="praxhub-logo-st1" d="M26.1 31.4c.6-.6.6-1.3.2-2.1-.6-1-7.2-18.6-7.2-18.6-1.8-3.6-5.2-5.5-9-5.5-2.8 0-5.3 1.1-7.1 3-1.8 1.8-2.9 4.3-3 7.1 0 3.9 1.9 7.2 5.5 9 0 0 17.5 6.6 18.6 7.2.8.5 1.5.4 2-.1z"/><path class="praxhub-logo-st2" d="M29.9 35.1c-.6.6-.6 1.3-.2 2.1.6 1 7.2 18.6 7.2 18.6 1.8 3.6 5.2 5.5 9 5.5 2.8 0 5.3-1.1 7.1-3 1.8-1.8 2.9-4.3 3-7.1 0-3.9-1.9-7.2-5.5-9 0 0-17.5-6.6-18.6-7.2-.8-.4-1.5-.4-2 .1z"/><path class="praxhub-logo-st3" d="M29.9 31.4c.6.6 1.3.6 2.1.2 1-.6 18.6-7.2 18.6-7.2 3.6-1.8 5.5-5.2 5.5-9 0-2.8-1.1-5.3-3-7.1-1.8-1.8-4.3-2.9-7.1-3-3.9 0-7.2 1.9-9 5.5 0 0-6.6 17.5-7.2 18.6-.5.8-.4 1.5.1 2z"/><path class="praxhub-logo-st4" d="M26.2 35.2c-.6-.6-1.3-.6-2.1-.2-1 .6-18.6 7.2-18.6 7.2C1.9 44 0 47.4 0 51.2c0 2.8 1.1 5.3 3 7.1 1.8 1.8 4.3 2.9 7.1 3 3.9 0 7.2-1.9 9-5.5 0 0 6.6-17.5 7.2-18.6.4-.8.4-1.5-.1-2z"/></svg></a>\n' +
    '            </div>\n' +
    '            <div class="col-sm-10 col-md-10 col-lg-10">\n' +
    '\n' +
    '                <div class="right-side-holder ">\n' +
    '\n' +
    '                    <!--<div class="search-box&#45;&#45;holder">\n' +
    '                        <input type="text" class="search-box" placeholder="Search for doctors, groups, education and more..."/>\n' +
    '                        <button clasS="ph-icon-search&#45;&#45;holder">\n' +
    '                            <svg id="ph-icon-search" class="ph-icon ph-icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path class="ph-icon-search-st0" d="M11.9 32.3c-5.6-5.6-5.6-14.8 0-20.4 2.7-2.7 6.3-4.2 10.2-4.2s7.5 1.5 10.2 4.2c5.6 5.6 5.6 14.8 0 20.4-2.7 2.7-6.3 4.2-10.2 4.2-3.9 0-7.5-1.5-10.2-4.2zm33.8 9.3L37.1 33c5.3-7.2 4.6-17.4-1.9-24-3.6-3.6-8.4-5.4-13.1-5.4C17.3 3.6 12.6 5.4 9 9c-7.2 7.2-7.2 19 0 26.2 3.6 3.6 8.4 5.4 13.1 5.4 3.8 0 7.6-1.2 10.9-3.5l8.6 8.6c.6.6 1.3.9 2.1.9.7 0 1.5-.3 2.1-.9 1-1.1 1-3-.1-4.1z"/></svg>\n' +
    '                        </button>\n' +
    '                    </div>-->\n' +
    '\n' +
    '                    <!--left side search-->\n' +
    '                    <!--<span class="search-box">-->\n' +
    '                    <!--<p clasS="search-box&#45;&#45;text">This is search</p>-->\n' +
    '                    <!--</span>-->\n' +
    '\n' +
    '                    <!-- right side -->\n' +
    '                    <div class="right-side-holder--buttons">\n' +
    '						<!--<span class="switch-profile">\n' +
    '                             <button class="btn btn-ae-bl-ye-small">Switch user</button>\n' +
    '                         </span>-->\n' +
    '\n' +
    '                        <span class="message">\n' +
    '                            <a href=""><i class="ph-icon-chat-2"></i></a>\n' +
    '                            <span class="counter">66</span>\n' +
    '                         </span>\n' +
    '\n' +
    '                        <span class="notification">\n' +
    '                            <a href=""><i class="ph-icon-notifications"></i></a>\n' +
    '                            <span class="counter">66</span>\n' +
    '                        </span>\n' +
    '\n' +
    '                        <span class="avatar">\n' +
    '                             <a href="" title=""><img src="../img/avatar.png" alt="avatar" title="avatar"/></a>\n' +
    '                          </span>\n' +
    '\n' +
    '                        <div class="menu-dropdown">\n' +
    '                            <div class="dropdown">\n' +
    '                                 <button class="btn dropdown-toggle" type="button" id="headerDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="ph-icon-menu-horizontal"></i></button>\n' +
    '                                 <ul class="dropdown-menu pull-right" aria-labelledby="headerDropdown">\n' +
    '                                    <li><a href="#">Stop Impersonating</a></li>\n' +
    '                                    <li><a href="#">Announcements</a></li>\n' +
    '                                    <li><a href="#">Members</a></li>\n' +
    '                                    <li><a href="#">Education</a></li>\n' +
    '                                    <li><a href="#">Events</a></li>\n' +
    '                                    <li><a href="#">Settings</a></li>\n' +
    '                                    <li><a href="#">Metrics/Reports</a></li>\n' +
    '                                    <li><a href="#">Flagged Media</a></li>\n' +
    '                                    <li><a href="#">Page Text</a></li>\n' +
    '                                    <li><a href="#">Sign Out</a></li>\n' +
    '                                </ul>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '   \n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./bynd-spinner.component.html',
    '<div ng-if="byndSpinner.isLoading" style="z-index: 9999;">\n' +
    '    <style>\n' +
    '        .bynd-spinner, .bynd-spinner__background {\n' +
    '            position: fixed;\n' +
    '            top: 0;\n' +
    '            left: 0;\n' +
    '            width: 100%;\n' +
    '            height: 100%;\n' +
    '        }\n' +
    '\n' +
    '        .bynd-spinner {\n' +
    '            z-index: 9999;\n' +
    '        }\n' +
    '\n' +
    '        .bynd-spinner__background {\n' +
    '            background: #000;\n' +
    '            opacity: 0.67;\n' +
    '        }\n' +
    '\n' +
    '        .bynd-spinner__content {\n' +
    '            position: absolute;\n' +
    '            top: 50%;\n' +
    '            left: 50%;\n' +
    '            z-index: 9999;\n' +
    '            transform: translate(-50%, -50%);\n' +
    '        }\n' +
    '    </style>\n' +
    '\n' +
    '    <div class="bynd-spinner">\n' +
    '        <div class="bynd-spinner__background"\n' +
    '            ng-style="byndSpinner.backgroundStyle">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bynd-spinner__content"\n' +
    '            ng-if="!byndSpinner.templateUrl && !byndSpinner.imageSrc"\n' +
    '            ng-include="byndSpinner.defaultTemplate">\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="bynd-spinner__content"\n' +
    '            ng-if="byndSpinner.templateUrl"\n' +
    '            ng-include="byndSpinner.templateUrl">\n' +
    '        </div>\n' +
    '\n' +
    '        <img class="bynd-spinner__content"\n' +
    '            ng-if="byndSpinner.imageSrc"\n' +
    '            ng-src="{{ byndSpinner.imageSrc }}">\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./bynd-spinner.default.html',
    '<style type=\'text/css\'>@-webkit-keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }@keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }.uil-default-css > div:nth-of-type(1){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.5s;animation-delay: -0.5s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(2){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.4166666666666667s;animation-delay: -0.4166666666666667s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(3){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.33333333333333337s;animation-delay: -0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(4){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.25s;animation-delay: -0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(5){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.16666666666666669s;animation-delay: -0.16666666666666669s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(6){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.08333333333333331s;animation-delay: -0.08333333333333331s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(7){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0s;animation-delay: 0s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(8){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.08333333333333337s;animation-delay: 0.08333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(9){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.16666666666666663s;animation-delay: 0.16666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(10){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.25s;animation-delay: 0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(11){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.33333333333333337s;animation-delay: 0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(12){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.41666666666666663s;animation-delay: 0.41666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}</style><div class=\'uil-default-css\' style=\'transform:scale(0.6);\'><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div><div style=\'top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute;\'></div></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./footer.component.html',
    '\n' +
    '    <div class="container-fluid footer">\n' +
    '        <div class="row">\n' +
    '            <div class="col-lg-12">\n' +
    '				<span class="menu"><a href="">Terms of Use</a> <a href="">Privacy Policy</a> <a href="">Help</a> <a\n' +
    '                        href="">Faq</a></span>\n' +
    '                <span class="copyright">praxhub &copy; 2017 ABN 87 168 435 612. All rights reserved</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./sidebar.component.html',
    '\n' +
    '           <div id="sidebar-left"\n' +
    '                <ul class="sidebar-nav">\n' +
    '                    <li class="active" ng-repeat="tab in $ctrl.tabs">\n' +
    '                        <a href="#" ui-sref="{{:: tab.state }}">\n' +
    '                            <svg class="ph-icon ph-logo-small">\n' +
    '                                <use xlink:href="../img/sprite.svg#ph-logo-small"></use>\n' +
    '                            </svg>\n' +
    '                            <span>{{:: tab.name }}</span>\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '\n' +
    '                </ul>\n' +
    '\n' +
    '                <hr class="sidebar-divider">\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    ' ');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./announcements.component.html',
    '\n' +
    '                    <div class="dashboard-sa-head">\n' +
    '                        <h1>Add Announcement / Featured content</h1>\n' +
    '                    </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./education.component.html',
    '\n' +
    '                    <div class="dashboard-sa-head">\n' +
    '                            <h1>All Education</h1>\n' +
    '                        </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./events.component.html',
    '<div class="dashboard-sa-head">\n' +
    '    <h1>All Events</h1>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./flagged-media.component.html',
    '<div class="dashboard-sa-head">\n' +
    '    <h1>Flagged Media</h1>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./members.component.html',
    '<div class="dashboard-sa-head">\n' +
    '        <h1>All users</h1>\n' +
    '    </div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./metrics-reports.component.html',
    '<div class="dashboard-sa-head">\n' +
    '    <h1>Metrics / Reports</h1>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./page-text.component.html',
    '<div class="dashboard-sa-head">\n' +
    '    <h1>Privacy Policy</h1>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates');
} catch (e) {
  module = angular.module('templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./settings.component.html',
    '<div class="dashboard-sa-head">\n' +
    '    <h1>Specialities</h1>\n' +
    '</div>');
}]);
})();
