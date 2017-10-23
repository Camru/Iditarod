/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const checkpointCoordinates = [
    [-147.813, 64.8321],
    [-149.0897, 64.5952],
    [-150.6352, 65.0317],
    [-152.0816, 65.201],
    [-155.5011, 64.7386],
    [-156.9352, 64.7322],
    [-156.455, 65.6568],
    [-157.8039, 64.8431],
    [-158.1046, 64.7188],
    [-158.7257, 64.3138],
    [-160.7863, 63.8742],
    [-161.1918, 64.3519],
    [-161.168, 64.9286],
    [-162.2494, 64.6162],
    [-163.4067, 64.6798],
    [-164.7519, 64.4681],
    [-165.3996, 64.4964]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = checkpointCoordinates;


const musherResults = [
    {
      "name": "Mitch Seavey",
      "sumTime": 195.21999999999997
    },
    {
      "name": "Dallas Seavey",
      "sumTime": 197.85999999999999
    },
    {
      "name": "Nicolas Petit",
      "sumTime": 197.77000000000004
    },
    {
      "name": "Joar Leifseth Ulsom",
      "sumTime": 201.78999999999996
    },
    {
      "name": "Jessie Royer",
      "sumTime": 203.94000000000003
    },
    {
      "name": "Wade Marrs",
      "sumTime": 209.81
    },
    {
      "name": "Ray Redington Jr.",
      "sumTime": 212.8
    },
    {
      "name": "Aliy Zirkle",
      "sumTime": 213.53
    },
    {
      "name": "Paul Gebhardt",
      "sumTime": 214.22
    },
    {
      "name": "Peter Kaiser",
      "sumTime": 214.33000000000004
    },
    {
      "name": "Jeff King",
      "sumTime": 215.75000000000003
    },
    {
      "name": "Ramey Smyth",
      "sumTime": 216.39000000000001
    },
    {
      "name": "Michelle Phillips",
      "sumTime": 217.78
    },
    {
      "name": "Hans Gatt",
      "sumTime": 218.26
    },
    {
      "name": "Ralph Johannessen",
      "sumTime": 218.44999999999996
    },
    {
      "name": "Ryan Redington",
      "sumTime": 218.90000000000006
    },
    {
      "name": "Ken Anderson",
      "sumTime": 219.3
    },
    {
      "name": "John Baker",
      "sumTime": 219.73999999999998
    },
    {
      "name": "Katherine Keith",
      "sumTime": 220.14999999999995
    },
    {
      "name": "Jason Mackey",
      "sumTime": 220.26000000000002
    },
    {
      "name": "Robert Redington",
      "sumTime": 221.25999999999996
    },
    {
      "name": "Linwood Fiedler",
      "sumTime": 222.03000000000003
    },
    {
      "name": "Richie Diehl",
      "sumTime": 223.91000000000003
    },
    {
      "name": "Sebastien Vergnaud",
      "sumTime": 224.08000000000004
    },
    {
      "name": "Mats Pettersson",
      "sumTime": 224.97999999999996
    },
    {
      "name": "Lars Monsen",
      "sumTime": 225.58999999999995
    },
    {
      "name": "Hugh Neff",
      "sumTime": 226.05999999999997
    },
    {
      "name": "Rick Casillo",
      "sumTime": 227.10999999999999
    },
    {
      "name": "Noah Burmeister",
      "sumTime": 228.43
    },
    {
      "name": "Cody Strathe",
      "sumTime": 230.46000000000004
    },
    {
      "name": "Ketil Reitan",
      "sumTime": 230.48000000000002
    },
    {
      "name": "Martin Buser",
      "sumTime": 230.80000000000004
    },
    {
      "name": "Scott Smith",
      "sumTime": 234.2
    },
    {
      "name": "Melissa Stewart",
      "sumTime": 234.29999999999998
    },
    {
      "name": "Nathan Schroeder",
      "sumTime": 235.13000000000002
    },
    {
      "name": "Nicolas Vanier",
      "sumTime": 236.89
    },
    {
      "name": "Seth Barnes",
      "sumTime": 236.93
    },
    {
      "name": "Kristy Berington",
      "sumTime": 240.09
    },
    {
      "name": "Karin Hendrickson",
      "sumTime": 240.26999999999998
    },
    {
      "name": "Allen Moore",
      "sumTime": 240.27
    },
    {
      "name": "Anna Berington",
      "sumTime": 240.37
    },
    {
      "name": "Laura Neese",
      "sumTime": 243.51000000000002
    },
    {
      "name": "Larry Daugherty",
      "sumTime": 256.21
    },
    {
      "name": "Jodi Bailey",
      "sumTime": 256.84000000000003
    },
    {
      "name": "Geir Idar Hjelvik",
      "sumTime": 258.36999999999995
    },
    {
      "name": "Charley Bejna",
      "sumTime": 260.03999999999996
    },
    {
      "name": "DeeDee Jonrowe",
      "sumTime": 261.40000000000003
    },
    {
      "name": "Gunnar Johnson",
      "sumTime": 261.53
    },
    {
      "name": "Dave Delcourt",
      "sumTime": 262
    },
    {
      "name": "Justin High",
      "sumTime": 262.7
    },
    {
      "name": "Justin Stielstra",
      "sumTime": 264.15
    },
    {
      "name": "Trent Herbst",
      "sumTime": 264.69
    },
    {
      "name": "Kristin Bacon",
      "sumTime": 269.26000000000005
    },
    {
      "name": "Misha Wiljes",
      "sumTime": 273.56
    },
    {
      "name": "Joe Carson",
      "sumTime": 277.30999999999995
    },
    {
      "name": "Thomas Rosenbloom",
      "sumTime": 277.53999999999996
    },
    {
      "name": "Zoya DeNure",
      "sumTime": 282.09000000000003
    },
    {
      "name": "Michael Baker",
      "sumTime": 282.3
    },
    {
      "name": "Matthew Failor",
      "sumTime": 282.53
    },
    {
      "name": "Jimmy Lebling",
      "sumTime": 286.90999999999997
    },
    {
      "name": "Paul Hansen",
      "sumTime": 288.83
    },
    {
      "name": "Peter Reuter",
      "sumTime": 289.0700000000001
    },
    {
      "name": "Alan Eischens",
      "sumTime": 289.56
    },
    {
      "name": "Cindy Abbott",
      "sumTime": 290.03000000000003
    }
  ];
/* harmony export (immutable) */ __webpack_exports__["c"] = musherResults;


const idit_data = [
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:00:00","Departure Dogs":"16"},
{"Number":"3","Name":"Otto Balogh","Status":"Rookie","Country":"Hungary","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:04:00","Departure Dogs":"15"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:06:00","Departure Dogs":"16"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:08:00","Departure Dogs":"16"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:10:00","Departure Dogs":"16"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:12:00","Departure Dogs":"16"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:14:00","Departure Dogs":"16"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:16:00","Departure Dogs":"16"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:18:00","Departure Dogs":"16"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:20:00","Departure Dogs":"16"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:22:00","Departure Dogs":"12"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:24:00","Departure Dogs":"16"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:26:00","Departure Dogs":"16"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:28:00","Departure Dogs":"16"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:30:00","Departure Dogs":"16"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:32:00","Departure Dogs":"16"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:34:00","Departure Dogs":"16"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:36:00","Departure Dogs":"16"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:38:00","Departure Dogs":"16"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:40:00","Departure Dogs":"16"},
{"Number":"23","Name":"Mark Selland","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:42:00","Departure Dogs":"16"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:44:00","Departure Dogs":"16"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:46:00","Departure Dogs":"16"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:48:00","Departure Dogs":"16"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:50:00","Departure Dogs":"16"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:52:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:54:00","Departure Dogs":"16"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:56:00","Departure Dogs":"16"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"11:58:00","Departure Dogs":"16"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:00:00","Departure Dogs":"16"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:02:00","Departure Dogs":"16"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:04:00","Departure Dogs":"16"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:06:00","Departure Dogs":"16"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:08:00","Departure Dogs":"16"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:10:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:12:00","Departure Dogs":"16"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:14:00","Departure Dogs":"16"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:16:00","Departure Dogs":"16"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:18:00","Departure Dogs":"16"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:20:00","Departure Dogs":"16"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:22:00","Departure Dogs":"16"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:24:00","Departure Dogs":"16"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:26:00","Departure Dogs":"16"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:28:00","Departure Dogs":"16"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:30:00","Departure Dogs":"16"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:32:00","Departure Dogs":"16"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:34:00","Departure Dogs":"16"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:36:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:38:00","Departure Dogs":"16"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:40:00","Departure Dogs":"16"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:42:00","Departure Dogs":"16"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:44:00","Departure Dogs":"16"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:46:00","Departure Dogs":"16"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:48:00","Departure Dogs":"16"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:50:00","Departure Dogs":"16"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:52:00","Departure Dogs":"16"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:54:00","Departure Dogs":"16"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:56:00","Departure Dogs":"16"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"12:58:00","Departure Dogs":"16"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:00:00","Departure Dogs":"16"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:02:00","Departure Dogs":"16"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:04:00","Departure Dogs":"16"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:06:00","Departure Dogs":"16"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:08:00","Departure Dogs":"16"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:10:00","Departure Dogs":"16"},
{"Number":"68","Name":"Mark May","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:12:00","Departure Dogs":"16"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:14:00","Departure Dogs":"16"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:16:00","Departure Dogs":"16"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:18:00","Departure Dogs":"16"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:20:00","Departure Dogs":"16"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Fairbanks","Latitude":"64.8321","Longitude":"-147.813","Distance":"","Time":"0","Speed":"","Arrival Date":"","Arrival Time":"","Arrival Dogs":"","Elapsed Time":"0","Departure Date":"03/06/2017","Departure Time":"13:22:00","Departure Dogs":"16"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.05","Speed":"11.88","Arrival Date":"03/06/2017","Arrival Time":"16:11:00","Arrival Dogs":"16","Elapsed Time":"3.93","Departure Date":"03/06/2017","Departure Time":"20:07:00","Departure Dogs":"16"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.22","Speed":"11.5","Arrival Date":"03/06/2017","Arrival Time":"16:19:00","Arrival Dogs":"16","Elapsed Time":"0.12","Departure Date":"03/06/2017","Departure Time":"16:26:00","Departure Dogs":"16"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.25","Speed":"11.43","Arrival Date":"03/06/2017","Arrival Time":"16:19:00","Arrival Dogs":"15","Elapsed Time":"5.93","Departure Date":"03/06/2017","Departure Time":"22:15:00","Departure Dogs":"15"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.18","Speed":"11.58","Arrival Date":"03/06/2017","Arrival Time":"16:25:00","Arrival Dogs":"16","Elapsed Time":"3.48","Departure Date":"03/06/2017","Departure Time":"19:54:00","Departure Dogs":"16"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.02","Speed":"11.96","Arrival Date":"03/06/2017","Arrival Time":"16:27:00","Arrival Dogs":"16","Elapsed Time":"0.23","Departure Date":"03/06/2017","Departure Time":"16:41:00","Departure Dogs":"16"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.48","Speed":"10.94","Arrival Date":"03/06/2017","Arrival Time":"16:41:00","Arrival Dogs":"16","Elapsed Time":"4.87","Departure Date":"03/06/2017","Departure Time":"21:33:00","Departure Dogs":"16"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.33","Speed":"11.25","Arrival Date":"03/06/2017","Arrival Time":"16:44:00","Arrival Dogs":"16","Elapsed Time":"3.15","Departure Date":"03/06/2017","Departure Time":"19:53:00","Departure Dogs":"16"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.65","Speed":"10.62","Arrival Date":"03/06/2017","Arrival Time":"16:57:00","Arrival Dogs":"16","Elapsed Time":"2.22","Departure Date":"03/06/2017","Departure Time":"19:10:00","Departure Dogs":"16"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.83","Speed":"10.29","Arrival Date":"03/06/2017","Arrival Time":"17:00:00","Arrival Dogs":"16","Elapsed Time":"5.1","Departure Date":"03/06/2017","Departure Time":"22:06:00","Departure Dogs":"16"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.18","Speed":"11.58","Arrival Date":"03/06/2017","Arrival Time":"17:03:00","Arrival Dogs":"16","Elapsed Time":"5.32","Departure Date":"03/06/2017","Departure Time":"22:22:00","Departure Dogs":"16"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.72","Speed":"10.5","Arrival Date":"03/06/2017","Arrival Time":"17:05:00","Arrival Dogs":"12","Elapsed Time":"2.85","Departure Date":"03/06/2017","Departure Time":"19:56:00","Departure Dogs":"12"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.4","Speed":"11.11","Arrival Date":"03/06/2017","Arrival Time":"17:08:00","Arrival Dogs":"16","Elapsed Time":"0.57","Departure Date":"03/06/2017","Departure Time":"17:42:00","Departure Dogs":"16"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.68","Speed":"10.56","Arrival Date":"03/06/2017","Arrival Time":"17:09:00","Arrival Dogs":"16","Elapsed Time":"0.27","Departure Date":"03/06/2017","Departure Time":"17:25:00","Departure Dogs":"16"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.17","Speed":"9.73","Arrival Date":"03/06/2017","Arrival Time":"17:10:00","Arrival Dogs":"16","Elapsed Time":"2.98","Departure Date":"03/06/2017","Departure Time":"20:09:00","Departure Dogs":"16"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.57","Speed":"10.78","Arrival Date":"03/06/2017","Arrival Time":"17:12:00","Arrival Dogs":"16","Elapsed Time":"3.13","Departure Date":"03/06/2017","Departure Time":"20:20:00","Departure Dogs":"16"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.23","Speed":"11.46","Arrival Date":"03/06/2017","Arrival Time":"17:14:00","Arrival Dogs":"16","Elapsed Time":"3.32","Departure Date":"03/06/2017","Departure Time":"20:33:00","Departure Dogs":"16"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.5","Speed":"10.91","Arrival Date":"03/06/2017","Arrival Time":"17:18:00","Arrival Dogs":"16","Elapsed Time":"4.65","Departure Date":"03/06/2017","Departure Time":"21:57:00","Departure Dogs":"16"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.27","Speed":"11.39","Arrival Date":"03/06/2017","Arrival Time":"17:20:00","Arrival Dogs":"16","Elapsed Time":"2.07","Departure Date":"03/06/2017","Departure Time":"19:24:00","Departure Dogs":"16"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.75","Speed":"10.43","Arrival Date":"03/06/2017","Arrival Time":"17:25:00","Arrival Dogs":"16","Elapsed Time":"6.52","Departure Date":"03/06/2017","Departure Time":"23:56:00","Departure Dogs":"16"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.92","Speed":"10.14","Arrival Date":"03/06/2017","Arrival Time":"17:29:00","Arrival Dogs":"16","Elapsed Time":"5.07","Departure Date":"03/06/2017","Departure Time":"22:33:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.3","Speed":"11.32","Arrival Date":"03/06/2017","Arrival Time":"17:30:00","Arrival Dogs":"16","Elapsed Time":"2.98","Departure Date":"03/06/2017","Departure Time":"20:29:00","Departure Dogs":"16"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.35","Speed":"11.21","Arrival Date":"03/06/2017","Arrival Time":"17:31:00","Arrival Dogs":"16","Elapsed Time":"0.13","Departure Date":"03/06/2017","Departure Time":"17:39:00","Departure Dogs":"16"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.5","Speed":"10.91","Arrival Date":"03/06/2017","Arrival Time":"17:32:00","Arrival Dogs":"16","Elapsed Time":"0.27","Departure Date":"03/06/2017","Departure Time":"17:48:00","Departure Dogs":"16"},
{"Number":"23","Name":"Mark Selland","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.87","Speed":"10.23","Arrival Date":"03/06/2017","Arrival Time":"17:34:00","Arrival Dogs":"16","Elapsed Time":"5.48","Departure Date":"03/06/2017","Departure Time":"23:03:00","Departure Dogs":"16"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.35","Speed":"11.21","Arrival Date":"03/06/2017","Arrival Time":"17:35:00","Arrival Dogs":"16","Elapsed Time":"3.55","Departure Date":"03/06/2017","Departure Time":"21:08:00","Departure Dogs":"16"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.3","Speed":"11.32","Arrival Date":"03/06/2017","Arrival Time":"17:36:00","Arrival Dogs":"16","Elapsed Time":"2.75","Departure Date":"03/06/2017","Departure Time":"20:21:00","Departure Dogs":"16"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.08","Speed":"9.86","Arrival Date":"03/06/2017","Arrival Time":"17:37:00","Arrival Dogs":"16","Elapsed Time":"0.22","Departure Date":"03/06/2017","Departure Time":"17:50:00","Departure Dogs":"16"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.03","Speed":"9.94","Arrival Date":"03/06/2017","Arrival Time":"17:38:00","Arrival Dogs":"16","Elapsed Time":"5.23","Departure Date":"03/06/2017","Departure Time":"22:52:00","Departure Dogs":"16"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.72","Speed":"10.5","Arrival Date":"03/06/2017","Arrival Time":"17:41:00","Arrival Dogs":"16","Elapsed Time":"7.32","Departure Date":"03/07/2017","Departure Time":"01:00:00","Departure Dogs":"16"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.63","Speed":"10.65","Arrival Date":"03/06/2017","Arrival Time":"17:46:00","Arrival Dogs":"16","Elapsed Time":"5.05","Departure Date":"03/06/2017","Departure Time":"22:49:00","Departure Dogs":"16"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.52","Speed":"9.21","Arrival Date":"03/06/2017","Arrival Time":"17:47:00","Arrival Dogs":"16","Elapsed Time":"0.32","Departure Date":"03/06/2017","Departure Time":"18:06:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.03","Speed":"9.94","Arrival Date":"03/06/2017","Arrival Time":"17:56:00","Arrival Dogs":"16","Elapsed Time":"2.43","Departure Date":"03/06/2017","Departure Time":"20:22:00","Departure Dogs":"16"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.73","Speed":"10.47","Arrival Date":"03/06/2017","Arrival Time":"18:00:00","Arrival Dogs":"16","Elapsed Time":"5.98","Departure Date":"03/06/2017","Departure Time":"23:59:00","Departure Dogs":"16"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.68","Speed":"8.98","Arrival Date":"03/06/2017","Arrival Time":"18:01:00","Arrival Dogs":"16","Elapsed Time":"6.3","Departure Date":"03/07/2017","Departure Time":"00:19:00","Departure Dogs":"16"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.65","Speed":"10.62","Arrival Date":"03/06/2017","Arrival Time":"18:05:00","Arrival Dogs":"16","Elapsed Time":"3.45","Departure Date":"03/06/2017","Departure Time":"21:32:00","Departure Dogs":"16"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.65","Speed":"10.62","Arrival Date":"03/06/2017","Arrival Time":"18:07:00","Arrival Dogs":"16","Elapsed Time":"6.25","Departure Date":"03/07/2017","Departure Time":"00:22:00","Departure Dogs":"16"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.32","Speed":"11.29","Arrival Date":"03/06/2017","Arrival Time":"18:09:00","Arrival Dogs":"16","Elapsed Time":"0.12","Departure Date":"03/06/2017","Departure Time":"18:16:00","Departure Dogs":"16"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.87","Speed":"10.23","Arrival Date":"03/06/2017","Arrival Time":"18:12:00","Arrival Dogs":"16","Elapsed Time":"6.37","Departure Date":"03/07/2017","Departure Time":"00:34:00","Departure Dogs":"16"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.75","Speed":"10.43","Arrival Date":"03/06/2017","Arrival Time":"18:15:00","Arrival Dogs":"16","Elapsed Time":"4.95","Departure Date":"03/06/2017","Departure Time":"23:12:00","Departure Dogs":"16"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.67","Speed":"10.59","Arrival Date":"03/06/2017","Arrival Time":"18:16:00","Arrival Dogs":"15","Elapsed Time":"3.53","Departure Date":"03/06/2017","Departure Time":"21:48:00","Departure Dogs":"15"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.8","Speed":"10.34","Arrival Date":"03/06/2017","Arrival Time":"18:20:00","Arrival Dogs":"16","Elapsed Time":"5.42","Departure Date":"03/06/2017","Departure Time":"23:45:00","Departure Dogs":"16"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.68","Speed":"10.56","Arrival Date":"03/06/2017","Arrival Time":"18:21:00","Arrival Dogs":"16","Elapsed Time":"3.78","Departure Date":"03/06/2017","Departure Time":"22:08:00","Departure Dogs":"16"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.95","Speed":"10.08","Arrival Date":"03/06/2017","Arrival Time":"18:31:00","Arrival Dogs":"16","Elapsed Time":"6.62","Departure Date":"03/07/2017","Departure Time":"01:08:00","Departure Dogs":"16"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.53","Speed":"10.84","Arrival Date":"03/06/2017","Arrival Time":"18:32:00","Arrival Dogs":"16","Elapsed Time":"4.47","Departure Date":"03/06/2017","Departure Time":"23:00:00","Departure Dogs":"16"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.63","Speed":"10.65","Arrival Date":"03/06/2017","Arrival Time":"18:34:00","Arrival Dogs":"16","Elapsed Time":"4.73","Departure Date":"03/06/2017","Departure Time":"23:18:00","Departure Dogs":"16"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.87","Speed":"10.23","Arrival Date":"03/06/2017","Arrival Time":"18:34:00","Arrival Dogs":"16","Elapsed Time":"6.6","Departure Date":"03/07/2017","Departure Time":"01:10:00","Departure Dogs":"16"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.72","Speed":"10.5","Arrival Date":"03/06/2017","Arrival Time":"18:35:00","Arrival Dogs":"16","Elapsed Time":"5.88","Departure Date":"03/07/2017","Departure Time":"00:28:00","Departure Dogs":"16"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.53","Speed":"10.84","Arrival Date":"03/06/2017","Arrival Time":"18:36:00","Arrival Dogs":"16","Elapsed Time":"0.15","Departure Date":"03/06/2017","Departure Time":"18:45:00","Departure Dogs":"16"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.62","Speed":"10.68","Arrival Date":"03/06/2017","Arrival Time":"18:39:00","Arrival Dogs":"16","Elapsed Time":"0.08","Departure Date":"03/06/2017","Departure Time":"18:44:00","Departure Dogs":"16"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.48","Speed":"10.94","Arrival Date":"03/06/2017","Arrival Time":"18:43:00","Arrival Dogs":"16","Elapsed Time":"0.17","Departure Date":"03/06/2017","Departure Time":"18:53:00","Departure Dogs":"16"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.7","Speed":"10.53","Arrival Date":"03/06/2017","Arrival Time":"18:52:00","Arrival Dogs":"16","Elapsed Time":"5.47","Departure Date":"03/07/2017","Departure Time":"00:20:00","Departure Dogs":"16"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"7.37","Speed":"8.14","Arrival Date":"03/06/2017","Arrival Time":"18:52:00","Arrival Dogs":"16","Elapsed Time":"6.55","Departure Date":"03/07/2017","Departure Time":"01:25:00","Departure Dogs":"15"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.75","Speed":"10.43","Arrival Date":"03/06/2017","Arrival Time":"19:01:00","Arrival Dogs":"16","Elapsed Time":"4.63","Departure Date":"03/06/2017","Departure Time":"23:39:00","Departure Dogs":"16"},
{"Number":"68","Name":"Mark May","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.93","Speed":"10.11","Arrival Date":"03/06/2017","Arrival Time":"19:08:00","Arrival Dogs":"16","Elapsed Time":"7.92","Departure Date":"03/07/2017","Departure Time":"03:03:00","Departure Dogs":"16"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"7.13","Speed":"8.41","Arrival Date":"03/06/2017","Arrival Time":"19:14:00","Arrival Dogs":"16","Elapsed Time":"6.03","Departure Date":"03/07/2017","Departure Time":"01:16:00","Departure Dogs":"16"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"5.97","Speed":"10.06","Arrival Date":"03/06/2017","Arrival Time":"19:16:00","Arrival Dogs":"16","Elapsed Time":"6.87","Departure Date":"03/07/2017","Departure Time":"02:08:00","Departure Dogs":"15"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.18","Speed":"9.7","Arrival Date":"03/06/2017","Arrival Time":"19:17:00","Arrival Dogs":"16","Elapsed Time":"0.12","Departure Date":"03/06/2017","Departure Time":"19:24:00","Departure Dogs":"16"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.88","Speed":"8.72","Arrival Date":"03/06/2017","Arrival Time":"19:17:00","Arrival Dogs":"16","Elapsed Time":"4.82","Departure Date":"03/07/2017","Departure Time":"00:06:00","Departure Dogs":"16"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.48","Speed":"9.25","Arrival Date":"03/06/2017","Arrival Time":"19:23:00","Arrival Dogs":"16","Elapsed Time":"3.6","Departure Date":"03/06/2017","Departure Time":"22:59:00","Departure Dogs":"16"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"7.73","Speed":"7.76","Arrival Date":"03/06/2017","Arrival Time":"19:30:00","Arrival Dogs":"16","Elapsed Time":"0.1","Departure Date":"03/06/2017","Departure Time":"19:36:00","Departure Dogs":"16"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"6.55","Speed":"9.16","Arrival Date":"03/06/2017","Arrival Time":"19:53:00","Arrival Dogs":"16","Elapsed Time":"6.17","Departure Date":"03/07/2017","Departure Time":"02:03:00","Departure Dogs":"15"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"8.25","Speed":"7.27","Arrival Date":"03/06/2017","Arrival Time":"20:37:00","Arrival Dogs":"16","Elapsed Time":"5.72","Departure Date":"03/07/2017","Departure Time":"02:20:00","Departure Dogs":"16"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"9.15","Speed":"6.56","Arrival Date":"03/06/2017","Arrival Time":"21:05:00","Arrival Dogs":"16","Elapsed Time":"6.1","Departure Date":"03/07/2017","Departure Time":"03:11:00","Departure Dogs":"16"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"9.27","Speed":"6.47","Arrival Date":"03/06/2017","Arrival Time":"21:06:00","Arrival Dogs":"16","Elapsed Time":"0.32","Departure Date":"03/06/2017","Departure Time":"21:25:00","Departure Dogs":"16"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"8.53","Speed":"7.03","Arrival Date":"03/06/2017","Arrival Time":"21:54:00","Arrival Dogs":"16","Elapsed Time":"0.2","Departure Date":"03/06/2017","Departure Time":"22:06:00","Departure Dogs":"16"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"8.77","Speed":"6.84","Arrival Date":"03/06/2017","Arrival Time":"21:54:00","Arrival Dogs":"16","Elapsed Time":"0.22","Departure Date":"03/06/2017","Departure Time":"22:07:00","Departure Dogs":"16"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"9.77","Speed":"6.14","Arrival Date":"03/06/2017","Arrival Time":"22:30:00","Arrival Dogs":"16","Elapsed Time":"0.47","Departure Date":"03/06/2017","Departure Time":"22:58:00","Departure Dogs":"16"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"10.22","Speed":"5.87","Arrival Date":"03/06/2017","Arrival Time":"23:01:00","Arrival Dogs":"16","Elapsed Time":"0.25","Departure Date":"03/06/2017","Departure Time":"23:16:00","Departure Dogs":"16"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"11.25","Speed":"5.33","Arrival Date":"03/06/2017","Arrival Time":"23:53:00","Arrival Dogs":"16","Elapsed Time":"0.22","Departure Date":"03/07/2017","Departure Time":"00:06:00","Departure Dogs":"16"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"13.15","Speed":"4.56","Arrival Date":"03/07/2017","Arrival Time":"01:55:00","Arrival Dogs":"16","Elapsed Time":"0.23","Departure Date":"03/07/2017","Departure Time":"02:09:00","Departure Dogs":"16"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Nenana","Latitude":"64.5952","Longitude":"-149.0897","Distance":"60","Time":"13.03","Speed":"4.6","Arrival Date":"03/07/2017","Arrival Time":"02:00:00","Arrival Dogs":"16","Elapsed Time":"0","Departure Date":"03/07/2017","Departure Time":"02:00:00","Departure Dogs":"16"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.07","Speed":"6.89","Arrival Date":"03/07/2017","Arrival Time":"05:45:00","Arrival Dogs":"16","Elapsed Time":"5.83","Departure Date":"03/07/2017","Departure Time":"11:35:00","Departure Dogs":"16"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.8","Speed":"6.52","Arrival Date":"03/07/2017","Arrival Time":"07:13:00","Arrival Dogs":"16","Elapsed Time":"4.98","Departure Date":"03/07/2017","Departure Time":"12:12:00","Departure Dogs":"16"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.7","Speed":"6.57","Arrival Date":"03/07/2017","Arrival Time":"07:24:00","Arrival Dogs":"16","Elapsed Time":"4.37","Departure Date":"03/07/2017","Departure Time":"11:46:00","Departure Dogs":"16"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.65","Speed":"6.59","Arrival Date":"03/07/2017","Arrival Time":"07:29:00","Arrival Dogs":"16","Elapsed Time":"4.75","Departure Date":"03/07/2017","Departure Time":"12:14:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"11.6","Speed":"7.76","Arrival Date":"03/07/2017","Arrival Time":"07:58:00","Arrival Dogs":"16","Elapsed Time":"3.82","Departure Date":"03/07/2017","Departure Time":"11:47:00","Departure Dogs":"16"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"12.43","Speed":"7.24","Arrival Date":"03/07/2017","Arrival Time":"08:47:00","Arrival Dogs":"16","Elapsed Time":"0.32","Departure Date":"03/07/2017","Departure Time":"09:06:00","Departure Dogs":"16"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.52","Speed":"5.45","Arrival Date":"03/07/2017","Arrival Time":"08:57:00","Arrival Dogs":"16","Elapsed Time":"5.25","Departure Date":"03/07/2017","Departure Time":"14:12:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"12.52","Speed":"7.19","Arrival Date":"03/07/2017","Arrival Time":"09:00:00","Arrival Dogs":"16","Elapsed Time":"0.15","Departure Date":"03/07/2017","Departure Time":"09:09:00","Departure Dogs":"16"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"12.92","Speed":"6.97","Arrival Date":"03/07/2017","Arrival Time":"09:04:00","Arrival Dogs":"16","Elapsed Time":"0.62","Departure Date":"03/07/2017","Departure Time":"09:41:00","Departure Dogs":"14"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.23","Speed":"6.8","Arrival Date":"03/07/2017","Arrival Time":"09:07:00","Arrival Dogs":"16","Elapsed Time":"0.47","Departure Date":"03/07/2017","Departure Time":"09:35:00","Departure Dogs":"14"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.98","Speed":"6.44","Arrival Date":"03/07/2017","Arrival Time":"09:09:00","Arrival Dogs":"16","Elapsed Time":"2.5","Departure Date":"03/07/2017","Departure Time":"11:39:00","Departure Dogs":"16"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.27","Speed":"6.78","Arrival Date":"03/07/2017","Arrival Time":"09:10:00","Arrival Dogs":"16","Elapsed Time":"0.33","Departure Date":"03/07/2017","Departure Time":"09:30:00","Departure Dogs":"16"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.48","Speed":"6.21","Arrival Date":"03/07/2017","Arrival Time":"09:14:00","Arrival Dogs":"16","Elapsed Time":"3.15","Departure Date":"03/07/2017","Departure Time":"12:23:00","Departure Dogs":"16"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.9","Speed":"6.47","Arrival Date":"03/07/2017","Arrival Time":"09:18:00","Arrival Dogs":"16","Elapsed Time":"2.88","Departure Date":"03/07/2017","Departure Time":"12:11:00","Departure Dogs":"15"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.72","Speed":"6.56","Arrival Date":"03/07/2017","Arrival Time":"09:19:00","Arrival Dogs":"16","Elapsed Time":"0.17","Departure Date":"03/07/2017","Departure Time":"09:29:00","Departure Dogs":"16"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.97","Speed":"6.44","Arrival Date":"03/07/2017","Arrival Time":"09:22:00","Arrival Dogs":"16","Elapsed Time":"4.13","Departure Date":"03/07/2017","Departure Time":"13:30:00","Departure Dogs":"16"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"10.1","Speed":"8.91","Arrival Date":"03/07/2017","Arrival Time":"09:24:00","Arrival Dogs":"16","Elapsed Time":"7.77","Departure Date":"03/07/2017","Departure Time":"17:10:00","Departure Dogs":"16"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.1","Speed":"6.87","Arrival Date":"03/07/2017","Arrival Time":"09:26:00","Arrival Dogs":"16","Elapsed Time":"0.3","Departure Date":"03/07/2017","Departure Time":"09:44:00","Departure Dogs":"14"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.72","Speed":"5.73","Arrival Date":"03/07/2017","Arrival Time":"09:31:00","Arrival Dogs":"16","Elapsed Time":"4.45","Departure Date":"03/07/2017","Departure Time":"13:58:00","Departure Dogs":"15"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.68","Speed":"6.58","Arrival Date":"03/07/2017","Arrival Time":"09:37:00","Arrival Dogs":"12","Elapsed Time":"4.43","Departure Date":"03/07/2017","Departure Time":"14:03:00","Departure Dogs":"12"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.95","Speed":"6.02","Arrival Date":"03/07/2017","Arrival Time":"09:50:00","Arrival Dogs":"16","Elapsed Time":"0.47","Departure Date":"03/07/2017","Departure Time":"10:18:00","Departure Dogs":"15"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.75","Speed":"6.55","Arrival Date":"03/07/2017","Arrival Time":"09:52:00","Arrival Dogs":"16","Elapsed Time":"5.17","Departure Date":"03/07/2017","Departure Time":"15:02:00","Departure Dogs":"16"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.15","Speed":"5.94","Arrival Date":"03/07/2017","Arrival Time":"09:53:00","Arrival Dogs":"16","Elapsed Time":"0.28","Departure Date":"03/07/2017","Departure Time":"10:10:00","Departure Dogs":"16"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"9.97","Speed":"9.03","Arrival Date":"03/07/2017","Arrival Time":"09:54:00","Arrival Dogs":"16","Elapsed Time":"7.95","Departure Date":"03/07/2017","Departure Time":"17:51:00","Departure Dogs":"16"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.38","Speed":"5.49","Arrival Date":"03/07/2017","Arrival Time":"10:02:00","Arrival Dogs":"16","Elapsed Time":"0.42","Departure Date":"03/07/2017","Departure Time":"10:27:00","Departure Dogs":"16"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"12.27","Speed":"7.34","Arrival Date":"03/07/2017","Arrival Time":"10:04:00","Arrival Dogs":"15","Elapsed Time":"0.4","Departure Date":"03/07/2017","Departure Time":"10:28:00","Departure Dogs":"15"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"12.65","Speed":"7.11","Arrival Date":"03/07/2017","Arrival Time":"10:11:00","Arrival Dogs":"16","Elapsed Time":"0.35","Departure Date":"03/07/2017","Departure Time":"10:32:00","Departure Dogs":"15"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.07","Speed":"6.89","Arrival Date":"03/07/2017","Arrival Time":"10:12:00","Arrival Dogs":"16","Elapsed Time":"4.58","Departure Date":"03/07/2017","Departure Time":"14:47:00","Departure Dogs":"16"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.1","Speed":"6.38","Arrival Date":"03/07/2017","Arrival Time":"10:39:00","Arrival Dogs":"16","Elapsed Time":"4.8","Departure Date":"03/07/2017","Departure Time":"15:27:00","Departure Dogs":"15"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.7","Speed":"6.57","Arrival Date":"03/07/2017","Arrival Time":"11:07:00","Arrival Dogs":"16","Elapsed Time":"4.28","Departure Date":"03/07/2017","Departure Time":"15:24:00","Departure Dogs":"16"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"11.75","Speed":"7.66","Arrival Date":"03/07/2017","Arrival Time":"11:24:00","Arrival Dogs":"16","Elapsed Time":"5.47","Departure Date":"03/07/2017","Departure Time":"16:52:00","Departure Dogs":"16"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.43","Speed":"5.16","Arrival Date":"03/07/2017","Arrival Time":"11:42:00","Arrival Dogs":"16","Elapsed Time":"0.45","Departure Date":"03/07/2017","Departure Time":"12:09:00","Departure Dogs":"15"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.6","Speed":"6.62","Arrival Date":"03/07/2017","Arrival Time":"11:44:00","Arrival Dogs":"16","Elapsed Time":"0.3","Departure Date":"03/07/2017","Departure Time":"12:02:00","Departure Dogs":"15"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.4","Speed":"6.72","Arrival Date":"03/07/2017","Arrival Time":"11:46:00","Arrival Dogs":"16","Elapsed Time":"0.3","Departure Date":"03/07/2017","Departure Time":"12:04:00","Departure Dogs":"16"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.05","Speed":"6.41","Arrival Date":"03/07/2017","Arrival Time":"12:00:00","Arrival Dogs":"16","Elapsed Time":"5.62","Departure Date":"03/07/2017","Departure Time":"17:37:00","Departure Dogs":"16"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.1","Speed":"6.38","Arrival Date":"03/07/2017","Arrival Time":"12:12:00","Arrival Dogs":"16","Elapsed Time":"5","Departure Date":"03/07/2017","Departure Time":"17:12:00","Departure Dogs":"15"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.35","Speed":"6.74","Arrival Date":"03/07/2017","Arrival Time":"12:21:00","Arrival Dogs":"16","Elapsed Time":"4.23","Departure Date":"03/07/2017","Departure Time":"16:35:00","Departure Dogs":"16"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.27","Speed":"6.31","Arrival Date":"03/07/2017","Arrival Time":"12:23:00","Arrival Dogs":"16","Elapsed Time":"4.85","Departure Date":"03/07/2017","Departure Time":"17:14:00","Departure Dogs":"13"},
{"Number":"23","Name":"Mark Selland","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.35","Speed":"6.74","Arrival Date":"03/07/2017","Arrival Time":"12:24:00","Arrival Dogs":"16","Elapsed Time":"6.58","Departure Date":"03/07/2017","Departure Time":"18:59:00","Departure Dogs":"15"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.02","Speed":"6.42","Arrival Date":"03/07/2017","Arrival Time":"12:34:00","Arrival Dogs":"16","Elapsed Time":"4.17","Departure Date":"03/07/2017","Departure Time":"16:44:00","Departure Dogs":"16"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.17","Speed":"5.93","Arrival Date":"03/07/2017","Arrival Time":"12:43:00","Arrival Dogs":"16","Elapsed Time":"3.85","Departure Date":"03/07/2017","Departure Time":"16:34:00","Departure Dogs":"15"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.5","Speed":"6.21","Arrival Date":"03/07/2017","Arrival Time":"13:19:00","Arrival Dogs":"16","Elapsed Time":"0.5","Departure Date":"03/07/2017","Departure Time":"13:49:00","Departure Dogs":"16"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.5","Speed":"6.21","Arrival Date":"03/07/2017","Arrival Time":"13:29:00","Arrival Dogs":"16","Elapsed Time":"3.68","Departure Date":"03/07/2017","Departure Time":"17:10:00","Departure Dogs":"16"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.5","Speed":"5.81","Arrival Date":"03/07/2017","Arrival Time":"13:36:00","Arrival Dogs":"16","Elapsed Time":"4.92","Departure Date":"03/07/2017","Departure Time":"18:31:00","Departure Dogs":"15"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.35","Speed":"6.27","Arrival Date":"03/07/2017","Arrival Time":"13:37:00","Arrival Dogs":"16","Elapsed Time":"4.65","Departure Date":"03/07/2017","Departure Time":"18:16:00","Departure Dogs":"15"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.68","Speed":"6.13","Arrival Date":"03/07/2017","Arrival Time":"13:39:00","Arrival Dogs":"16","Elapsed Time":"5.27","Departure Date":"03/07/2017","Departure Time":"18:55:00","Departure Dogs":"15"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.1","Speed":"5.96","Arrival Date":"03/07/2017","Arrival Time":"13:58:00","Arrival Dogs":"16","Elapsed Time":"3.47","Departure Date":"03/07/2017","Departure Time":"17:26:00","Departure Dogs":"16"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.4","Speed":"6.25","Arrival Date":"03/07/2017","Arrival Time":"14:09:00","Arrival Dogs":"16","Elapsed Time":"6.12","Departure Date":"03/07/2017","Departure Time":"20:16:00","Departure Dogs":"15"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.23","Speed":"5.54","Arrival Date":"03/07/2017","Arrival Time":"14:29:00","Arrival Dogs":"15","Elapsed Time":"7","Departure Date":"03/07/2017","Departure Time":"21:29:00","Departure Dogs":"15"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.5","Speed":"6.21","Arrival Date":"03/07/2017","Arrival Time":"14:36:00","Arrival Dogs":"16","Elapsed Time":"0.32","Departure Date":"03/07/2017","Departure Time":"14:55:00","Departure Dogs":"16"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.68","Speed":"5.74","Arrival Date":"03/07/2017","Arrival Time":"14:53:00","Arrival Dogs":"16","Elapsed Time":"3.12","Departure Date":"03/07/2017","Departure Time":"18:00:00","Departure Dogs":"15"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.48","Speed":"6.21","Arrival Date":"03/07/2017","Arrival Time":"14:57:00","Arrival Dogs":"16","Elapsed Time":"6.67","Departure Date":"03/07/2017","Departure Time":"21:37:00","Departure Dogs":"15"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.62","Speed":"6.16","Arrival Date":"03/07/2017","Arrival Time":"14:59:00","Arrival Dogs":"16","Elapsed Time":"4.7","Departure Date":"03/07/2017","Departure Time":"19:41:00","Departure Dogs":"15"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"13.92","Speed":"6.47","Arrival Date":"03/07/2017","Arrival Time":"15:03:00","Arrival Dogs":"16","Elapsed Time":"11.05","Departure Date":"03/08/2017","Departure Time":"02:06:00","Departure Dogs":"15"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.85","Speed":"5.68","Arrival Date":"03/07/2017","Arrival Time":"15:50:00","Arrival Dogs":"16","Elapsed Time":"6.68","Departure Date":"03/07/2017","Departure Time":"22:31:00","Departure Dogs":"15"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.58","Speed":"5.78","Arrival Date":"03/07/2017","Arrival Time":"15:54:00","Arrival Dogs":"16","Elapsed Time":"6.87","Departure Date":"03/07/2017","Departure Time":"22:46:00","Departure Dogs":"16"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.62","Speed":"5.76","Arrival Date":"03/07/2017","Arrival Time":"16:11:00","Arrival Dogs":"16","Elapsed Time":"7.75","Departure Date":"03/07/2017","Departure Time":"23:56:00","Departure Dogs":"16"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.67","Speed":"5.4","Arrival Date":"03/07/2017","Arrival Time":"17:00:00","Arrival Dogs":"16","Elapsed Time":"0.57","Departure Date":"03/07/2017","Departure Time":"17:34:00","Departure Dogs":"14"},
{"Number":"68","Name":"Mark May","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"14.33","Speed":"6.28","Arrival Date":"03/07/2017","Arrival Time":"17:23:00","Arrival Dogs":"16","Elapsed Time":"8.7","Departure Date":"03/08/2017","Departure Time":"02:05:00","Departure Dogs":"16"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.37","Speed":"5.18","Arrival Date":"03/07/2017","Arrival Time":"17:28:00","Arrival Dogs":"16","Elapsed Time":"0.42","Departure Date":"03/07/2017","Departure Time":"17:53:00","Departure Dogs":"16"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.35","Speed":"5.5","Arrival Date":"03/07/2017","Arrival Time":"17:37:00","Arrival Dogs":"16","Elapsed Time":"7.85","Departure Date":"03/08/2017","Departure Time":"01:28:00","Departure Dogs":"16"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.82","Speed":"5.69","Arrival Date":"03/07/2017","Arrival Time":"17:52:00","Arrival Dogs":"15","Elapsed Time":"7.62","Departure Date":"03/08/2017","Departure Time":"01:29:00","Departure Dogs":"15"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"15.93","Speed":"5.65","Arrival Date":"03/07/2017","Arrival Time":"18:05:00","Arrival Dogs":"16","Elapsed Time":"8.52","Departure Date":"03/08/2017","Departure Time":"02:36:00","Departure Dogs":"15"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.02","Speed":"5.29","Arrival Date":"03/07/2017","Arrival Time":"18:11:00","Arrival Dogs":"16","Elapsed Time":"9.22","Departure Date":"03/08/2017","Departure Time":"03:24:00","Departure Dogs":"15"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"16.3","Speed":"5.52","Arrival Date":"03/07/2017","Arrival Time":"18:18:00","Arrival Dogs":"16","Elapsed Time":"8.72","Departure Date":"03/08/2017","Departure Time":"03:01:00","Departure Dogs":"14"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.27","Speed":"5.21","Arrival Date":"03/07/2017","Arrival Time":"18:41:00","Arrival Dogs":"15","Elapsed Time":"5.82","Departure Date":"03/08/2017","Departure Time":"00:30:00","Departure Dogs":"15"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.18","Speed":"5.24","Arrival Date":"03/07/2017","Arrival Time":"19:19:00","Arrival Dogs":"15","Elapsed Time":"6.77","Departure Date":"03/08/2017","Departure Time":"02:05:00","Departure Dogs":"15"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"18.42","Speed":"4.89","Arrival Date":"03/07/2017","Arrival Time":"19:25:00","Arrival Dogs":"16","Elapsed Time":"8.27","Departure Date":"03/08/2017","Departure Time":"03:41:00","Departure Dogs":"16"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"17.5","Speed":"5.14","Arrival Date":"03/07/2017","Arrival Time":"20:41:00","Arrival Dogs":"16","Elapsed Time":"7.95","Departure Date":"03/08/2017","Departure Time":"04:38:00","Departure Dogs":"16"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"26.72","Speed":"3.37","Arrival Date":"03/07/2017","Arrival Time":"20:49:00","Arrival Dogs":"16","Elapsed Time":"7.12","Departure Date":"03/08/2017","Departure Time":"03:56:00","Departure Dogs":"16"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Manley","Latitude":"65.0317","Longitude":"-150.6352","Distance":"90","Time":"18.83","Speed":"4.78","Arrival Date":"03/07/2017","Arrival Time":"21:10:00","Arrival Dogs":"16","Elapsed Time":"9.98","Departure Date":"03/08/2017","Departure Time":"07:09:00","Departure Dogs":"15"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"6.97","Speed":"9.47","Arrival Date":"03/07/2017","Arrival Time":"18:44:00","Arrival Dogs":"16","Elapsed Time":"6.93","Departure Date":"03/08/2017","Departure Time":"01:40:00","Departure Dogs":"16"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.75","Speed":"8.52","Arrival Date":"03/07/2017","Arrival Time":"19:20:00","Arrival Dogs":"16","Elapsed Time":"8.02","Departure Date":"03/08/2017","Departure Time":"03:21:00","Departure Dogs":"16"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.8","Speed":"8.46","Arrival Date":"03/07/2017","Arrival Time":"20:00:00","Arrival Dogs":"16","Elapsed Time":"5.32","Departure Date":"03/08/2017","Departure Time":"01:19:00","Departure Dogs":"16"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.63","Speed":"8.65","Arrival Date":"03/07/2017","Arrival Time":"20:01:00","Arrival Dogs":"16","Elapsed Time":"8","Departure Date":"03/08/2017","Departure Time":"04:01:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.35","Speed":"7.9","Arrival Date":"03/07/2017","Arrival Time":"20:08:00","Arrival Dogs":"16","Elapsed Time":"4.98","Departure Date":"03/08/2017","Departure Time":"01:07:00","Departure Dogs":"16"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.95","Speed":"8.3","Arrival Date":"03/07/2017","Arrival Time":"20:11:00","Arrival Dogs":"16","Elapsed Time":"4.93","Departure Date":"03/08/2017","Departure Time":"01:07:00","Departure Dogs":"16"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.07","Speed":"5.96","Arrival Date":"03/07/2017","Arrival Time":"20:33:00","Arrival Dogs":"16","Elapsed Time":"4.57","Departure Date":"03/08/2017","Departure Time":"01:07:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.78","Speed":"5.6","Arrival Date":"03/07/2017","Arrival Time":"20:56:00","Arrival Dogs":"16","Elapsed Time":"5.22","Departure Date":"03/08/2017","Departure Time":"02:09:00","Departure Dogs":"14"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.9","Speed":"5.55","Arrival Date":"03/07/2017","Arrival Time":"21:00:00","Arrival Dogs":"16","Elapsed Time":"5.42","Departure Date":"03/08/2017","Departure Time":"02:25:00","Departure Dogs":"16"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.53","Speed":"5.72","Arrival Date":"03/07/2017","Arrival Time":"21:07:00","Arrival Dogs":"14","Elapsed Time":"8.03","Departure Date":"03/08/2017","Departure Time":"05:09:00","Departure Dogs":"14"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"9.13","Speed":"7.23","Arrival Date":"03/07/2017","Arrival Time":"21:19:00","Arrival Dogs":"15","Elapsed Time":"8","Departure Date":"03/08/2017","Departure Time":"05:19:00","Departure Dogs":"15"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.65","Speed":"5.67","Arrival Date":"03/07/2017","Arrival Time":"21:20:00","Arrival Dogs":"14","Elapsed Time":"8.22","Departure Date":"03/08/2017","Departure Time":"05:33:00","Departure Dogs":"13"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.87","Speed":"5.56","Arrival Date":"03/07/2017","Arrival Time":"21:22:00","Arrival Dogs":"16","Elapsed Time":"5.03","Departure Date":"03/08/2017","Departure Time":"02:24:00","Departure Dogs":"16"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.25","Speed":"8","Arrival Date":"03/07/2017","Arrival Time":"21:45:00","Arrival Dogs":"16","Elapsed Time":"4.72","Departure Date":"03/08/2017","Departure Time":"02:28:00","Departure Dogs":"15"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.58","Speed":"5.7","Arrival Date":"03/07/2017","Arrival Time":"21:45:00","Arrival Dogs":"16","Elapsed Time":"4.98","Departure Date":"03/08/2017","Departure Time":"02:44:00","Departure Dogs":"16"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.88","Speed":"8.37","Arrival Date":"03/07/2017","Arrival Time":"21:51:00","Arrival Dogs":"15","Elapsed Time":"8.2","Departure Date":"03/08/2017","Departure Time":"06:03:00","Departure Dogs":"15"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.7","Speed":"8.57","Arrival Date":"03/07/2017","Arrival Time":"21:54:00","Arrival Dogs":"16","Elapsed Time":"8.38","Departure Date":"03/08/2017","Departure Time":"06:17:00","Departure Dogs":"16"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.45","Speed":"5.76","Arrival Date":"03/07/2017","Arrival Time":"21:55:00","Arrival Dogs":"15","Elapsed Time":"8.2","Departure Date":"03/08/2017","Departure Time":"06:07:00","Departure Dogs":"14"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.78","Speed":"5.6","Arrival Date":"03/07/2017","Arrival Time":"22:14:00","Arrival Dogs":"16","Elapsed Time":"5.1","Departure Date":"03/08/2017","Departure Time":"03:20:00","Departure Dogs":"16"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.2","Speed":"8.05","Arrival Date":"03/07/2017","Arrival Time":"22:15:00","Arrival Dogs":"12","Elapsed Time":"5.83","Departure Date":"03/08/2017","Departure Time":"04:05:00","Departure Dogs":"12"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.95","Speed":"5.52","Arrival Date":"03/07/2017","Arrival Time":"22:15:00","Arrival Dogs":"15","Elapsed Time":"8.38","Departure Date":"03/08/2017","Departure Time":"06:38:00","Departure Dogs":"15"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.22","Speed":"6.46","Arrival Date":"03/07/2017","Arrival Time":"22:17:00","Arrival Dogs":"16","Elapsed Time":"10.05","Departure Date":"03/08/2017","Departure Time":"08:20:00","Departure Dogs":"16"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.6","Speed":"5.24","Arrival Date":"03/07/2017","Arrival Time":"22:20:00","Arrival Dogs":"14","Elapsed Time":"5.12","Departure Date":"03/08/2017","Departure Time":"03:27:00","Departure Dogs":"13"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.97","Speed":"8.28","Arrival Date":"03/07/2017","Arrival Time":"22:45:00","Arrival Dogs":"16","Elapsed Time":"8.02","Departure Date":"03/08/2017","Departure Time":"06:46:00","Departure Dogs":"14"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.12","Speed":"5.94","Arrival Date":"03/07/2017","Arrival Time":"22:46:00","Arrival Dogs":"16","Elapsed Time":"8.32","Departure Date":"03/08/2017","Departure Time":"07:05:00","Departure Dogs":"14"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.92","Speed":"8.34","Arrival Date":"03/07/2017","Arrival Time":"22:57:00","Arrival Dogs":"16","Elapsed Time":"8.53","Departure Date":"03/08/2017","Departure Time":"07:29:00","Departure Dogs":"14"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.67","Speed":"8.61","Arrival Date":"03/07/2017","Arrival Time":"23:07:00","Arrival Dogs":"15","Elapsed Time":"8","Departure Date":"03/08/2017","Departure Time":"07:07:00","Departure Dogs":"15"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.7","Speed":"5.2","Arrival Date":"03/07/2017","Arrival Time":"23:14:00","Arrival Dogs":"15","Elapsed Time":"6.02","Departure Date":"03/08/2017","Departure Time":"05:15:00","Departure Dogs":"15"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.57","Speed":"5.71","Arrival Date":"03/07/2017","Arrival Time":"23:43:00","Arrival Dogs":"15","Elapsed Time":"7.55","Departure Date":"03/08/2017","Departure Time":"07:16:00","Departure Dogs":"15"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.8","Speed":"5.59","Arrival Date":"03/07/2017","Arrival Time":"23:50:00","Arrival Dogs":"15","Elapsed Time":"4.47","Departure Date":"03/08/2017","Departure Time":"04:18:00","Departure Dogs":"14"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.87","Speed":"8.39","Arrival Date":"03/08/2017","Arrival Time":"01:02:00","Arrival Dogs":"16","Elapsed Time":"9.85","Departure Date":"03/08/2017","Departure Time":"10:53:00","Departure Dogs":"15"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.65","Speed":"7.63","Arrival Date":"03/08/2017","Arrival Time":"01:14:00","Arrival Dogs":"16","Elapsed Time":"8.08","Departure Date":"03/08/2017","Departure Time":"09:19:00","Departure Dogs":"16"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.7","Speed":"7.59","Arrival Date":"03/08/2017","Arrival Time":"01:34:00","Arrival Dogs":"16","Elapsed Time":"5.38","Departure Date":"03/08/2017","Departure Time":"06:57:00","Departure Dogs":"15"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.27","Speed":"5.38","Arrival Date":"03/08/2017","Arrival Time":"02:05:00","Arrival Dogs":"16","Elapsed Time":"8","Departure Date":"03/08/2017","Departure Time":"10:05:00","Departure Dogs":"16"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.77","Speed":"7.53","Arrival Date":"03/08/2017","Arrival Time":"02:37:00","Arrival Dogs":"16","Elapsed Time":"13.97","Departure Date":"03/08/2017","Departure Time":"16:35:00","Departure Dogs":"15"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.02","Speed":"6.59","Arrival Date":"03/08/2017","Arrival Time":"02:45:00","Arrival Dogs":"16","Elapsed Time":"7.25","Departure Date":"03/08/2017","Departure Time":"10:00:00","Departure Dogs":"15"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.88","Speed":"5.55","Arrival Date":"03/08/2017","Arrival Time":"03:17:00","Arrival Dogs":"16","Elapsed Time":"4.68","Departure Date":"03/08/2017","Departure Time":"07:58:00","Departure Dogs":"16"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.2","Speed":"5.89","Arrival Date":"03/08/2017","Arrival Time":"03:46:00","Arrival Dogs":"15","Elapsed Time":"8.13","Departure Date":"03/08/2017","Departure Time":"11:54:00","Departure Dogs":"11"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.48","Speed":"6.3","Arrival Date":"03/08/2017","Arrival Time":"03:55:00","Arrival Dogs":"16","Elapsed Time":"8.02","Departure Date":"03/08/2017","Departure Time":"11:56:00","Departure Dogs":"13"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.88","Speed":"8.37","Arrival Date":"03/08/2017","Arrival Time":"04:09:00","Arrival Dogs":"15","Elapsed Time":"12.32","Departure Date":"03/08/2017","Departure Time":"16:28:00","Departure Dogs":"13"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.35","Speed":"4.94","Arrival Date":"03/08/2017","Arrival Time":"04:16:00","Arrival Dogs":"16","Elapsed Time":"5.57","Departure Date":"03/08/2017","Departure Time":"09:50:00","Departure Dogs":"16"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.7","Speed":"6.17","Arrival Date":"03/08/2017","Arrival Time":"04:42:00","Arrival Dogs":"15","Elapsed Time":"9.88","Departure Date":"03/08/2017","Departure Time":"14:35:00","Departure Dogs":"15"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.95","Speed":"5.52","Arrival Date":"03/08/2017","Arrival Time":"05:09:00","Arrival Dogs":"15","Elapsed Time":"6.48","Departure Date":"03/08/2017","Departure Time":"11:38:00","Departure Dogs":"15"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.95","Speed":"5.52","Arrival Date":"03/08/2017","Arrival Time":"05:11:00","Arrival Dogs":"13","Elapsed Time":"6.43","Departure Date":"03/08/2017","Departure Time":"11:37:00","Departure Dogs":"12"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.12","Speed":"8.13","Arrival Date":"03/08/2017","Arrival Time":"05:44:00","Arrival Dogs":"15","Elapsed Time":"8.78","Departure Date":"03/08/2017","Departure Time":"14:31:00","Departure Dogs":"13"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.15","Speed":"5.02","Arrival Date":"03/08/2017","Arrival Time":"06:19:00","Arrival Dogs":"16","Elapsed Time":"0.38","Departure Date":"03/08/2017","Departure Time":"06:42:00","Departure Dogs":"16"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.23","Speed":"8.02","Arrival Date":"03/08/2017","Arrival Time":"06:45:00","Arrival Dogs":"15","Elapsed Time":"8","Departure Date":"03/08/2017","Departure Time":"14:45:00","Departure Dogs":"15"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8","Speed":"8.25","Arrival Date":"03/08/2017","Arrival Time":"06:46:00","Arrival Dogs":"16","Elapsed Time":"10.67","Departure Date":"03/08/2017","Departure Time":"17:26:00","Departure Dogs":"16"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.68","Speed":"5.2","Arrival Date":"03/08/2017","Arrival Time":"06:57:00","Arrival Dogs":"15","Elapsed Time":"0.92","Departure Date":"03/08/2017","Departure Time":"07:52:00","Departure Dogs":"15"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.63","Speed":"4.84","Arrival Date":"03/08/2017","Arrival Time":"07:15:00","Arrival Dogs":"16","Elapsed Time":"6.27","Departure Date":"03/08/2017","Departure Time":"13:31:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.43","Speed":"4.91","Arrival Date":"03/08/2017","Arrival Time":"07:19:00","Arrival Dogs":"16","Elapsed Time":"5.08","Departure Date":"03/08/2017","Departure Time":"12:24:00","Departure Dogs":"15"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.92","Speed":"8.34","Arrival Date":"03/08/2017","Arrival Time":"07:51:00","Arrival Dogs":"16","Elapsed Time":"10.93","Departure Date":"03/08/2017","Departure Time":"18:47:00","Departure Dogs":"15"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"14.38","Speed":"4.59","Arrival Date":"03/08/2017","Arrival Time":"07:57:00","Arrival Dogs":"14","Elapsed Time":"9.28","Departure Date":"03/08/2017","Departure Time":"17:14:00","Departure Dogs":"14"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.43","Speed":"5.31","Arrival Date":"03/08/2017","Arrival Time":"08:07:00","Arrival Dogs":"15","Elapsed Time":"6.9","Departure Date":"03/08/2017","Departure Time":"15:01:00","Departure Dogs":"15"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.48","Speed":"4.89","Arrival Date":"03/08/2017","Arrival Time":"08:24:00","Arrival Dogs":"15","Elapsed Time":"6.07","Departure Date":"03/08/2017","Departure Time":"14:28:00","Departure Dogs":"15"},
{"Number":"23","Name":"Mark Selland","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.62","Speed":"4.85","Arrival Date":"03/08/2017","Arrival Time":"08:36:00","Arrival Dogs":"15","Elapsed Time":"9.98","Departure Date":"03/08/2017","Departure Time":"18:35:00","Departure Dogs":"14"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"14.37","Speed":"4.59","Arrival Date":"03/08/2017","Arrival Time":"08:53:00","Arrival Dogs":"15","Elapsed Time":"0.28","Departure Date":"03/08/2017","Departure Time":"09:10:00","Departure Dogs":"14"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"7.95","Speed":"8.3","Arrival Date":"03/08/2017","Arrival Time":"09:25:00","Arrival Dogs":"16","Elapsed Time":"10.83","Departure Date":"03/08/2017","Departure Time":"20:15:00","Departure Dogs":"16"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.27","Speed":"7.98","Arrival Date":"03/08/2017","Arrival Time":"10:22:00","Arrival Dogs":"15","Elapsed Time":"11.73","Departure Date":"03/08/2017","Departure Time":"22:06:00","Departure Dogs":"15"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.27","Speed":"6.43","Arrival Date":"03/08/2017","Arrival Time":"10:46:00","Arrival Dogs":"15","Elapsed Time":"9.3","Departure Date":"03/08/2017","Departure Time":"20:04:00","Departure Dogs":"13"},
{"Number":"68","Name":"Mark May","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"9.5","Speed":"6.95","Arrival Date":"03/08/2017","Arrival Time":"11:35:00","Arrival Dogs":"16","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"14.68","Speed":"4.49","Arrival Date":"03/08/2017","Arrival Time":"12:10:00","Arrival Dogs":"15","Elapsed Time":"7.43","Departure Date":"03/08/2017","Departure Time":"19:36:00","Departure Dogs":"14"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"8.8","Speed":"7.5","Arrival Date":"03/08/2017","Arrival Time":"12:12:00","Arrival Dogs":"15","Elapsed Time":"10.68","Departure Date":"03/08/2017","Departure Time":"22:53:00","Departure Dogs":"14"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.32","Speed":"5.83","Arrival Date":"03/08/2017","Arrival Time":"12:48:00","Arrival Dogs":"15","Elapsed Time":"9.7","Departure Date":"03/08/2017","Departure Time":"22:30:00","Departure Dogs":"13"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.68","Speed":"5.65","Arrival Date":"03/08/2017","Arrival Time":"14:42:00","Arrival Dogs":"14","Elapsed Time":"8.05","Departure Date":"03/08/2017","Departure Time":"22:45:00","Departure Dogs":"14"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"11.1","Speed":"5.95","Arrival Date":"03/08/2017","Arrival Time":"14:47:00","Arrival Dogs":"16","Elapsed Time":"12.6","Departure Date":"03/09/2017","Departure Time":"03:23:00","Departure Dogs":"15"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"10.87","Speed":"6.07","Arrival Date":"03/08/2017","Arrival Time":"14:48:00","Arrival Dogs":"16","Elapsed Time":"15.55","Departure Date":"03/09/2017","Departure Time":"06:21:00","Departure Dogs":"12"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.3","Speed":"5.37","Arrival Date":"03/08/2017","Arrival Time":"14:54:00","Arrival Dogs":"15","Elapsed Time":"7.35","Departure Date":"03/08/2017","Departure Time":"22:15:00","Departure Dogs":"14"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"13.17","Speed":"5.01","Arrival Date":"03/08/2017","Arrival Time":"15:15:00","Arrival Dogs":"15","Elapsed Time":"5.2","Departure Date":"03/08/2017","Departure Time":"20:27:00","Departure Dogs":"15"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"14.17","Speed":"4.66","Arrival Date":"03/08/2017","Arrival Time":"18:48:00","Arrival Dogs":"16","Elapsed Time":"9.55","Departure Date":"03/09/2017","Departure Time":"04:21:00","Departure Dogs":"15"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Tanana","Latitude":"65.201","Longitude":"-152.0816","Distance":"66","Time":"12.18","Speed":"5.42","Arrival Date":"03/08/2017","Arrival Time":"19:20:00","Arrival Dogs":"15","Elapsed Time":"8.02","Departure Date":"03/09/2017","Departure Time":"03:21:00","Departure Dogs":"15"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"17.55","Speed":"6.78","Arrival Date":"03/08/2017","Arrival Time":"18:40:00","Arrival Dogs":"16","Elapsed Time":"25.47","Departure Date":"03/09/2017","Departure Time":"20:08:00","Departure Dogs":"15"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"18.32","Speed":"6.5","Arrival Date":"03/08/2017","Arrival Time":"19:26:00","Arrival Dogs":"16","Elapsed Time":"25.83","Departure Date":"03/09/2017","Departure Time":"21:16:00","Departure Dogs":"14"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"18.68","Speed":"6.37","Arrival Date":"03/08/2017","Arrival Time":"20:00:00","Arrival Dogs":"16","Elapsed Time":"4.02","Departure Date":"03/09/2017","Departure Time":"00:01:00","Departure Dogs":"16"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.43","Speed":"6.12","Arrival Date":"03/08/2017","Arrival Time":"21:06:00","Arrival Dogs":"16","Elapsed Time":"4.88","Departure Date":"03/09/2017","Departure Time":"01:59:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.3","Speed":"6.17","Arrival Date":"03/08/2017","Arrival Time":"21:27:00","Arrival Dogs":"14","Elapsed Time":"3.08","Departure Date":"03/09/2017","Departure Time":"00:32:00","Departure Dogs":"14"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.38","Speed":"5.84","Arrival Date":"03/08/2017","Arrival Time":"22:47:00","Arrival Dogs":"16","Elapsed Time":"8.05","Departure Date":"03/09/2017","Departure Time":"06:50:00","Departure Dogs":"15"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.68","Speed":"6.05","Arrival Date":"03/08/2017","Arrival Time":"23:01:00","Arrival Dogs":"16","Elapsed Time":"8","Departure Date":"03/09/2017","Departure Time":"07:01:00","Departure Dogs":"16"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.02","Speed":"5.4","Arrival Date":"03/08/2017","Arrival Time":"23:08:00","Arrival Dogs":"16","Elapsed Time":"3.63","Departure Date":"03/09/2017","Departure Time":"02:46:00","Departure Dogs":"15"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.97","Speed":"5.68","Arrival Date":"03/08/2017","Arrival Time":"23:23:00","Arrival Dogs":"16","Elapsed Time":"8.28","Departure Date":"03/09/2017","Departure Time":"07:40:00","Departure Dogs":"15"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.07","Speed":"5.93","Arrival Date":"03/08/2017","Arrival Time":"23:31:00","Arrival Dogs":"13","Elapsed Time":"25.73","Departure Date":"03/10/2017","Departure Time":"01:15:00","Departure Dogs":"13"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.6","Speed":"5.51","Arrival Date":"03/09/2017","Arrival Time":"00:04:00","Arrival Dogs":"15","Elapsed Time":"8.03","Departure Date":"03/09/2017","Departure Time":"08:06:00","Departure Dogs":"15"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.47","Speed":"5.81","Arrival Date":"03/09/2017","Arrival Time":"00:33:00","Arrival Dogs":"12","Elapsed Time":"8.22","Departure Date":"03/09/2017","Departure Time":"08:46:00","Departure Dogs":"11"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.87","Speed":"5.99","Arrival Date":"03/09/2017","Arrival Time":"01:01:00","Arrival Dogs":"14","Elapsed Time":"4.03","Departure Date":"03/09/2017","Departure Time":"05:03:00","Departure Dogs":"14"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.05","Speed":"5.65","Arrival Date":"03/09/2017","Arrival Time":"01:04:00","Arrival Dogs":"16","Elapsed Time":"3.62","Departure Date":"03/09/2017","Departure Time":"04:41:00","Departure Dogs":"15"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.75","Speed":"5.47","Arrival Date":"03/09/2017","Arrival Time":"01:06:00","Arrival Dogs":"16","Elapsed Time":"25.93","Departure Date":"03/10/2017","Departure Time":"03:02:00","Departure Dogs":"16"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.52","Speed":"5.28","Arrival Date":"03/09/2017","Arrival Time":"01:15:00","Arrival Dogs":"16","Elapsed Time":"8","Departure Date":"03/09/2017","Departure Time":"09:15:00","Departure Dogs":"15"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.73","Speed":"6.03","Arrival Date":"03/09/2017","Arrival Time":"02:01:00","Arrival Dogs":"16","Elapsed Time":"6.35","Departure Date":"03/09/2017","Departure Time":"08:22:00","Departure Dogs":"14"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.2","Speed":"5.61","Arrival Date":"03/09/2017","Arrival Time":"02:27:00","Arrival Dogs":"15","Elapsed Time":"8.1","Departure Date":"03/09/2017","Departure Time":"10:33:00","Departure Dogs":"13"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.53","Speed":"6.09","Arrival Date":"03/09/2017","Arrival Time":"02:29:00","Arrival Dogs":"15","Elapsed Time":"5.5","Departure Date":"03/09/2017","Departure Time":"07:59:00","Departure Dogs":"15"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.32","Speed":"5.33","Arrival Date":"03/09/2017","Arrival Time":"02:37:00","Arrival Dogs":"14","Elapsed Time":"8","Departure Date":"03/09/2017","Departure Time":"10:37:00","Departure Dogs":"14"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.58","Speed":"5.78","Arrival Date":"03/09/2017","Arrival Time":"02:42:00","Arrival Dogs":"14","Elapsed Time":"0","Departure Date":"03/09/2017","Departure Time":"02:42:00","Departure Dogs":"14"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"19.8","Speed":"6.01","Arrival Date":"03/09/2017","Arrival Time":"02:55:00","Arrival Dogs":"15","Elapsed Time":"6.18","Departure Date":"03/09/2017","Departure Time":"09:06:00","Departure Dogs":"14"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.68","Speed":"5.49","Arrival Date":"03/09/2017","Arrival Time":"03:00:00","Arrival Dogs":"15","Elapsed Time":"2.8","Departure Date":"03/09/2017","Departure Time":"05:48:00","Departure Dogs":"15"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.33","Speed":"5.85","Arrival Date":"03/09/2017","Arrival Time":"03:06:00","Arrival Dogs":"14","Elapsed Time":"4.43","Departure Date":"03/09/2017","Departure Time":"07:32:00","Departure Dogs":"14"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.08","Speed":"5.93","Arrival Date":"03/09/2017","Arrival Time":"03:10:00","Arrival Dogs":"14","Elapsed Time":"5.6","Departure Date":"03/09/2017","Departure Time":"08:46:00","Departure Dogs":"13"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.3","Speed":"5.59","Arrival Date":"03/09/2017","Arrival Time":"03:21:00","Arrival Dogs":"15","Elapsed Time":"5.38","Departure Date":"03/09/2017","Departure Time":"08:44:00","Departure Dogs":"14"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.83","Speed":"5.71","Arrival Date":"03/09/2017","Arrival Time":"03:28:00","Arrival Dogs":"15","Elapsed Time":"5.95","Departure Date":"03/09/2017","Departure Time":"09:25:00","Departure Dogs":"14"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.67","Speed":"5.76","Arrival Date":"03/09/2017","Arrival Time":"04:09:00","Arrival Dogs":"14","Elapsed Time":"7.47","Departure Date":"03/09/2017","Departure Time":"11:37:00","Departure Dogs":"14"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.68","Speed":"5.49","Arrival Date":"03/09/2017","Arrival Time":"04:23:00","Arrival Dogs":"16","Elapsed Time":"24.55","Departure Date":"03/10/2017","Departure Time":"04:56:00","Departure Dogs":"16"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.15","Speed":"5.63","Arrival Date":"03/09/2017","Arrival Time":"04:25:00","Arrival Dogs":"15","Elapsed Time":"4.87","Departure Date":"03/09/2017","Departure Time":"09:17:00","Departure Dogs":"12"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.38","Speed":"5.84","Arrival Date":"03/09/2017","Arrival Time":"04:43:00","Arrival Dogs":"16","Elapsed Time":"6.3","Departure Date":"03/09/2017","Departure Time":"11:01:00","Departure Dogs":"16"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.12","Speed":"5.64","Arrival Date":"03/09/2017","Arrival Time":"05:05:00","Arrival Dogs":"16","Elapsed Time":"25.53","Departure Date":"03/10/2017","Departure Time":"06:37:00","Departure Dogs":"15"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.6","Speed":"4.84","Arrival Date":"03/09/2017","Arrival Time":"06:09:00","Arrival Dogs":"13","Elapsed Time":"3.27","Departure Date":"03/09/2017","Departure Time":"09:25:00","Departure Dogs":"12"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.32","Speed":"5.58","Arrival Date":"03/09/2017","Arrival Time":"06:38:00","Arrival Dogs":"16","Elapsed Time":"6.13","Departure Date":"03/09/2017","Departure Time":"12:46:00","Departure Dogs":"16"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.28","Speed":"5.59","Arrival Date":"03/09/2017","Arrival Time":"07:07:00","Arrival Dogs":"16","Elapsed Time":"25","Departure Date":"03/10/2017","Departure Time":"08:07:00","Departure Dogs":"16"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"25.32","Speed":"4.7","Arrival Date":"03/09/2017","Arrival Time":"09:11:00","Arrival Dogs":"15","Elapsed Time":"6.23","Departure Date":"03/09/2017","Departure Time":"15:25:00","Departure Dogs":"15"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.7","Speed":"5.24","Arrival Date":"03/09/2017","Arrival Time":"09:35:00","Arrival Dogs":"15","Elapsed Time":"24.77","Departure Date":"03/10/2017","Departure Time":"10:21:00","Departure Dogs":"14"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.68","Speed":"5.25","Arrival Date":"03/09/2017","Arrival Time":"10:18:00","Arrival Dogs":"12","Elapsed Time":"5.52","Departure Date":"03/09/2017","Departure Time":"15:49:00","Departure Dogs":"12"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.68","Speed":"5.25","Arrival Date":"03/09/2017","Arrival Time":"10:19:00","Arrival Dogs":"15","Elapsed Time":"5.48","Departure Date":"03/09/2017","Departure Time":"15:48:00","Departure Dogs":"15"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.28","Speed":"4.9","Arrival Date":"03/09/2017","Arrival Time":"10:22:00","Arrival Dogs":"16","Elapsed Time":"6.25","Departure Date":"03/09/2017","Departure Time":"16:37:00","Departure Dogs":"16"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.6","Speed":"5.51","Arrival Date":"03/09/2017","Arrival Time":"11:07:00","Arrival Dogs":"15","Elapsed Time":"8","Departure Date":"03/09/2017","Departure Time":"19:07:00","Departure Dogs":"15"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"26","Speed":"4.58","Arrival Date":"03/09/2017","Arrival Time":"11:10:00","Arrival Dogs":"14","Elapsed Time":"8.35","Departure Date":"03/09/2017","Departure Time":"19:31:00","Departure Dogs":"14"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.9","Speed":"4.98","Arrival Date":"03/09/2017","Arrival Time":"11:50:00","Arrival Dogs":"13","Elapsed Time":"5.52","Departure Date":"03/09/2017","Departure Time":"17:21:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.15","Speed":"5.63","Arrival Date":"03/09/2017","Arrival Time":"12:10:00","Arrival Dogs":"15","Elapsed Time":"7.13","Departure Date":"03/09/2017","Departure Time":"19:18:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.8","Speed":"5","Arrival Date":"03/09/2017","Arrival Time":"12:12:00","Arrival Dogs":"15","Elapsed Time":"4.85","Departure Date":"03/09/2017","Departure Time":"17:03:00","Departure Dogs":"15"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.27","Speed":"5.87","Arrival Date":"03/09/2017","Arrival Time":"12:51:00","Arrival Dogs":"15","Elapsed Time":"8.17","Departure Date":"03/09/2017","Departure Time":"21:01:00","Departure Dogs":"15"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.18","Speed":"5.13","Arrival Date":"03/09/2017","Arrival Time":"13:56:00","Arrival Dogs":"15","Elapsed Time":"6.33","Departure Date":"03/09/2017","Departure Time":"20:16:00","Departure Dogs":"15"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.03","Speed":"5.4","Arrival Date":"03/09/2017","Arrival Time":"14:30:00","Arrival Dogs":"13","Elapsed Time":"8.72","Departure Date":"03/09/2017","Departure Time":"23:13:00","Departure Dogs":"11"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.4","Speed":"4.88","Arrival Date":"03/09/2017","Arrival Time":"14:55:00","Arrival Dogs":"13","Elapsed Time":"24.7","Departure Date":"03/10/2017","Departure Time":"15:37:00","Departure Dogs":"12"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.92","Speed":"4.78","Arrival Date":"03/09/2017","Arrival Time":"15:30:00","Arrival Dogs":"15","Elapsed Time":"25.12","Departure Date":"03/10/2017","Departure Time":"16:37:00","Departure Dogs":"15"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"27.6","Speed":"4.31","Arrival Date":"03/09/2017","Arrival Time":"15:30:00","Arrival Dogs":"11","Elapsed Time":"39.07","Departure Date":"03/11/2017","Departure Time":"06:34:00","Departure Dogs":"10"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"29.55","Speed":"4.03","Arrival Date":"03/09/2017","Arrival Time":"15:33:00","Arrival Dogs":"15","Elapsed Time":"6.45","Departure Date":"03/09/2017","Departure Time":"22:00:00","Departure Dogs":"14"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"22.7","Speed":"5.24","Arrival Date":"03/09/2017","Arrival Time":"16:08:00","Arrival Dogs":"16","Elapsed Time":"9.67","Departure Date":"03/10/2017","Departure Time":"01:48:00","Departure Dogs":"16"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.23","Speed":"5.12","Arrival Date":"03/09/2017","Arrival Time":"16:28:00","Arrival Dogs":"14","Elapsed Time":"8.75","Departure Date":"03/10/2017","Departure Time":"01:13:00","Departure Dogs":"14"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.93","Speed":"5.43","Arrival Date":"03/09/2017","Arrival Time":"16:43:00","Arrival Dogs":"15","Elapsed Time":"9.03","Departure Date":"03/10/2017","Departure Time":"01:45:00","Departure Dogs":"15"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"20.97","Speed":"5.68","Arrival Date":"03/09/2017","Arrival Time":"17:13:00","Arrival Dogs":"16","Elapsed Time":"8.72","Departure Date":"03/10/2017","Departure Time":"01:56:00","Departure Dogs":"16"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"21.45","Speed":"5.55","Arrival Date":"03/09/2017","Arrival Time":"17:31:00","Arrival Dogs":"13","Elapsed Time":"8.15","Departure Date":"03/10/2017","Departure Time":"01:40:00","Departure Dogs":"13"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"27.15","Speed":"4.38","Arrival Date":"03/09/2017","Arrival Time":"17:37:00","Arrival Dogs":"15","Elapsed Time":"24.63","Departure Date":"03/10/2017","Departure Time":"18:15:00","Departure Dogs":"15"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.3","Speed":"5.11","Arrival Date":"03/09/2017","Arrival Time":"18:54:00","Arrival Dogs":"14","Elapsed Time":"8.77","Departure Date":"03/10/2017","Departure Time":"03:40:00","Departure Dogs":"14"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"23.57","Speed":"5.05","Arrival Date":"03/09/2017","Arrival Time":"20:01:00","Arrival Dogs":"15","Elapsed Time":"8.33","Departure Date":"03/10/2017","Departure Time":"04:21:00","Departure Dogs":"15"},
{"Number":"23","Name":"Mark Selland","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"26.58","Speed":"4.48","Arrival Date":"03/09/2017","Arrival Time":"21:10:00","Arrival Dogs":"14","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.93","Speed":"4.77","Arrival Date":"03/09/2017","Arrival Time":"23:02:00","Arrival Dogs":"15","Elapsed Time":"7.23","Departure Date":"03/10/2017","Departure Time":"06:16:00","Departure Dogs":"14"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.98","Speed":"4.76","Arrival Date":"03/09/2017","Arrival Time":"23:29:00","Arrival Dogs":"13","Elapsed Time":"6.4","Departure Date":"03/10/2017","Departure Time":"05:53:00","Departure Dogs":"13"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"24.73","Speed":"4.81","Arrival Date":"03/09/2017","Arrival Time":"23:37:00","Arrival Dogs":"14","Elapsed Time":"7.72","Departure Date":"03/10/2017","Departure Time":"07:20:00","Departure Dogs":"14"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"25.47","Speed":"4.67","Arrival Date":"03/09/2017","Arrival Time":"23:43:00","Arrival Dogs":"14","Elapsed Time":"6.88","Departure Date":"03/10/2017","Departure Time":"06:36:00","Departure Dogs":"14"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"25.05","Speed":"4.75","Arrival Date":"03/09/2017","Arrival Time":"23:48:00","Arrival Dogs":"14","Elapsed Time":"6.1","Departure Date":"03/10/2017","Departure Time":"05:54:00","Departure Dogs":"14"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"25.4","Speed":"4.69","Arrival Date":"03/10/2017","Arrival Time":"04:47:00","Arrival Dogs":"15","Elapsed Time":"11.4","Departure Date":"03/10/2017","Departure Time":"16:11:00","Departure Dogs":"15"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"26.82","Speed":"4.44","Arrival Date":"03/10/2017","Arrival Time":"06:10:00","Arrival Dogs":"15","Elapsed Time":"7.55","Departure Date":"03/10/2017","Departure Time":"13:43:00","Departure Dogs":"15"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"27.12","Speed":"4.39","Arrival Date":"03/10/2017","Arrival Time":"09:28:00","Arrival Dogs":"12","Elapsed Time":"8.32","Departure Date":"03/10/2017","Departure Time":"17:47:00","Departure Dogs":"12"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Ruby","Latitude":"64.7386","Longitude":"-155.5011","Distance":"119","Time":"34.77","Speed":"3.42","Arrival Date":"03/10/2017","Arrival Time":"15:07:00","Arrival Dogs":"15","Elapsed Time":"6.82","Departure Date":"03/10/2017","Departure Time":"21:56:00","Departure Dogs":"15"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.55","Speed":"9.01","Arrival Date":"03/09/2017","Arrival Time":"05:34:00","Arrival Dogs":"16","Elapsed Time":"2.72","Departure Date":"03/09/2017","Departure Time":"08:17:00","Departure Dogs":"16"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.93","Speed":"8.43","Arrival Date":"03/09/2017","Arrival Time":"06:28:00","Arrival Dogs":"14","Elapsed Time":"25.17","Departure Date":"03/10/2017","Departure Time":"07:38:00","Departure Dogs":"14"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.43","Speed":"9.2","Arrival Date":"03/09/2017","Arrival Time":"07:25:00","Arrival Dogs":"16","Elapsed Time":"8.02","Departure Date":"03/09/2017","Departure Time":"15:26:00","Departure Dogs":"16"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.02","Speed":"8.31","Arrival Date":"03/09/2017","Arrival Time":"08:47:00","Arrival Dogs":"15","Elapsed Time":"25.77","Departure Date":"03/10/2017","Departure Time":"10:33:00","Departure Dogs":"15"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.75","Speed":"8.7","Arrival Date":"03/09/2017","Arrival Time":"10:48:00","Arrival Dogs":"14","Elapsed Time":"25.97","Departure Date":"03/10/2017","Departure Time":"12:46:00","Departure Dogs":"13"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.32","Speed":"7.92","Arrival Date":"03/09/2017","Arrival Time":"11:00:00","Arrival Dogs":"15","Elapsed Time":"6.58","Departure Date":"03/09/2017","Departure Time":"17:35:00","Departure Dogs":"15"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.38","Speed":"7.83","Arrival Date":"03/09/2017","Arrival Time":"12:11:00","Arrival Dogs":"15","Elapsed Time":"25.3","Departure Date":"03/10/2017","Departure Time":"13:29:00","Departure Dogs":"14"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.58","Speed":"8.96","Arrival Date":"03/09/2017","Arrival Time":"12:25:00","Arrival Dogs":"15","Elapsed Time":"0.3","Departure Date":"03/09/2017","Departure Time":"12:43:00","Departure Dogs":"14"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.48","Speed":"9.12","Arrival Date":"03/09/2017","Arrival Time":"12:30:00","Arrival Dogs":"16","Elapsed Time":"0.2","Departure Date":"03/09/2017","Departure Time":"12:42:00","Departure Dogs":"16"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"10.62","Speed":"4.71","Arrival Date":"03/09/2017","Arrival Time":"13:19:00","Arrival Dogs":"14","Elapsed Time":"5.58","Departure Date":"03/09/2017","Departure Time":"18:54:00","Departure Dogs":"14"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.88","Speed":"8.5","Arrival Date":"03/09/2017","Arrival Time":"13:33:00","Arrival Dogs":"15","Elapsed Time":"25.07","Departure Date":"03/10/2017","Departure Time":"14:37:00","Departure Dogs":"14"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.18","Speed":"8.09","Arrival Date":"03/09/2017","Arrival Time":"13:43:00","Arrival Dogs":"14","Elapsed Time":"0.17","Departure Date":"03/09/2017","Departure Time":"13:53:00","Departure Dogs":"14"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.83","Speed":"8.57","Arrival Date":"03/09/2017","Arrival Time":"13:49:00","Arrival Dogs":"15","Elapsed Time":"24.1","Departure Date":"03/10/2017","Departure Time":"13:55:00","Departure Dogs":"13"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.32","Speed":"9.4","Arrival Date":"03/09/2017","Arrival Time":"14:05:00","Arrival Dogs":"13","Elapsed Time":"26.07","Departure Date":"03/10/2017","Departure Time":"16:09:00","Departure Dogs":"13"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.83","Speed":"8.57","Arrival Date":"03/09/2017","Arrival Time":"14:12:00","Arrival Dogs":"14","Elapsed Time":"26.27","Departure Date":"03/10/2017","Departure Time":"16:28:00","Departure Dogs":"14"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.38","Speed":"7.83","Arrival Date":"03/09/2017","Arrival Time":"14:29:00","Arrival Dogs":"15","Elapsed Time":"0.27","Departure Date":"03/09/2017","Departure Time":"14:45:00","Departure Dogs":"15"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.83","Speed":"8.57","Arrival Date":"03/09/2017","Arrival Time":"14:36:00","Arrival Dogs":"11","Elapsed Time":"26","Departure Date":"03/10/2017","Departure Time":"16:36:00","Departure Dogs":"11"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.75","Speed":"8.7","Arrival Date":"03/09/2017","Arrival Time":"14:51:00","Arrival Dogs":"14","Elapsed Time":"4.52","Departure Date":"03/09/2017","Departure Time":"19:22:00","Departure Dogs":"14"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.27","Speed":"7.98","Arrival Date":"03/09/2017","Arrival Time":"15:00:00","Arrival Dogs":"14","Elapsed Time":"25.33","Departure Date":"03/10/2017","Departure Time":"16:20:00","Departure Dogs":"14"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.72","Speed":"8.75","Arrival Date":"03/09/2017","Arrival Time":"15:08:00","Arrival Dogs":"14","Elapsed Time":"24.13","Departure Date":"03/10/2017","Departure Time":"15:16:00","Departure Dogs":"13"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.77","Speed":"8.67","Arrival Date":"03/09/2017","Arrival Time":"15:11:00","Arrival Dogs":"12","Elapsed Time":"26.4","Departure Date":"03/10/2017","Departure Time":"17:35:00","Departure Dogs":"12"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.03","Speed":"8.29","Arrival Date":"03/09/2017","Arrival Time":"15:17:00","Arrival Dogs":"15","Elapsed Time":"2.83","Departure Date":"03/09/2017","Departure Time":"18:07:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.07","Speed":"8.24","Arrival Date":"03/09/2017","Arrival Time":"15:21:00","Arrival Dogs":"12","Elapsed Time":"24.53","Departure Date":"03/10/2017","Departure Time":"15:53:00","Departure Dogs":"12"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.27","Speed":"7.98","Arrival Date":"03/09/2017","Arrival Time":"16:49:00","Arrival Dogs":"13","Elapsed Time":"24.93","Departure Date":"03/10/2017","Departure Time":"17:45:00","Departure Dogs":"13"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.22","Speed":"8.04","Arrival Date":"03/09/2017","Arrival Time":"16:50:00","Arrival Dogs":"14","Elapsed Time":"0.25","Departure Date":"03/09/2017","Departure Time":"17:05:00","Departure Dogs":"13"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.15","Speed":"8.13","Arrival Date":"03/09/2017","Arrival Time":"17:10:00","Arrival Dogs":"16","Elapsed Time":"25.5","Departure Date":"03/10/2017","Departure Time":"18:40:00","Departure Dogs":"15"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.7","Speed":"8.77","Arrival Date":"03/09/2017","Arrival Time":"17:19:00","Arrival Dogs":"14","Elapsed Time":"26.23","Departure Date":"03/10/2017","Departure Time":"19:33:00","Departure Dogs":"11"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.05","Speed":"8.26","Arrival Date":"03/09/2017","Arrival Time":"18:49:00","Arrival Dogs":"16","Elapsed Time":"24.37","Departure Date":"03/10/2017","Departure Time":"19:11:00","Departure Dogs":"14"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.67","Speed":"8.82","Arrival Date":"03/09/2017","Arrival Time":"21:05:00","Arrival Dogs":"15","Elapsed Time":"24.57","Departure Date":"03/10/2017","Departure Time":"21:39:00","Departure Dogs":"15"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.53","Speed":"7.65","Arrival Date":"03/09/2017","Arrival Time":"22:20:00","Arrival Dogs":"15","Elapsed Time":"24.18","Departure Date":"03/10/2017","Departure Time":"22:31:00","Departure Dogs":"14"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.52","Speed":"7.67","Arrival Date":"03/09/2017","Arrival Time":"22:20:00","Arrival Dogs":"12","Elapsed Time":"24.23","Departure Date":"03/10/2017","Departure Time":"22:34:00","Departure Dogs":"12"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.07","Speed":"8.24","Arrival Date":"03/09/2017","Arrival Time":"22:41:00","Arrival Dogs":"16","Elapsed Time":"25.23","Departure Date":"03/10/2017","Departure Time":"23:55:00","Departure Dogs":"16"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.53","Speed":"7.65","Arrival Date":"03/09/2017","Arrival Time":"23:35:00","Arrival Dogs":"15","Elapsed Time":"24.73","Departure Date":"03/11/2017","Departure Time":"00:19:00","Departure Dogs":"14"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.48","Speed":"7.71","Arrival Date":"03/09/2017","Arrival Time":"23:50:00","Arrival Dogs":"12","Elapsed Time":"25.92","Departure Date":"03/11/2017","Departure Time":"01:45:00","Departure Dogs":"12"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.72","Speed":"8.75","Arrival Date":"03/10/2017","Arrival Time":"00:50:00","Arrival Dogs":"15","Elapsed Time":"4.13","Departure Date":"03/10/2017","Departure Time":"04:58:00","Departure Dogs":"15"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.63","Speed":"8.88","Arrival Date":"03/10/2017","Arrival Time":"01:46:00","Arrival Dogs":"15","Elapsed Time":"3.58","Departure Date":"03/10/2017","Departure Time":"05:21:00","Departure Dogs":"14"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.62","Speed":"7.56","Arrival Date":"03/10/2017","Arrival Time":"01:55:00","Arrival Dogs":"15","Elapsed Time":"25.38","Departure Date":"03/11/2017","Departure Time":"03:18:00","Departure Dogs":"14"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.45","Speed":"7.75","Arrival Date":"03/10/2017","Arrival Time":"01:58:00","Arrival Dogs":"14","Elapsed Time":"26.2","Departure Date":"03/11/2017","Departure Time":"04:10:00","Departure Dogs":"14"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.92","Speed":"7.23","Arrival Date":"03/10/2017","Arrival Time":"03:11:00","Arrival Dogs":"15","Elapsed Time":"25.1","Departure Date":"03/11/2017","Departure Time":"04:17:00","Departure Dogs":"14"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.93","Speed":"8.43","Arrival Date":"03/10/2017","Arrival Time":"03:12:00","Arrival Dogs":"14","Elapsed Time":"0.15","Departure Date":"03/10/2017","Departure Time":"03:21:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.4","Speed":"7.81","Arrival Date":"03/10/2017","Arrival Time":"03:25:00","Arrival Dogs":"15","Elapsed Time":"26.83","Departure Date":"03/11/2017","Departure Time":"06:15:00","Departure Dogs":"15"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.68","Speed":"7.48","Arrival Date":"03/10/2017","Arrival Time":"04:41:00","Arrival Dogs":"14","Elapsed Time":"25.8","Departure Date":"03/11/2017","Departure Time":"06:29:00","Departure Dogs":"13"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.48","Speed":"7.71","Arrival Date":"03/10/2017","Arrival Time":"05:42:00","Arrival Dogs":"11","Elapsed Time":"25.55","Departure Date":"03/11/2017","Departure Time":"07:15:00","Departure Dogs":"11"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.48","Speed":"9.12","Arrival Date":"03/10/2017","Arrival Time":"06:44:00","Arrival Dogs":"13","Elapsed Time":"4","Departure Date":"03/10/2017","Departure Time":"10:44:00","Departure Dogs":"13"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.82","Speed":"8.6","Arrival Date":"03/10/2017","Arrival Time":"07:34:00","Arrival Dogs":"15","Elapsed Time":"6.02","Departure Date":"03/10/2017","Departure Time":"13:35:00","Departure Dogs":"14"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.63","Speed":"7.54","Arrival Date":"03/10/2017","Arrival Time":"07:51:00","Arrival Dogs":"14","Elapsed Time":"24.27","Departure Date":"03/11/2017","Departure Time":"08:07:00","Departure Dogs":"12"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.08","Speed":"8.22","Arrival Date":"03/10/2017","Arrival Time":"08:01:00","Arrival Dogs":"16","Elapsed Time":"26.48","Departure Date":"03/11/2017","Departure Time":"10:30:00","Departure Dogs":"16"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.62","Speed":"8.9","Arrival Date":"03/10/2017","Arrival Time":"08:39:00","Arrival Dogs":"16","Elapsed Time":"0.22","Departure Date":"03/10/2017","Departure Time":"08:52:00","Departure Dogs":"14"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.88","Speed":"7.26","Arrival Date":"03/10/2017","Arrival Time":"08:41:00","Arrival Dogs":"16","Elapsed Time":"26.87","Departure Date":"03/11/2017","Departure Time":"11:33:00","Departure Dogs":"15"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"7.1","Speed":"7.04","Arrival Date":"03/10/2017","Arrival Time":"08:46:00","Arrival Dogs":"13","Elapsed Time":"25.95","Departure Date":"03/11/2017","Departure Time":"10:43:00","Departure Dogs":"13"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.77","Speed":"8.67","Arrival Date":"03/10/2017","Arrival Time":"10:07:00","Arrival Dogs":"15","Elapsed Time":"24.07","Departure Date":"03/11/2017","Departure Time":"10:11:00","Departure Dogs":"15"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.87","Speed":"7.28","Arrival Date":"03/10/2017","Arrival Time":"10:32:00","Arrival Dogs":"14","Elapsed Time":"26.33","Departure Date":"03/11/2017","Departure Time":"12:52:00","Departure Dogs":"13"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.83","Speed":"8.57","Arrival Date":"03/10/2017","Arrival Time":"10:46:00","Arrival Dogs":"16","Elapsed Time":"0.15","Departure Date":"03/10/2017","Departure Time":"10:55:00","Departure Dogs":"16"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.77","Speed":"8.67","Arrival Date":"03/10/2017","Arrival Time":"11:39:00","Arrival Dogs":"13","Elapsed Time":"24.03","Departure Date":"03/11/2017","Departure Time":"11:41:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.45","Speed":"9.17","Arrival Date":"03/10/2017","Arrival Time":"12:03:00","Arrival Dogs":"14","Elapsed Time":"25.85","Departure Date":"03/11/2017","Departure Time":"13:54:00","Departure Dogs":"14"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.55","Speed":"9.01","Arrival Date":"03/10/2017","Arrival Time":"12:10:00","Arrival Dogs":"15","Elapsed Time":"3.97","Departure Date":"03/10/2017","Departure Time":"16:08:00","Departure Dogs":"14"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.08","Speed":"8.22","Arrival Date":"03/10/2017","Arrival Time":"12:21:00","Arrival Dogs":"14","Elapsed Time":"24.8","Departure Date":"03/11/2017","Departure Time":"13:09:00","Departure Dogs":"13"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.7","Speed":"8.77","Arrival Date":"03/10/2017","Arrival Time":"13:02:00","Arrival Dogs":"14","Elapsed Time":"24.72","Departure Date":"03/11/2017","Departure Time":"13:45:00","Departure Dogs":"14"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"7.28","Speed":"6.86","Arrival Date":"03/10/2017","Arrival Time":"13:11:00","Arrival Dogs":"14","Elapsed Time":"24.82","Departure Date":"03/11/2017","Departure Time":"14:00:00","Departure Dogs":"13"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.62","Speed":"8.9","Arrival Date":"03/10/2017","Arrival Time":"13:44:00","Arrival Dogs":"16","Elapsed Time":"0.13","Departure Date":"03/10/2017","Departure Time":"13:52:00","Departure Dogs":"16"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.33","Speed":"9.38","Arrival Date":"03/10/2017","Arrival Time":"15:41:00","Arrival Dogs":"14","Elapsed Time":"2.5","Departure Date":"03/10/2017","Departure Time":"18:11:00","Departure Dogs":"14"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"7.03","Speed":"7.11","Arrival Date":"03/10/2017","Arrival Time":"20:45:00","Arrival Dogs":"15","Elapsed Time":"25","Departure Date":"03/11/2017","Departure Time":"21:45:00","Departure Dogs":"15"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.03","Speed":"8.29","Arrival Date":"03/10/2017","Arrival Time":"21:39:00","Arrival Dogs":"12","Elapsed Time":"5.3","Departure Date":"03/11/2017","Departure Time":"02:57:00","Departure Dogs":"11"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.92","Speed":"8.45","Arrival Date":"03/10/2017","Arrival Time":"22:06:00","Arrival Dogs":"15","Elapsed Time":"26.07","Departure Date":"03/12/2017","Departure Time":"00:10:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.55","Speed":"9.01","Arrival Date":"03/10/2017","Arrival Time":"22:10:00","Arrival Dogs":"15","Elapsed Time":"9.87","Departure Date":"03/11/2017","Departure Time":"08:02:00","Departure Dogs":"13"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.72","Speed":"8.75","Arrival Date":"03/10/2017","Arrival Time":"23:58:00","Arrival Dogs":"15","Elapsed Time":"8","Departure Date":"03/11/2017","Departure Time":"07:58:00","Departure Dogs":"15"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"6.92","Speed":"7.23","Arrival Date":"03/11/2017","Arrival Time":"00:42:00","Arrival Dogs":"12","Elapsed Time":"26.47","Departure Date":"03/12/2017","Departure Time":"04:10:00","Departure Dogs":"12"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"8.68","Speed":"5.76","Arrival Date":"03/11/2017","Arrival Time":"06:37:00","Arrival Dogs":"15","Elapsed Time":"26.3","Departure Date":"03/12/2017","Departure Time":"09:55:00","Departure Dogs":"13"},
{"Number":"8","Name":"Ryan Anderson","Status":"Rookie","Country":"United States","Checkpoint":"Galena","Latitude":"64.7322","Longitude":"-156.9352","Distance":"50","Time":"5.78","Speed":"8.65","Arrival Date":"03/11/2017","Arrival Time":"12:21:00","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.02","Speed":"6.82","Arrival Date":"03/09/2017","Arrival Time":"20:18:00","Arrival Dogs":"16","Elapsed Time":"25.9","Departure Date":"03/10/2017","Departure Time":"22:12:00","Departure Dogs":"13"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.68","Speed":"7.68","Arrival Date":"03/10/2017","Arrival Time":"02:07:00","Arrival Dogs":"16","Elapsed Time":"25.72","Departure Date":"03/11/2017","Departure Time":"03:50:00","Departure Dogs":"16"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.23","Speed":"5.38","Arrival Date":"03/10/2017","Arrival Time":"03:56:00","Arrival Dogs":"16","Elapsed Time":"25.2","Departure Date":"03/11/2017","Departure Time":"05:08:00","Departure Dogs":"16"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.02","Speed":"5.12","Arrival Date":"03/10/2017","Arrival Time":"04:44:00","Arrival Dogs":"14","Elapsed Time":"26.13","Departure Date":"03/11/2017","Departure Time":"06:52:00","Departure Dogs":"14"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.1","Speed":"5.09","Arrival Date":"03/10/2017","Arrival Time":"05:59:00","Arrival Dogs":"14","Elapsed Time":"25.13","Departure Date":"03/11/2017","Departure Time":"07:07:00","Departure Dogs":"14"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.97","Speed":"6.32","Arrival Date":"03/10/2017","Arrival Time":"06:33:00","Arrival Dogs":"15","Elapsed Time":"24.3","Departure Date":"03/11/2017","Departure Time":"06:51:00","Departure Dogs":"15"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.45","Speed":"4.98","Arrival Date":"03/10/2017","Arrival Time":"07:12:00","Arrival Dogs":"15","Elapsed Time":"24.27","Departure Date":"03/11/2017","Departure Time":"07:28:00","Departure Dogs":"14"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.47","Speed":"4.98","Arrival Date":"03/10/2017","Arrival Time":"09:33:00","Arrival Dogs":"13","Elapsed Time":"24.7","Departure Date":"03/11/2017","Departure Time":"10:15:00","Departure Dogs":"13"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.68","Speed":"5.58","Arrival Date":"03/10/2017","Arrival Time":"09:35:00","Arrival Dogs":"14","Elapsed Time":"24.77","Departure Date":"03/11/2017","Departure Time":"10:21:00","Departure Dogs":"12"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.75","Speed":"5.21","Arrival Date":"03/10/2017","Arrival Time":"09:52:00","Arrival Dogs":"13","Elapsed Time":"24.33","Departure Date":"03/11/2017","Departure Time":"10:12:00","Departure Dogs":"10"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.08","Speed":"5.1","Arrival Date":"03/10/2017","Arrival Time":"11:27:00","Arrival Dogs":"14","Elapsed Time":"25.37","Departure Date":"03/11/2017","Departure Time":"12:49:00","Departure Dogs":"14"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.97","Speed":"6.32","Arrival Date":"03/10/2017","Arrival Time":"17:56:00","Arrival Dogs":"15","Elapsed Time":"25.57","Departure Date":"03/11/2017","Departure Time":"19:30:00","Departure Dogs":"15"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.6","Speed":"6.03","Arrival Date":"03/10/2017","Arrival Time":"18:57:00","Arrival Dogs":"14","Elapsed Time":"0.13","Departure Date":"03/10/2017","Departure Time":"19:05:00","Departure Dogs":"14"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.85","Speed":"5.17","Arrival Date":"03/10/2017","Arrival Time":"19:12:00","Arrival Dogs":"14","Elapsed Time":"0.45","Departure Date":"03/10/2017","Departure Time":"19:39:00","Departure Dogs":"13"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.43","Speed":"6.1","Arrival Date":"03/10/2017","Arrival Time":"21:04:00","Arrival Dogs":"14","Elapsed Time":"0.13","Departure Date":"03/10/2017","Departure Time":"21:12:00","Departure Dogs":"13"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.87","Speed":"6.37","Arrival Date":"03/10/2017","Arrival Time":"23:25:00","Arrival Dogs":"15","Elapsed Time":"4.4","Departure Date":"03/11/2017","Departure Time":"03:49:00","Departure Dogs":"15"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.02","Speed":"6.3","Arrival Date":"03/10/2017","Arrival Time":"23:45:00","Arrival Dogs":"13","Elapsed Time":"4.12","Departure Date":"03/11/2017","Departure Time":"03:52:00","Departure Dogs":"13"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.83","Speed":"7.57","Arrival Date":"03/11/2017","Arrival Time":"00:19:00","Arrival Dogs":"14","Elapsed Time":"8.52","Departure Date":"03/11/2017","Departure Time":"08:50:00","Departure Dogs":"13"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.67","Speed":"5.23","Arrival Date":"03/11/2017","Arrival Time":"00:32:00","Arrival Dogs":"14","Elapsed Time":"6.55","Departure Date":"03/11/2017","Departure Time":"07:05:00","Departure Dogs":"14"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.58","Speed":"5.62","Arrival Date":"03/11/2017","Arrival Time":"01:30:00","Arrival Dogs":"16","Elapsed Time":"4.83","Departure Date":"03/11/2017","Departure Time":"06:20:00","Departure Dogs":"15"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.02","Speed":"6.82","Arrival Date":"03/11/2017","Arrival Time":"01:56:00","Arrival Dogs":"13","Elapsed Time":"4.78","Departure Date":"03/11/2017","Departure Time":"06:43:00","Departure Dogs":"12"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"9.85","Speed":"8.32","Arrival Date":"03/11/2017","Arrival Time":"02:11:00","Arrival Dogs":"14","Elapsed Time":"6.52","Departure Date":"03/11/2017","Departure Time":"08:42:00","Departure Dogs":"14"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.47","Speed":"7.83","Arrival Date":"03/11/2017","Arrival Time":"03:04:00","Arrival Dogs":"11","Elapsed Time":"5.9","Departure Date":"03/11/2017","Departure Time":"08:58:00","Departure Dogs":"11"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"11.1","Speed":"7.39","Arrival Date":"03/11/2017","Arrival Time":"03:15:00","Arrival Dogs":"13","Elapsed Time":"5.52","Departure Date":"03/11/2017","Departure Time":"08:46:00","Departure Dogs":"13"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.97","Speed":"5.48","Arrival Date":"03/11/2017","Arrival Time":"03:44:00","Arrival Dogs":"13","Elapsed Time":"0.25","Departure Date":"03/11/2017","Departure Time":"03:59:00","Departure Dogs":"13"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.13","Speed":"6.24","Arrival Date":"03/11/2017","Arrival Time":"03:45:00","Arrival Dogs":"14","Elapsed Time":"0.27","Departure Date":"03/11/2017","Departure Time":"04:01:00","Departure Dogs":"13"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.07","Speed":"6.28","Arrival Date":"03/11/2017","Arrival Time":"04:20:00","Arrival Dogs":"13","Elapsed Time":"3.23","Departure Date":"03/11/2017","Departure Time":"07:34:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.07","Speed":"6.28","Arrival Date":"03/11/2017","Arrival Time":"04:57:00","Arrival Dogs":"12","Elapsed Time":"0.3","Departure Date":"03/11/2017","Departure Time":"05:15:00","Departure Dogs":"12"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"11.38","Speed":"7.2","Arrival Date":"03/11/2017","Arrival Time":"04:58:00","Arrival Dogs":"12","Elapsed Time":"4.52","Departure Date":"03/11/2017","Departure Time":"09:29:00","Departure Dogs":"12"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.45","Speed":"5.31","Arrival Date":"03/11/2017","Arrival Time":"05:02:00","Arrival Dogs":"14","Elapsed Time":"25.12","Departure Date":"03/12/2017","Departure Time":"07:09:00","Departure Dogs":"14"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.3","Speed":"5.36","Arrival Date":"03/11/2017","Arrival Time":"05:10:00","Arrival Dogs":"16","Elapsed Time":"10","Departure Date":"03/11/2017","Departure Time":"15:10:00","Departure Dogs":"15"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.27","Speed":"7.99","Arrival Date":"03/11/2017","Arrival Time":"05:49:00","Arrival Dogs":"11","Elapsed Time":"8.18","Departure Date":"03/11/2017","Departure Time":"14:00:00","Departure Dogs":"9"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.38","Speed":"6.13","Arrival Date":"03/11/2017","Arrival Time":"05:51:00","Arrival Dogs":"14","Elapsed Time":"0.3","Departure Date":"03/11/2017","Departure Time":"06:09:00","Departure Dogs":"14"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.12","Speed":"5.81","Arrival Date":"03/11/2017","Arrival Time":"06:15:00","Arrival Dogs":"14","Elapsed Time":"0.38","Departure Date":"03/11/2017","Departure Time":"06:38:00","Departure Dogs":"13"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.33","Speed":"6.65","Arrival Date":"03/11/2017","Arrival Time":"07:00:00","Arrival Dogs":"15","Elapsed Time":"10.08","Departure Date":"03/11/2017","Departure Time":"17:05:00","Departure Dogs":"13"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.58","Speed":"6.04","Arrival Date":"03/11/2017","Arrival Time":"07:20:00","Arrival Dogs":"13","Elapsed Time":"0.2","Departure Date":"03/11/2017","Departure Time":"07:32:00","Departure Dogs":"13"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"12.42","Speed":"6.6","Arrival Date":"03/11/2017","Arrival Time":"07:36:00","Arrival Dogs":"14","Elapsed Time":"5.32","Departure Date":"03/11/2017","Departure Time":"12:55:00","Departure Dogs":"14"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.58","Speed":"6.04","Arrival Date":"03/11/2017","Arrival Time":"07:46:00","Arrival Dogs":"14","Elapsed Time":"7.4","Departure Date":"03/11/2017","Departure Time":"15:10:00","Departure Dogs":"14"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13","Speed":"6.31","Arrival Date":"03/11/2017","Arrival Time":"11:34:00","Arrival Dogs":"12","Elapsed Time":"5.5","Departure Date":"03/11/2017","Departure Time":"17:04:00","Departure Dogs":"11"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.07","Speed":"6.28","Arrival Date":"03/11/2017","Arrival Time":"11:35:00","Arrival Dogs":"14","Elapsed Time":"5.48","Departure Date":"03/11/2017","Departure Time":"17:04:00","Departure Dogs":"13"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.68","Speed":"5.58","Arrival Date":"03/11/2017","Arrival Time":"12:20:00","Arrival Dogs":"15","Elapsed Time":"5.32","Departure Date":"03/11/2017","Departure Time":"17:39:00","Departure Dogs":"14"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.32","Speed":"6.16","Arrival Date":"03/11/2017","Arrival Time":"13:14:00","Arrival Dogs":"16","Elapsed Time":"6.82","Departure Date":"03/11/2017","Departure Time":"20:03:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.42","Speed":"5.32","Arrival Date":"03/11/2017","Arrival Time":"15:44:00","Arrival Dogs":"14","Elapsed Time":"5.27","Departure Date":"03/11/2017","Departure Time":"21:00:00","Departure Dogs":"13"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.58","Speed":"5.62","Arrival Date":"03/11/2017","Arrival Time":"16:20:00","Arrival Dogs":"12","Elapsed Time":"5.17","Departure Date":"03/11/2017","Departure Time":"21:30:00","Departure Dogs":"11"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.97","Speed":"7.48","Arrival Date":"03/11/2017","Arrival Time":"17:13:00","Arrival Dogs":"15","Elapsed Time":"15.42","Departure Date":"03/12/2017","Departure Time":"09:38:00","Departure Dogs":"14"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.42","Speed":"5.69","Arrival Date":"03/11/2017","Arrival Time":"17:43:00","Arrival Dogs":"14","Elapsed Time":"6.45","Departure Date":"03/12/2017","Departure Time":"00:10:00","Departure Dogs":"14"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"11.35","Speed":"7.22","Arrival Date":"03/11/2017","Arrival Time":"17:50:00","Arrival Dogs":"13","Elapsed Time":"5.78","Departure Date":"03/11/2017","Departure Time":"23:37:00","Departure Dogs":"13"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"10.93","Speed":"7.5","Arrival Date":"03/11/2017","Arrival Time":"18:11:00","Arrival Dogs":"11","Elapsed Time":"15.53","Departure Date":"03/12/2017","Departure Time":"10:43:00","Departure Dogs":"10"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.17","Speed":"5.79","Arrival Date":"03/11/2017","Arrival Time":"18:20:00","Arrival Dogs":"14","Elapsed Time":"5.35","Departure Date":"03/11/2017","Departure Time":"23:41:00","Departure Dogs":"14"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.82","Speed":"5.18","Arrival Date":"03/11/2017","Arrival Time":"18:46:00","Arrival Dogs":"11","Elapsed Time":"8.57","Departure Date":"03/12/2017","Departure Time":"04:20:00","Departure Dogs":"10"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.65","Speed":"5.24","Arrival Date":"03/11/2017","Arrival Time":"19:56:00","Arrival Dogs":"14","Elapsed Time":"12.33","Departure Date":"03/12/2017","Departure Time":"09:16:00","Departure Dogs":"12"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.62","Speed":"5.25","Arrival Date":"03/11/2017","Arrival Time":"23:35:00","Arrival Dogs":"15","Elapsed Time":"6.45","Departure Date":"03/12/2017","Departure Time":"07:02:00","Departure Dogs":"14"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.33","Speed":"6.15","Arrival Date":"03/11/2017","Arrival Time":"23:50:00","Arrival Dogs":"16","Elapsed Time":"8.57","Departure Date":"03/12/2017","Departure Time":"09:24:00","Departure Dogs":"16"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.98","Speed":"5.13","Arrival Date":"03/12/2017","Arrival Time":"00:06:00","Arrival Dogs":"12","Elapsed Time":"6.98","Departure Date":"03/12/2017","Departure Time":"08:05:00","Departure Dogs":"12"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14","Speed":"5.86","Arrival Date":"03/12/2017","Arrival Time":"00:11:00","Arrival Dogs":"15","Elapsed Time":"7.42","Departure Date":"03/12/2017","Departure Time":"08:36:00","Departure Dogs":"15"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.03","Speed":"5.84","Arrival Date":"03/12/2017","Arrival Time":"00:45:00","Arrival Dogs":"13","Elapsed Time":"8.2","Departure Date":"03/12/2017","Departure Time":"09:57:00","Departure Dogs":"13"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.85","Speed":"5.92","Arrival Date":"03/12/2017","Arrival Time":"01:24:00","Arrival Dogs":"15","Elapsed Time":"10.13","Departure Date":"03/12/2017","Departure Time":"12:32:00","Departure Dogs":"15"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"17.8","Speed":"4.61","Arrival Date":"03/12/2017","Arrival Time":"01:50:00","Arrival Dogs":"13","Elapsed Time":"9.83","Departure Date":"03/12/2017","Departure Time":"12:40:00","Departure Dogs":"12"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"14.35","Speed":"5.71","Arrival Date":"03/12/2017","Arrival Time":"03:02:00","Arrival Dogs":"13","Elapsed Time":"7.47","Departure Date":"03/12/2017","Departure Time":"10:30:00","Departure Dogs":"12"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.13","Speed":"6.24","Arrival Date":"03/12/2017","Arrival Time":"03:17:00","Arrival Dogs":"13","Elapsed Time":"6.28","Departure Date":"03/12/2017","Departure Time":"09:34:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.7","Speed":"5.22","Arrival Date":"03/12/2017","Arrival Time":"06:36:00","Arrival Dogs":"14","Elapsed Time":"8.9","Departure Date":"03/12/2017","Departure Time":"15:30:00","Departure Dogs":"13"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.8","Speed":"4.88","Arrival Date":"03/12/2017","Arrival Time":"06:40:00","Arrival Dogs":"13","Elapsed Time":"6.95","Departure Date":"03/12/2017","Departure Time":"13:37:00","Departure Dogs":"13"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.68","Speed":"5.23","Arrival Date":"03/12/2017","Arrival Time":"06:41:00","Arrival Dogs":"13","Elapsed Time":"8.92","Departure Date":"03/12/2017","Departure Time":"15:36:00","Departure Dogs":"13"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"18.03","Speed":"4.55","Arrival Date":"03/12/2017","Arrival Time":"08:47:00","Arrival Dogs":"14","Elapsed Time":"9.28","Departure Date":"03/12/2017","Departure Time":"18:04:00","Departure Dogs":"11"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"13.98","Speed":"5.86","Arrival Date":"03/12/2017","Arrival Time":"12:44:00","Arrival Dogs":"15","Elapsed Time":"7.62","Departure Date":"03/12/2017","Departure Time":"20:21:00","Departure Dogs":"15"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"16.5","Speed":"4.97","Arrival Date":"03/12/2017","Arrival Time":"17:40:00","Arrival Dogs":"13","Elapsed Time":"10.17","Departure Date":"03/13/2017","Departure Time":"03:50:00","Departure Dogs":"13"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"15.9","Speed":"5.16","Arrival Date":"03/12/2017","Arrival Time":"20:04:00","Arrival Dogs":"12","Elapsed Time":"5.65","Departure Date":"03/13/2017","Departure Time":"01:43:00","Departure Dogs":"12"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Huslia","Latitude":"65.6568","Longitude":"-156.455","Distance":"82","Time":"17.93","Speed":"4.57","Arrival Date":"03/13/2017","Arrival Time":"03:51:00","Arrival Dogs":"13","Elapsed Time":"8.75","Departure Date":"03/13/2017","Departure Time":"12:36:00","Departure Dogs":"11"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15","Speed":"5.73","Arrival Date":"03/11/2017","Arrival Time":"10:05:00","Arrival Dogs":"14","Elapsed Time":"8","Departure Date":"03/11/2017","Departure Time":"18:05:00","Departure Dogs":"13"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"12.12","Speed":"7.1","Arrival Date":"03/11/2017","Arrival Time":"10:19:00","Arrival Dogs":"13","Elapsed Time":"3.43","Departure Date":"03/11/2017","Departure Time":"13:45:00","Departure Dogs":"13"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.85","Speed":"5.79","Arrival Date":"03/11/2017","Arrival Time":"10:30:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/11/2017","Departure Time":"18:30:00","Departure Dogs":"13"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.23","Speed":"5.65","Arrival Date":"03/11/2017","Arrival Time":"12:26:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/11/2017","Departure Time":"20:26:00","Departure Dogs":"12"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"11.35","Speed":"7.58","Arrival Date":"03/11/2017","Arrival Time":"15:11:00","Arrival Dogs":"16","Elapsed Time":"4.83","Departure Date":"03/11/2017","Departure Time":"20:01:00","Departure Dogs":"15"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"12","Speed":"7.17","Arrival Date":"03/11/2017","Arrival Time":"17:08:00","Arrival Dogs":"16","Elapsed Time":"6.13","Departure Date":"03/11/2017","Departure Time":"23:16:00","Departure Dogs":"16"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.37","Speed":"5.6","Arrival Date":"03/11/2017","Arrival Time":"19:14:00","Arrival Dogs":"13","Elapsed Time":"8.03","Departure Date":"03/12/2017","Departure Time":"04:16:00","Departure Dogs":"12"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.05","Speed":"5.36","Arrival Date":"03/11/2017","Arrival Time":"19:52:00","Arrival Dogs":"15","Elapsed Time":"8.07","Departure Date":"03/12/2017","Departure Time":"04:56:00","Departure Dogs":"14"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16","Speed":"5.38","Arrival Date":"03/11/2017","Arrival Time":"20:01:00","Arrival Dogs":"13","Elapsed Time":"5.03","Departure Date":"03/12/2017","Departure Time":"01:03:00","Departure Dogs":"13"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.5","Speed":"4.91","Arrival Date":"03/11/2017","Arrival Time":"21:29:00","Arrival Dogs":"13","Elapsed Time":"0.03","Departure Date":"03/11/2017","Departure Time":"21:31:00","Departure Dogs":"13"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.5","Speed":"5.55","Arrival Date":"03/11/2017","Arrival Time":"22:22:00","Arrival Dogs":"14","Elapsed Time":"4.03","Departure Date":"03/12/2017","Departure Time":"03:24:00","Departure Dogs":"14"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.6","Speed":"5.51","Arrival Date":"03/11/2017","Arrival Time":"22:27:00","Arrival Dogs":"15","Elapsed Time":"0.32","Departure Date":"03/11/2017","Departure Time":"22:46:00","Departure Dogs":"12"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.3","Speed":"5.28","Arrival Date":"03/11/2017","Arrival Time":"23:25:00","Arrival Dogs":"14","Elapsed Time":"0.18","Departure Date":"03/11/2017","Departure Time":"23:36:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.57","Speed":"4.63","Arrival Date":"03/11/2017","Arrival Time":"23:49:00","Arrival Dogs":"12","Elapsed Time":"4.22","Departure Date":"03/12/2017","Departure Time":"05:02:00","Departure Dogs":"11"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.23","Speed":"5.65","Arrival Date":"03/12/2017","Arrival Time":"00:12:00","Arrival Dogs":"11","Elapsed Time":"4.55","Departure Date":"03/12/2017","Departure Time":"05:45:00","Departure Dogs":"11"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.67","Speed":"4.87","Arrival Date":"03/12/2017","Arrival Time":"00:18:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/12/2017","Departure Time":"09:18:00","Departure Dogs":"13"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.63","Speed":"5.5","Arrival Date":"03/12/2017","Arrival Time":"00:28:00","Arrival Dogs":"13","Elapsed Time":"8.37","Departure Date":"03/12/2017","Departure Time":"09:50:00","Departure Dogs":"13"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.18","Speed":"5","Arrival Date":"03/12/2017","Arrival Time":"00:39:00","Arrival Dogs":"14","Elapsed Time":"0.13","Departure Date":"03/12/2017","Departure Time":"00:47:00","Departure Dogs":"14"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.07","Speed":"5.35","Arrival Date":"03/12/2017","Arrival Time":"00:46:00","Arrival Dogs":"14","Elapsed Time":"0.1","Departure Date":"03/12/2017","Departure Time":"00:52:00","Departure Dogs":"14"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"19.02","Speed":"4.52","Arrival Date":"03/12/2017","Arrival Time":"01:21:00","Arrival Dogs":"15","Elapsed Time":"5.4","Departure Date":"03/12/2017","Departure Time":"07:45:00","Departure Dogs":"14"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.88","Speed":"4.81","Arrival Date":"03/12/2017","Arrival Time":"01:25:00","Arrival Dogs":"13","Elapsed Time":"5.58","Departure Date":"03/12/2017","Departure Time":"08:00:00","Departure Dogs":"12"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.1","Speed":"5.34","Arrival Date":"03/12/2017","Arrival Time":"01:35:00","Arrival Dogs":"12","Elapsed Time":"5.68","Departure Date":"03/12/2017","Departure Time":"08:16:00","Departure Dogs":"12"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.23","Speed":"4.72","Arrival Date":"03/12/2017","Arrival Time":"01:48:00","Arrival Dogs":"13","Elapsed Time":"5.48","Departure Date":"03/12/2017","Departure Time":"08:17:00","Departure Dogs":"11"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.13","Speed":"5.33","Arrival Date":"03/12/2017","Arrival Time":"03:29:00","Arrival Dogs":"12","Elapsed Time":"4.17","Departure Date":"03/12/2017","Departure Time":"07:39:00","Departure Dogs":"11"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"19.78","Speed":"4.35","Arrival Date":"03/12/2017","Arrival Time":"03:30:00","Arrival Dogs":"12","Elapsed Time":"4.3","Departure Date":"03/12/2017","Departure Time":"07:48:00","Departure Dogs":"11"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.23","Speed":"4.72","Arrival Date":"03/12/2017","Arrival Time":"04:00:00","Arrival Dogs":"13","Elapsed Time":"6.1","Departure Date":"03/12/2017","Departure Time":"10:06:00","Departure Dogs":"12"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.85","Speed":"5.1","Arrival Date":"03/12/2017","Arrival Time":"04:03:00","Arrival Dogs":"10","Elapsed Time":"3.45","Departure Date":"03/12/2017","Departure Time":"07:30:00","Departure Dogs":"10"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.18","Speed":"5.66","Arrival Date":"03/12/2017","Arrival Time":"05:00:00","Arrival Dogs":"14","Elapsed Time":"6.25","Departure Date":"03/12/2017","Departure Time":"11:15:00","Departure Dogs":"14"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.88","Speed":"4.81","Arrival Date":"03/12/2017","Arrival Time":"05:08:00","Arrival Dogs":"13","Elapsed Time":"0.08","Departure Date":"03/12/2017","Departure Time":"05:13:00","Departure Dogs":"12"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"13.17","Speed":"6.53","Arrival Date":"03/12/2017","Arrival Time":"05:20:00","Arrival Dogs":"15","Elapsed Time":"3.47","Departure Date":"03/12/2017","Departure Time":"08:48:00","Departure Dogs":"14"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16","Speed":"5.38","Arrival Date":"03/12/2017","Arrival Time":"05:55:00","Arrival Dogs":"14","Elapsed Time":"7.25","Departure Date":"03/12/2017","Departure Time":"13:10:00","Departure Dogs":"11"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"23.4","Speed":"3.68","Arrival Date":"03/12/2017","Arrival Time":"06:33:00","Arrival Dogs":"14","Elapsed Time":"0.13","Departure Date":"03/12/2017","Departure Time":"06:41:00","Departure Dogs":"13"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.83","Speed":"5.8","Arrival Date":"03/12/2017","Arrival Time":"07:00:00","Arrival Dogs":"14","Elapsed Time":"6.98","Departure Date":"03/12/2017","Departure Time":"13:59:00","Departure Dogs":"13"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.2","Speed":"5.31","Arrival Date":"03/12/2017","Arrival Time":"07:12:00","Arrival Dogs":"9","Elapsed Time":"0.1","Departure Date":"03/12/2017","Departure Time":"07:18:00","Departure Dogs":"9"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.05","Speed":"5.71","Arrival Date":"03/12/2017","Arrival Time":"09:08:00","Arrival Dogs":"13","Elapsed Time":"7.32","Departure Date":"03/12/2017","Departure Time":"16:27:00","Departure Dogs":"12"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"26.12","Speed":"3.29","Arrival Date":"03/12/2017","Arrival Time":"10:12:00","Arrival Dogs":"14","Elapsed Time":"4.38","Departure Date":"03/12/2017","Departure Time":"14:35:00","Departure Dogs":"12"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.1","Speed":"5.03","Arrival Date":"03/12/2017","Arrival Time":"11:10:00","Arrival Dogs":"11","Elapsed Time":"8","Departure Date":"03/12/2017","Departure Time":"19:10:00","Departure Dogs":"10"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.12","Speed":"5.02","Arrival Date":"03/12/2017","Arrival Time":"11:11:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/12/2017","Departure Time":"19:11:00","Departure Dogs":"13"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.77","Speed":"5.13","Arrival Date":"03/12/2017","Arrival Time":"11:25:00","Arrival Dogs":"14","Elapsed Time":"0.07","Departure Date":"03/12/2017","Departure Time":"11:29:00","Departure Dogs":"13"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.67","Speed":"5.49","Arrival Date":"03/12/2017","Arrival Time":"12:10:00","Arrival Dogs":"15","Elapsed Time":"4.03","Departure Date":"03/12/2017","Departure Time":"16:12:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.97","Speed":"5.39","Arrival Date":"03/12/2017","Arrival Time":"13:58:00","Arrival Dogs":"13","Elapsed Time":"5.05","Departure Date":"03/12/2017","Departure Time":"19:01:00","Departure Dogs":"12"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"13.92","Speed":"6.18","Arrival Date":"03/12/2017","Arrival Time":"14:32:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/12/2017","Departure Time":"22:32:00","Departure Dogs":"12"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.7","Speed":"4.86","Arrival Date":"03/12/2017","Arrival Time":"14:45:00","Arrival Dogs":"15","Elapsed Time":"6","Departure Date":"03/12/2017","Departure Time":"20:45:00","Departure Dogs":"15"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.27","Speed":"4.98","Arrival Date":"03/12/2017","Arrival Time":"15:46:00","Arrival Dogs":"11","Elapsed Time":"5.43","Departure Date":"03/12/2017","Departure Time":"21:12:00","Departure Dogs":"11"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.32","Speed":"5.27","Arrival Date":"03/12/2017","Arrival Time":"17:00:00","Arrival Dogs":"14","Elapsed Time":"0.1","Departure Date":"03/12/2017","Departure Time":"17:06:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.37","Speed":"5.25","Arrival Date":"03/12/2017","Arrival Time":"17:32:00","Arrival Dogs":"14","Elapsed Time":"0.22","Departure Date":"03/12/2017","Departure Time":"17:45:00","Departure Dogs":"14"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.53","Speed":"4.9","Arrival Date":"03/12/2017","Arrival Time":"21:52:00","Arrival Dogs":"10","Elapsed Time":"0.22","Departure Date":"03/12/2017","Departure Time":"22:05:00","Departure Dogs":"10"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.98","Speed":"5.06","Arrival Date":"03/13/2017","Arrival Time":"00:01:00","Arrival Dogs":"14","Elapsed Time":"9.18","Departure Date":"03/13/2017","Departure Time":"09:12:00","Departure Dogs":"14"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.57","Speed":"5.52","Arrival Date":"03/13/2017","Arrival Time":"00:10:00","Arrival Dogs":"15","Elapsed Time":"10.22","Departure Date":"03/13/2017","Departure Time":"10:23:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.93","Speed":"5.76","Arrival Date":"03/13/2017","Arrival Time":"00:34:00","Arrival Dogs":"14","Elapsed Time":"0.08","Departure Date":"03/13/2017","Departure Time":"00:39:00","Departure Dogs":"13"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.25","Speed":"5.64","Arrival Date":"03/13/2017","Arrival Time":"00:49:00","Arrival Dogs":"13","Elapsed Time":"7.27","Departure Date":"03/13/2017","Departure Time":"08:05:00","Departure Dogs":"13"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.53","Speed":"5.92","Arrival Date":"03/13/2017","Arrival Time":"01:02:00","Arrival Dogs":"12","Elapsed Time":"6.75","Departure Date":"03/13/2017","Departure Time":"07:47:00","Departure Dogs":"12"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.35","Speed":"5.26","Arrival Date":"03/13/2017","Arrival Time":"01:45:00","Arrival Dogs":"16","Elapsed Time":"0.08","Departure Date":"03/13/2017","Departure Time":"01:50:00","Departure Dogs":"16"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.62","Speed":"4.62","Arrival Date":"03/13/2017","Arrival Time":"01:46:00","Arrival Dogs":"14","Elapsed Time":"9.73","Departure Date":"03/13/2017","Departure Time":"11:30:00","Departure Dogs":"13"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"15.27","Speed":"5.63","Arrival Date":"03/13/2017","Arrival Time":"01:59:00","Arrival Dogs":"10","Elapsed Time":"9.1","Departure Date":"03/13/2017","Departure Time":"11:05:00","Departure Dogs":"10"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.15","Speed":"5.33","Arrival Date":"03/13/2017","Arrival Time":"02:06:00","Arrival Dogs":"13","Elapsed Time":"0.1","Departure Date":"03/13/2017","Departure Time":"02:12:00","Departure Dogs":"13"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.1","Speed":"4.75","Arrival Date":"03/13/2017","Arrival Time":"02:11:00","Arrival Dogs":"12","Elapsed Time":"5.72","Departure Date":"03/13/2017","Departure Time":"07:54:00","Departure Dogs":"12"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.62","Speed":"5.88","Arrival Date":"03/13/2017","Arrival Time":"03:09:00","Arrival Dogs":"15","Elapsed Time":"0.18","Departure Date":"03/13/2017","Departure Time":"03:20:00","Departure Dogs":"15"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.88","Speed":"4.81","Arrival Date":"03/13/2017","Arrival Time":"03:09:00","Arrival Dogs":"12","Elapsed Time":"6.12","Departure Date":"03/13/2017","Departure Time":"09:16:00","Departure Dogs":"10"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"18.75","Speed":"4.59","Arrival Date":"03/13/2017","Arrival Time":"08:22:00","Arrival Dogs":"13","Elapsed Time":"6.3","Departure Date":"03/13/2017","Departure Time":"14:40:00","Departure Dogs":"13"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.93","Speed":"5.08","Arrival Date":"03/13/2017","Arrival Time":"08:32:00","Arrival Dogs":"13","Elapsed Time":"7.37","Departure Date":"03/13/2017","Departure Time":"15:54:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"17.08","Speed":"5.03","Arrival Date":"03/13/2017","Arrival Time":"08:35:00","Arrival Dogs":"13","Elapsed Time":"7.23","Departure Date":"03/13/2017","Departure Time":"15:49:00","Departure Dogs":"13"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"14.78","Speed":"5.82","Arrival Date":"03/13/2017","Arrival Time":"11:08:00","Arrival Dogs":"15","Elapsed Time":"6.63","Departure Date":"03/13/2017","Departure Time":"17:46:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"23.72","Speed":"3.63","Arrival Date":"03/13/2017","Arrival Time":"12:23:00","Arrival Dogs":"12","Elapsed Time":"7.43","Departure Date":"03/13/2017","Departure Time":"19:49:00","Departure Dogs":"12"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"19.6","Speed":"4.39","Arrival Date":"03/13/2017","Arrival Time":"13:40:00","Arrival Dogs":"11","Elapsed Time":"6.07","Departure Date":"03/13/2017","Departure Time":"19:44:00","Departure Dogs":"11"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"16.3","Speed":"5.28","Arrival Date":"03/13/2017","Arrival Time":"20:08:00","Arrival Dogs":"13","Elapsed Time":"8.97","Departure Date":"03/14/2017","Departure Time":"05:06:00","Departure Dogs":"13"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"20.92","Speed":"4.11","Arrival Date":"03/13/2017","Arrival Time":"22:38:00","Arrival Dogs":"12","Elapsed Time":"0.23","Departure Date":"03/13/2017","Departure Time":"22:52:00","Departure Dogs":"12"},
{"Number":"30","Name":"Ellen Halverson","Status":"Veteran","Country":"United States","Checkpoint":"Koyukuk","Latitude":"64.8431","Longitude":"-157.8039","Distance":"86","Time":"20.08","Speed":"4.28","Arrival Date":"03/14/2017","Arrival Time":"08:41:00","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2","Speed":"11","Arrival Date":"03/11/2017","Arrival Time":"15:45:00","Arrival Dogs":"13","Elapsed Time":"0.02","Departure Date":"03/11/2017","Departure Time":"15:46:00","Departure Dogs":"13"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.18","Speed":"10.08","Arrival Date":"03/11/2017","Arrival Time":"20:16:00","Arrival Dogs":"13","Elapsed Time":"0.02","Departure Date":"03/11/2017","Departure Time":"20:17:00","Departure Dogs":"13"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.27","Speed":"9.71","Arrival Date":"03/11/2017","Arrival Time":"20:46:00","Arrival Dogs":"13","Elapsed Time":"0.02","Departure Date":"03/11/2017","Departure Time":"20:47:00","Departure Dogs":"13"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.08","Speed":"10.56","Arrival Date":"03/11/2017","Arrival Time":"22:06:00","Arrival Dogs":"15","Elapsed Time":"0.1","Departure Date":"03/11/2017","Departure Time":"22:12:00","Departure Dogs":"15"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.22","Speed":"9.92","Arrival Date":"03/11/2017","Arrival Time":"22:39:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/11/2017","Departure Time":"22:40:00","Departure Dogs":"12"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.13","Speed":"10.31","Arrival Date":"03/11/2017","Arrival Time":"23:39:00","Arrival Dogs":"13","Elapsed Time":"6.73","Departure Date":"03/12/2017","Departure Time":"07:23:00","Departure Dogs":"12"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.5","Speed":"8.8","Arrival Date":"03/12/2017","Arrival Time":"01:16:00","Arrival Dogs":"12","Elapsed Time":"5.5","Departure Date":"03/12/2017","Departure Time":"07:46:00","Departure Dogs":"12"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.12","Speed":"10.39","Arrival Date":"03/12/2017","Arrival Time":"01:23:00","Arrival Dogs":"16","Elapsed Time":"0.05","Departure Date":"03/12/2017","Departure Time":"01:26:00","Departure Dogs":"16"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.67","Speed":"8.25","Arrival Date":"03/12/2017","Arrival Time":"03:16:00","Arrival Dogs":"13","Elapsed Time":"4.47","Departure Date":"03/12/2017","Departure Time":"07:44:00","Departure Dogs":"12"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.5","Speed":"8.8","Arrival Date":"03/12/2017","Arrival Time":"04:17:00","Arrival Dogs":"14","Elapsed Time":"0.13","Departure Date":"03/12/2017","Departure Time":"04:25:00","Departure Dogs":"13"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.42","Speed":"9.1","Arrival Date":"03/12/2017","Arrival Time":"04:17:00","Arrival Dogs":"14","Elapsed Time":"4.42","Departure Date":"03/12/2017","Departure Time":"08:42:00","Departure Dogs":"14"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.3","Speed":"9.57","Arrival Date":"03/12/2017","Arrival Time":"04:21:00","Arrival Dogs":"13","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"04:22:00","Departure Dogs":"13"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.23","Speed":"9.85","Arrival Date":"03/12/2017","Arrival Time":"05:38:00","Arrival Dogs":"14","Elapsed Time":"0.2","Departure Date":"03/12/2017","Departure Time":"05:50:00","Departure Dogs":"14"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.32","Speed":"9.5","Arrival Date":"03/12/2017","Arrival Time":"06:35:00","Arrival Dogs":"12","Elapsed Time":"0.05","Departure Date":"03/12/2017","Departure Time":"06:38:00","Departure Dogs":"12"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.28","Speed":"9.64","Arrival Date":"03/12/2017","Arrival Time":"07:13:00","Arrival Dogs":"14","Elapsed Time":"0.05","Departure Date":"03/12/2017","Departure Time":"07:16:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.37","Speed":"9.3","Arrival Date":"03/12/2017","Arrival Time":"07:24:00","Arrival Dogs":"11","Elapsed Time":"0.22","Departure Date":"03/12/2017","Departure Time":"07:37:00","Departure Dogs":"10"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.43","Speed":"9.04","Arrival Date":"03/12/2017","Arrival Time":"07:39:00","Arrival Dogs":"12","Elapsed Time":"1.7","Departure Date":"03/12/2017","Departure Time":"09:21:00","Departure Dogs":"12"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.42","Speed":"9.1","Arrival Date":"03/12/2017","Arrival Time":"08:10:00","Arrival Dogs":"11","Elapsed Time":"0.08","Departure Date":"03/12/2017","Departure Time":"08:15:00","Departure Dogs":"11"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/12/2017","Arrival Time":"08:51:00","Arrival Dogs":"13","Elapsed Time":"5.63","Departure Date":"03/12/2017","Departure Time":"14:29:00","Departure Dogs":"12"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.22","Speed":"9.92","Arrival Date":"03/12/2017","Arrival Time":"09:31:00","Arrival Dogs":"9","Elapsed Time":"5.08","Departure Date":"03/12/2017","Departure Time":"14:36:00","Departure Dogs":"9"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.18","Speed":"10.08","Arrival Date":"03/12/2017","Arrival Time":"09:56:00","Arrival Dogs":"14","Elapsed Time":"0.03","Departure Date":"03/12/2017","Departure Time":"09:58:00","Departure Dogs":"14"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.43","Speed":"9.04","Arrival Date":"03/12/2017","Arrival Time":"09:56:00","Arrival Dogs":"10","Elapsed Time":"0.07","Departure Date":"03/12/2017","Departure Time":"10:00:00","Departure Dogs":"10"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.22","Speed":"9.92","Arrival Date":"03/12/2017","Arrival Time":"10:01:00","Arrival Dogs":"11","Elapsed Time":"0.03","Departure Date":"03/12/2017","Departure Time":"10:03:00","Departure Dogs":"11"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.4","Speed":"9.17","Arrival Date":"03/12/2017","Arrival Time":"10:03:00","Arrival Dogs":"11","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"10:04:00","Departure Dogs":"11"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.07","Speed":"10.65","Arrival Date":"03/12/2017","Arrival Time":"10:20:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"10:21:00","Departure Dogs":"12"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.13","Speed":"10.31","Arrival Date":"03/12/2017","Arrival Time":"10:25:00","Arrival Dogs":"11","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"10:26:00","Departure Dogs":"11"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.42","Speed":"9.1","Arrival Date":"03/12/2017","Arrival Time":"10:25:00","Arrival Dogs":"12","Elapsed Time":"0.03","Departure Date":"03/12/2017","Departure Time":"10:27:00","Departure Dogs":"12"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.15","Speed":"10.23","Arrival Date":"03/12/2017","Arrival Time":"10:57:00","Arrival Dogs":"14","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"10:58:00","Departure Dogs":"14"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.2","Speed":"10","Arrival Date":"03/12/2017","Arrival Time":"11:30:00","Arrival Dogs":"13","Elapsed Time":"0.03","Departure Date":"03/12/2017","Departure Time":"11:32:00","Departure Dogs":"13"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/12/2017","Arrival Time":"12:00:00","Arrival Dogs":"13","Elapsed Time":"0.77","Departure Date":"03/12/2017","Departure Time":"12:46:00","Departure Dogs":"13"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.63","Speed":"8.35","Arrival Date":"03/12/2017","Arrival Time":"12:44:00","Arrival Dogs":"12","Elapsed Time":"0.05","Departure Date":"03/12/2017","Departure Time":"12:47:00","Departure Dogs":"12"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.22","Speed":"9.92","Arrival Date":"03/12/2017","Arrival Time":"13:28:00","Arrival Dogs":"14","Elapsed Time":"0.1","Departure Date":"03/12/2017","Departure Time":"13:34:00","Departure Dogs":"14"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.12","Speed":"10.39","Arrival Date":"03/12/2017","Arrival Time":"13:36:00","Arrival Dogs":"13","Elapsed Time":"8.45","Departure Date":"03/12/2017","Departure Time":"22:03:00","Departure Dogs":"13"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.4","Speed":"9.17","Arrival Date":"03/12/2017","Arrival Time":"15:34:00","Arrival Dogs":"11","Elapsed Time":"5.27","Departure Date":"03/12/2017","Departure Time":"20:50:00","Departure Dogs":"11"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.28","Speed":"9.64","Arrival Date":"03/12/2017","Arrival Time":"16:16:00","Arrival Dogs":"13","Elapsed Time":"5.55","Departure Date":"03/12/2017","Departure Time":"21:49:00","Departure Dogs":"13"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.33","Speed":"9.43","Arrival Date":"03/12/2017","Arrival Time":"16:55:00","Arrival Dogs":"12","Elapsed Time":"4.77","Departure Date":"03/12/2017","Departure Time":"21:41:00","Departure Dogs":"11"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/12/2017","Arrival Time":"18:22:00","Arrival Dogs":"15","Elapsed Time":"1.67","Departure Date":"03/12/2017","Departure Time":"20:02:00","Departure Dogs":"15"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/12/2017","Arrival Time":"18:37:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/12/2017","Departure Time":"18:38:00","Departure Dogs":"12"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.7","Speed":"8.15","Arrival Date":"03/12/2017","Arrival Time":"19:48:00","Arrival Dogs":"12","Elapsed Time":"7.95","Departure Date":"03/13/2017","Departure Time":"03:45:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.28","Speed":"9.64","Arrival Date":"03/12/2017","Arrival Time":"20:02:00","Arrival Dogs":"14","Elapsed Time":"9.67","Departure Date":"03/13/2017","Departure Time":"05:42:00","Departure Dogs":"14"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.18","Speed":"10.08","Arrival Date":"03/12/2017","Arrival Time":"21:12:00","Arrival Dogs":"12","Elapsed Time":"0.67","Departure Date":"03/12/2017","Departure Time":"21:52:00","Departure Dogs":"12"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.15","Speed":"10.23","Arrival Date":"03/12/2017","Arrival Time":"21:20:00","Arrival Dogs":"13","Elapsed Time":"0.08","Departure Date":"03/12/2017","Departure Time":"21:25:00","Departure Dogs":"13"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/12/2017","Arrival Time":"21:20:00","Arrival Dogs":"10","Elapsed Time":"0.08","Departure Date":"03/12/2017","Departure Time":"21:25:00","Departure Dogs":"10"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.2","Speed":"10","Arrival Date":"03/12/2017","Arrival Time":"22:57:00","Arrival Dogs":"15","Elapsed Time":"1.83","Departure Date":"03/13/2017","Departure Time":"00:47:00","Departure Dogs":"15"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.47","Speed":"8.92","Arrival Date":"03/12/2017","Arrival Time":"23:40:00","Arrival Dogs":"11","Elapsed Time":"0.07","Departure Date":"03/12/2017","Departure Time":"23:44:00","Departure Dogs":"11"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.35","Speed":"9.36","Arrival Date":"03/13/2017","Arrival Time":"00:26:00","Arrival Dogs":"10","Elapsed Time":"5.43","Departure Date":"03/13/2017","Departure Time":"05:52:00","Departure Dogs":"10"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.35","Speed":"9.36","Arrival Date":"03/13/2017","Arrival Time":"00:53:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/13/2017","Departure Time":"00:54:00","Departure Dogs":"12"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.4","Speed":"9.17","Arrival Date":"03/13/2017","Arrival Time":"03:03:00","Arrival Dogs":"13","Elapsed Time":"8.57","Departure Date":"03/13/2017","Departure Time":"11:37:00","Departure Dogs":"13"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.5","Speed":"8.8","Arrival Date":"03/13/2017","Arrival Time":"04:20:00","Arrival Dogs":"16","Elapsed Time":"8.92","Departure Date":"03/13/2017","Departure Time":"13:15:00","Departure Dogs":"16"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.97","Speed":"7.42","Arrival Date":"03/13/2017","Arrival Time":"05:10:00","Arrival Dogs":"13","Elapsed Time":"10.05","Departure Date":"03/13/2017","Departure Time":"15:13:00","Departure Dogs":"13"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.35","Speed":"9.36","Arrival Date":"03/13/2017","Arrival Time":"05:41:00","Arrival Dogs":"15","Elapsed Time":"9.35","Departure Date":"03/13/2017","Departure Time":"15:02:00","Departure Dogs":"15"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.07","Speed":"10.65","Arrival Date":"03/13/2017","Arrival Time":"09:51:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/13/2017","Departure Time":"09:52:00","Departure Dogs":"12"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.15","Speed":"10.23","Arrival Date":"03/13/2017","Arrival Time":"10:14:00","Arrival Dogs":"13","Elapsed Time":"0.03","Departure Date":"03/13/2017","Departure Time":"10:16:00","Departure Dogs":"13"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.37","Speed":"9.3","Arrival Date":"03/13/2017","Arrival Time":"10:16:00","Arrival Dogs":"12","Elapsed Time":"0.03","Departure Date":"03/13/2017","Departure Time":"10:18:00","Departure Dogs":"12"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.05","Speed":"10.73","Arrival Date":"03/13/2017","Arrival Time":"11:15:00","Arrival Dogs":"14","Elapsed Time":"0.1","Departure Date":"03/13/2017","Departure Time":"11:21:00","Departure Dogs":"14"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.58","Speed":"8.52","Arrival Date":"03/13/2017","Arrival Time":"11:51:00","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"03/13/2017","Departure Time":"11:51:00","Departure Dogs":"10"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.05","Speed":"10.73","Arrival Date":"03/13/2017","Arrival Time":"12:26:00","Arrival Dogs":"14","Elapsed Time":"0.03","Departure Date":"03/13/2017","Departure Time":"12:28:00","Departure Dogs":"14"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.3","Speed":"9.57","Arrival Date":"03/13/2017","Arrival Time":"13:23:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/13/2017","Departure Time":"13:24:00","Departure Dogs":"10"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.27","Speed":"9.71","Arrival Date":"03/13/2017","Arrival Time":"13:46:00","Arrival Dogs":"13","Elapsed Time":"2.9","Departure Date":"03/13/2017","Departure Time":"16:40:00","Departure Dogs":"13"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.55","Speed":"8.63","Arrival Date":"03/13/2017","Arrival Time":"17:13:00","Arrival Dogs":"13","Elapsed Time":"0.1","Departure Date":"03/13/2017","Departure Time":"17:19:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.02","Speed":"10.91","Arrival Date":"03/13/2017","Arrival Time":"17:50:00","Arrival Dogs":"13","Elapsed Time":"0.07","Departure Date":"03/13/2017","Departure Time":"17:54:00","Departure Dogs":"13"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.02","Speed":"10.91","Arrival Date":"03/13/2017","Arrival Time":"17:55:00","Arrival Dogs":"13","Elapsed Time":"0.07","Departure Date":"03/13/2017","Departure Time":"17:59:00","Departure Dogs":"13"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.17","Speed":"10.15","Arrival Date":"03/13/2017","Arrival Time":"21:54:00","Arrival Dogs":"11","Elapsed Time":"8.03","Departure Date":"03/14/2017","Departure Time":"05:56:00","Departure Dogs":"10"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"4.13","Speed":"5.32","Arrival Date":"03/13/2017","Arrival Time":"21:54:00","Arrival Dogs":"13","Elapsed Time":"8.93","Departure Date":"03/14/2017","Departure Time":"06:50:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.45","Speed":"8.98","Arrival Date":"03/13/2017","Arrival Time":"22:16:00","Arrival Dogs":"12","Elapsed Time":"7.32","Departure Date":"03/14/2017","Departure Time":"05:35:00","Departure Dogs":"12"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.4","Speed":"9.17","Arrival Date":"03/14/2017","Arrival Time":"01:16:00","Arrival Dogs":"12","Elapsed Time":"9.47","Departure Date":"03/14/2017","Departure Time":"10:44:00","Departure Dogs":"12"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Nulato","Latitude":"64.7188","Longitude":"-158.1046","Distance":"22","Time":"2.12","Speed":"10.39","Arrival Date":"03/14/2017","Arrival Time":"07:13:00","Arrival Dogs":"13","Elapsed Time":"0.18","Departure Date":"03/14/2017","Departure Time":"07:24:00","Departure Dogs":"13"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.9","Speed":"12.05","Arrival Date":"03/11/2017","Arrival Time":"19:40:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/12/2017","Departure Time":"04:40:00","Departure Dogs":"12"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.23","Speed":"11.1","Arrival Date":"03/12/2017","Arrival Time":"00:31:00","Arrival Dogs":"13","Elapsed Time":"3.95","Departure Date":"03/12/2017","Departure Time":"05:28:00","Departure Dogs":"13"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.27","Speed":"11.02","Arrival Date":"03/12/2017","Arrival Time":"01:03:00","Arrival Dogs":"13","Elapsed Time":"2.7","Departure Date":"03/12/2017","Departure Time":"04:45:00","Departure Dogs":"12"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.72","Speed":"12.65","Arrival Date":"03/12/2017","Arrival Time":"01:55:00","Arrival Dogs":"15","Elapsed Time":"3.67","Departure Date":"03/12/2017","Departure Time":"06:35:00","Departure Dogs":"15"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4","Speed":"11.75","Arrival Date":"03/12/2017","Arrival Time":"03:40:00","Arrival Dogs":"12","Elapsed Time":"3.17","Departure Date":"03/12/2017","Departure Time":"06:50:00","Departure Dogs":"12"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.97","Speed":"11.85","Arrival Date":"03/12/2017","Arrival Time":"06:24:00","Arrival Dogs":"16","Elapsed Time":"4.03","Departure Date":"03/12/2017","Departure Time":"10:26:00","Departure Dogs":"16"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.5","Speed":"10.44","Arrival Date":"03/12/2017","Arrival Time":"08:52:00","Arrival Dogs":"13","Elapsed Time":"0.35","Departure Date":"03/12/2017","Departure Time":"09:13:00","Departure Dogs":"13"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"5.08","Speed":"9.25","Arrival Date":"03/12/2017","Arrival Time":"09:30:00","Arrival Dogs":"13","Elapsed Time":"6.12","Departure Date":"03/12/2017","Departure Time":"15:37:00","Departure Dogs":"12"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.15","Speed":"11.33","Arrival Date":"03/12/2017","Arrival Time":"09:59:00","Arrival Dogs":"14","Elapsed Time":"5.38","Departure Date":"03/12/2017","Departure Time":"15:22:00","Departure Dogs":"14"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.1","Speed":"11.46","Arrival Date":"03/12/2017","Arrival Time":"10:44:00","Arrival Dogs":"12","Elapsed Time":"4.05","Departure Date":"03/12/2017","Departure Time":"14:47:00","Departure Dogs":"12"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.77","Speed":"12.48","Arrival Date":"03/12/2017","Arrival Time":"11:09:00","Arrival Dogs":"12","Elapsed Time":"0.27","Departure Date":"03/12/2017","Departure Time":"11:25:00","Departure Dogs":"12"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.05","Speed":"11.6","Arrival Date":"03/12/2017","Arrival Time":"11:19:00","Arrival Dogs":"13","Elapsed Time":"3.88","Departure Date":"03/12/2017","Departure Time":"15:12:00","Departure Dogs":"12"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.2","Speed":"11.19","Arrival Date":"03/12/2017","Arrival Time":"11:49:00","Arrival Dogs":"10","Elapsed Time":"8.02","Departure Date":"03/12/2017","Departure Time":"19:50:00","Departure Dogs":"9"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.38","Speed":"10.72","Arrival Date":"03/12/2017","Arrival Time":"12:07:00","Arrival Dogs":"12","Elapsed Time":"5.42","Departure Date":"03/12/2017","Departure Time":"17:32:00","Departure Dogs":"12"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.52","Speed":"10.41","Arrival Date":"03/12/2017","Arrival Time":"12:17:00","Arrival Dogs":"12","Elapsed Time":"0.1","Departure Date":"03/12/2017","Departure Time":"12:23:00","Departure Dogs":"12"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.47","Speed":"10.52","Arrival Date":"03/12/2017","Arrival Time":"12:43:00","Arrival Dogs":"11","Elapsed Time":"4.78","Departure Date":"03/12/2017","Departure Time":"17:30:00","Departure Dogs":"9"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.33","Speed":"10.85","Arrival Date":"03/12/2017","Arrival Time":"13:02:00","Arrival Dogs":"14","Elapsed Time":"0.22","Departure Date":"03/12/2017","Departure Time":"13:15:00","Departure Dogs":"12"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.48","Speed":"10.48","Arrival Date":"03/12/2017","Arrival Time":"13:50:00","Arrival Dogs":"12","Elapsed Time":"4.42","Departure Date":"03/12/2017","Departure Time":"18:15:00","Departure Dogs":"10"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.87","Speed":"12.16","Arrival Date":"03/12/2017","Arrival Time":"14:13:00","Arrival Dogs":"12","Elapsed Time":"5.57","Departure Date":"03/12/2017","Departure Time":"19:47:00","Departure Dogs":"12"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.25","Speed":"11.06","Arrival Date":"03/12/2017","Arrival Time":"14:15:00","Arrival Dogs":"10","Elapsed Time":"4.5","Departure Date":"03/12/2017","Departure Time":"18:45:00","Departure Dogs":"10"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.32","Speed":"10.89","Arrival Date":"03/12/2017","Arrival Time":"14:17:00","Arrival Dogs":"14","Elapsed Time":"8.12","Departure Date":"03/12/2017","Departure Time":"22:24:00","Departure Dogs":"13"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.25","Speed":"11.06","Arrival Date":"03/12/2017","Arrival Time":"14:18:00","Arrival Dogs":"11","Elapsed Time":"8.03","Departure Date":"03/12/2017","Departure Time":"22:20:00","Departure Dogs":"11"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.1","Speed":"11.46","Arrival Date":"03/12/2017","Arrival Time":"14:32:00","Arrival Dogs":"11","Elapsed Time":"4.97","Departure Date":"03/12/2017","Departure Time":"19:30:00","Departure Dogs":"9"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.52","Speed":"10.41","Arrival Date":"03/12/2017","Arrival Time":"14:35:00","Arrival Dogs":"11","Elapsed Time":"5.07","Departure Date":"03/12/2017","Departure Time":"19:39:00","Departure Dogs":"10"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.72","Speed":"9.96","Arrival Date":"03/12/2017","Arrival Time":"15:10:00","Arrival Dogs":"12","Elapsed Time":"4.62","Departure Date":"03/12/2017","Departure Time":"19:47:00","Departure Dogs":"10"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.37","Speed":"10.76","Arrival Date":"03/12/2017","Arrival Time":"15:20:00","Arrival Dogs":"14","Elapsed Time":"5.62","Departure Date":"03/12/2017","Departure Time":"20:57:00","Departure Dogs":"10"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.17","Speed":"11.28","Arrival Date":"03/12/2017","Arrival Time":"15:42:00","Arrival Dogs":"13","Elapsed Time":"5.97","Departure Date":"03/12/2017","Departure Time":"21:40:00","Departure Dogs":"12"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.13","Speed":"11.37","Arrival Date":"03/12/2017","Arrival Time":"16:54:00","Arrival Dogs":"13","Elapsed Time":"2.77","Departure Date":"03/12/2017","Departure Time":"19:40:00","Departure Dogs":"13"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.42","Speed":"10.64","Arrival Date":"03/12/2017","Arrival Time":"17:12:00","Arrival Dogs":"12","Elapsed Time":"2.63","Departure Date":"03/12/2017","Departure Time":"19:50:00","Departure Dogs":"11"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.43","Speed":"10.6","Arrival Date":"03/12/2017","Arrival Time":"18:00:00","Arrival Dogs":"14","Elapsed Time":"4.98","Departure Date":"03/12/2017","Departure Time":"22:59:00","Departure Dogs":"13"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.1","Speed":"11.46","Arrival Date":"03/12/2017","Arrival Time":"18:35:00","Arrival Dogs":"12","Elapsed Time":"4.05","Departure Date":"03/12/2017","Departure Time":"22:38:00","Departure Dogs":"12"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.07","Speed":"11.56","Arrival Date":"03/12/2017","Arrival Time":"18:40:00","Arrival Dogs":"9","Elapsed Time":"5.15","Departure Date":"03/12/2017","Departure Time":"23:49:00","Departure Dogs":"9"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.98","Speed":"11.8","Arrival Date":"03/12/2017","Arrival Time":"22:37:00","Arrival Dogs":"12","Elapsed Time":"6.55","Departure Date":"03/13/2017","Departure Time":"05:10:00","Departure Dogs":"11"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.17","Speed":"11.28","Arrival Date":"03/13/2017","Arrival Time":"00:12:00","Arrival Dogs":"15","Elapsed Time":"7.22","Departure Date":"03/13/2017","Departure Time":"07:25:00","Departure Dogs":"15"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.08","Speed":"11.51","Arrival Date":"03/13/2017","Arrival Time":"00:55:00","Arrival Dogs":"11","Elapsed Time":"6.5","Departure Date":"03/13/2017","Departure Time":"07:25:00","Departure Dogs":"11"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.07","Speed":"11.56","Arrival Date":"03/13/2017","Arrival Time":"01:45:00","Arrival Dogs":"11","Elapsed Time":"4.33","Departure Date":"03/13/2017","Departure Time":"06:05:00","Departure Dogs":"11"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.35","Speed":"10.8","Arrival Date":"03/13/2017","Arrival Time":"01:46:00","Arrival Dogs":"13","Elapsed Time":"5.42","Departure Date":"03/13/2017","Departure Time":"07:11:00","Departure Dogs":"13"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.35","Speed":"10.8","Arrival Date":"03/13/2017","Arrival Time":"01:46:00","Arrival Dogs":"10","Elapsed Time":"5.42","Departure Date":"03/13/2017","Departure Time":"07:11:00","Departure Dogs":"10"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.95","Speed":"11.9","Arrival Date":"03/13/2017","Arrival Time":"02:00:00","Arrival Dogs":"13","Elapsed Time":"0.07","Departure Date":"03/13/2017","Departure Time":"02:04:00","Departure Dogs":"13"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.22","Speed":"11.15","Arrival Date":"03/13/2017","Arrival Time":"02:05:00","Arrival Dogs":"12","Elapsed Time":"8.03","Departure Date":"03/13/2017","Departure Time":"10:07:00","Departure Dogs":"12"},
{"Number":"60","Name":"Dave Branholm","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.42","Speed":"10.64","Arrival Date":"03/13/2017","Arrival Time":"02:14:00","Arrival Dogs":"13","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.27","Speed":"11.02","Arrival Date":"03/13/2017","Arrival Time":"04:00:00","Arrival Dogs":"11","Elapsed Time":"5.58","Departure Date":"03/13/2017","Departure Time":"09:35:00","Departure Dogs":"11"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.97","Speed":"11.85","Arrival Date":"03/13/2017","Arrival Time":"04:45:00","Arrival Dogs":"15","Elapsed Time":"4.68","Departure Date":"03/13/2017","Departure Time":"09:26:00","Departure Dogs":"15"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.43","Speed":"10.6","Arrival Date":"03/13/2017","Arrival Time":"05:20:00","Arrival Dogs":"12","Elapsed Time":"6.17","Departure Date":"03/13/2017","Departure Time":"11:30:00","Departure Dogs":"12"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.1","Speed":"11.46","Arrival Date":"03/13/2017","Arrival Time":"07:51:00","Arrival Dogs":"12","Elapsed Time":"4.73","Departure Date":"03/13/2017","Departure Time":"12:35:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.13","Speed":"11.37","Arrival Date":"03/13/2017","Arrival Time":"09:50:00","Arrival Dogs":"14","Elapsed Time":"6.83","Departure Date":"03/13/2017","Departure Time":"16:40:00","Departure Dogs":"14"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"5.13","Speed":"9.16","Arrival Date":"03/13/2017","Arrival Time":"11:00:00","Arrival Dogs":"10","Elapsed Time":"11.13","Departure Date":"03/13/2017","Departure Time":"22:08:00","Departure Dogs":"9"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.45","Speed":"10.56","Arrival Date":"03/13/2017","Arrival Time":"14:19:00","Arrival Dogs":"12","Elapsed Time":"8.02","Departure Date":"03/13/2017","Departure Time":"22:20:00","Departure Dogs":"11"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.3","Speed":"10.93","Arrival Date":"03/13/2017","Arrival Time":"14:34:00","Arrival Dogs":"13","Elapsed Time":"8.05","Departure Date":"03/13/2017","Departure Time":"22:37:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.32","Speed":"10.89","Arrival Date":"03/13/2017","Arrival Time":"14:37:00","Arrival Dogs":"12","Elapsed Time":"7.95","Departure Date":"03/13/2017","Departure Time":"22:34:00","Departure Dogs":"11"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.03","Speed":"11.65","Arrival Date":"03/13/2017","Arrival Time":"15:23:00","Arrival Dogs":"14","Elapsed Time":"6.62","Departure Date":"03/13/2017","Departure Time":"22:00:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.22","Speed":"11.15","Arrival Date":"03/13/2017","Arrival Time":"15:50:00","Arrival Dogs":"13","Elapsed Time":"7.42","Departure Date":"03/13/2017","Departure Time":"23:15:00","Departure Dogs":"13"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.75","Speed":"12.53","Arrival Date":"03/13/2017","Arrival Time":"16:13:00","Arrival Dogs":"14","Elapsed Time":"7.03","Departure Date":"03/13/2017","Departure Time":"23:15:00","Departure Dogs":"14"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.98","Speed":"9.43","Arrival Date":"03/13/2017","Arrival Time":"16:50:00","Arrival Dogs":"10","Elapsed Time":"12.75","Departure Date":"03/14/2017","Departure Time":"05:35:00","Departure Dogs":"10"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.37","Speed":"10.76","Arrival Date":"03/13/2017","Arrival Time":"17:46:00","Arrival Dogs":"10","Elapsed Time":"6.4","Departure Date":"03/14/2017","Departure Time":"00:10:00","Departure Dogs":"9"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.47","Speed":"10.52","Arrival Date":"03/13/2017","Arrival Time":"19:30:00","Arrival Dogs":"15","Elapsed Time":"9.23","Departure Date":"03/14/2017","Departure Time":"04:44:00","Departure Dogs":"14"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.72","Speed":"9.96","Arrival Date":"03/13/2017","Arrival Time":"19:56:00","Arrival Dogs":"13","Elapsed Time":"6.07","Departure Date":"03/14/2017","Departure Time":"02:00:00","Departure Dogs":"13"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"6.68","Speed":"7.03","Arrival Date":"03/13/2017","Arrival Time":"19:56:00","Arrival Dogs":"16","Elapsed Time":"6.07","Departure Date":"03/14/2017","Departure Time":"02:00:00","Departure Dogs":"16"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.03","Speed":"11.65","Arrival Date":"03/13/2017","Arrival Time":"20:42:00","Arrival Dogs":"13","Elapsed Time":"8.03","Departure Date":"03/14/2017","Departure Time":"04:44:00","Departure Dogs":"13"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.47","Speed":"10.52","Arrival Date":"03/13/2017","Arrival Time":"21:47:00","Arrival Dogs":"13","Elapsed Time":"7.52","Departure Date":"03/14/2017","Departure Time":"05:18:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.18","Speed":"11.24","Arrival Date":"03/13/2017","Arrival Time":"22:05:00","Arrival Dogs":"13","Elapsed Time":"7.38","Departure Date":"03/14/2017","Departure Time":"05:28:00","Departure Dogs":"11"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.13","Speed":"11.37","Arrival Date":"03/13/2017","Arrival Time":"22:07:00","Arrival Dogs":"13","Elapsed Time":"7.25","Departure Date":"03/14/2017","Departure Time":"05:22:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.22","Speed":"11.15","Arrival Date":"03/14/2017","Arrival Time":"09:48:00","Arrival Dogs":"12","Elapsed Time":"8.37","Departure Date":"03/14/2017","Departure Time":"18:10:00","Departure Dogs":"12"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.05","Speed":"11.6","Arrival Date":"03/14/2017","Arrival Time":"09:59:00","Arrival Dogs":"10","Elapsed Time":"8.17","Departure Date":"03/14/2017","Departure Time":"18:09:00","Departure Dogs":"9"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.08","Speed":"11.51","Arrival Date":"03/14/2017","Arrival Time":"10:55:00","Arrival Dogs":"13","Elapsed Time":"7.43","Departure Date":"03/14/2017","Departure Time":"18:21:00","Departure Dogs":"12"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"3.8","Speed":"12.37","Arrival Date":"03/14/2017","Arrival Time":"11:12:00","Arrival Dogs":"13","Elapsed Time":"8.1","Departure Date":"03/14/2017","Departure Time":"19:18:00","Departure Dogs":"13"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Kaltag","Latitude":"64.3138","Longitude":"-158.7257","Distance":"47","Time":"4.18","Speed":"11.24","Arrival Date":"03/14/2017","Arrival Time":"14:55:00","Arrival Dogs":"12","Elapsed Time":"2.28","Departure Date":"03/14/2017","Departure Time":"17:12:00","Departure Dogs":"10"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.62","Speed":"8.01","Arrival Date":"03/12/2017","Arrival Time":"16:05:00","Arrival Dogs":"13","Elapsed Time":"5.13","Departure Date":"03/12/2017","Departure Time":"21:13:00","Departure Dogs":"13"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"9.55","Speed":"8.9","Arrival Date":"03/12/2017","Arrival Time":"16:08:00","Arrival Dogs":"15","Elapsed Time":"5.05","Departure Date":"03/12/2017","Departure Time":"21:11:00","Departure Dogs":"13"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"11.72","Speed":"7.25","Arrival Date":"03/12/2017","Arrival Time":"16:23:00","Arrival Dogs":"12","Elapsed Time":"0.08","Departure Date":"03/12/2017","Departure Time":"16:28:00","Departure Dogs":"12"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"12","Speed":"7.08","Arrival Date":"03/12/2017","Arrival Time":"16:45:00","Arrival Dogs":"12","Elapsed Time":"3.85","Departure Date":"03/12/2017","Departure Time":"20:36:00","Departure Dogs":"12"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.8","Speed":"6.16","Arrival Date":"03/12/2017","Arrival Time":"20:38:00","Arrival Dogs":"12","Elapsed Time":"0.17","Departure Date":"03/12/2017","Departure Time":"20:48:00","Departure Dogs":"10"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.2","Speed":"6.44","Arrival Date":"03/12/2017","Arrival Time":"23:38:00","Arrival Dogs":"16","Elapsed Time":"0.15","Departure Date":"03/12/2017","Departure Time":"23:47:00","Departure Dogs":"16"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.83","Speed":"5.37","Arrival Date":"03/13/2017","Arrival Time":"01:03:00","Arrival Dogs":"13","Elapsed Time":"4","Departure Date":"03/13/2017","Departure Time":"05:03:00","Departure Dogs":"12"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.28","Speed":"5.95","Arrival Date":"03/13/2017","Arrival Time":"01:42:00","Arrival Dogs":"12","Elapsed Time":"3.85","Departure Date":"03/13/2017","Departure Time":"05:33:00","Departure Dogs":"11"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.8","Speed":"6.16","Arrival Date":"03/13/2017","Arrival Time":"04:35:00","Arrival Dogs":"12","Elapsed Time":"3.88","Departure Date":"03/13/2017","Departure Time":"08:28:00","Departure Dogs":"12"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"11.28","Speed":"7.53","Arrival Date":"03/13/2017","Arrival Time":"04:49:00","Arrival Dogs":"12","Elapsed Time":"4.9","Departure Date":"03/13/2017","Departure Time":"09:43:00","Departure Dogs":"11"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.45","Speed":"5.17","Arrival Date":"03/13/2017","Arrival Time":"04:50:00","Arrival Dogs":"12","Elapsed Time":"5.35","Departure Date":"03/13/2017","Departure Time":"10:11:00","Departure Dogs":"11"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.75","Speed":"5.4","Arrival Date":"03/13/2017","Arrival Time":"05:00:00","Arrival Dogs":"12","Elapsed Time":"4.67","Departure Date":"03/13/2017","Departure Time":"09:40:00","Departure Dogs":"12"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"9.35","Speed":"9.09","Arrival Date":"03/13/2017","Arrival Time":"05:08:00","Arrival Dogs":"12","Elapsed Time":"5.25","Departure Date":"03/13/2017","Departure Time":"10:23:00","Departure Dogs":"11"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"11.87","Speed":"7.16","Arrival Date":"03/13/2017","Arrival Time":"05:22:00","Arrival Dogs":"9","Elapsed Time":"4.25","Departure Date":"03/13/2017","Departure Time":"09:37:00","Departure Dogs":"9"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.32","Speed":"5.94","Arrival Date":"03/13/2017","Arrival Time":"05:31:00","Arrival Dogs":"12","Elapsed Time":"0.23","Departure Date":"03/13/2017","Departure Time":"05:45:00","Departure Dogs":"11"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.02","Speed":"6.06","Arrival Date":"03/13/2017","Arrival Time":"05:38:00","Arrival Dogs":"12","Elapsed Time":"3.62","Departure Date":"03/13/2017","Departure Time":"09:15:00","Departure Dogs":"12"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.88","Speed":"5.71","Arrival Date":"03/13/2017","Arrival Time":"06:15:00","Arrival Dogs":"14","Elapsed Time":"0.08","Departure Date":"03/13/2017","Departure Time":"06:20:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.73","Speed":"7.92","Arrival Date":"03/13/2017","Arrival Time":"06:34:00","Arrival Dogs":"9","Elapsed Time":"4.62","Departure Date":"03/13/2017","Departure Time":"11:11:00","Departure Dogs":"9"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.38","Speed":"8.19","Arrival Date":"03/13/2017","Arrival Time":"07:20:00","Arrival Dogs":"10","Elapsed Time":"5.88","Departure Date":"03/13/2017","Departure Time":"13:13:00","Departure Dogs":"10"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"12.48","Speed":"6.81","Arrival Date":"03/13/2017","Arrival Time":"08:08:00","Arrival Dogs":"10","Elapsed Time":"4.1","Departure Date":"03/13/2017","Departure Time":"12:14:00","Departure Dogs":"10"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.08","Speed":"6.04","Arrival Date":"03/13/2017","Arrival Time":"08:20:00","Arrival Dogs":"10","Elapsed Time":"3.67","Departure Date":"03/13/2017","Departure Time":"12:00:00","Departure Dogs":"9"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.13","Speed":"8.39","Arrival Date":"03/13/2017","Arrival Time":"08:28:00","Arrival Dogs":"11","Elapsed Time":"3.45","Departure Date":"03/13/2017","Departure Time":"11:55:00","Departure Dogs":"11"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"9.07","Speed":"9.38","Arrival Date":"03/13/2017","Arrival Time":"08:53:00","Arrival Dogs":"9","Elapsed Time":"5.55","Departure Date":"03/13/2017","Departure Time":"14:26:00","Departure Dogs":"9"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.48","Speed":"6.3","Arrival Date":"03/13/2017","Arrival Time":"08:59:00","Arrival Dogs":"9","Elapsed Time":"4.42","Departure Date":"03/13/2017","Departure Time":"13:24:00","Departure Dogs":"9"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.25","Speed":"5.96","Arrival Date":"03/13/2017","Arrival Time":"09:00:00","Arrival Dogs":"10","Elapsed Time":"4.55","Departure Date":"03/13/2017","Departure Time":"13:33:00","Departure Dogs":"10"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"11.5","Speed":"7.39","Arrival Date":"03/13/2017","Arrival Time":"09:54:00","Arrival Dogs":"13","Elapsed Time":"4.75","Departure Date":"03/13/2017","Departure Time":"14:39:00","Departure Dogs":"12"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.22","Speed":"5.98","Arrival Date":"03/13/2017","Arrival Time":"10:00:00","Arrival Dogs":"10","Elapsed Time":"2.35","Departure Date":"03/13/2017","Departure Time":"12:21:00","Departure Dogs":"10"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.78","Speed":"6.17","Arrival Date":"03/13/2017","Arrival Time":"12:25:00","Arrival Dogs":"12","Elapsed Time":"4.98","Departure Date":"03/13/2017","Departure Time":"17:24:00","Departure Dogs":"11"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.92","Speed":"5.7","Arrival Date":"03/13/2017","Arrival Time":"12:35:00","Arrival Dogs":"12","Elapsed Time":"0.58","Departure Date":"03/13/2017","Departure Time":"13:10:00","Departure Dogs":"11"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.98","Speed":"6.08","Arrival Date":"03/13/2017","Arrival Time":"12:58:00","Arrival Dogs":"13","Elapsed Time":"0.18","Departure Date":"03/13/2017","Departure Time":"13:09:00","Departure Dogs":"11"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"17.3","Speed":"4.91","Arrival Date":"03/13/2017","Arrival Time":"12:58:00","Arrival Dogs":"13","Elapsed Time":"4.75","Departure Date":"03/13/2017","Departure Time":"17:43:00","Departure Dogs":"13"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"18.88","Speed":"4.5","Arrival Date":"03/13/2017","Arrival Time":"14:43:00","Arrival Dogs":"11","Elapsed Time":"4.88","Departure Date":"03/13/2017","Departure Time":"19:36:00","Departure Dogs":"11"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.18","Speed":"8.35","Arrival Date":"03/13/2017","Arrival Time":"16:16:00","Arrival Dogs":"11","Elapsed Time":"4","Departure Date":"03/13/2017","Departure Time":"20:16:00","Departure Dogs":"11"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.05","Speed":"8.46","Arrival Date":"03/13/2017","Arrival Time":"17:28:00","Arrival Dogs":"11","Elapsed Time":"6.32","Departure Date":"03/13/2017","Departure Time":"23:47:00","Departure Dogs":"10"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.27","Speed":"6.41","Arrival Date":"03/13/2017","Arrival Time":"18:26:00","Arrival Dogs":"11","Elapsed Time":"5.92","Departure Date":"03/14/2017","Departure Time":"00:21:00","Departure Dogs":"11"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.48","Speed":"5.16","Arrival Date":"03/13/2017","Arrival Time":"18:33:00","Arrival Dogs":"13","Elapsed Time":"5.78","Departure Date":"03/14/2017","Departure Time":"00:20:00","Departure Dogs":"13"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"11.77","Speed":"7.22","Arrival Date":"03/13/2017","Arrival Time":"19:11:00","Arrival Dogs":"15","Elapsed Time":"7.08","Departure Date":"03/14/2017","Departure Time":"02:16:00","Departure Dogs":"15"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.32","Speed":"5.55","Arrival Date":"03/13/2017","Arrival Time":"22:30:00","Arrival Dogs":"10","Elapsed Time":"5.83","Departure Date":"03/14/2017","Departure Time":"04:20:00","Departure Dogs":"9"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.33","Speed":"5.54","Arrival Date":"03/13/2017","Arrival Time":"22:31:00","Arrival Dogs":"13","Elapsed Time":"5.85","Departure Date":"03/14/2017","Departure Time":"04:22:00","Departure Dogs":"12"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.82","Speed":"6.15","Arrival Date":"03/13/2017","Arrival Time":"23:15:00","Arrival Dogs":"15","Elapsed Time":"8.25","Departure Date":"03/14/2017","Departure Time":"07:30:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.75","Speed":"5.76","Arrival Date":"03/14/2017","Arrival Time":"00:52:00","Arrival Dogs":"12","Elapsed Time":"5.15","Departure Date":"03/14/2017","Departure Time":"06:01:00","Departure Dogs":"12"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.82","Speed":"5.37","Arrival Date":"03/14/2017","Arrival Time":"01:24:00","Arrival Dogs":"11","Elapsed Time":"3.93","Departure Date":"03/14/2017","Departure Time":"05:20:00","Departure Dogs":"11"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"13.92","Speed":"6.11","Arrival Date":"03/14/2017","Arrival Time":"01:25:00","Arrival Dogs":"12","Elapsed Time":"5.43","Departure Date":"03/14/2017","Departure Time":"06:51:00","Departure Dogs":"11"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.57","Speed":"5.46","Arrival Date":"03/14/2017","Arrival Time":"04:09:00","Arrival Dogs":"12","Elapsed Time":"4.78","Departure Date":"03/14/2017","Departure Time":"08:56:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.22","Speed":"5.59","Arrival Date":"03/14/2017","Arrival Time":"07:53:00","Arrival Dogs":"14","Elapsed Time":"8.42","Departure Date":"03/14/2017","Departure Time":"16:18:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"10.03","Speed":"8.47","Arrival Date":"03/14/2017","Arrival Time":"09:17:00","Arrival Dogs":"13","Elapsed Time":"8.2","Departure Date":"03/14/2017","Departure Time":"17:29:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"9.52","Speed":"8.93","Arrival Date":"03/14/2017","Arrival Time":"09:41:00","Arrival Dogs":"9","Elapsed Time":"7.82","Departure Date":"03/14/2017","Departure Time":"17:30:00","Departure Dogs":"9"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.05","Speed":"5.65","Arrival Date":"03/14/2017","Arrival Time":"13:23:00","Arrival Dogs":"11","Elapsed Time":"7.1","Departure Date":"03/14/2017","Departure Time":"20:29:00","Departure Dogs":"11"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.37","Speed":"5.53","Arrival Date":"03/14/2017","Arrival Time":"13:30:00","Arrival Dogs":"9","Elapsed Time":"6.68","Departure Date":"03/14/2017","Departure Time":"20:11:00","Departure Dogs":"9"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.52","Speed":"5.48","Arrival Date":"03/14/2017","Arrival Time":"13:31:00","Arrival Dogs":"14","Elapsed Time":"6.3","Departure Date":"03/14/2017","Departure Time":"19:49:00","Departure Dogs":"14"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15","Speed":"5.67","Arrival Date":"03/14/2017","Arrival Time":"13:37:00","Arrival Dogs":"11","Elapsed Time":"6.7","Departure Date":"03/14/2017","Departure Time":"20:19:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"15.25","Speed":"5.57","Arrival Date":"03/14/2017","Arrival Time":"13:49:00","Arrival Dogs":"11","Elapsed Time":"6.35","Departure Date":"03/14/2017","Departure Time":"20:10:00","Departure Dogs":"11"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.02","Speed":"5.31","Arrival Date":"03/14/2017","Arrival Time":"15:16:00","Arrival Dogs":"14","Elapsed Time":"5.25","Departure Date":"03/14/2017","Departure Time":"20:31:00","Departure Dogs":"14"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"14.93","Speed":"5.69","Arrival Date":"03/14/2017","Arrival Time":"16:56:00","Arrival Dogs":"13","Elapsed Time":"9.35","Departure Date":"03/15/2017","Departure Time":"02:17:00","Departure Dogs":"13"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.6","Speed":"5.12","Arrival Date":"03/14/2017","Arrival Time":"21:20:00","Arrival Dogs":"13","Elapsed Time":"9.42","Departure Date":"03/15/2017","Departure Time":"06:45:00","Departure Dogs":"13"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.62","Speed":"5.12","Arrival Date":"03/14/2017","Arrival Time":"21:21:00","Arrival Dogs":"14","Elapsed Time":"9.45","Departure Date":"03/15/2017","Departure Time":"06:48:00","Departure Dogs":"14"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"19.4","Speed":"4.38","Arrival Date":"03/14/2017","Arrival Time":"21:24:00","Arrival Dogs":"16","Elapsed Time":"21.35","Departure Date":"03/15/2017","Departure Time":"18:45:00","Departure Dogs":"16"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.55","Speed":"5.14","Arrival Date":"03/14/2017","Arrival Time":"22:01:00","Arrival Dogs":"11","Elapsed Time":"8.5","Departure Date":"03/15/2017","Departure Time":"06:31:00","Departure Dogs":"11"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.8","Speed":"5.06","Arrival Date":"03/14/2017","Arrival Time":"22:10:00","Arrival Dogs":"13","Elapsed Time":"8.23","Departure Date":"03/15/2017","Departure Time":"06:24:00","Departure Dogs":"12"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"16.7","Speed":"5.09","Arrival Date":"03/14/2017","Arrival Time":"22:17:00","Arrival Dogs":"10","Elapsed Time":"7.02","Departure Date":"03/15/2017","Departure Time":"05:18:00","Departure Dogs":"10"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"17.02","Speed":"5","Arrival Date":"03/14/2017","Arrival Time":"22:19:00","Arrival Dogs":"13","Elapsed Time":"8.27","Departure Date":"03/15/2017","Departure Time":"06:35:00","Departure Dogs":"12"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"18.3","Speed":"4.64","Arrival Date":"03/15/2017","Arrival Time":"11:30:00","Arrival Dogs":"10","Elapsed Time":"7.58","Departure Date":"03/15/2017","Departure Time":"19:05:00","Departure Dogs":"9"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"17.4","Speed":"4.89","Arrival Date":"03/15/2017","Arrival Time":"12:42:00","Arrival Dogs":"13","Elapsed Time":"6.52","Departure Date":"03/15/2017","Departure Time":"19:13:00","Departure Dogs":"13"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"18.75","Speed":"4.53","Arrival Date":"03/15/2017","Arrival Time":"12:54:00","Arrival Dogs":"9","Elapsed Time":"5.93","Departure Date":"03/15/2017","Departure Time":"18:50:00","Departure Dogs":"9"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"18.55","Speed":"4.58","Arrival Date":"03/15/2017","Arrival Time":"12:54:00","Arrival Dogs":"12","Elapsed Time":"6.13","Departure Date":"03/15/2017","Departure Time":"19:02:00","Departure Dogs":"12"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Unalakleet","Latitude":"63.8742","Longitude":"-160.7863","Distance":"85","Time":"19.07","Speed":"4.46","Arrival Date":"03/15/2017","Arrival Time":"13:14:00","Arrival Dogs":"12","Elapsed Time":"5.58","Departure Date":"03/15/2017","Departure Time":"18:49:00","Departure Dogs":"12"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.6","Speed":"8.7","Arrival Date":"03/12/2017","Arrival Time":"21:04:00","Arrival Dogs":"12","Elapsed Time":"5.17","Departure Date":"03/13/2017","Departure Time":"02:14:00","Departure Dogs":"12"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.98","Speed":"8.03","Arrival Date":"03/13/2017","Arrival Time":"01:35:00","Arrival Dogs":"12","Elapsed Time":"0.28","Departure Date":"03/13/2017","Departure Time":"01:52:00","Departure Dogs":"12"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.52","Speed":"7.25","Arrival Date":"03/13/2017","Arrival Time":"02:19:00","Arrival Dogs":"10","Elapsed Time":"0.15","Departure Date":"03/13/2017","Departure Time":"02:28:00","Departure Dogs":"10"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.45","Speed":"7.34","Arrival Date":"03/13/2017","Arrival Time":"02:38:00","Arrival Dogs":"13","Elapsed Time":"0.17","Departure Date":"03/13/2017","Departure Time":"02:48:00","Departure Dogs":"13"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.08","Speed":"6.58","Arrival Date":"03/13/2017","Arrival Time":"03:18:00","Arrival Dogs":"13","Elapsed Time":"4.3","Departure Date":"03/13/2017","Departure Time":"07:36:00","Departure Dogs":"13"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.45","Speed":"7.34","Arrival Date":"03/13/2017","Arrival Time":"05:14:00","Arrival Dogs":"16","Elapsed Time":"2.95","Departure Date":"03/13/2017","Departure Time":"08:11:00","Departure Dogs":"16"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.18","Speed":"7.72","Arrival Date":"03/13/2017","Arrival Time":"10:44:00","Arrival Dogs":"11","Elapsed Time":"3.17","Departure Date":"03/13/2017","Departure Time":"13:54:00","Departure Dogs":"11"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.7","Speed":"7.02","Arrival Date":"03/13/2017","Arrival Time":"10:45:00","Arrival Dogs":"12","Elapsed Time":"3.15","Departure Date":"03/13/2017","Departure Time":"13:54:00","Departure Dogs":"12"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.62","Speed":"7.12","Arrival Date":"03/13/2017","Arrival Time":"11:22:00","Arrival Dogs":"11","Elapsed Time":"3.93","Departure Date":"03/13/2017","Departure Time":"15:18:00","Departure Dogs":"10"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.7","Speed":"7.02","Arrival Date":"03/13/2017","Arrival Time":"12:02:00","Arrival Dogs":"13","Elapsed Time":"3.83","Departure Date":"03/13/2017","Departure Time":"15:52:00","Departure Dogs":"13"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.53","Speed":"7.23","Arrival Date":"03/13/2017","Arrival Time":"14:00:00","Arrival Dogs":"12","Elapsed Time":"3.93","Departure Date":"03/13/2017","Departure Time":"17:56:00","Departure Dogs":"11"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.77","Speed":"6.94","Arrival Date":"03/13/2017","Arrival Time":"15:29:00","Arrival Dogs":"11","Elapsed Time":"0.2","Departure Date":"03/13/2017","Departure Time":"15:41:00","Departure Dogs":"11"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.9","Speed":"6.78","Arrival Date":"03/13/2017","Arrival Time":"15:31:00","Arrival Dogs":"9","Elapsed Time":"0.18","Departure Date":"03/13/2017","Departure Time":"15:42:00","Departure Dogs":"8"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.2","Speed":"7.69","Arrival Date":"03/13/2017","Arrival Time":"15:35:00","Arrival Dogs":"11","Elapsed Time":"3.92","Departure Date":"03/13/2017","Departure Time":"19:30:00","Departure Dogs":"10"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.42","Speed":"6.23","Arrival Date":"03/13/2017","Arrival Time":"15:40:00","Arrival Dogs":"12","Elapsed Time":"0.08","Departure Date":"03/13/2017","Departure Time":"15:45:00","Departure Dogs":"11"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.03","Speed":"6.63","Arrival Date":"03/13/2017","Arrival Time":"15:42:00","Arrival Dogs":"12","Elapsed Time":"5.55","Departure Date":"03/13/2017","Departure Time":"21:15:00","Departure Dogs":"12"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.98","Speed":"6.69","Arrival Date":"03/13/2017","Arrival Time":"16:10:00","Arrival Dogs":"11","Elapsed Time":"0.17","Departure Date":"03/13/2017","Departure Time":"16:20:00","Departure Dogs":"11"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.45","Speed":"7.34","Arrival Date":"03/13/2017","Arrival Time":"16:38:00","Arrival Dogs":"9","Elapsed Time":"2.22","Departure Date":"03/13/2017","Departure Time":"18:51:00","Departure Dogs":"8"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.9","Speed":"6.78","Arrival Date":"03/13/2017","Arrival Time":"17:49:00","Arrival Dogs":"11","Elapsed Time":"6.03","Departure Date":"03/13/2017","Departure Time":"23:51:00","Departure Dogs":"10"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.22","Speed":"6.43","Arrival Date":"03/13/2017","Arrival Time":"18:13:00","Arrival Dogs":"9","Elapsed Time":"0.1","Departure Date":"03/13/2017","Departure Time":"18:19:00","Departure Dogs":"9"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.53","Speed":"7.23","Arrival Date":"03/13/2017","Arrival Time":"18:41:00","Arrival Dogs":"11","Elapsed Time":"5.12","Departure Date":"03/13/2017","Departure Time":"23:48:00","Departure Dogs":"10"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.5","Speed":"7.27","Arrival Date":"03/13/2017","Arrival Time":"18:43:00","Arrival Dogs":"10","Elapsed Time":"1.37","Departure Date":"03/13/2017","Departure Time":"20:05:00","Departure Dogs":"10"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.48","Speed":"6.17","Arrival Date":"03/13/2017","Arrival Time":"18:43:00","Arrival Dogs":"10","Elapsed Time":"2.78","Departure Date":"03/13/2017","Departure Time":"21:30:00","Departure Dogs":"10"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.38","Speed":"6.27","Arrival Date":"03/13/2017","Arrival Time":"18:44:00","Arrival Dogs":"10","Elapsed Time":"5","Departure Date":"03/13/2017","Departure Time":"23:44:00","Departure Dogs":"10"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.37","Speed":"6.28","Arrival Date":"03/13/2017","Arrival Time":"19:32:00","Arrival Dogs":"11","Elapsed Time":"4.78","Departure Date":"03/14/2017","Departure Time":"00:19:00","Departure Dogs":"10"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.22","Speed":"6.43","Arrival Date":"03/13/2017","Arrival Time":"19:37:00","Arrival Dogs":"9","Elapsed Time":"3.75","Departure Date":"03/13/2017","Departure Time":"23:22:00","Departure Dogs":"9"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.15","Speed":"6.5","Arrival Date":"03/13/2017","Arrival Time":"19:42:00","Arrival Dogs":"10","Elapsed Time":"3.67","Departure Date":"03/13/2017","Departure Time":"23:22:00","Departure Dogs":"9"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.48","Speed":"7.29","Arrival Date":"03/13/2017","Arrival Time":"19:55:00","Arrival Dogs":"9","Elapsed Time":"4.17","Departure Date":"03/14/2017","Departure Time":"00:05:00","Departure Dogs":"9"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.82","Speed":"6.88","Arrival Date":"03/13/2017","Arrival Time":"20:28:00","Arrival Dogs":"12","Elapsed Time":"0.13","Departure Date":"03/13/2017","Departure Time":"20:36:00","Departure Dogs":"11"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.93","Speed":"8.11","Arrival Date":"03/13/2017","Arrival Time":"22:39:00","Arrival Dogs":"13","Elapsed Time":"0.05","Departure Date":"03/13/2017","Departure Time":"22:42:00","Departure Dogs":"13"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.32","Speed":"7.52","Arrival Date":"03/13/2017","Arrival Time":"22:43:00","Arrival Dogs":"11","Elapsed Time":"7.17","Departure Date":"03/14/2017","Departure Time":"05:53:00","Departure Dogs":"11"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.95","Speed":"6.72","Arrival Date":"03/14/2017","Arrival Time":"01:33:00","Arrival Dogs":"11","Elapsed Time":"5.2","Departure Date":"03/14/2017","Departure Time":"06:45:00","Departure Dogs":"11"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.48","Speed":"7.29","Arrival Date":"03/14/2017","Arrival Time":"01:45:00","Arrival Dogs":"11","Elapsed Time":"3.92","Departure Date":"03/14/2017","Departure Time":"05:40:00","Departure Dogs":"11"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.9","Speed":"6.78","Arrival Date":"03/14/2017","Arrival Time":"05:41:00","Arrival Dogs":"10","Elapsed Time":"4.95","Departure Date":"03/14/2017","Departure Time":"10:38:00","Departure Dogs":"10"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.77","Speed":"6.94","Arrival Date":"03/14/2017","Arrival Time":"06:06:00","Arrival Dogs":"13","Elapsed Time":"4.18","Departure Date":"03/14/2017","Departure Time":"10:17:00","Departure Dogs":"13"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.17","Speed":"6.49","Arrival Date":"03/14/2017","Arrival Time":"06:31:00","Arrival Dogs":"11","Elapsed Time":"7.72","Departure Date":"03/14/2017","Departure Time":"14:14:00","Departure Dogs":"11"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.33","Speed":"7.5","Arrival Date":"03/14/2017","Arrival Time":"07:36:00","Arrival Dogs":"15","Elapsed Time":"4.6","Departure Date":"03/14/2017","Departure Time":"12:12:00","Departure Dogs":"15"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.87","Speed":"6.82","Arrival Date":"03/14/2017","Arrival Time":"10:14:00","Arrival Dogs":"12","Elapsed Time":"6.1","Departure Date":"03/14/2017","Departure Time":"16:20:00","Departure Dogs":"12"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.93","Speed":"6.74","Arrival Date":"03/14/2017","Arrival Time":"10:16:00","Arrival Dogs":"9","Elapsed Time":"6.08","Departure Date":"03/14/2017","Departure Time":"16:21:00","Departure Dogs":"9"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.1","Speed":"7.84","Arrival Date":"03/14/2017","Arrival Time":"11:07:00","Arrival Dogs":"12","Elapsed Time":"4.92","Departure Date":"03/14/2017","Departure Time":"16:02:00","Departure Dogs":"12"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.82","Speed":"6.88","Arrival Date":"03/14/2017","Arrival Time":"11:09:00","Arrival Dogs":"11","Elapsed Time":"4.95","Departure Date":"03/14/2017","Departure Time":"16:06:00","Departure Dogs":"11"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.43","Speed":"7.36","Arrival Date":"03/14/2017","Arrival Time":"12:17:00","Arrival Dogs":"11","Elapsed Time":"5.58","Departure Date":"03/14/2017","Departure Time":"17:52:00","Departure Dogs":"11"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.17","Speed":"7.74","Arrival Date":"03/14/2017","Arrival Time":"12:40:00","Arrival Dogs":"15","Elapsed Time":"4.4","Departure Date":"03/14/2017","Departure Time":"17:04:00","Departure Dogs":"15"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.42","Speed":"7.38","Arrival Date":"03/14/2017","Arrival Time":"14:21:00","Arrival Dogs":"12","Elapsed Time":"4.82","Departure Date":"03/14/2017","Departure Time":"19:10:00","Departure Dogs":"10"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.13","Speed":"7.79","Arrival Date":"03/14/2017","Arrival Time":"21:26:00","Arrival Dogs":"14","Elapsed Time":"12.7","Departure Date":"03/15/2017","Departure Time":"10:08:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.48","Speed":"7.29","Arrival Date":"03/14/2017","Arrival Time":"22:58:00","Arrival Dogs":"12","Elapsed Time":"11.35","Departure Date":"03/15/2017","Departure Time":"10:19:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.48","Speed":"7.29","Arrival Date":"03/14/2017","Arrival Time":"22:59:00","Arrival Dogs":"9","Elapsed Time":"11.28","Departure Date":"03/15/2017","Departure Time":"10:16:00","Departure Dogs":"9"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.12","Speed":"7.82","Arrival Date":"03/15/2017","Arrival Time":"00:56:00","Arrival Dogs":"14","Elapsed Time":"8.85","Departure Date":"03/15/2017","Departure Time":"09:47:00","Departure Dogs":"14"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.7","Speed":"8.51","Arrival Date":"03/15/2017","Arrival Time":"01:13:00","Arrival Dogs":"14","Elapsed Time":"8.8","Departure Date":"03/15/2017","Departure Time":"10:01:00","Departure Dogs":"14"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.07","Speed":"7.89","Arrival Date":"03/15/2017","Arrival Time":"01:33:00","Arrival Dogs":"11","Elapsed Time":"8.65","Departure Date":"03/15/2017","Departure Time":"10:12:00","Departure Dogs":"11"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.38","Speed":"7.43","Arrival Date":"03/15/2017","Arrival Time":"01:42:00","Arrival Dogs":"11","Elapsed Time":"8.4","Departure Date":"03/15/2017","Departure Time":"10:06:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.97","Speed":"6.7","Arrival Date":"03/15/2017","Arrival Time":"02:08:00","Arrival Dogs":"11","Elapsed Time":"7.97","Departure Date":"03/15/2017","Departure Time":"10:06:00","Departure Dogs":"11"},
{"Number":"58","Name":"Monica Zappa","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.12","Speed":"6.54","Arrival Date":"03/15/2017","Arrival Time":"02:18:00","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.2","Speed":"6.45","Arrival Date":"03/15/2017","Arrival Time":"08:29:00","Arrival Dogs":"13","Elapsed Time":"6.35","Departure Date":"03/15/2017","Departure Time":"14:50:00","Departure Dogs":"13"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.95","Speed":"8.08","Arrival Date":"03/15/2017","Arrival Time":"11:28:00","Arrival Dogs":"11","Elapsed Time":"8.53","Departure Date":"03/15/2017","Departure Time":"20:00:00","Departure Dogs":"11"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.2","Speed":"6.45","Arrival Date":"03/15/2017","Arrival Time":"11:30:00","Arrival Dogs":"10","Elapsed Time":"6.97","Departure Date":"03/15/2017","Departure Time":"18:28:00","Departure Dogs":"10"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.98","Speed":"8.03","Arrival Date":"03/15/2017","Arrival Time":"11:44:00","Arrival Dogs":"13","Elapsed Time":"7.82","Departure Date":"03/15/2017","Departure Time":"19:33:00","Departure Dogs":"12"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.4","Speed":"7.41","Arrival Date":"03/15/2017","Arrival Time":"11:48:00","Arrival Dogs":"12","Elapsed Time":"8.08","Departure Date":"03/15/2017","Departure Time":"19:53:00","Departure Dogs":"11"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.4","Speed":"7.41","Arrival Date":"03/15/2017","Arrival Time":"12:12:00","Arrival Dogs":"14","Elapsed Time":"7.37","Departure Date":"03/15/2017","Departure Time":"19:34:00","Departure Dogs":"14"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"6.58","Speed":"6.08","Arrival Date":"03/15/2017","Arrival Time":"13:10:00","Arrival Dogs":"12","Elapsed Time":"6.57","Departure Date":"03/15/2017","Departure Time":"19:44:00","Departure Dogs":"12"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"4.97","Speed":"8.05","Arrival Date":"03/16/2017","Arrival Time":"00:11:00","Arrival Dogs":"13","Elapsed Time":"11.42","Departure Date":"03/16/2017","Departure Time":"11:36:00","Departure Dogs":"13"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.5","Speed":"7.27","Arrival Date":"03/16/2017","Arrival Time":"00:15:00","Arrival Dogs":"16","Elapsed Time":"10.97","Departure Date":"03/16/2017","Departure Time":"11:13:00","Departure Dogs":"16"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.42","Speed":"7.38","Arrival Date":"03/16/2017","Arrival Time":"00:15:00","Arrival Dogs":"9","Elapsed Time":"10.97","Departure Date":"03/16/2017","Departure Time":"11:13:00","Departure Dogs":"9"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.43","Speed":"7.36","Arrival Date":"03/16/2017","Arrival Time":"00:28:00","Arrival Dogs":"12","Elapsed Time":"10.58","Departure Date":"03/16/2017","Departure Time":"11:03:00","Departure Dogs":"12"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"5.77","Speed":"6.94","Arrival Date":"03/16/2017","Arrival Time":"00:35:00","Arrival Dogs":"12","Elapsed Time":"10.63","Departure Date":"03/16/2017","Departure Time":"11:13:00","Departure Dogs":"12"},
{"Number":"10","Name":"Roger Lee","Status":"Rookie","Country":"England","Checkpoint":"Shaktoolik","Latitude":"64.3519","Longitude":"-161.1918","Distance":"40","Time":"17.42","Speed":"2.3","Arrival Date":"03/16/2017","Arrival Time":"12:30:00","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.17","Speed":"9.68","Arrival Date":"03/13/2017","Arrival Time":"07:24:00","Arrival Dogs":"12","Elapsed Time":"2.37","Departure Date":"03/13/2017","Departure Time":"09:46:00","Departure Dogs":"12"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.22","Speed":"8.04","Arrival Date":"03/13/2017","Arrival Time":"09:01:00","Arrival Dogs":"13","Elapsed Time":"2.92","Departure Date":"03/13/2017","Departure Time":"11:56:00","Departure Dogs":"13"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"9.07","Speed":"5.51","Arrival Date":"03/13/2017","Arrival Time":"10:56:00","Arrival Dogs":"12","Elapsed Time":"0.13","Departure Date":"03/13/2017","Departure Time":"11:04:00","Departure Dogs":"11"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"9.13","Speed":"5.47","Arrival Date":"03/13/2017","Arrival Time":"11:36:00","Arrival Dogs":"10","Elapsed Time":"2.82","Departure Date":"03/13/2017","Departure Time":"14:25:00","Departure Dogs":"8"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.92","Speed":"8.45","Arrival Date":"03/13/2017","Arrival Time":"13:31:00","Arrival Dogs":"13","Elapsed Time":"3.77","Departure Date":"03/13/2017","Departure Time":"17:17:00","Departure Dogs":"12"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.95","Speed":"8.4","Arrival Date":"03/13/2017","Arrival Time":"14:08:00","Arrival Dogs":"16","Elapsed Time":"3.62","Departure Date":"03/13/2017","Departure Time":"17:45:00","Departure Dogs":"16"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.93","Speed":"8.43","Arrival Date":"03/13/2017","Arrival Time":"19:50:00","Arrival Dogs":"11","Elapsed Time":"5.22","Departure Date":"03/14/2017","Departure Time":"01:03:00","Departure Dogs":"10"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.82","Speed":"7.33","Arrival Date":"03/13/2017","Arrival Time":"20:43:00","Arrival Dogs":"12","Elapsed Time":"4.62","Departure Date":"03/14/2017","Departure Time":"01:20:00","Departure Dogs":"11"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.4","Speed":"7.81","Arrival Date":"03/13/2017","Arrival Time":"21:42:00","Arrival Dogs":"10","Elapsed Time":"4.07","Departure Date":"03/14/2017","Departure Time":"01:46:00","Departure Dogs":"10"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.22","Speed":"8.04","Arrival Date":"03/13/2017","Arrival Time":"22:05:00","Arrival Dogs":"13","Elapsed Time":"3.92","Departure Date":"03/14/2017","Departure Time":"02:00:00","Departure Dogs":"13"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"7.02","Speed":"7.13","Arrival Date":"03/13/2017","Arrival Time":"22:42:00","Arrival Dogs":"11","Elapsed Time":"5.83","Departure Date":"03/14/2017","Departure Time":"04:32:00","Departure Dogs":"11"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"7.87","Speed":"6.36","Arrival Date":"03/13/2017","Arrival Time":"23:34:00","Arrival Dogs":"8","Elapsed Time":"7.18","Departure Date":"03/14/2017","Departure Time":"06:45:00","Departure Dogs":"8"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"7.87","Speed":"6.36","Arrival Date":"03/13/2017","Arrival Time":"23:37:00","Arrival Dogs":"11","Elapsed Time":"8.72","Departure Date":"03/14/2017","Departure Time":"08:20:00","Departure Dogs":"9"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.48","Speed":"7.71","Arrival Date":"03/14/2017","Arrival Time":"00:25:00","Arrival Dogs":"11","Elapsed Time":"4.15","Departure Date":"03/14/2017","Departure Time":"04:34:00","Departure Dogs":"11"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.62","Speed":"7.56","Arrival Date":"03/14/2017","Arrival Time":"01:28:00","Arrival Dogs":"8","Elapsed Time":"0.25","Departure Date":"03/14/2017","Departure Time":"01:43:00","Departure Dogs":"8"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.08","Speed":"8.22","Arrival Date":"03/14/2017","Arrival Time":"01:35:00","Arrival Dogs":"10","Elapsed Time":"5","Departure Date":"03/14/2017","Departure Time":"06:35:00","Departure Dogs":"10"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"7.58","Speed":"6.59","Arrival Date":"03/14/2017","Arrival Time":"01:54:00","Arrival Dogs":"9","Elapsed Time":"6.43","Departure Date":"03/14/2017","Departure Time":"08:20:00","Departure Dogs":"8"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.38","Speed":"7.83","Arrival Date":"03/14/2017","Arrival Time":"02:28:00","Arrival Dogs":"10","Elapsed Time":"5.08","Departure Date":"03/14/2017","Departure Time":"07:33:00","Departure Dogs":"10"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"10.58","Speed":"4.72","Arrival Date":"03/14/2017","Arrival Time":"02:55:00","Arrival Dogs":"11","Elapsed Time":"3.67","Departure Date":"03/14/2017","Departure Time":"06:35:00","Departure Dogs":"10"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.98","Speed":"7.16","Arrival Date":"03/14/2017","Arrival Time":"03:35:00","Arrival Dogs":"11","Elapsed Time":"5.3","Departure Date":"03/14/2017","Departure Time":"08:53:00","Departure Dogs":"10"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.68","Speed":"7.48","Arrival Date":"03/14/2017","Arrival Time":"03:56:00","Arrival Dogs":"12","Elapsed Time":"3.95","Departure Date":"03/14/2017","Departure Time":"07:53:00","Departure Dogs":"12"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.52","Speed":"9.06","Arrival Date":"03/14/2017","Arrival Time":"04:13:00","Arrival Dogs":"13","Elapsed Time":"3.28","Departure Date":"03/14/2017","Departure Time":"07:30:00","Departure Dogs":"13"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"7.63","Speed":"6.55","Arrival Date":"03/14/2017","Arrival Time":"05:08:00","Arrival Dogs":"10","Elapsed Time":"3.68","Departure Date":"03/14/2017","Departure Time":"08:49:00","Departure Dogs":"10"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.53","Speed":"9.04","Arrival Date":"03/14/2017","Arrival Time":"05:20:00","Arrival Dogs":"10","Elapsed Time":"3.7","Departure Date":"03/14/2017","Departure Time":"09:02:00","Departure Dogs":"10"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.53","Speed":"9.04","Arrival Date":"03/14/2017","Arrival Time":"05:23:00","Arrival Dogs":"10","Elapsed Time":"6.17","Departure Date":"03/14/2017","Departure Time":"11:33:00","Departure Dogs":"9"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.82","Speed":"8.6","Arrival Date":"03/14/2017","Arrival Time":"05:33:00","Arrival Dogs":"10","Elapsed Time":"0.1","Departure Date":"03/14/2017","Departure Time":"05:39:00","Departure Dogs":"10"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.6","Speed":"8.93","Arrival Date":"03/14/2017","Arrival Time":"05:41:00","Arrival Dogs":"9","Elapsed Time":"6.32","Departure Date":"03/14/2017","Departure Time":"12:00:00","Departure Dogs":"9"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.75","Speed":"7.41","Arrival Date":"03/14/2017","Arrival Time":"06:07:00","Arrival Dogs":"9","Elapsed Time":"5.27","Departure Date":"03/14/2017","Departure Time":"11:23:00","Departure Dogs":"9"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.8","Speed":"7.35","Arrival Date":"03/14/2017","Arrival Time":"06:10:00","Arrival Dogs":"9","Elapsed Time":"5.22","Departure Date":"03/14/2017","Departure Time":"11:23:00","Departure Dogs":"8"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.57","Speed":"7.61","Arrival Date":"03/14/2017","Arrival Time":"06:53:00","Arrival Dogs":"10","Elapsed Time":"5.52","Departure Date":"03/14/2017","Departure Time":"12:24:00","Departure Dogs":"10"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.65","Speed":"8.85","Arrival Date":"03/14/2017","Arrival Time":"11:19:00","Arrival Dogs":"11","Elapsed Time":"5.38","Departure Date":"03/14/2017","Departure Time":"16:42:00","Departure Dogs":"11"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.45","Speed":"9.17","Arrival Date":"03/14/2017","Arrival Time":"11:20:00","Arrival Dogs":"11","Elapsed Time":"5.7","Departure Date":"03/14/2017","Departure Time":"17:02:00","Departure Dogs":"10"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6","Speed":"8.33","Arrival Date":"03/14/2017","Arrival Time":"12:45:00","Arrival Dogs":"11","Elapsed Time":"4.33","Departure Date":"03/14/2017","Departure Time":"17:05:00","Departure Dogs":"11"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.47","Speed":"9.15","Arrival Date":"03/14/2017","Arrival Time":"15:45:00","Arrival Dogs":"13","Elapsed Time":"5.5","Departure Date":"03/14/2017","Departure Time":"21:15:00","Departure Dogs":"13"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.03","Speed":"8.29","Arrival Date":"03/14/2017","Arrival Time":"16:40:00","Arrival Dogs":"10","Elapsed Time":"6.58","Departure Date":"03/14/2017","Departure Time":"23:15:00","Departure Dogs":"9"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.3","Speed":"9.43","Arrival Date":"03/14/2017","Arrival Time":"17:30:00","Arrival Dogs":"15","Elapsed Time":"6.7","Departure Date":"03/15/2017","Departure Time":"00:12:00","Departure Dogs":"15"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.73","Speed":"8.72","Arrival Date":"03/14/2017","Arrival Time":"19:58:00","Arrival Dogs":"11","Elapsed Time":"5.12","Departure Date":"03/15/2017","Departure Time":"01:05:00","Departure Dogs":"11"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.33","Speed":"9.38","Arrival Date":"03/14/2017","Arrival Time":"21:22:00","Arrival Dogs":"12","Elapsed Time":"3.63","Departure Date":"03/15/2017","Departure Time":"01:00:00","Departure Dogs":"12"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.4","Speed":"9.26","Arrival Date":"03/14/2017","Arrival Time":"21:30:00","Arrival Dogs":"11","Elapsed Time":"4.83","Departure Date":"03/15/2017","Departure Time":"02:20:00","Departure Dogs":"10"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.33","Speed":"9.38","Arrival Date":"03/14/2017","Arrival Time":"21:40:00","Arrival Dogs":"12","Elapsed Time":"5.42","Departure Date":"03/15/2017","Departure Time":"03:05:00","Departure Dogs":"12"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.32","Speed":"9.4","Arrival Date":"03/14/2017","Arrival Time":"21:40:00","Arrival Dogs":"9","Elapsed Time":"5.42","Departure Date":"03/15/2017","Departure Time":"03:05:00","Departure Dogs":"9"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.18","Speed":"9.65","Arrival Date":"03/14/2017","Arrival Time":"22:15:00","Arrival Dogs":"15","Elapsed Time":"6.87","Departure Date":"03/15/2017","Departure Time":"05:07:00","Departure Dogs":"15"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.5","Speed":"9.09","Arrival Date":"03/15/2017","Arrival Time":"00:40:00","Arrival Dogs":"10","Elapsed Time":"4.92","Departure Date":"03/15/2017","Departure Time":"05:35:00","Departure Dogs":"10"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"18.47","Speed":"2.71","Arrival Date":"03/15/2017","Arrival Time":"12:20:00","Arrival Dogs":"11","Elapsed Time":"10.9","Departure Date":"03/15/2017","Departure Time":"23:14:00","Departure Dogs":"11"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"4.87","Speed":"10.27","Arrival Date":"03/15/2017","Arrival Time":"15:04:00","Arrival Dogs":"11","Elapsed Time":"8.45","Departure Date":"03/15/2017","Departure Time":"23:31:00","Departure Dogs":"10"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.07","Speed":"9.87","Arrival Date":"03/15/2017","Arrival Time":"15:05:00","Arrival Dogs":"14","Elapsed Time":"6.07","Departure Date":"03/15/2017","Departure Time":"21:09:00","Departure Dogs":"13"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.4","Speed":"9.26","Arrival Date":"03/15/2017","Arrival Time":"15:11:00","Arrival Dogs":"14","Elapsed Time":"6.02","Departure Date":"03/15/2017","Departure Time":"21:12:00","Departure Dogs":"14"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.45","Speed":"9.17","Arrival Date":"03/15/2017","Arrival Time":"15:35:00","Arrival Dogs":"14","Elapsed Time":"5.95","Departure Date":"03/15/2017","Departure Time":"21:32:00","Departure Dogs":"14"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.33","Speed":"9.38","Arrival Date":"03/15/2017","Arrival Time":"15:39:00","Arrival Dogs":"12","Elapsed Time":"5.87","Departure Date":"03/15/2017","Departure Time":"21:31:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.65","Speed":"8.85","Arrival Date":"03/15/2017","Arrival Time":"15:55:00","Arrival Dogs":"9","Elapsed Time":"6.45","Departure Date":"03/15/2017","Departure Time":"22:22:00","Departure Dogs":"9"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.9","Speed":"8.47","Arrival Date":"03/15/2017","Arrival Time":"16:00:00","Arrival Dogs":"11","Elapsed Time":"7.97","Departure Date":"03/15/2017","Departure Time":"23:58:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.25","Speed":"8","Arrival Date":"03/15/2017","Arrival Time":"16:21:00","Arrival Dogs":"11","Elapsed Time":"7.68","Departure Date":"03/16/2017","Departure Time":"00:02:00","Departure Dogs":"11"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.4","Speed":"7.81","Arrival Date":"03/15/2017","Arrival Time":"21:14:00","Arrival Dogs":"13","Elapsed Time":"6.43","Departure Date":"03/16/2017","Departure Time":"03:40:00","Departure Dogs":"13"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.22","Speed":"8.04","Arrival Date":"03/16/2017","Arrival Time":"00:41:00","Arrival Dogs":"10","Elapsed Time":"8.52","Departure Date":"03/16/2017","Departure Time":"09:12:00","Departure Dogs":"10"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.42","Speed":"9.23","Arrival Date":"03/16/2017","Arrival Time":"00:58:00","Arrival Dogs":"12","Elapsed Time":"9.28","Departure Date":"03/16/2017","Departure Time":"10:15:00","Departure Dogs":"12"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5","Speed":"10","Arrival Date":"03/16/2017","Arrival Time":"01:00:00","Arrival Dogs":"11","Elapsed Time":"14.05","Departure Date":"03/16/2017","Departure Time":"15:03:00","Departure Dogs":"11"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.45","Speed":"9.17","Arrival Date":"03/16/2017","Arrival Time":"01:01:00","Arrival Dogs":"14","Elapsed Time":"9.65","Departure Date":"03/16/2017","Departure Time":"10:40:00","Departure Dogs":"14"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.33","Speed":"9.38","Arrival Date":"03/16/2017","Arrival Time":"01:13:00","Arrival Dogs":"11","Elapsed Time":"13.92","Departure Date":"03/16/2017","Departure Time":"15:08:00","Departure Dogs":"10"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"6.15","Speed":"8.13","Arrival Date":"03/16/2017","Arrival Time":"01:53:00","Arrival Dogs":"12","Elapsed Time":"6.33","Departure Date":"03/16/2017","Departure Time":"08:13:00","Departure Dogs":"12"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"4.93","Speed":"10.14","Arrival Date":"03/16/2017","Arrival Time":"16:09:00","Arrival Dogs":"9","Elapsed Time":"5.87","Departure Date":"03/16/2017","Departure Time":"22:01:00","Departure Dogs":"9"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.23","Speed":"9.55","Arrival Date":"03/16/2017","Arrival Time":"16:17:00","Arrival Dogs":"12","Elapsed Time":"5.42","Departure Date":"03/16/2017","Departure Time":"21:42:00","Departure Dogs":"12"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.3","Speed":"9.43","Arrival Date":"03/16/2017","Arrival Time":"16:31:00","Arrival Dogs":"16","Elapsed Time":"5.47","Departure Date":"03/16/2017","Departure Time":"21:59:00","Departure Dogs":"16"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.1","Speed":"9.8","Arrival Date":"03/16/2017","Arrival Time":"16:42:00","Arrival Dogs":"13","Elapsed Time":"7.3","Departure Date":"03/17/2017","Departure Time":"00:00:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Koyuk","Latitude":"64.9286","Longitude":"-161.168","Distance":"50","Time":"5.67","Speed":"8.82","Arrival Date":"03/16/2017","Arrival Time":"16:53:00","Arrival Dogs":"12","Elapsed Time":"6.87","Departure Date":"03/16/2017","Departure Time":"23:45:00","Departure Dogs":"12"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.67","Speed":"8.47","Arrival Date":"03/13/2017","Arrival Time":"15:26:00","Arrival Dogs":"12","Elapsed Time":"2.78","Departure Date":"03/13/2017","Departure Time":"18:13:00","Departure Dogs":"12"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.37","Speed":"7.54","Arrival Date":"03/13/2017","Arrival Time":"18:18:00","Arrival Dogs":"13","Elapsed Time":"1.6","Departure Date":"03/13/2017","Departure Time":"19:54:00","Departure Dogs":"13"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"8.58","Speed":"5.59","Arrival Date":"03/13/2017","Arrival Time":"19:39:00","Arrival Dogs":"11","Elapsed Time":"0.1","Departure Date":"03/13/2017","Departure Time":"19:45:00","Departure Dogs":"10"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.85","Speed":"7.01","Arrival Date":"03/13/2017","Arrival Time":"21:16:00","Arrival Dogs":"8","Elapsed Time":"1.28","Departure Date":"03/13/2017","Departure Time":"22:33:00","Departure Dogs":"8"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.68","Speed":"7.18","Arrival Date":"03/13/2017","Arrival Time":"23:58:00","Arrival Dogs":"12","Elapsed Time":"5","Departure Date":"03/14/2017","Departure Time":"04:58:00","Departure Dogs":"9"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.37","Speed":"7.54","Arrival Date":"03/14/2017","Arrival Time":"00:07:00","Arrival Dogs":"16","Elapsed Time":"0.18","Departure Date":"03/14/2017","Departure Time":"00:18:00","Departure Dogs":"16"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.18","Speed":"7.76","Arrival Date":"03/14/2017","Arrival Time":"07:14:00","Arrival Dogs":"10","Elapsed Time":"2.63","Departure Date":"03/14/2017","Departure Time":"09:52:00","Departure Dogs":"9"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.33","Speed":"7.58","Arrival Date":"03/14/2017","Arrival Time":"07:40:00","Arrival Dogs":"11","Elapsed Time":"2.22","Departure Date":"03/14/2017","Departure Time":"09:53:00","Departure Dogs":"10"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.43","Speed":"7.46","Arrival Date":"03/14/2017","Arrival Time":"08:12:00","Arrival Dogs":"10","Elapsed Time":"1.88","Departure Date":"03/14/2017","Departure Time":"10:05:00","Departure Dogs":"10"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.38","Speed":"7.52","Arrival Date":"03/14/2017","Arrival Time":"08:23:00","Arrival Dogs":"13","Elapsed Time":"2","Departure Date":"03/14/2017","Departure Time":"10:23:00","Departure Dogs":"13"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"9.07","Speed":"5.29","Arrival Date":"03/14/2017","Arrival Time":"10:47:00","Arrival Dogs":"8","Elapsed Time":"0.17","Departure Date":"03/14/2017","Departure Time":"10:57:00","Departure Dogs":"8"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.35","Speed":"7.56","Arrival Date":"03/14/2017","Arrival Time":"10:55:00","Arrival Dogs":"11","Elapsed Time":"0.03","Departure Date":"03/14/2017","Departure Time":"10:57:00","Departure Dogs":"11"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.78","Speed":"7.08","Arrival Date":"03/14/2017","Arrival Time":"11:19:00","Arrival Dogs":"11","Elapsed Time":"3.23","Departure Date":"03/14/2017","Departure Time":"14:33:00","Departure Dogs":"10"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.97","Speed":"6.89","Arrival Date":"03/14/2017","Arrival Time":"12:37:00","Arrival Dogs":"10","Elapsed Time":"3.13","Departure Date":"03/14/2017","Departure Time":"15:45:00","Departure Dogs":"9"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.12","Speed":"7.85","Arrival Date":"03/14/2017","Arrival Time":"12:42:00","Arrival Dogs":"10","Elapsed Time":"2.1","Departure Date":"03/14/2017","Departure Time":"14:48:00","Departure Dogs":"10"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.48","Speed":"8.75","Arrival Date":"03/14/2017","Arrival Time":"13:02:00","Arrival Dogs":"10","Elapsed Time":"0.57","Departure Date":"03/14/2017","Departure Time":"13:36:00","Departure Dogs":"9"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.57","Speed":"8.62","Arrival Date":"03/14/2017","Arrival Time":"13:04:00","Arrival Dogs":"13","Elapsed Time":"0.52","Departure Date":"03/14/2017","Departure Time":"13:35:00","Departure Dogs":"13"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"7.02","Speed":"6.84","Arrival Date":"03/14/2017","Arrival Time":"13:36:00","Arrival Dogs":"10","Elapsed Time":"0.5","Departure Date":"03/14/2017","Departure Time":"14:06:00","Departure Dogs":"10"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.98","Speed":"6.87","Arrival Date":"03/14/2017","Arrival Time":"13:44:00","Arrival Dogs":"8","Elapsed Time":"4.6","Departure Date":"03/14/2017","Departure Time":"18:20:00","Departure Dogs":"8"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.75","Speed":"7.11","Arrival Date":"03/14/2017","Arrival Time":"14:38:00","Arrival Dogs":"12","Elapsed Time":"0.6","Departure Date":"03/14/2017","Departure Time":"15:14:00","Departure Dogs":"12"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.65","Speed":"8.5","Arrival Date":"03/14/2017","Arrival Time":"14:41:00","Arrival Dogs":"10","Elapsed Time":"0.68","Departure Date":"03/14/2017","Departure Time":"15:22:00","Departure Dogs":"10"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.45","Speed":"7.44","Arrival Date":"03/14/2017","Arrival Time":"14:47:00","Arrival Dogs":"8","Elapsed Time":"0.23","Departure Date":"03/14/2017","Departure Time":"15:01:00","Departure Dogs":"8"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.52","Speed":"7.37","Arrival Date":"03/14/2017","Arrival Time":"14:51:00","Arrival Dogs":"9","Elapsed Time":"0.32","Departure Date":"03/14/2017","Departure Time":"15:10:00","Departure Dogs":"9"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.72","Speed":"7.15","Arrival Date":"03/14/2017","Arrival Time":"15:36:00","Arrival Dogs":"10","Elapsed Time":"0.15","Departure Date":"03/14/2017","Departure Time":"15:45:00","Departure Dogs":"9"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"7.53","Speed":"6.37","Arrival Date":"03/14/2017","Arrival Time":"16:21:00","Arrival Dogs":"10","Elapsed Time":"2.4","Departure Date":"03/14/2017","Departure Time":"18:45:00","Departure Dogs":"10"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.47","Speed":"8.78","Arrival Date":"03/14/2017","Arrival Time":"17:28:00","Arrival Dogs":"9","Elapsed Time":"0.05","Departure Date":"03/14/2017","Departure Time":"17:31:00","Departure Dogs":"9"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.13","Speed":"7.83","Arrival Date":"03/14/2017","Arrival Time":"17:41:00","Arrival Dogs":"9","Elapsed Time":"2.32","Departure Date":"03/14/2017","Departure Time":"20:00:00","Departure Dogs":"9"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"7.05","Speed":"6.81","Arrival Date":"03/14/2017","Arrival Time":"18:26:00","Arrival Dogs":"9","Elapsed Time":"4.38","Departure Date":"03/14/2017","Departure Time":"22:49:00","Departure Dogs":"8"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"7.05","Speed":"6.81","Arrival Date":"03/14/2017","Arrival Time":"18:26:00","Arrival Dogs":"8","Elapsed Time":"4.38","Departure Date":"03/14/2017","Departure Time":"22:49:00","Departure Dogs":"7"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.07","Speed":"7.91","Arrival Date":"03/14/2017","Arrival Time":"18:28:00","Arrival Dogs":"10","Elapsed Time":"5.38","Departure Date":"03/14/2017","Departure Time":"23:51:00","Departure Dogs":"10"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.8","Speed":"8.28","Arrival Date":"03/14/2017","Arrival Time":"22:30:00","Arrival Dogs":"11","Elapsed Time":"5.25","Departure Date":"03/15/2017","Departure Time":"03:45:00","Departure Dogs":"11"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.63","Speed":"8.52","Arrival Date":"03/14/2017","Arrival Time":"22:40:00","Arrival Dogs":"10","Elapsed Time":"5.08","Departure Date":"03/15/2017","Departure Time":"03:45:00","Departure Dogs":"10"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.13","Speed":"7.83","Arrival Date":"03/14/2017","Arrival Time":"23:13:00","Arrival Dogs":"11","Elapsed Time":"4.53","Departure Date":"03/15/2017","Departure Time":"03:45:00","Departure Dogs":"11"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.85","Speed":"8.21","Arrival Date":"03/15/2017","Arrival Time":"03:06:00","Arrival Dogs":"13","Elapsed Time":"5.38","Departure Date":"03/15/2017","Departure Time":"08:29:00","Departure Dogs":"13"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.87","Speed":"8.18","Arrival Date":"03/15/2017","Arrival Time":"05:07:00","Arrival Dogs":"9","Elapsed Time":"4.43","Departure Date":"03/15/2017","Departure Time":"09:33:00","Departure Dogs":"9"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.52","Speed":"8.7","Arrival Date":"03/15/2017","Arrival Time":"05:43:00","Arrival Dogs":"15","Elapsed Time":"3.83","Departure Date":"03/15/2017","Departure Time":"09:33:00","Departure Dogs":"15"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.65","Speed":"8.5","Arrival Date":"03/15/2017","Arrival Time":"06:39:00","Arrival Dogs":"12","Elapsed Time":"4.45","Departure Date":"03/15/2017","Departure Time":"11:06:00","Departure Dogs":"10"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.67","Speed":"8.47","Arrival Date":"03/15/2017","Arrival Time":"06:45:00","Arrival Dogs":"11","Elapsed Time":"0.17","Departure Date":"03/15/2017","Departure Time":"06:55:00","Departure Dogs":"11"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.85","Speed":"8.21","Arrival Date":"03/15/2017","Arrival Time":"08:11:00","Arrival Dogs":"10","Elapsed Time":"4.53","Departure Date":"03/15/2017","Departure Time":"12:43:00","Departure Dogs":"10"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.03","Speed":"7.96","Arrival Date":"03/15/2017","Arrival Time":"09:07:00","Arrival Dogs":"12","Elapsed Time":"4.78","Departure Date":"03/15/2017","Departure Time":"13:54:00","Departure Dogs":"11"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.05","Speed":"7.93","Arrival Date":"03/15/2017","Arrival Time":"09:08:00","Arrival Dogs":"9","Elapsed Time":"4.73","Departure Date":"03/15/2017","Departure Time":"13:52:00","Departure Dogs":"8"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.33","Speed":"9","Arrival Date":"03/15/2017","Arrival Time":"10:27:00","Arrival Dogs":"15","Elapsed Time":"4.35","Departure Date":"03/15/2017","Departure Time":"14:48:00","Departure Dogs":"15"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.73","Speed":"8.37","Arrival Date":"03/15/2017","Arrival Time":"11:19:00","Arrival Dogs":"10","Elapsed Time":"4.67","Departure Date":"03/15/2017","Departure Time":"15:59:00","Departure Dogs":"10"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.13","Speed":"9.35","Arrival Date":"03/16/2017","Arrival Time":"02:17:00","Arrival Dogs":"13","Elapsed Time":"5.8","Departure Date":"03/16/2017","Departure Time":"08:05:00","Departure Dogs":"13"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.47","Speed":"8.78","Arrival Date":"03/16/2017","Arrival Time":"02:40:00","Arrival Dogs":"14","Elapsed Time":"5.73","Departure Date":"03/16/2017","Departure Time":"08:24:00","Departure Dogs":"13"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.38","Speed":"8.92","Arrival Date":"03/16/2017","Arrival Time":"02:54:00","Arrival Dogs":"12","Elapsed Time":"7.68","Departure Date":"03/16/2017","Departure Time":"10:35:00","Departure Dogs":"12"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.67","Speed":"8.47","Arrival Date":"03/16/2017","Arrival Time":"03:12:00","Arrival Dogs":"14","Elapsed Time":"6.62","Departure Date":"03/16/2017","Departure Time":"09:49:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.78","Speed":"8.3","Arrival Date":"03/16/2017","Arrival Time":"04:09:00","Arrival Dogs":"9","Elapsed Time":"8.25","Departure Date":"03/16/2017","Departure Time":"12:24:00","Departure Dogs":"9"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.47","Speed":"8.78","Arrival Date":"03/16/2017","Arrival Time":"04:42:00","Arrival Dogs":"11","Elapsed Time":"5.92","Departure Date":"03/16/2017","Departure Time":"10:37:00","Departure Dogs":"11"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.58","Speed":"8.6","Arrival Date":"03/16/2017","Arrival Time":"05:06:00","Arrival Dogs":"10","Elapsed Time":"8.82","Departure Date":"03/16/2017","Departure Time":"13:55:00","Departure Dogs":"10"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.73","Speed":"8.37","Arrival Date":"03/16/2017","Arrival Time":"05:42:00","Arrival Dogs":"11","Elapsed Time":"7.75","Departure Date":"03/16/2017","Departure Time":"13:27:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.27","Speed":"7.66","Arrival Date":"03/16/2017","Arrival Time":"06:18:00","Arrival Dogs":"11","Elapsed Time":"7.1","Departure Date":"03/16/2017","Departure Time":"13:24:00","Departure Dogs":"11"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.3","Speed":"7.62","Arrival Date":"03/16/2017","Arrival Time":"09:58:00","Arrival Dogs":"13","Elapsed Time":"6.37","Departure Date":"03/16/2017","Departure Time":"16:20:00","Departure Dogs":"12"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.05","Speed":"7.93","Arrival Date":"03/16/2017","Arrival Time":"14:16:00","Arrival Dogs":"12","Elapsed Time":"5.58","Departure Date":"03/16/2017","Departure Time":"19:51:00","Departure Dogs":"12"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.57","Speed":"8.62","Arrival Date":"03/16/2017","Arrival Time":"15:49:00","Arrival Dogs":"12","Elapsed Time":"7.02","Departure Date":"03/16/2017","Departure Time":"22:50:00","Departure Dogs":"12"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"6.65","Speed":"7.22","Arrival Date":"03/16/2017","Arrival Time":"15:51:00","Arrival Dogs":"10","Elapsed Time":"6.4","Departure Date":"03/16/2017","Departure Time":"22:15:00","Departure Dogs":"10"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.32","Speed":"9.03","Arrival Date":"03/16/2017","Arrival Time":"15:59:00","Arrival Dogs":"14","Elapsed Time":"6.4","Departure Date":"03/16/2017","Departure Time":"22:23:00","Departure Dogs":"14"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.28","Speed":"9.09","Arrival Date":"03/16/2017","Arrival Time":"20:25:00","Arrival Dogs":"10","Elapsed Time":"9.07","Departure Date":"03/17/2017","Departure Time":"05:29:00","Departure Dogs":"10"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.38","Speed":"8.92","Arrival Date":"03/16/2017","Arrival Time":"20:26:00","Arrival Dogs":"11","Elapsed Time":"8.85","Departure Date":"03/17/2017","Departure Time":"05:17:00","Departure Dogs":"10"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.55","Speed":"8.65","Arrival Date":"03/17/2017","Arrival Time":"03:15:00","Arrival Dogs":"12","Elapsed Time":"7.75","Departure Date":"03/17/2017","Departure Time":"11:00:00","Departure Dogs":"12"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.85","Speed":"8.21","Arrival Date":"03/17/2017","Arrival Time":"03:52:00","Arrival Dogs":"9","Elapsed Time":"9.12","Departure Date":"03/17/2017","Departure Time":"12:59:00","Departure Dogs":"9"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.92","Speed":"8.11","Arrival Date":"03/17/2017","Arrival Time":"03:54:00","Arrival Dogs":"16","Elapsed Time":"8.92","Departure Date":"03/17/2017","Departure Time":"12:49:00","Departure Dogs":"16"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.08","Speed":"9.44","Arrival Date":"03/17/2017","Arrival Time":"05:05:00","Arrival Dogs":"13","Elapsed Time":"7.2","Departure Date":"03/17/2017","Departure Time":"12:17:00","Departure Dogs":"13"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Elim","Latitude":"64.6162","Longitude":"-162.2494","Distance":"48","Time":"5.8","Speed":"8.28","Arrival Date":"03/17/2017","Arrival Time":"05:33:00","Arrival Dogs":"12","Elapsed Time":"7.17","Departure Date":"03/17/2017","Departure Time":"12:43:00","Departure Dogs":"12"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.38","Speed":"8.54","Arrival Date":"03/13/2017","Arrival Time":"23:36:00","Arrival Dogs":"12","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"07:36:00","Departure Dogs":"11"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.83","Speed":"7.89","Arrival Date":"03/14/2017","Arrival Time":"01:35:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"09:35:00","Departure Dogs":"8"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.9","Speed":"7.8","Arrival Date":"03/14/2017","Arrival Time":"01:48:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"09:48:00","Departure Dogs":"13"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.7","Speed":"6.87","Arrival Date":"03/14/2017","Arrival Time":"05:15:00","Arrival Dogs":"8","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"13:15:00","Departure Dogs":"8"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.83","Speed":"6.73","Arrival Date":"03/14/2017","Arrival Time":"07:08:00","Arrival Dogs":"16","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"15:08:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.87","Speed":"6.7","Arrival Date":"03/14/2017","Arrival Time":"11:50:00","Arrival Dogs":"9","Elapsed Time":"8.1","Departure Date":"03/14/2017","Departure Time":"19:56:00","Departure Dogs":"9"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.95","Speed":"7.73","Arrival Date":"03/14/2017","Arrival Time":"15:49:00","Arrival Dogs":"9","Elapsed Time":"8","Departure Date":"03/14/2017","Departure Time":"23:49:00","Departure Dogs":"9"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.55","Speed":"7.02","Arrival Date":"03/14/2017","Arrival Time":"16:38:00","Arrival Dogs":"10","Elapsed Time":"8.03","Departure Date":"03/15/2017","Departure Time":"00:40:00","Departure Dogs":"10"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.77","Speed":"6.8","Arrival Date":"03/14/2017","Arrival Time":"16:39:00","Arrival Dogs":"10","Elapsed Time":"8.05","Departure Date":"03/15/2017","Departure Time":"00:42:00","Departure Dogs":"9"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.57","Speed":"7.01","Arrival Date":"03/14/2017","Arrival Time":"17:31:00","Arrival Dogs":"8","Elapsed Time":"8.05","Departure Date":"03/15/2017","Departure Time":"01:34:00","Departure Dogs":"8"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.97","Speed":"7.71","Arrival Date":"03/14/2017","Arrival Time":"19:33:00","Arrival Dogs":"13","Elapsed Time":"8.05","Departure Date":"03/15/2017","Departure Time":"03:36:00","Departure Dogs":"12"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"9.65","Speed":"4.77","Arrival Date":"03/14/2017","Arrival Time":"20:02:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"04:02:00","Departure Dogs":"12"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.68","Speed":"6.88","Arrival Date":"03/14/2017","Arrival Time":"20:17:00","Arrival Dogs":"9","Elapsed Time":"8.02","Departure Date":"03/15/2017","Departure Time":"04:18:00","Departure Dogs":"9"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.22","Speed":"7.4","Arrival Date":"03/14/2017","Arrival Time":"21:01:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"05:01:00","Departure Dogs":"9"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.82","Speed":"6.75","Arrival Date":"03/14/2017","Arrival Time":"21:22:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"05:22:00","Departure Dogs":"9"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.77","Speed":"6.8","Arrival Date":"03/14/2017","Arrival Time":"22:08:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"06:08:00","Departure Dogs":"10"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"7.9","Speed":"5.82","Arrival Date":"03/14/2017","Arrival Time":"23:04:00","Arrival Dogs":"9","Elapsed Time":"8.03","Departure Date":"03/15/2017","Departure Time":"07:06:00","Departure Dogs":"8"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"8.05","Speed":"5.71","Arrival Date":"03/14/2017","Arrival Time":"23:04:00","Arrival Dogs":"8","Elapsed Time":"8.03","Departure Date":"03/15/2017","Departure Time":"07:06:00","Departure Dogs":"8"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"7.37","Speed":"6.24","Arrival Date":"03/14/2017","Arrival Time":"23:07:00","Arrival Dogs":"9","Elapsed Time":"8.05","Departure Date":"03/15/2017","Departure Time":"07:10:00","Departure Dogs":"9"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"10.22","Speed":"4.5","Arrival Date":"03/15/2017","Arrival Time":"00:19:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"08:19:00","Departure Dogs":"9"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.9","Speed":"6.67","Arrival Date":"03/15/2017","Arrival Time":"00:25:00","Arrival Dogs":"9","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"08:25:00","Departure Dogs":"9"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"7.87","Speed":"5.85","Arrival Date":"03/15/2017","Arrival Time":"02:12:00","Arrival Dogs":"8","Elapsed Time":"8.03","Departure Date":"03/15/2017","Departure Time":"10:14:00","Departure Dogs":"8"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.47","Speed":"7.11","Arrival Date":"03/15/2017","Arrival Time":"02:28:00","Arrival Dogs":"9","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"10:28:00","Departure Dogs":"8"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"15.95","Speed":"2.88","Arrival Date":"03/15/2017","Arrival Time":"02:54:00","Arrival Dogs":"11","Elapsed Time":"8.03","Departure Date":"03/15/2017","Departure Time":"10:56:00","Departure Dogs":"11"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"12.02","Speed":"3.83","Arrival Date":"03/15/2017","Arrival Time":"03:15:00","Arrival Dogs":"12","Elapsed Time":"8.1","Departure Date":"03/15/2017","Departure Time":"11:21:00","Departure Dogs":"12"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"9.12","Speed":"5.05","Arrival Date":"03/15/2017","Arrival Time":"03:52:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"11:52:00","Departure Dogs":"10"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"12.35","Speed":"3.72","Arrival Date":"03/15/2017","Arrival Time":"04:06:00","Arrival Dogs":"9","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"12:06:00","Departure Dogs":"9"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.3","Speed":"7.3","Arrival Date":"03/15/2017","Arrival Time":"06:09:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"14:09:00","Departure Dogs":"10"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"7.62","Speed":"6.04","Arrival Date":"03/15/2017","Arrival Time":"06:26:00","Arrival Dogs":"7","Elapsed Time":"8.23","Departure Date":"03/15/2017","Departure Time":"14:40:00","Departure Dogs":"7"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"8.33","Speed":"5.52","Arrival Date":"03/15/2017","Arrival Time":"07:09:00","Arrival Dogs":"8","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"15:09:00","Departure Dogs":"8"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.7","Speed":"8.07","Arrival Date":"03/15/2017","Arrival Time":"09:27:00","Arrival Dogs":"11","Elapsed Time":"8.02","Departure Date":"03/15/2017","Departure Time":"17:28:00","Departure Dogs":"11"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.72","Speed":"8.05","Arrival Date":"03/15/2017","Arrival Time":"09:28:00","Arrival Dogs":"10","Elapsed Time":"8.12","Departure Date":"03/15/2017","Departure Time":"17:35:00","Departure Dogs":"10"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.83","Speed":"7.89","Arrival Date":"03/15/2017","Arrival Time":"09:35:00","Arrival Dogs":"11","Elapsed Time":"8.08","Departure Date":"03/15/2017","Departure Time":"17:40:00","Departure Dogs":"10"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.5","Speed":"8.36","Arrival Date":"03/15/2017","Arrival Time":"13:59:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/15/2017","Departure Time":"21:59:00","Departure Dogs":"12"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.98","Speed":"7.69","Arrival Date":"03/15/2017","Arrival Time":"15:32:00","Arrival Dogs":"9","Elapsed Time":"8.07","Departure Date":"03/15/2017","Departure Time":"23:36:00","Departure Dogs":"9"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.4","Speed":"7.19","Arrival Date":"03/15/2017","Arrival Time":"15:57:00","Arrival Dogs":"15","Elapsed Time":"8.38","Departure Date":"03/16/2017","Departure Time":"00:20:00","Departure Dogs":"14"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6","Speed":"7.67","Arrival Date":"03/15/2017","Arrival Time":"17:06:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/16/2017","Departure Time":"01:06:00","Departure Dogs":"10"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.1","Speed":"7.54","Arrival Date":"03/15/2017","Arrival Time":"18:49:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/16/2017","Departure Time":"02:49:00","Departure Dogs":"10"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.18","Speed":"7.44","Arrival Date":"03/15/2017","Arrival Time":"20:05:00","Arrival Dogs":"11","Elapsed Time":"8.93","Departure Date":"03/16/2017","Departure Time":"05:01:00","Departure Dogs":"10"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.23","Speed":"7.38","Arrival Date":"03/15/2017","Arrival Time":"20:06:00","Arrival Dogs":"8","Elapsed Time":"8.93","Departure Date":"03/16/2017","Departure Time":"05:02:00","Departure Dogs":"7"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.77","Speed":"7.98","Arrival Date":"03/15/2017","Arrival Time":"20:34:00","Arrival Dogs":"15","Elapsed Time":"8.2","Departure Date":"03/16/2017","Departure Time":"04:46:00","Departure Dogs":"14"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"13.65","Speed":"3.37","Arrival Date":"03/15/2017","Arrival Time":"20:34:00","Arrival Dogs":"11","Elapsed Time":"20.85","Departure Date":"03/16/2017","Departure Time":"17:25:00","Departure Dogs":"11"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.93","Speed":"7.75","Arrival Date":"03/15/2017","Arrival Time":"21:55:00","Arrival Dogs":"10","Elapsed Time":"8.63","Departure Date":"03/16/2017","Departure Time":"06:33:00","Departure Dogs":"10"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.12","Speed":"8.99","Arrival Date":"03/16/2017","Arrival Time":"13:12:00","Arrival Dogs":"13","Elapsed Time":"8.07","Departure Date":"03/16/2017","Departure Time":"21:16:00","Departure Dogs":"11"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.98","Speed":"7.69","Arrival Date":"03/16/2017","Arrival Time":"14:23:00","Arrival Dogs":"13","Elapsed Time":"8","Departure Date":"03/16/2017","Departure Time":"22:23:00","Departure Dogs":"13"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.73","Speed":"8.02","Arrival Date":"03/16/2017","Arrival Time":"15:33:00","Arrival Dogs":"12","Elapsed Time":"8.22","Departure Date":"03/16/2017","Departure Time":"23:46:00","Departure Dogs":"10"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.52","Speed":"8.34","Arrival Date":"03/16/2017","Arrival Time":"16:08:00","Arrival Dogs":"11","Elapsed Time":"8","Departure Date":"03/17/2017","Departure Time":"00:08:00","Departure Dogs":"11"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.55","Speed":"8.29","Arrival Date":"03/16/2017","Arrival Time":"16:08:00","Arrival Dogs":"12","Elapsed Time":"8.47","Departure Date":"03/17/2017","Departure Time":"00:36:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.93","Speed":"7.75","Arrival Date":"03/16/2017","Arrival Time":"18:20:00","Arrival Dogs":"9","Elapsed Time":"8.13","Departure Date":"03/17/2017","Departure Time":"02:28:00","Departure Dogs":"9"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.27","Speed":"8.73","Arrival Date":"03/16/2017","Arrival Time":"19:11:00","Arrival Dogs":"10","Elapsed Time":"8","Departure Date":"03/17/2017","Departure Time":"03:11:00","Departure Dogs":"10"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.78","Speed":"7.95","Arrival Date":"03/16/2017","Arrival Time":"19:14:00","Arrival Dogs":"11","Elapsed Time":"8","Departure Date":"03/17/2017","Departure Time":"03:14:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.17","Speed":"7.46","Arrival Date":"03/16/2017","Arrival Time":"19:34:00","Arrival Dogs":"11","Elapsed Time":"8","Departure Date":"03/17/2017","Departure Time":"03:34:00","Departure Dogs":"10"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.78","Speed":"6.78","Arrival Date":"03/16/2017","Arrival Time":"23:07:00","Arrival Dogs":"12","Elapsed Time":"8.13","Departure Date":"03/17/2017","Departure Time":"07:15:00","Departure Dogs":"12"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.7","Speed":"6.87","Arrival Date":"03/17/2017","Arrival Time":"02:33:00","Arrival Dogs":"12","Elapsed Time":"8.02","Departure Date":"03/17/2017","Departure Time":"10:34:00","Departure Dogs":"12"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.92","Speed":"7.77","Arrival Date":"03/17/2017","Arrival Time":"04:18:00","Arrival Dogs":"14","Elapsed Time":"10.45","Departure Date":"03/17/2017","Departure Time":"14:45:00","Departure Dogs":"14"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.75","Speed":"6.81","Arrival Date":"03/17/2017","Arrival Time":"05:00:00","Arrival Dogs":"10","Elapsed Time":"10.68","Departure Date":"03/17/2017","Departure Time":"15:41:00","Departure Dogs":"10"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.37","Speed":"7.23","Arrival Date":"03/17/2017","Arrival Time":"05:12:00","Arrival Dogs":"12","Elapsed Time":"8.78","Departure Date":"03/17/2017","Departure Time":"13:59:00","Departure Dogs":"12"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.48","Speed":"8.39","Arrival Date":"03/17/2017","Arrival Time":"10:46:00","Arrival Dogs":"10","Elapsed Time":"12.53","Departure Date":"03/17/2017","Departure Time":"23:18:00","Departure Dogs":"10"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.4","Speed":"8.52","Arrival Date":"03/17/2017","Arrival Time":"10:53:00","Arrival Dogs":"10","Elapsed Time":"12.27","Departure Date":"03/17/2017","Departure Time":"23:09:00","Departure Dogs":"10"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.83","Speed":"7.89","Arrival Date":"03/17/2017","Arrival Time":"16:50:00","Arrival Dogs":"12","Elapsed Time":"8.85","Departure Date":"03/18/2017","Departure Time":"01:41:00","Departure Dogs":"12"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"5.75","Speed":"8","Arrival Date":"03/17/2017","Arrival Time":"18:02:00","Arrival Dogs":"13","Elapsed Time":"10.87","Departure Date":"03/18/2017","Departure Time":"04:54:00","Departure Dogs":"12"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.13","Speed":"7.5","Arrival Date":"03/17/2017","Arrival Time":"18:51:00","Arrival Dogs":"12","Elapsed Time":"9.08","Departure Date":"03/18/2017","Departure Time":"03:56:00","Departure Dogs":"12"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.35","Speed":"7.24","Arrival Date":"03/17/2017","Arrival Time":"19:10:00","Arrival Dogs":"16","Elapsed Time":"9.07","Departure Date":"03/18/2017","Departure Time":"04:14:00","Departure Dogs":"16"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"White Mountain","Latitude":"64.6798","Longitude":"-163.4067","Distance":"46","Time":"6.2","Speed":"7.42","Arrival Date":"03/17/2017","Arrival Time":"19:11:00","Arrival Dogs":"9","Elapsed Time":"9.05","Departure Date":"03/18/2017","Departure Time":"04:14:00","Departure Dogs":"9"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"5.55","Speed":"9.91","Arrival Date":"03/14/2017","Arrival Time":"13:09:00","Arrival Dogs":"11","Elapsed Time":"0.02","Departure Date":"03/14/2017","Departure Time":"13:10:00","Departure Dogs":"11"},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.17","Speed":"8.92","Arrival Date":"03/14/2017","Arrival Time":"15:45:00","Arrival Dogs":"8","Elapsed Time":"0.07","Departure Date":"03/14/2017","Departure Time":"15:49:00","Departure Dogs":"7"},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.22","Speed":"8.85","Arrival Date":"03/14/2017","Arrival Time":"16:01:00","Arrival Dogs":"13","Elapsed Time":"0.02","Departure Date":"03/14/2017","Departure Time":"16:02:00","Departure Dogs":"13"},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.68","Speed":"8.23","Arrival Date":"03/14/2017","Arrival Time":"19:56:00","Arrival Dogs":"8","Elapsed Time":"0.03","Departure Date":"03/14/2017","Departure Time":"19:58:00","Departure Dogs":"8"},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.88","Speed":"7.99","Arrival Date":"03/14/2017","Arrival Time":"22:01:00","Arrival Dogs":"16","Elapsed Time":"0.03","Departure Date":"03/14/2017","Departure Time":"22:03:00","Departure Dogs":"16"},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.25","Speed":"7.59","Arrival Date":"03/15/2017","Arrival Time":"03:11:00","Arrival Dogs":"9","Elapsed Time":"0.12","Departure Date":"03/15/2017","Departure Time":"03:18:00","Departure Dogs":"9"},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.53","Speed":"8.42","Arrival Date":"03/15/2017","Arrival Time":"06:21:00","Arrival Dogs":"9","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"06:22:00","Departure Dogs":"9"},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.98","Speed":"7.88","Arrival Date":"03/15/2017","Arrival Time":"07:41:00","Arrival Dogs":"9","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"07:42:00","Departure Dogs":"9"},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.03","Speed":"7.82","Arrival Date":"03/15/2017","Arrival Time":"07:42:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"07:43:00","Departure Dogs":"10"},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.42","Speed":"7.42","Arrival Date":"03/15/2017","Arrival Time":"08:59:00","Arrival Dogs":"8","Elapsed Time":"0.05","Departure Date":"03/15/2017","Departure Time":"09:02:00","Departure Dogs":"8"},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.53","Speed":"8.42","Arrival Date":"03/15/2017","Arrival Time":"10:08:00","Arrival Dogs":"12","Elapsed Time":"0.18","Departure Date":"03/15/2017","Departure Time":"10:19:00","Departure Dogs":"12"},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.58","Speed":"8.35","Arrival Date":"03/15/2017","Arrival Time":"10:53:00","Arrival Dogs":"9","Elapsed Time":"0.03","Departure Date":"03/15/2017","Departure Time":"10:55:00","Departure Dogs":"9"},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.87","Speed":"8.01","Arrival Date":"03/15/2017","Arrival Time":"10:54:00","Arrival Dogs":"12","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"10:55:00","Departure Dogs":"12"},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.53","Speed":"8.42","Arrival Date":"03/15/2017","Arrival Time":"11:33:00","Arrival Dogs":"9","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"11:34:00","Departure Dogs":"9"},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.17","Speed":"8.92","Arrival Date":"03/15/2017","Arrival Time":"12:18:00","Arrival Dogs":"10","Elapsed Time":"0.05","Departure Date":"03/15/2017","Departure Time":"12:21:00","Departure Dogs":"9"},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.02","Speed":"7.84","Arrival Date":"03/15/2017","Arrival Time":"12:23:00","Arrival Dogs":"9","Elapsed Time":"0.05","Departure Date":"03/15/2017","Departure Time":"12:26:00","Departure Dogs":"9"},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.87","Speed":"8.01","Arrival Date":"03/15/2017","Arrival Time":"14:02:00","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"03/15/2017","Departure Time":"14:02:00","Departure Dogs":"9"},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.22","Speed":"7.62","Arrival Date":"03/15/2017","Arrival Time":"14:19:00","Arrival Dogs":"8","Elapsed Time":"0.03","Departure Date":"03/15/2017","Departure Time":"14:21:00","Departure Dogs":"8"},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.22","Speed":"7.62","Arrival Date":"03/15/2017","Arrival Time":"14:19:00","Arrival Dogs":"8","Elapsed Time":"0.03","Departure Date":"03/15/2017","Departure Time":"14:21:00","Departure Dogs":"8"},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.53","Speed":"8.42","Arrival Date":"03/15/2017","Arrival Time":"14:57:00","Arrival Dogs":"9","Elapsed Time":"0.07","Departure Date":"03/15/2017","Departure Time":"15:01:00","Departure Dogs":"9"},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.1","Speed":"7.75","Arrival Date":"03/15/2017","Arrival Time":"15:25:00","Arrival Dogs":"9","Elapsed Time":"0.07","Departure Date":"03/15/2017","Departure Time":"15:29:00","Departure Dogs":"9"},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.23","Speed":"8.82","Arrival Date":"03/15/2017","Arrival Time":"16:42:00","Arrival Dogs":"8","Elapsed Time":"0.03","Departure Date":"03/15/2017","Departure Time":"16:44:00","Departure Dogs":"8"},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.42","Speed":"7.42","Arrival Date":"03/15/2017","Arrival Time":"17:39:00","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"03/15/2017","Departure Time":"17:39:00","Departure Dogs":"8"},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.73","Speed":"8.17","Arrival Date":"03/15/2017","Arrival Time":"17:40:00","Arrival Dogs":"11","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"17:41:00","Departure Dogs":"11"},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.42","Speed":"7.42","Arrival Date":"03/15/2017","Arrival Time":"18:46:00","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"03/15/2017","Departure Time":"18:46:00","Departure Dogs":"12"},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.77","Speed":"7.08","Arrival Date":"03/15/2017","Arrival Time":"19:52:00","Arrival Dogs":"9","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"19:53:00","Departure Dogs":"9"},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"8.05","Speed":"6.83","Arrival Date":"03/15/2017","Arrival Time":"19:55:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"19:56:00","Departure Dogs":"10"},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.63","Speed":"8.29","Arrival Date":"03/15/2017","Arrival Time":"20:47:00","Arrival Dogs":"10","Elapsed Time":"0.05","Departure Date":"03/15/2017","Departure Time":"20:50:00","Departure Dogs":"10"},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.98","Speed":"6.89","Arrival Date":"03/15/2017","Arrival Time":"23:08:00","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"03/15/2017","Departure Time":"23:08:00","Departure Dogs":"8"},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.13","Speed":"8.97","Arrival Date":"03/15/2017","Arrival Time":"23:48:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/15/2017","Departure Time":"23:49:00","Departure Dogs":"10"},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.23","Speed":"8.82","Arrival Date":"03/15/2017","Arrival Time":"23:49:00","Arrival Dogs":"10","Elapsed Time":"0.03","Departure Date":"03/15/2017","Departure Time":"23:51:00","Departure Dogs":"10"},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.68","Speed":"8.23","Arrival Date":"03/16/2017","Arrival Time":"00:09:00","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"03/16/2017","Departure Time":"00:09:00","Departure Dogs":"11"},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.15","Speed":"7.69","Arrival Date":"03/16/2017","Arrival Time":"05:08:00","Arrival Dogs":"12","Elapsed Time":"0.05","Departure Date":"03/16/2017","Departure Time":"05:11:00","Departure Dogs":"12"},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"14.47","Speed":"3.8","Arrival Date":"03/16/2017","Arrival Time":"05:08:00","Arrival Dogs":"7","Elapsed Time":"0.07","Departure Date":"03/16/2017","Departure Time":"05:12:00","Departure Dogs":"7"},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.38","Speed":"8.62","Arrival Date":"03/16/2017","Arrival Time":"05:59:00","Arrival Dogs":"9","Elapsed Time":"0.02","Departure Date":"03/16/2017","Departure Time":"06:00:00","Departure Dogs":"9"},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.47","Speed":"8.51","Arrival Date":"03/16/2017","Arrival Time":"06:48:00","Arrival Dogs":"14","Elapsed Time":"0.02","Departure Date":"03/16/2017","Departure Time":"06:49:00","Departure Dogs":"14"},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.52","Speed":"8.44","Arrival Date":"03/16/2017","Arrival Time":"07:37:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/16/2017","Departure Time":"07:38:00","Departure Dogs":"10"},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.9","Speed":"7.97","Arrival Date":"03/16/2017","Arrival Time":"09:43:00","Arrival Dogs":"10","Elapsed Time":"0.03","Departure Date":"03/16/2017","Departure Time":"09:45:00","Departure Dogs":"10"},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.07","Speed":"9.07","Arrival Date":"03/16/2017","Arrival Time":"10:50:00","Arrival Dogs":"14","Elapsed Time":"0.03","Departure Date":"03/16/2017","Departure Time":"10:52:00","Departure Dogs":"14"},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.62","Speed":"8.31","Arrival Date":"03/16/2017","Arrival Time":"11:38:00","Arrival Dogs":"10","Elapsed Time":"0.03","Departure Date":"03/16/2017","Departure Time":"11:40:00","Departure Dogs":"10"},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.62","Speed":"8.31","Arrival Date":"03/16/2017","Arrival Time":"11:39:00","Arrival Dogs":"7","Elapsed Time":"0.05","Departure Date":"03/16/2017","Departure Time":"11:42:00","Departure Dogs":"7"},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.27","Speed":"8.78","Arrival Date":"03/16/2017","Arrival Time":"12:49:00","Arrival Dogs":"10","Elapsed Time":"0.03","Departure Date":"03/16/2017","Departure Time":"12:51:00","Departure Dogs":"10"},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6","Speed":"9.17","Arrival Date":"03/16/2017","Arrival Time":"23:25:00","Arrival Dogs":"11","Elapsed Time":"0.05","Departure Date":"03/16/2017","Departure Time":"23:28:00","Departure Dogs":"11"},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.35","Speed":"8.66","Arrival Date":"03/17/2017","Arrival Time":"03:37:00","Arrival Dogs":"11","Elapsed Time":"0.13","Departure Date":"03/17/2017","Departure Time":"03:45:00","Departure Dogs":"11"},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.52","Speed":"8.44","Arrival Date":"03/17/2017","Arrival Time":"04:54:00","Arrival Dogs":"13","Elapsed Time":"0.07","Departure Date":"03/17/2017","Departure Time":"04:58:00","Departure Dogs":"13"},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.47","Speed":"8.51","Arrival Date":"03/17/2017","Arrival Time":"06:14:00","Arrival Dogs":"10","Elapsed Time":"0.03","Departure Date":"03/17/2017","Departure Time":"06:16:00","Departure Dogs":"10"},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.87","Speed":"8.01","Arrival Date":"03/17/2017","Arrival Time":"07:00:00","Arrival Dogs":"11","Elapsed Time":"0.05","Departure Date":"03/17/2017","Departure Time":"07:03:00","Departure Dogs":"11"},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.6","Speed":"8.33","Arrival Date":"03/17/2017","Arrival Time":"07:12:00","Arrival Dogs":"12","Elapsed Time":"0.03","Departure Date":"03/17/2017","Departure Time":"07:14:00","Departure Dogs":"12"},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.42","Speed":"8.57","Arrival Date":"03/17/2017","Arrival Time":"08:53:00","Arrival Dogs":"9","Elapsed Time":"0.08","Departure Date":"03/17/2017","Departure Time":"08:58:00","Departure Dogs":"9"},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.25","Speed":"8.8","Arrival Date":"03/17/2017","Arrival Time":"09:26:00","Arrival Dogs":"10","Elapsed Time":"0.05","Departure Date":"03/17/2017","Departure Time":"09:29:00","Departure Dogs":"10"},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7","Speed":"7.86","Arrival Date":"03/17/2017","Arrival Time":"10:14:00","Arrival Dogs":"11","Elapsed Time":"0.05","Departure Date":"03/17/2017","Departure Time":"10:17:00","Departure Dogs":"11"},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.53","Speed":"7.3","Arrival Date":"03/17/2017","Arrival Time":"11:06:00","Arrival Dogs":"10","Elapsed Time":"0.12","Departure Date":"03/17/2017","Departure Time":"11:13:00","Departure Dogs":"8"},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.12","Speed":"7.73","Arrival Date":"03/17/2017","Arrival Time":"14:22:00","Arrival Dogs":"12","Elapsed Time":"0.03","Departure Date":"03/17/2017","Departure Time":"14:24:00","Departure Dogs":"12"},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.27","Speed":"7.57","Arrival Date":"03/17/2017","Arrival Time":"17:50:00","Arrival Dogs":"12","Elapsed Time":"0.07","Departure Date":"03/17/2017","Departure Time":"17:54:00","Departure Dogs":"12"},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.12","Speed":"7.73","Arrival Date":"03/17/2017","Arrival Time":"21:06:00","Arrival Dogs":"12","Elapsed Time":"7.57","Departure Date":"03/18/2017","Departure Time":"04:40:00","Departure Dogs":"12"},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.35","Speed":"7.48","Arrival Date":"03/17/2017","Arrival Time":"22:06:00","Arrival Dogs":"14","Elapsed Time":"0.08","Departure Date":"03/17/2017","Departure Time":"22:11:00","Departure Dogs":"14"},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.62","Speed":"7.22","Arrival Date":"03/17/2017","Arrival Time":"23:18:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/17/2017","Departure Time":"23:19:00","Departure Dogs":"10"},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"5.9","Speed":"9.32","Arrival Date":"03/18/2017","Arrival Time":"05:12:00","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"03/18/2017","Departure Time":"05:12:00","Departure Dogs":"10"},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.15","Speed":"8.94","Arrival Date":"03/18/2017","Arrival Time":"05:18:00","Arrival Dogs":"10","Elapsed Time":"0.02","Departure Date":"03/18/2017","Departure Time":"05:19:00","Departure Dogs":"10"},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.5","Speed":"8.46","Arrival Date":"03/18/2017","Arrival Time":"08:11:00","Arrival Dogs":"12","Elapsed Time":"1.18","Departure Date":"03/18/2017","Departure Time":"09:22:00","Departure Dogs":"12"},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.92","Speed":"7.95","Arrival Date":"03/18/2017","Arrival Time":"11:09:00","Arrival Dogs":"16","Elapsed Time":"0","Departure Date":"03/18/2017","Departure Time":"11:09:00","Departure Dogs":"16"},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.92","Speed":"7.95","Arrival Date":"03/18/2017","Arrival Time":"11:09:00","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"03/18/2017","Departure Time":"11:09:00","Departure Dogs":"9"},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"7.28","Speed":"7.55","Arrival Date":"03/18/2017","Arrival Time":"11:13:00","Arrival Dogs":"12","Elapsed Time":"0.03","Departure Date":"03/18/2017","Departure Time":"11:15:00","Departure Dogs":"12"},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Safety","Latitude":"64.4681","Longitude":"-164.7519","Distance":"55","Time":"6.92","Speed":"7.95","Arrival Date":"03/18/2017","Arrival Time":"11:49:00","Arrival Dogs":"12","Elapsed Time":"0.07","Departure Date":"03/18/2017","Departure Time":"11:53:00","Departure Dogs":"12"},
{"Number":"16","Name":"Mitch Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.5","Speed":"8.8","Arrival Date":"03/14/2017","Arrival Time":"15:40:13","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"18","Name":"Dallas Seavey","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.58","Speed":"8.52","Arrival Date":"03/14/2017","Arrival Time":"18:24:31","Arrival Dogs":"7","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"24","Name":"Nicolas Petit","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.45","Speed":"8.98","Arrival Date":"03/14/2017","Arrival Time":"18:29:13","Arrival Dogs":"13","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"38","Name":"Joar Leifseth Ulsom","Status":"Veteran","Country":"Norway","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.03","Speed":"7.25","Arrival Date":"03/14/2017","Arrival Time":"23:00:40","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"37","Name":"Jessie Royer","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.08","Speed":"7.14","Arrival Date":"03/15/2017","Arrival Time":"01:08:54","Arrival Dogs":"16","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"29","Name":"Wade Marrs","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.42","Speed":"6.44","Arrival Date":"03/15/2017","Arrival Time":"06:43:40","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"14","Name":"Ray Redington Jr.","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.85","Speed":"7.72","Arrival Date":"03/15/2017","Arrival Time":"09:13:04","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"41","Name":"Aliy Zirkle","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.12","Speed":"7.06","Arrival Date":"03/15/2017","Arrival Time":"10:49:42","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"25","Name":"Peter Kaiser","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.37","Speed":"6.53","Arrival Date":"03/15/2017","Arrival Time":"11:05:38","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"57","Name":"Paul Gebhardt","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.97","Speed":"7.42","Arrival Date":"03/15/2017","Arrival Time":"12:00:06","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"34","Name":"Jeff King","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.5","Speed":"8.8","Arrival Date":"03/15/2017","Arrival Time":"12:49:42","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"44","Name":"Ramey Smyth","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.87","Speed":"7.67","Arrival Date":"03/15/2017","Arrival Time":"13:47:08","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"9","Name":"Michelle Phillips","Status":"Veteran","Country":"Canada","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.12","Speed":"7.06","Arrival Date":"03/15/2017","Arrival Time":"14:02:45","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"2","Name":"Ryan Redington","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.3","Speed":"6.67","Arrival Date":"03/15/2017","Arrival Time":"14:52:07","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"32","Name":"Hans Gatt","Status":"Veteran","Country":"Canada","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.92","Speed":"7.54","Arrival Date":"03/15/2017","Arrival Time":"15:16:27","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"39","Name":"Ralph Johannessen","Status":"Veteran","Country":"Norway","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.25","Speed":"6.77","Arrival Date":"03/15/2017","Arrival Time":"15:41:06","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"59","Name":"Ken Anderson","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.18","Speed":"6.91","Arrival Date":"03/15/2017","Arrival Time":"17:13:31","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"65","Name":"John Baker","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.48","Speed":"6.32","Arrival Date":"03/15/2017","Arrival Time":"17:50:30","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"52","Name":"Katherine Keith","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.48","Speed":"6.32","Arrival Date":"03/15/2017","Arrival Time":"17:50:31","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"6","Name":"Linwood Fiedler","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.13","Speed":"7.02","Arrival Date":"03/15/2017","Arrival Time":"18:09:52","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"64","Name":"Jason Mackey","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.83","Speed":"7.76","Arrival Date":"03/15/2017","Arrival Time":"18:19:23","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"70","Name":"Robert Redington","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.82","Speed":"7.81","Arrival Date":"03/15/2017","Arrival Time":"19:33:16","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"13","Name":"Sebastien Vergnaud","Status":"Rookie","Country":"France","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.8","Speed":"7.86","Arrival Date":"03/15/2017","Arrival Time":"20:27:53","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"21","Name":"Richie Diehl","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.87","Speed":"7.67","Arrival Date":"03/15/2017","Arrival Time":"20:33:22","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"33","Name":"Mats Pettersson","Status":"Veteran","Country":"Sweden","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.23","Speed":"6.8","Arrival Date":"03/15/2017","Arrival Time":"22:00:22","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"45","Name":"Lars Monsen","Status":"Veteran","Country":"Norway","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.13","Speed":"7.02","Arrival Date":"03/15/2017","Arrival Time":"23:01:58","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"50","Name":"Hugh Neff","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.73","Speed":"5.89","Arrival Date":"03/15/2017","Arrival Time":"23:40:07","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"27","Name":"Rick Casillo","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.1","Speed":"7.1","Arrival Date":"03/15/2017","Arrival Time":"23:56:40","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"63","Name":"Noah Burmeister","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.35","Speed":"6.57","Arrival Date":"03/16/2017","Arrival Time":"02:29:49","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"5","Name":"Cody Strathe","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.72","Speed":"8.1","Arrival Date":"03/16/2017","Arrival Time":"02:34:41","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"11","Name":"Ketil Reitan","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.98","Speed":"7.37","Arrival Date":"03/16/2017","Arrival Time":"02:48:58","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"15","Name":"Martin Buser","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.08","Speed":"7.14","Arrival Date":"03/16/2017","Arrival Time":"03:14:51","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"56","Name":"Melissa Stewart","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.9","Speed":"7.59","Arrival Date":"03/16/2017","Arrival Time":"08:05:59","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"69","Name":"Scott Smith","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.23","Speed":"6.8","Arrival Date":"03/16/2017","Arrival Time":"08:26:20","Arrival Dogs":"7","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"62","Name":"Nathan Schroeder","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.13","Speed":"7.02","Arrival Date":"03/16/2017","Arrival Time":"09:08:12","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"26","Name":"Nicolas Vanier","Status":"Rookie","Country":"France","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.85","Speed":"7.72","Arrival Date":"03/16/2017","Arrival Time":"09:40:07","Arrival Dogs":"14","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"51","Name":"Seth Barnes","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.92","Speed":"7.54","Arrival Date":"03/16/2017","Arrival Time":"10:33:30","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"20","Name":"Karin Hendrickson","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.12","Speed":"7.06","Arrival Date":"03/16/2017","Arrival Time":"12:52:05","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"36","Name":"Allen Moore","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.53","Speed":"8.68","Arrival Date":"03/16/2017","Arrival Time":"13:24:27","Arrival Dogs":"14","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"73","Name":"Kristy Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.82","Speed":"7.81","Arrival Date":"03/16/2017","Arrival Time":"14:29:53","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"66","Name":"Anna Berington","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.8","Speed":"7.86","Arrival Date":"03/16/2017","Arrival Time":"14:30:14","Arrival Dogs":"7","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"7","Name":"Laura Neese","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.82","Speed":"7.81","Arrival Date":"03/16/2017","Arrival Time":"15:40:40","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"28","Name":"Jodi Bailey","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"6.22","Speed":"3.54","Arrival Date":"03/17/2017","Arrival Time":"05:41:40","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"71","Name":"Larry Daugherty","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.73","Speed":"8.05","Arrival Date":"03/17/2017","Arrival Time":"06:29:10","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"54","Name":"Geir Idar Hjelvik","Status":"Veteran","Country":"Norway","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.12","Speed":"7.06","Arrival Date":"03/17/2017","Arrival Time":"08:05:19","Arrival Dogs":"13","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"46","Name":"Charley Bejna","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.23","Speed":"6.8","Arrival Date":"03/17/2017","Arrival Time":"09:30:21","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"22","Name":"DeeDee Jonrowe","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.82","Speed":"7.81","Arrival Date":"03/17/2017","Arrival Time":"10:03:37","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"19","Name":"Gunnar Johnson","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.02","Speed":"7.29","Arrival Date":"03/17/2017","Arrival Time":"10:04:06","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"48","Name":"Justin High","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.27","Speed":"6.73","Arrival Date":"03/17/2017","Arrival Time":"12:14:35","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"72","Name":"Dave Delcourt","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.82","Speed":"7.81","Arrival Date":"03/17/2017","Arrival Time":"12:18:08","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"49","Name":"Justin Stielstra","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.45","Speed":"6.38","Arrival Date":"03/17/2017","Arrival Time":"13:44:36","Arrival Dogs":"11","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"67","Name":"Trent Herbst","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.63","Speed":"6.06","Arrival Date":"03/17/2017","Arrival Time":"14:51:14","Arrival Dogs":"8","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"17","Name":"Kristin Bacon","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.35","Speed":"6.57","Arrival Date":"03/17/2017","Arrival Time":"17:45:43","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"4","Name":"Misha Wiljes","Status":"Rookie","Country":"Czech Republic","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.72","Speed":"5.92","Arrival Date":"03/17/2017","Arrival Time":"21:37:20","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"12","Name":"Joe Carson","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.45","Speed":"6.38","Arrival Date":"03/18/2017","Arrival Time":"01:38:07","Arrival Dogs":"14","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"40","Name":"Thomas Rosenbloom","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.5","Speed":"6.29","Arrival Date":"03/18/2017","Arrival Time":"02:49:25","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"42","Name":"Zoya DeNure","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.73","Speed":"8.05","Arrival Date":"03/18/2017","Arrival Time":"07:24:25","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"61","Name":"Michael Baker","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.95","Speed":"7.46","Arrival Date":"03/18/2017","Arrival Time":"08:16:33","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"55","Name":"Matthew Failor","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.12","Speed":"7.06","Arrival Date":"03/18/2017","Arrival Time":"08:19:03","Arrival Dogs":"10","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"43","Name":"Jimmy Lebling","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"2.95","Speed":"7.46","Arrival Date":"03/18/2017","Arrival Time":"12:19:06","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"47","Name":"Paul Hansen","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.07","Speed":"7.17","Arrival Date":"03/18/2017","Arrival Time":"14:19:11","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"35","Name":"Alan Eischens","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.5","Speed":"6.29","Arrival Date":"03/18/2017","Arrival Time":"14:39:46","Arrival Dogs":"16","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"53","Name":"Peter Reuter","Status":"Rookie","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.6","Speed":"6.11","Arrival Date":"03/18/2017","Arrival Time":"14:45:38","Arrival Dogs":"9","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""},
{"Number":"31","Name":"Cindy Abbott","Status":"Veteran","Country":"United States","Checkpoint":"Nome","Latitude":"64.4964","Longitude":"-165.3996","Distance":"22","Time":"3.07","Speed":"7.17","Arrival Date":"03/18/2017","Arrival Time":"14:57:31","Arrival Dogs":"12","Elapsed Time":"0","Departure Date":"","Departure Time":"","Departure Dogs":""}
]
/* harmony export (immutable) */ __webpack_exports__["b"] = idit_data;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(2);

