jQuery(function($){
	$.datepicker.regional['am'] = {
		closeText: 'Փակել',
		prevText: '&#x3c;Նախ.',
		nextText: 'Հաջ.&#x3e;',
		currentText: 'Այսօր',
		monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
		'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
		monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
		'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
		dayNames: ['կիրակի','եկուշաբթի','երեքշաբթի','չորեքշաբթի','հինգշաբթի','ուրբաթ','շաբաթ'],
		dayNamesShort: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
		dayNamesMin: ['կիր','երկ','երք','չրք','հնգ','ուրբ','շբթ'],
		dateFormat: 'dd.mm.yy', firstDay: 1,
		isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['am']);
});
function str_replace(search, replace, subject, count) {
  //  discuss at: http://phpjs.org/functions/str_replace/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Gabriel Paderni
  // improved by: Philip Peterson
  // improved by: Simon Willison (http://simonwillison.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Anton Ongson
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Oleg Eremeev
  //    input by: Onno Marsman
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Oleg Eremeev
  //        note: The count parameter must be passed as a string in order
  //        note: to find a global variable in which the result will be given
  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
  //   returns 1: 'Kevin.van.Zonneveld'
  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
  //   returns 2: 'hemmo, mars'
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca)
  //   example 3: str_replace(Array('S','F'),'x','ASDFASDF');
  //   returns 3: 'AxDxAxDx'
  // bugfixed by: Glen Arason (http://CanadianDomainRegistry.ca) Corrected count
  //   example 4: str_replace(['A','D'], ['x','y'] , 'ASDFASDF' , 'cnt');
  //   returns 4: 'xSyFxSyF' // cnt = 0 (incorrect before fix)
  //   returns 4: 'xSyFxSyF' // cnt = 4 (correct after fix)
  
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  
  if(typeof(search) === 'object' && typeof(replace) === 'string' ) {
    temp = replace; 
    replace = new Array();
    for (i=0; i < search.length; i+=1) { 
      replace[i] = temp; 
    }
    temp = ''; 
    r = [].concat(replace); 
    ra = Object.prototype.toString.call(r) === '[object Array]';
  }
  
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count) {
        this.window[count] += ((temp.split(f[j])).length - 1);
      } 
    }
  }
  return sa ? s : s[0];
}





$( document ).ready(function() {



var dimumDate=$("#dimumDate").val();
$("#send" ).button();
$("#dimumDate" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#dimumDate" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );

$("#passdate" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#passdate" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );

$("#tvakan" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});
$("#tvakan" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );


$("#tvakan2" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#tvakan2" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );


$("#tvakan3" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#tvakan3" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );

$("#tvakan4" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#tvakan4" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );



$("#voroshumDate" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#voroshumDate" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );


$("#voroshumDate2" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#voroshumDate2" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );


$("#voroshumDate3" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#voroshumDate3" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );

$("#voroshumDate4" ).datetimepicker();
$("#voroshumDate4" ).datetimepicker( "option", "dateFormat", "mm.dd.yyթ ժամը" );
$("#voroshumDate5" ).datetimepicker();
$("#voroshumDate5" ).datetimepicker( "option", "dateFormat", "mm.dd.yyթ ժամը" );
$("#voroshumDate6" ).datepicker();
$("#voroshumDate6" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );
$("#voroshumDate51" ).datepicker({changeMonth: true, changeYear: true, yearRange: '1950:2010'});;
$("#voroshumDate51" ).datepicker( "option", "dateFormat", "mm.dd.yyթ" );




$( "#pet" ).change(function() {
 $("#pet2").val($("#pet").val());
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
});



$( "#qaxaqaci" ).change(function() {
 $("#anunazganun").val($("#qaxaqaci").val());
 
 
});




$( "#qaxaqaci" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Ձեր Անուն Ազգանունը'
    }
});


$( "#qaxaqapet" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Քաղաքապետի Անուն Ազգանունը'
    }
});

$( "#qaxaqapet" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Քաղաքապետի Անուն Ազգանունը'
    }
});


$( "#andznagir" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Ձեր Անձնագրի Սերիան'
    }
});

$( "#trvats" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Ում կողմից է տրված՞ (օրինակ՝019)'
    }
});

$( "#passdate" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Երբ է տրվել անձնագիրը'
    }
});
	
	$( "#hasce" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Ձեր հասցեն"
    }
});
	
	$( "#heraxos" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Ձեր տան կամ բջջային համարը'
    }
	});
	
	$( "#reportnum" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Արձանագրության Համարը'
    }
	});
	$( "#voroshum" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Որոշման համարը ներառյալ սերիան , օրինակ Վ-12/1111'
    }
	});
	
	$( "#tvakan1" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Արձանագրության Ստացման Տարեթիվը(նայեք արձանագրության մեջ )'
    }
		});
	
	
