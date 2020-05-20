'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// information to reach API
var apiKey = '57792bae64654393ad50e0f26dfac797';
var url = 'https://api.rebrandly.com/v1/links';

// Some page elements
var inputField = document.querySelector('#input');
var shortenButton = document.querySelector('#shorten');
var responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
var shortenUrl = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var urlToShorten, data, response, jsonResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        urlToShorten = inputField.value;
                        data = JSON.stringify({
                            destination: urlToShorten
                        });
                        _context.prev = 2;
                        _context.next = 5;
                        return fetch(url, {
                            method: 'POST',
                            body: data,
                            headers: {
                                'Content-type': 'application/json',
                                'apikey': apiKey
                            }
                        });

                    case 5:
                        response = _context.sent;

                        if (!response.ok) {
                            _context.next = 11;
                            break;
                        }

                        _context.next = 9;
                        return response.json();

                    case 9:
                        jsonResponse = _context.sent;

                        renderResponse(jsonResponse);

                    case 11:
                        _context.next = 16;
                        break;

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](2);

                        console.log(_context.t0);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 13]]);
    }));

    return function shortenUrl() {
        return _ref.apply(this, arguments);
    };
}();

// Clear page and call AJAX functions
var displayShortUrl = function displayShortUrl(event) {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);