// import dom from './dom';


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(6);




mapboxgl.accessToken = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].API_KEY;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-157.0, 64.2008],
    zoom: 5,
    pitch: 40,
    bearing: 40
});

map.on('load', function() {
    map.addSource('route', {
        type: 'geojson',
        data: __WEBPACK_IMPORTED_MODULE_1__store__["b" /* route */]
    });

    map.addLayer({
        id: 'route',
        source: 'route',
        type: 'line',
        paint: {
            'line-width': __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].trailWidth,
            'line-color': __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].trailColor
        }
    });

    map.addSource('point', {
        type: 'geojson',
        data: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */]
    });

    map.addLayer({
        id: 'point',
        source: 'point',
        type: 'circle',
        paint: {
            'circle-radius': __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].musherRadius,
            'circle-color': {
                property: 'myColor',
                type: 'categorical',
                stops: [['24', '#e74c3c']],
                default: __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].musherColor 
            }
        }
    });

    map.addSource('highlightPoint', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-157.0, 64.2008] 
                }}]
            } 
    });

    map.addLayer({
        id: 'highlight',
        source: 'highlightPoint',
        type: 'circle',
        'layout': {
            'visibility': 'none'
        },
        paint: {
            'circle-radius': __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].musherRadius,
            'circle-color': __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].highlightPointColor 
        }
    });
});