$( "#pet" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր ծառայության պետի անունը(որոշման մեջ կա)"
    }		});
	
	$( "#voroshum" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման համարը օրինակ Վ-11/111"
    }		});
	
	
	$( "#voroshum1" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման համարը օրինակ Վ-11/111"
    }		});
	$( "#voroshum2" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման համարը օրինակ Վ-11/111"
    }		});
	
	
	
	$( "#voroshum3" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման համարը օրինակ Վ-11/111"
    }		});
	
	$( "#voroshumDate" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման օրը(որոշման մեջ կա)"
    }		});
	
		$( "#voroshumDate2" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման օրը(որոշման մեջ կա)"
    }		});
	
		$( "#voroshumDate3" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման օրը(որոշման մեջ կա)"
    }		});
	$( "#maknish" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Ձեր մեքենայի մակնիշը"
    }		});
	
		$( "#hamaranish" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Ձեր մեքենայի համարանիշը"
    }		});
		$( "#ardzanagrutyanHamar").qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր անօրինական արձանագրության համարը"
    }		});
	
	
	$( "#seria" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր որոշման սերիան(որոշման մեջ կա)"
    }		});
$( "#pet1" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: "Էդ անտեր ծառայության պետի անունը(որոշման մեջ կա)"
    }		});
$( "#pet2" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Էդ անտեր ծառայության պետի անունը(որոշման մեջ կա)'
    }	 
	
});

$( "#pet3" ).qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'Էդ անտեր ծառայության պետի անունը'
    }	
	
});

});




function send_data(){



var formData=$("#lsumner").serialize();



var pet=$("#pet").val();
$("#pet").remove();
$("#petSpan").html(pet);




var pet2=$("#pet2").val();
$("#pet2").remove();
$("#pet2Span").html(pet2);


var qaxaqaci=$("#qaxaqaci").val();

$("#qaxaqaci").remove();
$("#qaxaqaciSpan").html(qaxaqaci);

var andznagir=$("#andznagir").val();

$("#andznagir").remove();
$("#andznagirSpan").html(andznagir);


var trvats=$("#trvats").val();
$("#trvats").remove();
$("#trvatsSpan").html(trvats);


var passdate=$("#passdate").val();
$("#passdate").remove();
$("#passdateSpan").html(passdate);

var hasce=$("#hasce").val();
$("#hasce").remove();
$("#hasceSpan").html(hasce);


var heraxos=$("#heraxos").val();
$("#heraxos").remove();
$("#heraxosSpan").html(heraxos);

var tvakan=$("#tvakan").val();
$("#tvakan").remove();
$("#tvakanSpan").html(tvakan);




var tvakan2=$("#tvakan2").val();
$("#tvakan2").remove();
$("#tvakan2Span").html(tvakan2);

var tvakan3=$("#tvakan3").val();
$("#tvakan3").remove();
$("#tvakan3Span").html(tvakan3);


var tvakan4=$("#tvakan4").val();
$("#tvakan4").remove();
$("#tvakan4Span").html(tvakan4);




var dimumDate=$("#dimumDate").val();
$("#dimumDate").remove();
$("#dimumDateSpan").html(dimumDate);


var anunazganun=$("#anunazganun").val();
$("#anunazganun").remove();
$("#anunazganunSpan").html(anunazganun);


var qaxaqapet=$("#qaxaqapet").val();
$("#qaxaqapet").remove();
$("#qaxaqapetSpan").html(qaxaqapet);

var reportnum=$("#reportnum").val();
$("#reportnum").remove();
$("#reportnumSpan").html(reportnum);

console.log(formData);

var bodyHtml=$("#body2").html();



$("#bodyHtml").val(bodyHtml);

$("#lsumner").submit();

   


}






