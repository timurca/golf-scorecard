var data = [
	{ "date": "Sep 5, 2004", "club": "Park View Valley", "cp": "71", "ms": "115", "score": "+44", "bog": "3", "par": "", "brd": "", "egl": "", "price": "$60", "friends": "Leva" },
	{ "date": "Sep 12, 2004", "club": "Bathurst Glen", "cp": "63", "ms": "96", "score": "+33", "bog": "5", "par": "2", "brd": "", "egl": "", "price": "$40", "friends": "" },
	{ "date": "Sep 17, 2004", "club": "Park View Valley", "cp": "71", "ms": "121", "score": "+50", "bog": "2", "par": "", "brd": "", "egl": "", "price": "$55", "friends": "" },
	{ "date": "Sep 19, 2004", "club": "Park View Upper", "cp": "71", "ms": "114", "score": "+43", "bog": "2", "par": "", "brd": "", "egl": "", "price": "$70", "friends": "" },
	{ "date": "Sep 25, 2004", "club": "Crest Haven", "cp": "54", "ms": "88", "score": "+34", "bog": "5", "par": "1", "brd": "", "egl": "", "price": "$28", "friends": "" },
	{ "date": "Sep 26, 2004", "club": "Crest Haven", "cp": "54", "ms": "83", "score": "+29", "bog": "9", "par": "1", "brd": "", "egl": "", "price": "$28", "friends": "" },
	{ "date": "Oct 3, 2004", "club": "Crest Haven", "cp": "54", "ms": "85", "score": "+31", "bog": "7", "par": "1", "brd": "", "egl": "", "price": "$24", "friends": "Zhenya" },
	{ "date": "Oct 9, 2004", "club": "Richmond Hill ", "cp": "70", "ms": "109", "score": "+39", "bog": "", "par": "1", "brd": "", "egl": "", "price": "$57", "friends": "" },
	{ "date": "Oct 10, 2004", "club": "Crest Haven", "cp": "54", "ms": "84", "score": "+30", "bog": "9", "par": "1", "brd": "", "egl": "", "price": "$27", "friends": "Alex" },
	{ "date": "May 11, 2005", "club": "Rhodes Ranch NV", "cp": "72", "ms": "116", "score": "+44", "bog": "3", "par": "1", "brd": "", "egl": "", "price": "$50", "friends": "" },
	{ "date": "May 30, 2005", "club": "Bloomington", "cp": "72", "ms": "106", "score": "+34", "bog": "4", "par": "", "brd": "", "egl": "", "price": "$47", "friends": "" },
	{ "date": "Jul 28, 2005", "club": "Park View Valley", "cp": "71", "ms": "105", "score": "+34", "bog": "3", "par": "1", "brd": "", "egl": "", "price": "$37", "friends": "" },
	{ "date": "Jul 29, 2005", "club": "Crest Haven", "cp": "54", "ms": "88", "score": "+34", "bog": "6", "par": "2", "brd": "", "egl": "", "price": "$21", "friends": "" },
	{ "date": "Sep 04, 2005", "club": "Richmond Hill", "cp": "70", "ms": "101", "score": "+31", "bog": "6", "par": "1", "brd": "", "egl": "", "price": "$65", "friends": "" },
	{ "date": "Sep 5, 2005", "club": "Richmond Hill", "cp": "70", "ms": "97", "score": "+27", "bog": "7", "par": "3", "brd": "", "egl": "", "price": "$65", "friends": "" },
	{ "date": "Sep 17, 2005", "club": "Crest Haven", "cp": "54", "ms": "73", "score": "+19", "bog": "11", "par": "3", "brd": "", "egl": "", "price": "$28", "friends": "" },
	{ "date": "Jul 2, 2006", "club": "Richmond Hill", "cp": "70", "ms": "100", "score": "+30", "bog": "3", "par": "2", "brd": "1", "egl": "", "price": "$49", "friends": "" },
	{ "date": "Jul 31, 2006", "club": "Richmond Hill", "cp": "70", "ms": "DNF", "score": "DNF", "bog": "4", "par": "2", "brd": "", "egl": "", "price": "$48", "friends": "Vadim" },
	{ "date": "Aug 13, 2006", "club": "Richmond Hill", "cp": "70", "ms": "111", "score": "+41", "bog": "3", "par": "1", "brd": "", "egl": "", "price": "$85", "friends": "Leva" },
	{ "date": "Sep 16, 2006", "club": "Crest Haven", "cp": "54", "ms": "76", "score": "+22", "bog": "8", "par": "3", "brd": "", "egl": "", "price": "$28", "friends": "Tal" },
	{ "date": "Sep 23, 2006", "club": "Richmond Hill", "cp": "70", "ms": "106", "score": "+36", "bog": "2", "par": "2", "brd": "1", "egl": "", "price": "$70", "friends": "Shurik" },
	{ "date": "Sep 28, 2006", "club": "Crest Haven", "cp": "54", "ms": "79", "score": "+25", "bog": "10", "par": "", "brd": "", "egl": "", "price": "$56", "friends": "Tal" },
	{ "date": "Jun 18, 2007", "club": "Park View Valley", "cp": "71", "ms": "115", "score": "+44", "bog": "3", "par": "1", "brd": "", "egl": "", "price": "$42", "friends": "" },
	{ "date": "Jul 14, 2007", "club": "Crest Haven", "cp": "54", "ms": "92", "score": "+38", "bog": "3", "par": "", "brd": "", "egl": "", "price": "$28", "friends": "Zhenya" },
	{ "date": "Jul 21, 2007", "club": "Crest Haven", "cp": "54", "ms": "82", "score": "+28", "bog": "7", "par": "2", "brd": "", "egl": "", "price": "$28", "friends": "Zhenya, Misha, Norbert, Yura" },
	{ "date": "Aug 4, 2007", "club": "Crest Haven", "cp": "54", "ms": "84", "score": "+30", "bog": "6", "par": "4", "brd": "", "egl": "", "price": "$30", "friends": "Zhenya, Yura" },
	{ "date": "Aug 7, 2007", "club": "Shawneeki", "cp": "72", "ms": "DNF", "score": "DNF", "bog": "", "par": "", "brd": "", "egl": "", "price": "$24", "friends": "Zhenya, Yura, Misha" },
	{ "date": "Aug 11, 2007", "club": "Dentoina", "cp": "54", "ms": "91", "score": "+37", "bog": "4", "par": "1", "brd": "", "egl": "", "price": "$24", "friends": "Yura, Misha" },
	{ "date": "Sep 8, 2007", "club": "Dentoina", "cp": "54", "ms": "DNF", "score": "DNF", "bog": "6", "par": "1", "brd": "", "egl": "", "price": "$19", "friends": "Zhenya, Yura, Misha" },
	{ "date": "Sep 13, 2007", "club": "Richmond Hill", "cp": "70", "ms": "DNF", "score": "DNF", "bog": "2", "par": "", "brd": "", "egl": "", "price": "$49", "friends": "Yura" },
	{ "date": "Oct 7, 2007", "club": "Richmond Hill", "cp": "70", "ms": "DNF", "score": "DNF", "bog": "3", "par": "2", "brd": "", "egl": "", "price": "$49", "friends": "Yura" },
	{ "date": "Jun 28, 2008", "club": "Park View Valley", "cp": "71", "ms": "DNF", "score": "DNF", "bog": "2", "par": "", "brd": "", "egl": "", "price": "$42", "friends": "Misha, Yura" },
	{ "date": "Jun 10, 2009", "club": "Crest Haven", "cp": "54", "ms": "95", "score": "+41", "bog": "5", "par": "1", "brd": "", "egl": "", "price": "$24", "friends": "Vadim" },
	{ "date": "Jun 17, 2009", "club": "Crest Haven", "cp": "54", "ms": "85", "score": "+31", "bog": "6", "par": "1", "brd": "", "egl": "", "price": "$20", "friends": "Vadim" },
	{ "date": "Jun 21, 2009", "club": "Crest Haven", "cp": "54", "ms": "84", "score": "+30", "bog": "6", "par": "", "brd": "1", "egl": "", "price": "$31", "friends": "Tal" },
	{ "date": "Jun 26, 2009", "club": "Crest Haven", "cp": "54", "ms": "77", "score": "+23", "bog": "11", "par": "1", "brd": "", "egl": "", "price": "$31", "friends": "Tal" },
	{ "date": "Jul 1, 2009", "club": "Crest Haven", "cp": "54", "ms": "80", "score": "+26", "bog": "8", "par": "1", "brd": "", "egl": "", "price": "$23", "friends": "Yura" },
	{ "date": "Jul 4, 2009", "club": "Crest Haven", "cp": "54", "ms": "79", "score": "+25", "bog": "7", "par": "3", "brd": "", "egl": "", "price": "$31", "friends": "Misha" },
	{ "date": "Jul 9, 2009", "club": "Crest Haven", "cp": "54", "ms": "79", "score": "+25", "bog": "9", "par": "2", "brd": "", "egl": "", "price": "$28", "friends": "Vadim" },
	{ "date": "Aug 2, 2009", "club": "Crest Haven", "cp": "54", "ms": "76", "score": "+22", "bog": "7", "par": "4", "brd": "", "egl": "", "price": "$31", "friends": "" },
	{ "date": "Apr 24, 2010", "club": "Carrickmacross", "cp": "54", "ms": "95", "score": "+41", "bog": "4", "par": "", "brd": "", "egl": "", "price": "$11", "friends": "Andrei" },
	{ "date": "Jul 18, 2010", "club": "Carrickmacross", "cp": "54", "ms": "88", "score": "+34", "bog": "8", "par": "", "brd": "", "egl": "", "price": "$12", "friends": "Misha" },
	{ "date": "Aug 15, 2010", "club": "Park View Upper", "cp": "71", "ms": "105", "score": "+34", "bog": "2", "par": "", "brd": "", "egl": "1", "price": "$50", "friends": "Andrei, Misha" },
	{ "date": "Aug 24, 2010", "club": "Carrickmacross", "cp": "54", "ms": "82", "score": "+28", "bog": "8", "par": "2", "brd": "", "egl": "", "price": "$19", "friends": "Tal, Mark" },
	{ "date": "Aug 28, 2010", "club": "Park View Upper", "cp": "71", "ms": "103", "score": "+32", "bog": "3", "par": "2", "brd": "", "egl": "", "price": "$50", "friends": "Andrei" },
	{ "date": "Sep 21, 2010", "club": "Carrickmacross", "cp": "54", "ms": "82", "score": "+28", "bog": "3", "par": "3", "brd": "", "egl": "", "price": "$20", "friends": "" },
	{ "date": "Jun 8, 2011", "club": "Carrickmacross", "cp": "54", "ms": "82", "score": "+28", "bog": "4", "par": "1", "brd": "", "egl": "", "price": "$20", "friends": "Vadim" },
	{ "date": "Jun 8, 2012", "club": "Carrickmacross", "cp": "54", "ms": "85", "score": "+31", "bog": "7", "par": "2", "brd": "", "egl": "", "price": "$20", "friends": "Tal" },
	{ "date": "May 20, 2013", "club": "Carrickmacross", "cp": "54", "ms": "99", "score": "+45", "bog": "1", "par": "", "brd": "", "egl": "", "price": "$21", "friends": "Tal" },
	{ "date": "Aug 16, 2014", "club": "Carrickmacross", "cp": "54", "ms": "91", "score": "+37", "bog": "4", "par": "", "brd": "", "egl": "", "price": "$0", "friends": "Tal" },
	{ "date": "Aug 23, 2014", "club": "Dentoina", "cp": "54", "ms": "82", "score": "+28", "bog": "5", "par": "2", "brd": "", "egl": "", "price": "$20", "friends": "Tal" },
	{ "date": "Sep 7, 2015", "club": "Carrickmacross", "cp": "54", "ms": "91", "score": "+37", "bog": "1", "par": "3", "brd": "", "egl": "", "price": "$32", "friends": "Tal" },
	{ "date": "Oct 11, 2015", "club": "Richmond Hill", "cp": "70", "ms": "100", "score": "+30", "bog": "5", "par": "", "brd": "", "egl": "", "price": "$64", "friends": "Tal" },
	{ "date": "Oct 12, 2015", "club": "Carrickmacross", "cp": "54", "ms": "80", "score": "+26", "bog": "7", "par": "2", "brd": "", "egl": "", "price": "$23", "friends": "Tal" },
	{ "date": "Aug 14, 2016", "club": "Richmond Hill", "cp": "70", "ms": "113", "score": "+43", "bog": "5", "par": "", "brd": "", "egl": "", "price": "$0", "friends": "Tal" },
	{ "date": "Aug 28, 2016", "club": "Carrickmacross", "cp": "54", "ms": "DNF", "score": "DNF", "bog": "2", "par": "", "brd": "", "egl": "", "price": "$0", "friends": "Tal" }
];