function highlightMusherPoint (coords) {
    let updatedData = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": coords 
            }}]
        } 

    // let visibility = map.getLayoutProperty('highlight', 'visibility');
    map.setLayoutProperty('highlight', 'visibility', 'visible');
    map.getSource('highlightPoint').setData(updatedData); 
}


createMusherListElement(__WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["c" /* musherResults */]);
let hoveringOn = null;
function createMusherListElement (results) {
    const list = document.getElementById('name-list');
    const listItemClass = 'list-item';
    for (let i = 0; i < results.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = results[i].name;
        listItem.className = listItemClass;
        list.appendChild(listItem);
    }

    list.addEventListener('mouseover', function (e) {
        if (e.target.className === listItemClass) {
            const {childNodes} = list;
            childNodes.forEach(child => child.id = "");
            hoveringOn = e.target.innerHTML;
            e.target.id = 'list-item-highlighted';
        };
    }, false);
}

let counter = 0;
let raf;
function play() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.

    // if (counter === null) return;
    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */].features.length; i++) {
        if (__WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */].features[i].properties.name === hoveringOn) {
            let currentPos = __WEBPACK_IMPORTED_MODULE_1__store__["c" /* trails */][i][counter]; // (camden)
            highlightMusherPoint(currentPos);
        }
        if (counter < __WEBPACK_IMPORTED_MODULE_1__store__["c" /* trails */][i].length) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */].features[i].geometry.coordinates =
                __WEBPACK_IMPORTED_MODULE_1__store__["c" /* trails */][i][counter];
        } else {
            console.log('bib', __WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */].features[i].properties.myColor);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */].features.splice(i, 1);
            __WEBPACK_IMPORTED_MODULE_1__store__["c" /* trails */].splice(i, 1);
            // i = 0;
        }
    }
    // map.on('mouseenter', 'point', function(e) {
    //     // Change the cursor style as a UI indicator.
    //     map.getCanvas().style.cursor = 'pointer';

    //     // Populate the popup and set its coordinates
    //     // based on the feature found.
    //     console.log('e', e); // (camden)

    //     map.addSource(e.lngLat.lng, {
    //         type: 'geojson',
    //         data: {
    //             "type": "FeatureCollection",
    //             "features": [{
    //                 "type": "Feature",
    //                 "geometry": {
    //                     "type": "Point",
    //                     "coordinates": [e.lngLat.lng, e.lngLat.lat] 
    //                 }}]
    //             }
    //     }); 

    //     map.addLayer({
    //         id: e.lngLat.ln,
    //         source: 'test1',
    //         type: 'circle',
    //         paint: {
    //             'circle-radius': 10,
    //             'circle-color': '#FFFF00'
               
    //         }
    //     });
    // });

    // Update the source with this new data.
    map.getSource('point').setData(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* musherPoints */]);

    // // Request the next frame of animation so long as destination has not
    // // been reached.
    // if (point.features[0].geometry.coordinates[0] !== destination[0]) {
    //     requestAnimationFrame(play);
    // }

    raf = requestAnimationFrame(play);

    counter = counter + 1;
}