function send_data2(){



var formData=$("#lsumner").serialize();



var pet=$("#pet").val();
$("#pet").remove();
$("#petSpan").html(pet);


var pet=$("#qaxaqapet").val();
$("#qaxaqapet").remove();
$("#qaxaqapetSpan").html(pet);

var pet2=$("#pet2").val();
$("#pet2").remove();
$("#pet2Span").html(pet2);


var pet3=$("#pet3").val();
$("#pet3").remove();
$("#pet3Span").html(pet3);


var pet1=$("#pet1").val();
$("#pet1").remove();
$("#pet1Span").html(pet1);

var qaxaqaci=$("#qaxaqaci").val();

$("#qaxaqaci").remove();
$("#qaxaqaciSpan").html(qaxaqaci);

var andznagir=$("#andznagir").val();

$("#andznagir").remove();
$("#andznagirSpan").html(andznagir);


var trvats=$("#trvats").val();
$("#trvats").remove();
$("#trvatsSpan").html(trvats);


var passdate=$("#passdate").val();
$("#passdate").remove();
$("#passdateSpan").html(passdate);

var hasce=$("#hasce").val();
$("#hasce").remove();
$("#hasceSpan").html(hasce);


var heraxos=$("#heraxos").val();
$("#heraxos").remove();
$("#heraxosSpan").html(heraxos);

var tvakan=$("#tvakan").val();
$("#tvakan").remove();
$("#tvakanSpan").html(tvakan);


var voroshumDate=$("#voroshumDate").val();
$("#voroshumDate").remove();
$("#voroshumDateSpan").html(voroshumDate);








var voroshumDate2=$("#voroshumDate2").val();
$("#voroshumDate2").remove();
$("#voroshumDateSpan2").html(voroshumDate2);


var voroshumDate3=$("#voroshumDate3").val();
$("#voroshumDate3").remove();
$("#voroshumDateSpan3").html(voroshumDate3);

var voroshumDate4=$("#voroshumDate4").val();
$("#voroshumDate4").remove();
$("#voroshumDateSpan4").html(voroshumDate4);

var voroshumDate5=$("#voroshumDate5").val();
$("#voroshumDate5").remove();
$("#voroshumDateSpan5").html(voroshumDate5);

var voroshumDate6=$("#voroshumDate6").val();
$("#voroshumDate6").remove();
$("#voroshumDateSpan6").html(voroshumDate6);


var voroshumDate51=$("#voroshumDate51").val();
$("#voroshumDate51").remove();
$("#voroshumDateSpan51").html(voroshumDate51);









var ardzanagrutyanHamar=$("#ardzanagrutyanHamar").val();
$("#ardzanagrutyanHamar").remove();
$("#ardzanagrutyanHamarSpan").html(ardzanagrutyanHamar);




var poghoc=$("#poghoc").val();
$("#poghoc").remove();
$("#poghocSpan").html(poghoc);


var hatvac=$("#hatvac").val();
$("#hatvac").remove();
$("#hatvacSpan").html(hatvac);

var maknish=$("#maknish").val();
$("#maknish").remove();
$("#maknishSpan").html(maknish);


var hamaranish=$("#hamaranish").val();
$("#hamaranish").remove();
$("#hamaranishSpan").html(hamaranish);

var tvakan2=$("#tvakan2").val();
$("#tvakan2").remove();
$("#tvakan2Span").html(tvakan2);

var tvakan3=$("#tvakan3").val();
$("#tvakan3").remove();
$("#tvakan3Span").html(tvakan3);


var tvakan4=$("#tvakan4").val();
$("#tvakan4").remove();
$("#tvakan4Span").html(tvakan4);




var dimumDate=$("#dimumDate").val();
$("#dimumDate").remove();
$("#dimumDateSpan").html(dimumDate);


var anunazganun=$("#anunazganun").val();
$("#anunazganun").remove();
$("#anunazganunSpan").html(anunazganun);


var qaxaqapet=$("#qaxaqapet").val();
$("#qaxaqapet").remove();
$("#qaxaqapetSpan").html(qaxaqapet);



var seria=$("#seria").val();
$("#seria").remove();
$("#seriaSpan").html(seria);


var voroshum2=$("#voroshum2").val();
$("#voroshum2").remove();
$("#voroshum2Span").html(voroshum2);


var voroshum3=$("#voroshum3").val();
$("#voroshum3").remove();
$("#voroshum3Span").html(voroshum3);



var pet=$("#pet").val();
$("#pet").remove();
$("#petSpan").html(pet);



var pet2=$("#pet2").val();
$("#pet2").remove();
$("#pet2Span").html(pet2);


var pet3=$("#pet3").val();
$("#pet3").remove();
$("#pet3Span").html(pet3);

var reportnum=$("#reportnum").val();
$("#reportnum").remove();
$("#reportnumSpan").html(reportnum);




var seria=$("#seria").val();
$("#seria").remove();
$("#seriaSpan").html(seria);

console.log(formData);

var bodyHtml=$("#body2").html();



$("#bodyHtml").val(bodyHtml);

$("#tuganqner").submit();

   


}