function reset() {
    counter = 0;
}

function stop() {
    cancelAnimationFrame(raf);
}

const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

/* unused harmony default export */ var _unused_webpack_default_export = (map);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return trails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return musherPoints; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cheap_ruler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cheap_ruler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cheap_ruler__);




const data = getMusherData(74);
const sortedByCheckpoint = sortByCheckpoint(data);
console.log('sortedByCheckpoint', sortedByCheckpoint); // (camden)
const musherPoints = createMusherPoints(sortedByCheckpoint); 

const checkpointPairs = getCheckpointPairs(__WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["a" /* checkpointCoordinates */]);
const checkpointFeatures = checkpointPairs.map(cp => createFeature(cp[0], cp[1]));
console.log('checkpointFeatures', checkpointFeatures); // (camden)
let route = {
    "type": "FeatureCollection",
    "features": checkpointFeatures 
};

const trails = getTrailPaths(route, sortedByCheckpoint);

console.log('route.features', route.features);
console.log('trails', trails); // (camden)
// Update the route with the calculated race trajectory of each musher 
// let full = createFeature([0, 0], [0, 0]);
// route.features.push(full);
// route.features[16].geometry.coordinates = trails;
// route.features[1].geometry.coordinates = [
//     [0, 0],
//     [0, 0]
// ];
// route.features[2].geometry.coordinates = [
//     [0, 0],
//     [0, 0]
// ];

// console.log('route.features after', route.features); // (camden)


// const checkpointTimes = getDataPointWithName(sortedByCheckpoint, 'Time');
// let sorted = checkpointTimes.sort((a, b) => {

//     return a.sumTime - b.sumTime;
// });
// console.log('sorted', sorted); // (camden)
// function getDataPointWithName (mushers, key) {
//     return mushers.map(musher => {
//         let obj = {};
//         let test = musher.map(d => {
//             return +d['Time'] + (+d['Elapsed Time']);
//         });
//         let updated = test.slice(1);

//         obj['name'] = musher[0].Name;
//         obj['sumTime'] = updated.reduce((a,b) => a+b);

//         // we don't need the first data point, which is the start of the race
//         return  obj;
//     });
// }

function getDataPoint (mushers, key) {
    return mushers.map(musher => {
        const output = musher.map(d => {
            return +d[key];
        });

        // we don't need the first data point, which is the start of the race
        return output.slice(1);
    });
}

function getCheckpointPairs (coords) {
    let pairs = [];
    for (var i=0 ; i < coords.length ; i++) {
        if (coords[i+1] !== undefined) {
            pairs.push ([coords[i], coords[i+1]]);
        } 
    }

    return pairs;
} 

function createFeature (long, lat) {
    return {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [long, lat]
        }
    } 
}

function createMusherPoints (mushers) {
    // lat and long of the start of the race
   const originLong = __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["a" /* checkpointCoordinates */][0][0];
   const originLat = __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["a" /* checkpointCoordinates */][0][1]; 

   const features = mushers.map(musher => {
        return {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [originLong, originLat]
            },
            "properties": {
                "title": musher[0].Number,
                "myColor": musher[0].Number,
                "name": musher[0].Name
            }
        }
    });

    return {
        "type": "FeatureCollection",
        "features": features
    };
}

function getMusherData(numberOfMushers) {
    let data = [];

    // musher bib numbers start at 2
    const bibStart = 2;

    let nums = ['16', '24'];

    for (let i = bibStart; i < numberOfMushers + bibStart; i++) {
        let groupedByBib = __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["b" /* idit_data */].filter(d => d.Number == i)
            if (groupedByBib.length === 17) {

            //   if (nums.includes(groupedByBib[0].Number)) {
                data.push(groupedByBib); 
            // }
        }
        
    }

    return data;
}

function sortByCheckpoint(musherData) {
    const checkpoints = { 
        'Fairbanks': 0,
        'Nenana': 1,
        'Manley': 2,
        'Tanana': 3,
        'Ruby': 4,
        'Galena': 5,
        'Huslia': 6,
        'Koyukuk': 7,
        'Nulato': 8,
        'Kaltag': 9,
        'Unalakleet': 10,
        'Shaktoolik': 11,
        'Koyuk': 12,
        'Elim': 13,
        'White Mountain': 14,
        'Safety': 15,
        'Nome': 16
    };

    let sorted = [];
    return musherData.map(d => {
        return sorted[checkpoints[d.Checkpoint]] = d
    });
    
}

/**
 * In order to simulate the speed each musher travels the trail, we need to 
 * break up the entire trail into segments which represent the paths between
 * each checkpoint in the race. Then those segments are calculated for each 
 * musher, taking into account their speed and the time they spent on layover 
 * at each checkpoint. Each segment is essentially divided up like a ruler is by
 * inches. The slower the musher, the more slices there are in the segment, 
 * which translates to the dot traveling slower over the trail.
 */

function sumArr(arr) {
    return arr.reduce((a,b) => a+b);
}

function getTrailPaths(route, data) {
    const checkpointTimes = getDataPoint(data, 'Time');
    console.log('checkpointTimes', checkpointTimes); // (camden)
    const checkpointSpeeds = getDataPoint(data, 'Speed');
    console.log('checkpointSpeeds', checkpointSpeeds); // (camden)
    const checkpointLayovers = getDataPoint(data, 'Elapsed Time');
    console.log('checkpointLayovers', checkpointLayovers); // (camden)
    const numberOfMushers = data.length;
    const originLong = __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["a" /* checkpointCoordinates */][0][0];
    const originLat = __WEBPACK_IMPORTED_MODULE_0__assets_Iditarod_2017__["a" /* checkpointCoordinates */][0][1];

    // this calculates the geodesic distance between checkpoints since we 
    // are drawing straight paths between checkpoints instead of the true path 
    // that a musher would use. So we don't use their provided distance traveled
    const ruler = __WEBPACK_IMPORTED_MODULE_2_cheap_ruler___default()(64.5, 'miles');
    const distanceBetweenCheckpoints = route.features.map(ft => ruler.lineDistance(ft.geometry.coordinates));

    let trails = [];
    for (let i = 0; i < numberOfMushers; i++) {
        let normalized = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* normalize */])(checkpointLayovers[i]);
        let trail = [];
        for (let j = 0; j < route.features.length; j++) {
            const simSpeed = 0.04;
            const layoverSimSpeed = 0.04;
            let step = 0;
            let progress = 0;

            /** 
             * use linear interpolation to get position of dot along path.
             * Since we don't have a 'now', we can use a use a step variable to 
             * mimic elapsed time. For example, find the new position of the dot 
             * every minute.
             * 
             * cheapRuler peformed segment calculation 3.6x faster than 
             * turf.js based on performance.now()
            */
            let distanceToCheckpoint = 0;
            while (distanceToCheckpoint <= distanceBetweenCheckpoints[j]) {
                const now = step * checkpointSpeeds[i][j];
                progress = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* lerp */])(now, 0, checkpointTimes[i][j]);

                // Takes a line and returns a point at a specified distance along the line.
                let segment = ruler.along(
                    route.features[j].geometry.coordinates,
                    progress * distanceBetweenCheckpoints[j]
                );

                trail.push(segment);
                step += simSpeed;
                distanceToCheckpoint = progress * distanceBetweenCheckpoints[j];
            }

            // longer layover should mean more segments
            step = 0; // reset step
            let timeTilDeparture = 0;
            while (timeTilDeparture < checkpointTimes[i][j]) {
                const now = step * ((1-normalized[j])+5); 
                progress = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* lerp */])(now, 0, checkpointLayovers[i][j]); 

                let segment = ruler.along(
                    route.features[j].geometry.coordinates,
                    distanceBetweenCheckpoints[j]
                );
                trail.push(segment);
                step += layoverSimSpeed;
                timeTilDeparture = progress * checkpointTimes[i][j]; 
                // console.log('step', step); // (camden)
            }
        }

        console.log('trail.length', trail.length); // (camden)
        trails.push(trail);
    }
    return trails;
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const normalize = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return arr.map(value => (value - min) / (max - min));
}
/* harmony export (immutable) */ __webpack_exports__["b"] = normalize;


const lerp = (now, start, end) => {
    return (now - start) / (end - start);
}
/* harmony export (immutable) */ __webpack_exports__["a"] = lerp;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /* @flow */

module.exports = cheapRuler;

/**
 * A collection of very fast approximations to common geodesic measurements. Useful for performance-sensitive code that measures things on a city scale.
 *
 * @param {number} lat latitude
 * @param {string} [units='kilometers']
 * @returns {CheapRuler}
 * @example
 * var ruler = cheapRuler(35.05, 'miles');
 * //=ruler
 */
function cheapRuler(lat /*: number */, units /*: ?string */) {
    return new CheapRuler(lat, units);
}

/**
 * Multipliers for converting between units.
 *
 * @example
 * // convert 50 meters to yards
 * 50 * cheapRuler.units.yards / cheapRuler.units.meters;
 */
var factors = cheapRuler.units = {
    kilometers: 1,
    miles: 1000 / 1609.344,
    nauticalmiles: 1000 / 1852,
    meters: 1000,
    metres: 1000,
    yards: 1000 / 0.9144,
    feet: 1000 / 0.3048,
    inches: 1000 / 0.0254
};

/**
 * Creates a ruler object from tile coordinates (y and z). Convenient in tile-reduce scripts.
 *
 * @param {number} y
 * @param {number} z
 * @param {string} [units='kilometers']
 * @returns {CheapRuler}
 * @example
 * var ruler = cheapRuler.fromTile(1567, 12);
 * //=ruler
 */
cheapRuler.fromTile = function (y, z, units) {
    var n = Math.PI * (1 - 2 * (y + 0.5) / Math.pow(2, z));
    var lat = Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))) * 180 / Math.PI;
    return new CheapRuler(lat, units);
};

function CheapRuler(lat, units) {
    if (lat === undefined) throw new Error('No latitude given.');
    if (units && !factors[units]) throw new Error('Unknown unit ' + units + '. Use one of: ' + Object.keys(factors));

    var m = units ? factors[units] : 1;

    var cos = Math.cos(lat * Math.PI / 180);
    var cos2 = 2 * cos * cos - 1;
    var cos3 = 2 * cos * cos2 - cos;
    var cos4 = 2 * cos * cos3 - cos2;
    var cos5 = 2 * cos * cos4 - cos3;

    // multipliers for converting longitude and latitude degrees into distance (http://1.usa.gov/1Wb1bv7)
    this.kx = m * (111.41513 * cos - 0.09455 * cos3 + 0.00012 * cos5);
    this.ky = m * (111.13209 - 0.56605 * cos2 + 0.0012 * cos4);
}

CheapRuler.prototype = {
    /**
     * Given two points of the form [longitude, latitude], returns the distance.
     *
     * @param {Array<number>} a point [longitude, latitude]
     * @param {Array<number>} b point [longitude, latitude]
     * @returns {number} distance
     * @example
     * var distance = ruler.distance([30.5, 50.5], [30.51, 50.49]);
     * //=distance
     */
    distance: function (a, b) {
        var dx = (a[0] - b[0]) * this.kx;
        var dy = (a[1] - b[1]) * this.ky;
        return Math.sqrt(dx * dx + dy * dy);
    },

    /**
     * Returns the bearing between two points in angles.
     *
     * @param {Array<number>} a point [longitude, latitude]
     * @param {Array<number>} b point [longitude, latitude]
     * @returns {number} bearing
     * @example
     * var bearing = ruler.bearing([30.5, 50.5], [30.51, 50.49]);
     * //=bearing
     */
    bearing: function (a, b) {
        var dx = (b[0] - a[0]) * this.kx;
        var dy = (b[1] - a[1]) * this.ky;
        if (!dx && !dy) return 0;
        var bearing = Math.atan2(-dy, dx) * 180 / Math.PI + 90;
        if (bearing > 180) bearing -= 360;
        return bearing;
    },

    /**
     * Returns a new point given distance and bearing from the starting point.
     *
     * @param {Array<number>} p point [longitude, latitude]
     * @param {number} dist distance
     * @param {number} bearing
     * @returns {Array<number>} point [longitude, latitude]
     * @example
     * var point = ruler.destination([30.5, 50.5], 0.1, 90);
     * //=point
     */
    destination: function (p, dist, bearing) {
        var a = (90 - bearing) * Math.PI / 180;
        return this.offset(p,
            Math.cos(a) * dist,
            Math.sin(a) * dist);
    },

    /**
     * Returns a new point given easting and northing offsets (in ruler units) from the starting point.
     *
     * @param {Array<number>} p point [longitude, latitude]
     * @param {number} dx easting
     * @param {number} dy northing
     * @returns {Array<number>} point [longitude, latitude]
     * @example
     * var point = ruler.offset([30.5, 50.5], 10, 10);
     * //=point
     */
    offset: function (p, dx, dy) {
        return [
            p[0] + dx / this.kx,
            p[1] + dy / this.ky
        ];
    },

    /**
     * Given a line (an array of points), returns the total line distance.
     *
     * @param {Array<Array<number>>} points [longitude, latitude]
     * @returns {number} total line distance
     * @example
     * var length = ruler.lineDistance([
     *     [-67.031, 50.458], [-67.031, 50.534],
     *     [-66.929, 50.534], [-66.929, 50.458]
     * ]);
     * //=length
     */
    lineDistance: function (points) {
        var total = 0;
        for (var i = 0; i < points.length - 1; i++) {
            total += this.distance(points[i], points[i + 1]);
        }
        return total;
    },

    /**
     * Given a polygon (an array of rings, where each ring is an array of points), returns the area.
     *
     * @param {Array<Array<Array<number>>>} polygon
     * @returns {number} area value in the specified units (square kilometers by default)
     * @example
     * var area = ruler.area([[
     *     [-67.031, 50.458], [-67.031, 50.534], [-66.929, 50.534],
     *     [-66.929, 50.458], [-67.031, 50.458]
     * ]]);
     * //=area
     */
    area: function (polygon) {
        var sum = 0;

        for (var i = 0; i < polygon.length; i++) {
            var ring = polygon[i];

            for (var j = 0, len = ring.length, k = len - 1; j < len; k = j++) {
                sum += (ring[j][0] - ring[k][0]) * (ring[j][1] + ring[k][1]) * (i ? -1 : 1);
            }
        }

        return (Math.abs(sum) / 2) * this.kx * this.ky;
    },

    /**
     * Returns the point at a specified distance along the line.
     *
     * @param {Array<Array<number>>} line
     * @param {number} dist distance
     * @returns {Array<number>} point [longitude, latitude]
     * @example
     * var point = ruler.along(line, 2.5);
     * //=point
     */
    along: function (line, dist) {
        var sum = 0;

        if (dist <= 0) return line[0];

        for (var i = 0; i < line.length - 1; i++) {
            var p0 = line[i];
            var p1 = line[i + 1];
            var d = this.distance(p0, p1);
            sum += d;
            if (sum > dist) return interpolate(p0, p1, (dist - (sum - d)) / d);
        }

        return line[line.length - 1];
    },

    /**
     * Returns an object of the form {point, index} where point is closest point on the line from the given point, and index is the start index of the segment with the closest point.
     *
     * @pointOnLine
     * @param {Array<Array<number>>} line
     * @param {Array<number>} p point [longitude, latitude]
     * @returns {Object} {point, index}
     * @example
     * var point = ruler.pointOnLine(line, [-67.04, 50.5]).point;
     * //=point
     */
    pointOnLine: function (line, p) {
        var minDist = Infinity;
        var minX, minY, minI, minT;

        for (var i = 0; i < line.length - 1; i++) {

            var x = line[i][0];
            var y = line[i][1];
            var dx = (line[i + 1][0] - x) * this.kx;
            var dy = (line[i + 1][1] - y) * this.ky;

            if (dx !== 0 || dy !== 0) {

                var t = ((p[0] - x) * this.kx * dx + (p[1] - y) * this.ky * dy) / (dx * dx + dy * dy);

                if (t > 1) {
                    x = line[i + 1][0];
                    y = line[i + 1][1];

                } else if (t > 0) {
                    x += (dx / this.kx) * t;
                    y += (dy / this.ky) * t;
                }
            }

            dx = (p[0] - x) * this.kx;
            dy = (p[1] - y) * this.ky;

            var sqDist = dx * dx + dy * dy;
            if (sqDist < minDist) {
                minDist = sqDist;
                minX = x;
                minY = y;
                minI = i;
                minT = t;
            }
        }

        return {
            point: [minX, minY],
            index: minI,
            t: minT
        };
    },

    /**
     * Returns a part of the given line between the start and the stop points (or their closest points on the line).
     *
     * @param {Array<number>} start point [longitude, latitude]
     * @param {Array<number>} stop point [longitude, latitude]
     * @param {Array<Array<number>>} line
     * @returns {Array<Array<number>>} line part of a line
     * @example
     * var line2 = ruler.lineSlice([-67.04, 50.5], [-67.05, 50.56], line1);
     * //=line2
     */
    lineSlice: function (start, stop, line) {
        var p1 = this.pointOnLine(line, start);
        var p2 = this.pointOnLine(line, stop);

        if (p1.index > p2.index || (p1.index === p2.index && p1.t > p2.t)) {
            var tmp = p1;
            p1 = p2;
            p2 = tmp;
        }

        var slice = [p1.point];

        var l = p1.index + 1;
        var r = p2.index;

        if (!equals(line[l], slice[0]) && l <= r)
            slice.push(line[l]);

        for (var i = l + 1; i <= r; i++) {
            slice.push(line[i]);
        }

        if (!equals(line[r], p2.point))
            slice.push(p2.point);

        return slice;
    },

    /**
     * Returns a part of the given line between the start and the stop points indicated by distance along the line.
     *
     * @param {number} start distance
     * @param {number} stop distance
     * @param {Array<Array<number>>} line
     * @returns {Array<Array<number>>} line part of a line
     * @example
     * var line2 = ruler.lineSliceAlong(10, 20, line1);
     * //=line2
     */
    lineSliceAlong: function (start, stop, line) {
        var sum = 0;
        var slice = [];

        for (var i = 0; i < line.length - 1; i++) {
            var p0 = line[i];
            var p1 = line[i + 1];
            var d = this.distance(p0, p1);

            sum += d;

            if (sum > start && slice.length === 0) {
                slice.push(interpolate(p0, p1, (start - (sum - d)) / d));
            }

            if (sum >= stop) {
                slice.push(interpolate(p0, p1, (stop - (sum - d)) / d));
                return slice;
            }

            if (sum > start) slice.push(p1);
        }

        return slice;
    },

    /**
     * Given a point, returns a bounding box object ([w, s, e, n]) created from the given point buffered by a given distance.
     *
     * @param {Array<number>} p point [longitude, latitude]
     * @param {number} buffer
     * @returns {Array<number>} box object ([w, s, e, n])
     * @example
     * var bbox = ruler.bufferPoint([30.5, 50.5], 0.01);
     * //=bbox
     */
    bufferPoint: function (p, buffer) {
        var v = buffer / this.ky;
        var h = buffer / this.kx;
        return [
            p[0] - h,
            p[1] - v,
            p[0] + h,
            p[1] + v
        ];
    },

    /**
     * Given a bounding box, returns the box buffered by a given distance.
     *
     * @param {Array<number>} box object ([w, s, e, n])
     * @param {number} buffer
     * @returns {Array<number>} box object ([w, s, e, n])
     * @example
     * var bbox = ruler.bufferBBox([30.5, 50.5, 31, 51], 0.2);
     * //=bbox
     */
    bufferBBox: function (bbox, buffer) {
        var v = buffer / this.ky;
        var h = buffer / this.kx;
        return [
            bbox[0] - h,
            bbox[1] - v,
            bbox[2] + h,
            bbox[3] + v
        ];
    },

    /**
     * Returns true if the given point is inside in the given bounding box, otherwise false.
     *
     * @param {Array<number>} p point [longitude, latitude]
     * @param {Array<number>} box object ([w, s, e, n])
     * @returns {boolean}
     * @example
     * var inside = ruler.insideBBox([30.5, 50.5], [30, 50, 31, 51]);
     * //=inside
     */
    insideBBox: function (p, bbox) {
        return p[0] >= bbox[0] &&
               p[0] <= bbox[2] &&
               p[1] >= bbox[1] &&
               p[1] <= bbox[3];
    }
};

function equals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

function interpolate(a, b, t) {
    var dx = b[0] - a[0];
    var dy = b[1] - a[1];
    return [
        a[0] + dx * t,
        a[1] + dy * t
    ];
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    API_KEY: 'pk.eyJ1IjoidGhlY2FtZGVuIiwiYSI6Ikw0RDFKbjAifQ.6YLg6ozUZYD0FEiKv46LGA'
});



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    trailColor: '#007cbf',
    trailWidth: 2,
    musherColor: '#F0F',
    musherRadius: 10,
    highlightPointColor: '#FFFF00',
});

/***/ })
/******/ ]);