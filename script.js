let divWrap = document.createElement('div');
    divWrap.className = "wrapper";
let divTitle = document.createElement('p');
    divTitle.className = "title";
    divTitle.innerHTML = "RSS Виртуальная клавиатура";
let textarea = document.createElement('textarea');
    textarea.className = "Inner";
let divKey = document.createElement('div');
    divKey.className = "keyWrap";
    // divKey.innerHTML = "RSS klava";
let divSubtitle = document.createElement('P');
    divSubtitle.className = "subtitle";
    divSubtitle.innerHTML = "Клавиатура создана в операционной системе Windows </br> Для переключения языка комбинация: левыe ctrl + alt";


let keyRows1 = document.createElement('div');
    keyRows1.className = "keyRows1";
let keyRows2 = document.createElement('div');
    keyRows2.className = "keyRows2";
let keyRows3 = document.createElement('div');
    keyRows3.className = "keyRows3";
let keyRows4 = document.createElement('div');
    keyRows4.className = "keyRows4";
let keyRows5 = document.createElement('div');
    keyRows5.className = "keyRows5";

   

//добавляю дивы
document.body.append(divWrap);
document.querySelector('.wrapper').append(divTitle);
document.querySelector('.wrapper').append(textarea);
document.querySelector('.wrapper').append(divKey);
document.querySelector('.wrapper').append(divSubtitle);

document.querySelector('.keyWrap').append(keyRows1);
document.querySelector('.keyWrap').append(keyRows2);
document.querySelector('.keyWrap').append(keyRows3);
document.querySelector('.keyWrap').append(keyRows4);
document.querySelector('.keyWrap').append(keyRows5);


 //переменные клавиши

 //backquote
 let keyBackquote = document.createElement('div');
 keyBackquote.className = 'key keyBackquote';
     let spanEngDownBackquote = document.createElement('span');
     spanEngDownBackquote.className = 'backquote_eng_down eng';
     spanEngDownBackquote.innerHTML = '`';
     let spanEngUpBackquote = document.createElement('span');
     spanEngUpBackquote.className = 'backquote_eng_up eng_up';
     spanEngUpBackquote.innerHTML = '~';
     let spanEngCapsBackquote = document.createElement('span');
     spanEngCapsBackquote.className = 'backquote_eng_caps eng_caps';
     spanEngCapsBackquote.innerHTML = '`';
     let spanEngShiftBackquote = document.createElement('span');
     spanEngShiftBackquote.className = 'backquote_eng_shiftCaps eng_caps_shift';
     spanEngShiftBackquote.innerHTML = '~';

     let spanRuDownBackquote = document.createElement('span');
     spanRuDownBackquote.className = 'backquote_ru_down ru';
     spanRuDownBackquote.innerHTML = 'ё';
     let spanRuUpBackquote = document.createElement('span');
     spanRuUpBackquote.className = 'backquote_ru_up ru_up';
     spanRuUpBackquote.innerHTML = 'Ё';
     let spanRuCapsBackquote = document.createElement('span');
     spanRuCapsBackquote.className = 'backquote_ru_caps ru_caps';
     spanRuCapsBackquote.innerHTML = 'Ё';
     let spanRuShiftBackquote = document.createElement('span');
     spanRuShiftBackquote.className = 'backquote_ru_shiftCaps ru_caps_shift';
     spanRuShiftBackquote.innerHTML = 'ё';


document.querySelector('.keyRows1').append(keyBackquote);
    document.querySelector('.keyBackquote').append(spanEngDownBackquote);
    document.querySelector('.keyBackquote').append(spanEngUpBackquote);
    document.querySelector('.keyBackquote').append(spanEngCapsBackquote);
    document.querySelector('.keyBackquote').append(spanEngShiftBackquote);

    document.querySelector('.keyBackquote').append(spanRuDownBackquote);
    document.querySelector('.keyBackquote').append(spanRuUpBackquote);
    document.querySelector('.keyBackquote').append(spanRuCapsBackquote);
    document.querySelector('.keyBackquote').append(spanRuShiftBackquote);

    // inner 1
    let keyInner1 = document.createElement('div');
 keyInner1.className = 'key keyInner1';
     let spanEngDownInner1 = document.createElement('span');
     spanEngDownInner1.className = 'Inner1_eng_down eng';
     spanEngDownInner1.innerHTML = '1';
     let spanEngUpInner1 = document.createElement('span');
     spanEngUpInner1.className = 'Inner1_eng_up eng_up';
     spanEngUpInner1.innerHTML = '!';
     let spanEngCapsInner1 = document.createElement('span');
     spanEngCapsInner1.className = 'Inner1_eng_caps eng_caps';
     spanEngCapsInner1.innerHTML = '1';
     let spanEngShiftInner1 = document.createElement('span');
     spanEngShiftInner1.className = 'Inner1_eng_shiftCaps eng_caps_shift';
     spanEngShiftInner1.innerHTML = '!';

     let spanRuDownInner1 = document.createElement('span');
     spanRuDownInner1.className = 'Inner1_ru_down ru';
     spanRuDownInner1.innerHTML = '1';
     let spanRuUpInner1 = document.createElement('span');
     spanRuUpInner1.className = 'Inner1_ru_up ru_up';
     spanRuUpInner1.innerHTML = '!';
     let spanRuCapsInner1 = document.createElement('span');
     spanRuCapsInner1.className = 'Inner1_ru_caps ru_caps';
     spanRuCapsInner1.innerHTML = '1';
     let spanRuShiftInner1 = document.createElement('span');
     spanRuShiftInner1.className = 'Inner1_ru_shiftCaps ru_caps_shift';
     spanRuShiftInner1.innerHTML = '!';


document.querySelector('.keyRows1').append(keyInner1);
    document.querySelector('.keyInner1').append(spanEngDownInner1);
    document.querySelector('.keyInner1').append(spanEngUpInner1);
    document.querySelector('.keyInner1').append(spanEngCapsInner1);
    document.querySelector('.keyInner1').append(spanEngShiftInner1);

    document.querySelector('.keyInner1').append(spanRuDownInner1);
    document.querySelector('.keyInner1').append(spanRuUpInner1);
    document.querySelector('.keyInner1').append(spanRuCapsInner1);
    document.querySelector('.keyInner1').append(spanRuShiftInner1);

// inner 2
let keyInner2 = document.createElement('div');
keyInner2.className = 'key keyInner2';
    let spanEngDownInner2 = document.createElement('span');
    spanEngDownInner2.className = 'Inner2_eng_down eng';
    spanEngDownInner2.innerHTML = '2';
    let spanEngUpInner2 = document.createElement('span');
    spanEngUpInner2.className = 'Inner2_eng_up eng_up';
    spanEngUpInner2.innerHTML = '@';
    let spanEngCapsInner2 = document.createElement('span');
    spanEngCapsInner2.className = 'Inner2_eng_caps eng_caps';
    spanEngCapsInner2.innerHTML = '2';
    let spanEngShiftInner2 = document.createElement('span');
    spanEngShiftInner2.className = 'Inner2_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner2.innerHTML = '@';

    let spanRuDownInner2 = document.createElement('span');
    spanRuDownInner2.className = 'Inner2_ru_down ru';
    spanRuDownInner2.innerHTML = '2';
    let spanRuUpInner2 = document.createElement('span');
    spanRuUpInner2.className = 'Inner2_ru_up ru_up';
    spanRuUpInner2.innerHTML = '"';
    let spanRuCapsInner2 = document.createElement('span');
    spanRuCapsInner2.className = 'Inner2_ru_caps ru_caps';
    spanRuCapsInner2.innerHTML = '2';
    let spanRuShiftInner2 = document.createElement('span');
    spanRuShiftInner2.className = 'Inner2_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner2.innerHTML = '"';


document.querySelector('.keyRows1').append(keyInner2);
    document.querySelector('.keyInner2').append(spanEngDownInner2);
    document.querySelector('.keyInner2').append(spanEngUpInner2);
    document.querySelector('.keyInner2').append(spanEngCapsInner2);
    document.querySelector('.keyInner2').append(spanEngShiftInner2);

    document.querySelector('.keyInner2').append(spanRuDownInner2);
    document.querySelector('.keyInner2').append(spanRuUpInner2);
    document.querySelector('.keyInner2').append(spanRuCapsInner2);
    document.querySelector('.keyInner2').append(spanRuShiftInner2);

    // inner 3
let keyInner3 = document.createElement('div');
keyInner3.className = 'key keyInner3';
    let spanEngDownInner3 = document.createElement('span');
    spanEngDownInner3.className = 'Inner3_eng_down eng';
    spanEngDownInner3.innerHTML = '3';
    let spanEngUpInner3 = document.createElement('span');
    spanEngUpInner3.className = 'Inner3_eng_up eng_up';
    spanEngUpInner3.innerHTML = '#';
    let spanEngCapsInner3 = document.createElement('span');
    spanEngCapsInner3.className = 'Inner3_eng_caps eng_caps';
    spanEngCapsInner3.innerHTML = '3';
    let spanEngShiftInner3 = document.createElement('span');
    spanEngShiftInner3.className = 'Inner3_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner3.innerHTML = '#';

    let spanRuDownInner3 = document.createElement('span');
    spanRuDownInner3.className = 'Inner3_ru_down ru';
    spanRuDownInner3.innerHTML = '3';
    let spanRuUpInner3 = document.createElement('span');
    spanRuUpInner3.className = 'Inner3_ru_up ru_up';
    spanRuUpInner3.innerHTML = '№';
    let spanRuCapsInner3 = document.createElement('span');
    spanRuCapsInner3.className = 'Inner3_ru_caps ru_caps';
    spanRuCapsInner3.innerHTML = '3';
    let spanRuShiftInner3 = document.createElement('span');
    spanRuShiftInner3.className = 'Inner3_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner3.innerHTML = '№';


document.querySelector('.keyRows1').append(keyInner3);
    document.querySelector('.keyInner3').append(spanEngDownInner3);
    document.querySelector('.keyInner3').append(spanEngUpInner3);
    document.querySelector('.keyInner3').append(spanEngCapsInner3);
    document.querySelector('.keyInner3').append(spanEngShiftInner3);

    document.querySelector('.keyInner3').append(spanRuDownInner3);
    document.querySelector('.keyInner3').append(spanRuUpInner3);
    document.querySelector('.keyInner3').append(spanRuCapsInner3);
    document.querySelector('.keyInner3').append(spanRuShiftInner3);

     // inner 4
let keyInner4 = document.createElement('div');
keyInner4.className = 'key keyInner4';
    let spanEngDownInner4 = document.createElement('span');
    spanEngDownInner4.className = 'Inner4_eng_down eng';
    spanEngDownInner4.innerHTML = '4';
    let spanEngUpInner4 = document.createElement('span');
    spanEngUpInner4.className = 'Inner4_eng_up eng_up';
    spanEngUpInner4.innerHTML = '$';
    let spanEngCapsInner4 = document.createElement('span');
    spanEngCapsInner4.className = 'Inner4_eng_caps eng_caps';
    spanEngCapsInner4.innerHTML = '4';
    let spanEngShiftInner4 = document.createElement('span');
    spanEngShiftInner4.className = 'Inner4_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner4.innerHTML = '$';

    let spanRuDownInner4 = document.createElement('span');
    spanRuDownInner4.className = 'Inner4_ru_down ru';
    spanRuDownInner4.innerHTML = '4';
    let spanRuUpInner4 = document.createElement('span');
    spanRuUpInner4.className = 'Inner4_ru_up ru_up';
    spanRuUpInner4.innerHTML = ';';
    let spanRuCapsInner4 = document.createElement('span');
    spanRuCapsInner4.className = 'Inner4_ru_caps ru_caps';
    spanRuCapsInner4.innerHTML = '4';
    let spanRuShiftInner4 = document.createElement('span');
    spanRuShiftInner4.className = 'Inner4_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner4.innerHTML = ';';


document.querySelector('.keyRows1').append(keyInner4);
    document.querySelector('.keyInner4').append(spanEngDownInner4);
    document.querySelector('.keyInner4').append(spanEngUpInner4);
    document.querySelector('.keyInner4').append(spanEngCapsInner4);
    document.querySelector('.keyInner4').append(spanEngShiftInner4);

    document.querySelector('.keyInner4').append(spanRuDownInner4);
    document.querySelector('.keyInner4').append(spanRuUpInner4);
    document.querySelector('.keyInner4').append(spanRuCapsInner4);
    document.querySelector('.keyInner4').append(spanRuShiftInner4);
    
    // inner 5
let keyInner5 = document.createElement('div');
keyInner5.className = 'key keyInner5';
    let spanEngDownInner5 = document.createElement('span');
    spanEngDownInner5.className = 'Inner5_eng_down eng';
    spanEngDownInner5.innerHTML = '5';
    let spanEngUpInner5 = document.createElement('span');
    spanEngUpInner5.className = 'Inner5_eng_up eng_up';
    spanEngUpInner5.innerHTML = '%';
    let spanEngCapsInner5 = document.createElement('span');
    spanEngCapsInner5.className = 'Inner5_eng_caps eng_caps';
    spanEngCapsInner5.innerHTML = '5';
    let spanEngShiftInner5 = document.createElement('span');
    spanEngShiftInner5.className = 'Inner5_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner5.innerHTML = '%';

    let spanRuDownInner5 = document.createElement('span');
    spanRuDownInner5.className = 'Inner5_ru_down ru';
    spanRuDownInner5.innerHTML = '5';
    let spanRuUpInner5 = document.createElement('span');
    spanRuUpInner5.className = 'Inner5_ru_up ru_up';
    spanRuUpInner5.innerHTML = '%';
    let spanRuCapsInner5 = document.createElement('span');
    spanRuCapsInner5.className = 'Inner5_ru_caps ru_caps';
    spanRuCapsInner5.innerHTML = '5';
    let spanRuShiftInner5 = document.createElement('span');
    spanRuShiftInner5.className = 'Inner5_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner5.innerHTML = '%';


document.querySelector('.keyRows1').append(keyInner5);
    document.querySelector('.keyInner5').append(spanEngDownInner5);
    document.querySelector('.keyInner5').append(spanEngUpInner5);
    document.querySelector('.keyInner5').append(spanEngCapsInner5);
    document.querySelector('.keyInner5').append(spanEngShiftInner5);

    document.querySelector('.keyInner5').append(spanRuDownInner5);
    document.querySelector('.keyInner5').append(spanRuUpInner5);
    document.querySelector('.keyInner5').append(spanRuCapsInner5);
    document.querySelector('.keyInner5').append(spanRuShiftInner5);
       
    // inner 6
let keyInner6 = document.createElement('div');
keyInner6.className = 'key keyInner6';
    let spanEngDownInner6 = document.createElement('span');
    spanEngDownInner6.className = 'Inner6_eng_down eng';
    spanEngDownInner6.innerHTML = '6';
    let spanEngUpInner6 = document.createElement('span');
    spanEngUpInner6.className = 'Inner6_eng_up eng_up';
    spanEngUpInner6.innerHTML = '^';
    let spanEngCapsInner6 = document.createElement('span');
    spanEngCapsInner6.className = 'Inner6_eng_caps eng_caps';
    spanEngCapsInner6.innerHTML = '6';
    let spanEngShiftInner6 = document.createElement('span');
    spanEngShiftInner6.className = 'Inner6_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner6.innerHTML = '^';

    let spanRuDownInner6 = document.createElement('span');
    spanRuDownInner6.className = 'Inner6_ru_down ru';
    spanRuDownInner6.innerHTML = '6';
    let spanRuUpInner6 = document.createElement('span');
    spanRuUpInner6.className = 'Inner6_ru_up ru_up';
    spanRuUpInner6.innerHTML = ':';
    let spanRuCapsInner6 = document.createElement('span');
    spanRuCapsInner6.className = 'Inner6_ru_caps ru_caps';
    spanRuCapsInner6.innerHTML = '6';
    let spanRuShiftInner6 = document.createElement('span');
    spanRuShiftInner6.className = 'Inner6_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner6.innerHTML = ':';


document.querySelector('.keyRows1').append(keyInner6);
    document.querySelector('.keyInner6').append(spanEngDownInner6);
    document.querySelector('.keyInner6').append(spanEngUpInner6);
    document.querySelector('.keyInner6').append(spanEngCapsInner6);
    document.querySelector('.keyInner6').append(spanEngShiftInner6);

    document.querySelector('.keyInner6').append(spanRuDownInner6);
    document.querySelector('.keyInner6').append(spanRuUpInner6);
    document.querySelector('.keyInner6').append(spanRuCapsInner6);
    document.querySelector('.keyInner6').append(spanRuShiftInner6);
    
    
    // inner 7
let keyInner7 = document.createElement('div');
keyInner7.className = 'key keyInner7';
    let spanEngDownInner7 = document.createElement('span');
    spanEngDownInner7.className = 'Inner7_eng_down eng';
    spanEngDownInner7.innerHTML = '7';
    let spanEngUpInner7 = document.createElement('span');
    spanEngUpInner7.className = 'Inner7_eng_up eng_up';
    spanEngUpInner7.innerHTML = '&';
    let spanEngCapsInner7 = document.createElement('span');
    spanEngCapsInner7.className = 'Inner7_eng_caps eng_caps';
    spanEngCapsInner7.innerHTML = '7';
    let spanEngShiftInner7 = document.createElement('span');
    spanEngShiftInner7.className = 'Inner7_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner7.innerHTML = '&';

    let spanRuDownInner7 = document.createElement('span');
    spanRuDownInner7.className = 'Inner7_ru_down ru';
    spanRuDownInner7.innerHTML = '7';
    let spanRuUpInner7 = document.createElement('span');
    spanRuUpInner7.className = 'Inner7_ru_up ru_up';
    spanRuUpInner7.innerHTML = '?';
    let spanRuCapsInner7 = document.createElement('span');
    spanRuCapsInner7.className = 'Inner7_ru_caps ru_caps';
    spanRuCapsInner7.innerHTML = '7';
    let spanRuShiftInner7 = document.createElement('span');
    spanRuShiftInner7.className = 'Inner7_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner7.innerHTML = '?';


document.querySelector('.keyRows1').append(keyInner7);
    document.querySelector('.keyInner7').append(spanEngDownInner7);
    document.querySelector('.keyInner7').append(spanEngUpInner7);
    document.querySelector('.keyInner7').append(spanEngCapsInner7);
    document.querySelector('.keyInner7').append(spanEngShiftInner7);

    document.querySelector('.keyInner7').append(spanRuDownInner7);
    document.querySelector('.keyInner7').append(spanRuUpInner7);
    document.querySelector('.keyInner7').append(spanRuCapsInner7);
    document.querySelector('.keyInner7').append(spanRuShiftInner7);
      
    // inner 8
let keyInner8 = document.createElement('div');
keyInner8.className = 'key keyInner8';
    let spanEngDownInner8 = document.createElement('span');
    spanEngDownInner8.className = 'Inner8_eng_down eng';
    spanEngDownInner8.innerHTML = '8';
    let spanEngUpInner8 = document.createElement('span');
    spanEngUpInner8.className = 'Inner8_eng_up eng_up';
    spanEngUpInner8.innerHTML = '*';
    let spanEngCapsInner8 = document.createElement('span');
    spanEngCapsInner8.className = 'Inner8_eng_caps eng_caps';
    spanEngCapsInner8.innerHTML = '8';
    let spanEngShiftInner8 = document.createElement('span');
    spanEngShiftInner8.className = 'Inner8_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner8.innerHTML = '*';

    let spanRuDownInner8 = document.createElement('span');
    spanRuDownInner8.className = 'Inner8_ru_down ru';
    spanRuDownInner8.innerHTML = '8';
    let spanRuUpInner8 = document.createElement('span');
    spanRuUpInner8.className = 'Inner8_ru_up ru_up';
    spanRuUpInner8.innerHTML = '*';
    let spanRuCapsInner8 = document.createElement('span');
    spanRuCapsInner8.className = 'Inner8_ru_caps ru_caps';
    spanRuCapsInner8.innerHTML = '8';
    let spanRuShiftInner8 = document.createElement('span');
    spanRuShiftInner8.className = 'Inner8_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner8.innerHTML = '*';


document.querySelector('.keyRows1').append(keyInner8);
    document.querySelector('.keyInner8').append(spanEngDownInner8);
    document.querySelector('.keyInner8').append(spanEngUpInner8);
    document.querySelector('.keyInner8').append(spanEngCapsInner8);
    document.querySelector('.keyInner8').append(spanEngShiftInner8);

    document.querySelector('.keyInner8').append(spanRuDownInner8);
    document.querySelector('.keyInner8').append(spanRuUpInner8);
    document.querySelector('.keyInner8').append(spanRuCapsInner8);
    document.querySelector('.keyInner8').append(spanRuShiftInner8);
       
    // inner 9
let keyInner9 = document.createElement('div');
keyInner9.className = 'key keyInner9';
    let spanEngDownInner9 = document.createElement('span');
    spanEngDownInner9.className = 'Inner9_eng_down eng';
    spanEngDownInner9.innerHTML = '9';
    let spanEngUpInner9 = document.createElement('span');
    spanEngUpInner9.className = 'Inner9_eng_up eng_up';
    spanEngUpInner9.innerHTML = '(';
    let spanEngCapsInner9 = document.createElement('span');
    spanEngCapsInner9.className = 'Inner9_eng_caps eng_caps';
    spanEngCapsInner9.innerHTML = '9';
    let spanEngShiftInner9 = document.createElement('span');
    spanEngShiftInner9.className = 'Inner9_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner9.innerHTML = '(';

    let spanRuDownInner9 = document.createElement('span');
    spanRuDownInner9.className = 'Inner9_ru_down ru';
    spanRuDownInner9.innerHTML = '9';
    let spanRuUpInner9 = document.createElement('span');
    spanRuUpInner9.className = 'Inner9_ru_up ru_up';
    spanRuUpInner9.innerHTML = '(';
    let spanRuCapsInner9 = document.createElement('span');
    spanRuCapsInner9.className = 'Inner9_ru_caps ru_caps';
    spanRuCapsInner9.innerHTML = '9';
    let spanRuShiftInner9 = document.createElement('span');
    spanRuShiftInner9.className = 'Inner9_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner9.innerHTML = '(';


document.querySelector('.keyRows1').append(keyInner9);
    document.querySelector('.keyInner9').append(spanEngDownInner9);
    document.querySelector('.keyInner9').append(spanEngUpInner9);
    document.querySelector('.keyInner9').append(spanEngCapsInner9);
    document.querySelector('.keyInner9').append(spanEngShiftInner9);

    document.querySelector('.keyInner9').append(spanRuDownInner9);
    document.querySelector('.keyInner9').append(spanRuUpInner9);
    document.querySelector('.keyInner9').append(spanRuCapsInner9);
    document.querySelector('.keyInner9').append(spanRuShiftInner9);
          
    // inner 0
let keyInner0 = document.createElement('div');
keyInner0.className = 'key keyInner0';
    let spanEngDownInner0 = document.createElement('span');
    spanEngDownInner0.className = 'Inner0_eng_down eng';
    spanEngDownInner0.innerHTML = '0';
    let spanEngUpInner0 = document.createElement('span');
    spanEngUpInner0.className = 'Inner0_eng_up eng_up';
    spanEngUpInner0.innerHTML = ')';
    let spanEngCapsInner0 = document.createElement('span');
    spanEngCapsInner0.className = 'Inner0_eng_caps eng_caps';
    spanEngCapsInner0.innerHTML = '0';
    let spanEngShiftInner0 = document.createElement('span');
    spanEngShiftInner0.className = 'Inner0_eng_shiftCaps eng_caps_shift';
    spanEngShiftInner0.innerHTML = ')';

    let spanRuDownInner0 = document.createElement('span');
    spanRuDownInner0.className = 'Inner0_ru_down ru';
    spanRuDownInner0.innerHTML = '0';
    let spanRuUpInner0 = document.createElement('span');
    spanRuUpInner0.className = 'Inner0_ru_up ru_up';
    spanRuUpInner0.innerHTML = ')';
    let spanRuCapsInner0 = document.createElement('span');
    spanRuCapsInner0.className = 'Inner0_ru_caps ru_caps';
    spanRuCapsInner0.innerHTML = '0';
    let spanRuShiftInner0 = document.createElement('span');
    spanRuShiftInner0.className = 'Inner0_ru_shiftCaps ru_caps_shift';
    spanRuShiftInner0.innerHTML = ')';


document.querySelector('.keyRows1').append(keyInner0);
    document.querySelector('.keyInner0').append(spanEngDownInner0);
    document.querySelector('.keyInner0').append(spanEngUpInner0);
    document.querySelector('.keyInner0').append(spanEngCapsInner0);
    document.querySelector('.keyInner0').append(spanEngShiftInner0);

    document.querySelector('.keyInner0').append(spanRuDownInner0);
    document.querySelector('.keyInner0').append(spanRuUpInner0);
    document.querySelector('.keyInner0').append(spanRuCapsInner0);
    document.querySelector('.keyInner0').append(spanRuShiftInner0);
     
    // inner Defis
let keyInnerDefis = document.createElement('div');
keyInnerDefis.className = 'key keyInnerDefis';
    let spanEngDownInnerDefis = document.createElement('span');
    spanEngDownInnerDefis.className = 'InnerDefis_eng_down eng';
    spanEngDownInnerDefis.innerHTML = '-';
    let spanEngUpInnerDefis = document.createElement('span');
    spanEngUpInnerDefis.className = 'InnerDefis_eng_up eng_up';
    spanEngUpInnerDefis.innerHTML = '_';
    let spanEngCapsInnerDefis = document.createElement('span');
    spanEngCapsInnerDefis.className = 'InnerDefis_eng_caps eng_caps';
    spanEngCapsInnerDefis.innerHTML = '-';
    let spanEngShiftInnerDefis = document.createElement('span');
    spanEngShiftInnerDefis.className = 'InnerDefis_eng_shiftCaps eng_caps_shift';
    spanEngShiftInnerDefis.innerHTML = '_';

    let spanRuDownInnerDefis = document.createElement('span');
    spanRuDownInnerDefis.className = 'InnerDefis_ru_down ru';
    spanRuDownInnerDefis.innerHTML = '-';
    let spanRuUpInnerDefis = document.createElement('span');
    spanRuUpInnerDefis.className = 'InnerDefis_ru_up ru_up';
    spanRuUpInnerDefis.innerHTML = '_';
    let spanRuCapsInnerDefis = document.createElement('span');
    spanRuCapsInnerDefis.className = 'InnerDefis_ru_caps ru_caps';
    spanRuCapsInnerDefis.innerHTML = '-';
    let spanRuShiftInnerDefis = document.createElement('span');
    spanRuShiftInnerDefis.className = 'InnerDefis_ru_shiftCaps ru_caps_shift';
    spanRuShiftInnerDefis.innerHTML = '_';


document.querySelector('.keyRows1').append(keyInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanEngDownInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanEngUpInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanEngCapsInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanEngShiftInnerDefis);

    document.querySelector('.keyInnerDefis').append(spanRuDownInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanRuUpInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanRuCapsInnerDefis);
    document.querySelector('.keyInnerDefis').append(spanRuShiftInnerDefis);

     // inner Ravno
let keyInnerRavno = document.createElement('div');
keyInnerRavno.className = 'key keyInnerRavno';
    let spanEngDownInnerRavno = document.createElement('span');
    spanEngDownInnerRavno.className = 'InnerRavno_eng_down eng';
    spanEngDownInnerRavno.innerHTML = '=';
    let spanEngUpInnerRavno = document.createElement('span');
    spanEngUpInnerRavno.className = 'InnerRavno_eng_up eng_up';
    spanEngUpInnerRavno.innerHTML = '+';
    let spanEngCapsInnerRavno = document.createElement('span');
    spanEngCapsInnerRavno.className = 'InnerRavno_eng_caps eng_caps';
    spanEngCapsInnerRavno.innerHTML = '=';
    let spanEngShiftInnerRavno = document.createElement('span');
    spanEngShiftInnerRavno.className = 'InnerRavno_eng_shiftCaps eng_caps_shift';
    spanEngShiftInnerRavno.innerHTML = '+';

    let spanRuDownInnerRavno = document.createElement('span');
    spanRuDownInnerRavno.className = 'InnerRavno_ru_down ru';
    spanRuDownInnerRavno.innerHTML = '=';
    let spanRuUpInnerRavno = document.createElement('span');
    spanRuUpInnerRavno.className = 'InnerRavno_ru_up ru_up';
    spanRuUpInnerRavno.innerHTML = '+';
    let spanRuCapsInnerRavno = document.createElement('span');
    spanRuCapsInnerRavno.className = 'InnerRavno_ru_caps ru_caps';
    spanRuCapsInnerRavno.innerHTML = '=';
    let spanRuShiftInnerRavno = document.createElement('span');
    spanRuShiftInnerRavno.className = 'InnerRavno_ru_shiftCaps ru_caps_shift';
    spanRuShiftInnerRavno.innerHTML = '+';


document.querySelector('.keyRows1').append(keyInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanEngDownInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanEngUpInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanEngCapsInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanEngShiftInnerRavno);

    document.querySelector('.keyInnerRavno').append(spanRuDownInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanRuUpInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanRuCapsInnerRavno);
    document.querySelector('.keyInnerRavno').append(spanRuShiftInnerRavno);

     // inner Backspace
let keyInnerBackspace = document.createElement('div');
keyInnerBackspace.className = 'key keyInnerBackspace';
    let spanEngDownInnerBackspace = document.createElement('span');
    spanEngDownInnerBackspace.className = 'InnerBackspace_eng_down eng';
    spanEngDownInnerBackspace.innerHTML = 'Backspace';
    let spanEngUpInnerBackspace = document.createElement('span');
    spanEngUpInnerBackspace.className = 'InnerBackspace_eng_up eng_up';
    spanEngUpInnerBackspace.innerHTML = 'Backspace';
    let spanEngCapsInnerBackspace = document.createElement('span');
    spanEngCapsInnerBackspace.className = 'InnerBackspace_eng_caps eng_caps';
    spanEngCapsInnerBackspace.innerHTML = 'Backspace';
    let spanEngShiftInnerBackspace = document.createElement('span');
    spanEngShiftInnerBackspace.className = 'InnerBackspace_eng_shiftCaps eng_caps_shift';
    spanEngShiftInnerBackspace.innerHTML = 'Backspace';

    let spanRuDownInnerBackspace = document.createElement('span');
    spanRuDownInnerBackspace.className = 'InnerBackspace_ru_down ru';
    spanRuDownInnerBackspace.innerHTML = 'Backspace';
    let spanRuUpInnerBackspace = document.createElement('span');
    spanRuUpInnerBackspace.className = 'InnerBackspace_ru_up ru_up';
    spanRuUpInnerBackspace.innerHTML = 'Backspace';
    let spanRuCapsInnerBackspace = document.createElement('span');
    spanRuCapsInnerBackspace.className = 'InnerBackspace_ru_caps ru_caps';
    spanRuCapsInnerBackspace.innerHTML = 'Backspace';
    let spanRuShiftInnerBackspace = document.createElement('span');
    spanRuShiftInnerBackspace.className = 'InnerBackspace_ru_shiftCaps ru_caps_shift';
    spanRuShiftInnerBackspace.innerHTML = 'Backspace';


document.querySelector('.keyRows1').append(keyInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanEngDownInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanEngUpInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanEngCapsInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanEngShiftInnerBackspace);

    document.querySelector('.keyInnerBackspace').append(spanRuDownInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanRuUpInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanRuCapsInnerBackspace);
    document.querySelector('.keyInnerBackspace').append(spanRuShiftInnerBackspace);

     // Tab
let keyTab = document.createElement('div');
keyTab.className = 'key keyTab';
    let spanEngDownTab = document.createElement('span');
    spanEngDownTab.className = 'Tab_eng_down eng';
    spanEngDownTab.innerHTML = 'Tab';
    let spanEngUpTab = document.createElement('span');
    spanEngUpTab.className = 'Tab_eng_up eng_up';
    spanEngUpTab.innerHTML = 'Tab';
    let spanEngCapsTab = document.createElement('span');
    spanEngCapsTab.className = 'Tab_eng_caps eng_caps';
    spanEngCapsTab.innerHTML = 'Tab';
    let spanEngShiftTab = document.createElement('span');
    spanEngShiftTab.className = 'Tab_eng_shiftCaps eng_caps_shift';
    spanEngShiftTab.innerHTML = 'Tab';

    let spanRuDownTab = document.createElement('span');
    spanRuDownTab.className = 'Tab_ru_down ru';
    spanRuDownTab.innerHTML = 'Tab';
    let spanRuUpTab = document.createElement('span');
    spanRuUpTab.className = 'Tab_ru_up ru_up';
    spanRuUpTab.innerHTML = 'Tab';
    let spanRuCapsTab = document.createElement('span');
    spanRuCapsTab.className = 'Tab_ru_caps ru_caps';
    spanRuCapsTab.innerHTML = 'Tab';
    let spanRuShiftTab = document.createElement('span');
    spanRuShiftTab.className = 'Tab_ru_shiftCaps ru_caps_shift';
    spanRuShiftTab.innerHTML = 'Tab';


document.querySelector('.keyRows2').append(keyTab);
    document.querySelector('.keyTab').append(spanEngDownTab);
    document.querySelector('.keyTab').append(spanEngUpTab);
    document.querySelector('.keyTab').append(spanEngCapsTab);
    document.querySelector('.keyTab').append(spanEngShiftTab);

    document.querySelector('.keyTab').append(spanRuDownTab);
    document.querySelector('.keyTab').append(spanRuUpTab);
    document.querySelector('.keyTab').append(spanRuCapsTab);
    document.querySelector('.keyTab').append(spanRuShiftTab);
     
    // QQQQQQQQ
let keyQ = document.createElement('div');
keyQ.className = 'key keyQ';
    let spanEngDownQ = document.createElement('span');
    spanEngDownQ.className = 'Q_eng_down eng';
    spanEngDownQ.innerHTML = 'q';
    let spanEngUpQ = document.createElement('span');
    spanEngUpQ.className = 'Q_eng_up eng_up';
    spanEngUpQ.innerHTML = 'Q';
    let spanEngCapsQ = document.createElement('span');
    spanEngCapsQ.className = 'Q_eng_caps eng_caps';
    spanEngCapsQ.innerHTML = 'Q';
    let spanEngShiftQ = document.createElement('span');
    spanEngShiftQ.className = 'Q_eng_shiftCaps eng_caps_shift';
    spanEngShiftQ.innerHTML = 'q';

    let spanRuDownQ = document.createElement('span');
    spanRuDownQ.className = 'Q_ru_down ru';
    spanRuDownQ.innerHTML = 'й';
    let spanRuUpQ = document.createElement('span');
    spanRuUpQ.className = 'Q_ru_up ru_up';
    spanRuUpQ.innerHTML = 'Й';
    let spanRuCapsQ = document.createElement('span');
    spanRuCapsQ.className = 'Q_ru_caps ru_caps';
    spanRuCapsQ.innerHTML = 'Й';
    let spanRuShiftQ = document.createElement('span');
    spanRuShiftQ.className = 'Q_ru_shiftCaps ru_caps_shift';
    spanRuShiftQ.innerHTML = 'й';


document.querySelector('.keyRows2').append(keyQ);
    document.querySelector('.keyQ').append(spanEngDownQ);
    document.querySelector('.keyQ').append(spanEngUpQ);
    document.querySelector('.keyQ').append(spanEngCapsQ);
    document.querySelector('.keyQ').append(spanEngShiftQ);

    document.querySelector('.keyQ').append(spanRuDownQ);
    document.querySelector('.keyQ').append(spanRuUpQ);
    document.querySelector('.keyQ').append(spanRuCapsQ);
    document.querySelector('.keyQ').append(spanRuShiftQ);
      
    // WWWWWWWW
let keyW = document.createElement('div');
keyW.className = 'key keyW';
    let spanEngDownW = document.createElement('span');
    spanEngDownW.className = 'W_eng_down eng';
    spanEngDownW.innerHTML = 'w';
    let spanEngUpW = document.createElement('span');
    spanEngUpW.className = 'W_eng_up eng_up';
    spanEngUpW.innerHTML = 'W';
    let spanEngCapsW = document.createElement('span');
    spanEngCapsW.className = 'W_eng_caps eng_caps';
    spanEngCapsW.innerHTML = 'W';
    let spanEngShiftW = document.createElement('span');
    spanEngShiftW.className = 'W_eng_shiftCaps eng_caps_shift';
    spanEngShiftW.innerHTML = 'w';

    let spanRuDownW = document.createElement('span');
    spanRuDownW.className = 'W_ru_down ru';
    spanRuDownW.innerHTML = 'ц';
    let spanRuUpW = document.createElement('span');
    spanRuUpW.className = 'W_ru_up ru_up';
    spanRuUpW.innerHTML = 'Ц';
    let spanRuCapsW = document.createElement('span');
    spanRuCapsW.className = 'W_ru_caps ru_caps';
    spanRuCapsW.innerHTML = 'Ц';
    let spanRuShiftW = document.createElement('span');
    spanRuShiftW.className = 'W_ru_shiftCaps ru_caps_shift';
    spanRuShiftW.innerHTML = 'ц';


document.querySelector('.keyRows2').append(keyW);
    document.querySelector('.keyW').append(spanEngDownW);
    document.querySelector('.keyW').append(spanEngUpW);
    document.querySelector('.keyW').append(spanEngCapsW);
    document.querySelector('.keyW').append(spanEngShiftW);

    document.querySelector('.keyW').append(spanRuDownW);
    document.querySelector('.keyW').append(spanRuUpW);
    document.querySelector('.keyW').append(spanRuCapsW);
    document.querySelector('.keyW').append(spanRuShiftW);

     // EEEEEEEEEEE
let keyE = document.createElement('div');
keyE.className = 'key keyE';
    let spanEngDownE = document.createElement('span');
    spanEngDownE.className = 'E_eng_down eng';
    spanEngDownE.innerHTML = 'e';
    let spanEngUpE = document.createElement('span');
    spanEngUpE.className = 'E_eng_up eng_up';
    spanEngUpE.innerHTML = 'E';
    let spanEngCapsE = document.createElement('span');
    spanEngCapsE.className = 'E_eng_caps eng_caps';
    spanEngCapsE.innerHTML = 'E';
    let spanEngShiftE = document.createElement('span');
    spanEngShiftE.className = 'E_eng_shiftCaps eng_caps_shift';
    spanEngShiftE.innerHTML = 'e';

    let spanRuDownE = document.createElement('span');
    spanRuDownE.className = 'E_ru_down ru';
    spanRuDownE.innerHTML = 'у';
    let spanRuUpE = document.createElement('span');
    spanRuUpE.className = 'E_ru_up ru_up';
    spanRuUpE.innerHTML = 'У';
    let spanRuCapsE = document.createElement('span');
    spanRuCapsE.className = 'E_ru_caps ru_caps';
    spanRuCapsE.innerHTML = 'У';
    let spanRuShiftE = document.createElement('span');
    spanRuShiftE.className = 'E_ru_shiftCaps ru_caps_shift';
    spanRuShiftE.innerHTML = 'у';


document.querySelector('.keyRows2').append(keyE);
    document.querySelector('.keyE').append(spanEngDownE);
    document.querySelector('.keyE').append(spanEngUpE);
    document.querySelector('.keyE').append(spanEngCapsE);
    document.querySelector('.keyE').append(spanEngShiftE);

    document.querySelector('.keyE').append(spanRuDownE);
    document.querySelector('.keyE').append(spanRuUpE);
    document.querySelector('.keyE').append(spanRuCapsE);
    document.querySelector('.keyE').append(spanRuShiftE);

      // RRRRRRRRRRRRRRRRRR
let keyR = document.createElement('div');
keyR.className = 'key keyR';
    let spanEngDownR = document.createElement('span');
    spanEngDownR.className = 'R_eng_down eng';
    spanEngDownR.innerHTML = 'r';
    let spanEngUpR = document.createElement('span');
    spanEngUpR.className = 'R_eng_up eng_up';
    spanEngUpR.innerHTML = 'R';
    let spanEngCapsR = document.createElement('span');
    spanEngCapsR.className = 'R_eng_caps eng_caps';
    spanEngCapsR.innerHTML = 'R';
    let spanEngShiftR = document.createElement('span');
    spanEngShiftR.className = 'R_eng_shiftCaps eng_caps_shift';
    spanEngShiftR.innerHTML = 'r';

    let spanRuDownR = document.createElement('span');
    spanRuDownR.className = 'R_ru_down ru';
    spanRuDownR.innerHTML = 'у';
    let spanRuUpR = document.createElement('span');
    spanRuUpR.className = 'R_ru_up ru_up';
    spanRuUpR.innerHTML = 'У';
    let spanRuCapsR = document.createElement('span');
    spanRuCapsR.className = 'R_ru_caps ru_caps';
    spanRuCapsR.innerHTML = 'У';
    let spanRuShiftR = document.createElement('span');
    spanRuShiftR.className = 'R_ru_shiftCaps ru_caps_shift';
    spanRuShiftR.innerHTML = 'у';


document.querySelector('.keyRows2').append(keyR);
    document.querySelector('.keyR').append(spanEngDownR);
    document.querySelector('.keyR').append(spanEngUpR);
    document.querySelector('.keyR').append(spanEngCapsR);
    document.querySelector('.keyR').append(spanEngShiftR);

    document.querySelector('.keyR').append(spanRuDownR);
    document.querySelector('.keyR').append(spanRuUpR);
    document.querySelector('.keyR').append(spanRuCapsR);
    document.querySelector('.keyR').append(spanRuShiftR);

    
      // TTTTTTTTTTTTTTT
let keyT = document.createElement('div');
keyT.className = 'key keyT';
    let spanEngDownT = document.createElement('span');
    spanEngDownT.className = 'T_eng_down eng';
    spanEngDownT.innerHTML = 't';
    let spanEngUpT = document.createElement('span');
    spanEngUpT.className = 'T_eng_up eng_up';
    spanEngUpT.innerHTML = 'T';
    let spanEngCapsT = document.createElement('span');
    spanEngCapsT.className = 'T_eng_caps eng_caps';
    spanEngCapsT.innerHTML = 'T';
    let spanEngShiftT = document.createElement('span');
    spanEngShiftT.className = 'T_eng_shiftCaps eng_caps_shift';
    spanEngShiftT.innerHTML = 't';

    let spanRuDownT = document.createElement('span');
    spanRuDownT.className = 'T_ru_down ru';
    spanRuDownT.innerHTML = 'е';
    let spanRuUpT = document.createElement('span');
    spanRuUpT.className = 'T_ru_up ru_up';
    spanRuUpT.innerHTML = 'Е';
    let spanRuCapsT = document.createElement('span');
    spanRuCapsT.className = 'T_ru_caps ru_caps';
    spanRuCapsT.innerHTML = 'Е';
    let spanRuShiftT = document.createElement('span');
    spanRuShiftT.className = 'T_ru_shiftCaps ru_caps_shift';
    spanRuShiftT.innerHTML = 'е';


document.querySelector('.keyRows2').append(keyT);
    document.querySelector('.keyT').append(spanEngDownT);
    document.querySelector('.keyT').append(spanEngUpT);
    document.querySelector('.keyT').append(spanEngCapsT);
    document.querySelector('.keyT').append(spanEngShiftT);

    document.querySelector('.keyT').append(spanRuDownT);
    document.querySelector('.keyT').append(spanRuUpT);
    document.querySelector('.keyT').append(spanRuCapsT);
    document.querySelector('.keyT').append(spanRuShiftT);
    
      // yyyyyyyyyyyy
let keyY = document.createElement('div');
keyY.className = 'key keyY';
    let spanEngDownY = document.createElement('span');
    spanEngDownY.className = 'Y_eng_down eng';
    spanEngDownY.innerHTML = 'y';
    let spanEngUpY = document.createElement('span');
    spanEngUpY.className = 'Y_eng_up eng_up';
    spanEngUpY.innerHTML = 'Y';
    let spanEngCapsY = document.createElement('span');
    spanEngCapsY.className = 'Y_eng_caps eng_caps';
    spanEngCapsY.innerHTML = 'Y';
    let spanEngShiftY = document.createElement('span');
    spanEngShiftY.className = 'Y_eng_shiftCaps eng_caps_shift';
    spanEngShiftY.innerHTML = 'y';

    let spanRuDownY = document.createElement('span');
    spanRuDownY.className = 'Y_ru_down ru';
    spanRuDownY.innerHTML = 'н';
    let spanRuUpY = document.createElement('span');
    spanRuUpY.className = 'Y_ru_up ru_up';
    spanRuUpY.innerHTML = 'Н';
    let spanRuCapsY = document.createElement('span');
    spanRuCapsY.className = 'Y_ru_caps ru_caps';
    spanRuCapsY.innerHTML = 'Н';
    let spanRuShiftY = document.createElement('span');
    spanRuShiftY.className = 'Y_ru_shiftCaps ru_caps_shift';
    spanRuShiftY.innerHTML = 'н';


document.querySelector('.keyRows2').append(keyY);
    document.querySelector('.keyY').append(spanEngDownY);
    document.querySelector('.keyY').append(spanEngUpY);
    document.querySelector('.keyY').append(spanEngCapsY);
    document.querySelector('.keyY').append(spanEngShiftY);

    document.querySelector('.keyY').append(spanRuDownY);
    document.querySelector('.keyY').append(spanRuUpY);
    document.querySelector('.keyY').append(spanRuCapsY);
    document.querySelector('.keyY').append(spanRuShiftY);

      // UUUUUUUUUUUUUU
let keyU = document.createElement('div');
keyU.className = 'key keyU';
    let spanEngDownU = document.createElement('span');
    spanEngDownU.className = 'U_eng_down eng';
    spanEngDownU.innerHTML = 'u';
    let spanEngUpU = document.createElement('span');
    spanEngUpU.className = 'U_eng_up eng_up';
    spanEngUpU.innerHTML = 'U';
    let spanEngCapsU = document.createElement('span');
    spanEngCapsU.className = 'U_eng_caps eng_caps';
    spanEngCapsU.innerHTML = 'U';
    let spanEngShiftU = document.createElement('span');
    spanEngShiftU.className = 'U_eng_shiftCaps eng_caps_shift';
    spanEngShiftU.innerHTML = 'u';

    let spanRuDownU = document.createElement('span');
    spanRuDownU.className = 'U_ru_down ru';
    spanRuDownU.innerHTML = 'г';
    let spanRuUpU = document.createElement('span');
    spanRuUpU.className = 'U_ru_up ru_up';
    spanRuUpU.innerHTML = 'Г';
    let spanRuCapsU = document.createElement('span');
    spanRuCapsU.className = 'U_ru_caps ru_caps';
    spanRuCapsU.innerHTML = 'Г';
    let spanRuShiftU = document.createElement('span');
    spanRuShiftU.className = 'U_ru_shiftCaps ru_caps_shift';
    spanRuShiftU.innerHTML = 'г';


document.querySelector('.keyRows2').append(keyU);
    document.querySelector('.keyU').append(spanEngDownU);
    document.querySelector('.keyU').append(spanEngUpU);
    document.querySelector('.keyU').append(spanEngCapsU);
    document.querySelector('.keyU').append(spanEngShiftU);

    document.querySelector('.keyU').append(spanRuDownU);
    document.querySelector('.keyU').append(spanRuUpU);
    document.querySelector('.keyU').append(spanRuCapsU);
    document.querySelector('.keyU').append(spanRuShiftU);

     // IIIIIIII
let keyI = document.createElement('div');
keyI.className = 'key keyI';
    let spanEngDownI = document.createElement('span');
    spanEngDownI.className = 'I_eng_down eng';
    spanEngDownI.innerHTML = 'i';
    let spanEngUpI = document.createElement('span');
    spanEngUpI.className = 'I_eng_up eng_up';
    spanEngUpI.innerHTML = 'I';
    let spanEngCapsI = document.createElement('span');
    spanEngCapsI.className = 'I_eng_caps eng_caps';
    spanEngCapsI.innerHTML = 'I';
    let spanEngShiftI = document.createElement('span');
    spanEngShiftI.className = 'I_eng_shiftCaps eng_caps_shift';
    spanEngShiftI.innerHTML = 'i';

    let spanRuDownI = document.createElement('span');
    spanRuDownI.className = 'I_ru_down ru';
    spanRuDownI.innerHTML = 'ш';
    let spanRuUpI = document.createElement('span');
    spanRuUpI.className = 'I_ru_up ru_up';
    spanRuUpI.innerHTML = 'Ш';
    let spanRuCapsI = document.createElement('span');
    spanRuCapsI.className = 'I_ru_caps ru_caps';
    spanRuCapsI.innerHTML = 'Ш';
    let spanRuShiftI = document.createElement('span');
    spanRuShiftI.className = 'I_ru_shiftCaps ru_caps_shift';
    spanRuShiftI.innerHTML = 'ш';


document.querySelector('.keyRows2').append(keyI);
    document.querySelector('.keyI').append(spanEngDownI);
    document.querySelector('.keyI').append(spanEngUpI);
    document.querySelector('.keyI').append(spanEngCapsI);
    document.querySelector('.keyI').append(spanEngShiftI);

    document.querySelector('.keyI').append(spanRuDownI);
    document.querySelector('.keyI').append(spanRuUpI);
    document.querySelector('.keyI').append(spanRuCapsI);
    document.querySelector('.keyI').append(spanRuShiftI);
    
     // OOOOOOO
let keyO = document.createElement('div');
keyO.className = 'key keyO';
    let spanEngDownO = document.createElement('span');
    spanEngDownO.className = 'O_eng_down eng';
    spanEngDownO.innerHTML = 'o';
    let spanEngUpO = document.createElement('span');
    spanEngUpO.className = 'O_eng_up eng_up';
    spanEngUpO.innerHTML = 'O';
    let spanEngCapsO = document.createElement('span');
    spanEngCapsO.className = 'O_eng_caps eng_caps';
    spanEngCapsO.innerHTML = 'O';
    let spanEngShiftO = document.createElement('span');
    spanEngShiftO.className = 'O_eng_shiftCaps eng_caps_shift';
    spanEngShiftO.innerHTML = 'o';

    let spanRuDownO = document.createElement('span');
    spanRuDownO.className = 'O_ru_down ru';
    spanRuDownO.innerHTML = 'щ';
    let spanRuUpO = document.createElement('span');
    spanRuUpO.className = 'O_ru_up ru_up';
    spanRuUpO.innerHTML = 'Щ';
    let spanRuCapsO = document.createElement('span');
    spanRuCapsO.className = 'O_ru_caps ru_caps';
    spanRuCapsO.innerHTML = 'Щ';
    let spanRuShiftO = document.createElement('span');
    spanRuShiftO.className = 'O_ru_shiftCaps ru_caps_shift';
    spanRuShiftO.innerHTML = 'щ';


document.querySelector('.keyRows2').append(keyO);
    document.querySelector('.keyO').append(spanEngDownO);
    document.querySelector('.keyO').append(spanEngUpO);
    document.querySelector('.keyO').append(spanEngCapsO);
    document.querySelector('.keyO').append(spanEngShiftO);

    document.querySelector('.keyO').append(spanRuDownO);
    document.querySelector('.keyO').append(spanRuUpO);
    document.querySelector('.keyO').append(spanRuCapsO);
    document.querySelector('.keyO').append(spanRuShiftO);
    
     // PPPPPP
let keyP = document.createElement('div');
keyP.className = 'key keyP';
    let spanEngDownP = document.createElement('span');
    spanEngDownP.className = 'P_eng_down eng';
    spanEngDownP.innerHTML = 'p';
    let spanEngUpP = document.createElement('span');
    spanEngUpP.className = 'P_eng_up eng_up';
    spanEngUpP.innerHTML = 'P';
    let spanEngCapsP = document.createElement('span');
    spanEngCapsP.className = 'P_eng_caps eng_caps';
    spanEngCapsP.innerHTML = 'P';
    let spanEngShiftP = document.createElement('span');
    spanEngShiftP.className = 'P_eng_shiftCaps eng_caps_shift';
    spanEngShiftP.innerHTML = 'p';

    let spanRuDownP = document.createElement('span');
    spanRuDownP.className = 'P_ru_down ru';
    spanRuDownP.innerHTML = 'з';
    let spanRuUpP = document.createElement('span');
    spanRuUpP.className = 'P_ru_up ru_up';
    spanRuUpP.innerHTML = 'З';
    let spanRuCapsP = document.createElement('span');
    spanRuCapsP.className = 'P_ru_caps ru_caps';
    spanRuCapsP.innerHTML = 'З';
    let spanRuShiftP = document.createElement('span');
    spanRuShiftP.className = 'P_ru_shiftCaps ru_caps_shift';
    spanRuShiftP.innerHTML = 'з';


document.querySelector('.keyRows2').append(keyP);
    document.querySelector('.keyP').append(spanEngDownP);
    document.querySelector('.keyP').append(spanEngUpP);
    document.querySelector('.keyP').append(spanEngCapsP);
    document.querySelector('.keyP').append(spanEngShiftP);

    document.querySelector('.keyP').append(spanRuDownP);
    document.querySelector('.keyP').append(spanRuUpP);
    document.querySelector('.keyP').append(spanRuCapsP);
    document.querySelector('.keyP').append(spanRuShiftP);
    
     // {{{{BracketLeft
let keyBracketLeft = document.createElement('div');
keyBracketLeft.className = 'key keyBracketLeft';
    let spanEngDownBracketLeft = document.createElement('span');
    spanEngDownBracketLeft.className = 'BracketLeft_eng_down eng';
    spanEngDownBracketLeft.innerHTML = '[';
    let spanEngUpBracketLeft = document.createElement('span');
    spanEngUpBracketLeft.className = 'BracketLeft_eng_up eng_up';
    spanEngUpBracketLeft.innerHTML = '{';
    let spanEngCapsBracketLeft = document.createElement('span');
    spanEngCapsBracketLeft.className = 'BracketLeft_eng_caps eng_caps';
    spanEngCapsBracketLeft.innerHTML = '[';
    let spanEngShiftBracketLeft = document.createElement('span');
    spanEngShiftBracketLeft.className = 'BracketLeft_eng_shiftCaps eng_caps_shift';
    spanEngShiftBracketLeft.innerHTML = '{';

    let spanRuDownBracketLeft = document.createElement('span');
    spanRuDownBracketLeft.className = 'BracketLeft_ru_down ru';
    spanRuDownBracketLeft.innerHTML = 'х';
    let spanRuUpBracketLeft = document.createElement('span');
    spanRuUpBracketLeft.className = 'BracketLeft_ru_up ru_up';
    spanRuUpBracketLeft.innerHTML = 'Х';
    let spanRuCapsBracketLeft = document.createElement('span');
    spanRuCapsBracketLeft.className = 'BracketLeft_ru_caps ru_caps';
    spanRuCapsBracketLeft.innerHTML = 'Х';
    let spanRuShiftBracketLeft = document.createElement('span');
    spanRuShiftBracketLeft.className = 'BracketLeft_ru_shiftCaps ru_caps_shift';
    spanRuShiftBracketLeft.innerHTML = 'х';


document.querySelector('.keyRows2').append(keyBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanEngDownBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanEngUpBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanEngCapsBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanEngShiftBracketLeft);

    document.querySelector('.keyBracketLeft').append(spanRuDownBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanRuUpBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanRuCapsBracketLeft);
    document.querySelector('.keyBracketLeft').append(spanRuShiftBracketLeft);
    
    // {{{{BracketRight
let keyBracketRight = document.createElement('div');
keyBracketRight.className = 'key keyBracketRight';
    let spanEngDownBracketRight = document.createElement('span');
    spanEngDownBracketRight.className = 'BracketRight_eng_down eng';
    spanEngDownBracketRight.innerHTML = ']';
    let spanEngUpBracketRight = document.createElement('span');
    spanEngUpBracketRight.className = 'BracketRight_eng_up eng_up';
    spanEngUpBracketRight.innerHTML = '}';
    let spanEngCapsBracketRight = document.createElement('span');
    spanEngCapsBracketRight.className = 'BracketRight_eng_caps eng_caps';
    spanEngCapsBracketRight.innerHTML = ']';
    let spanEngShiftBracketRight = document.createElement('span');
    spanEngShiftBracketRight.className = 'BracketRight_eng_shiftCaps eng_caps_shift';
    spanEngShiftBracketRight.innerHTML = '}';

    let spanRuDownBracketRight = document.createElement('span');
    spanRuDownBracketRight.className = 'BracketRight_ru_down ru';
    spanRuDownBracketRight.innerHTML = 'ъ';
    let spanRuUpBracketRight = document.createElement('span');
    spanRuUpBracketRight.className = 'BracketRight_ru_up ru_up';
    spanRuUpBracketRight.innerHTML = 'Ъ';
    let spanRuCapsBracketRight = document.createElement('span');
    spanRuCapsBracketRight.className = 'BracketRight_ru_caps ru_caps';
    spanRuCapsBracketRight.innerHTML = 'Ъ';
    let spanRuShiftBracketRight = document.createElement('span');
    spanRuShiftBracketRight.className = 'BracketRight_ru_shiftCaps ru_caps_shift';
    spanRuShiftBracketRight.innerHTML = 'ъ';


document.querySelector('.keyRows2').append(keyBracketRight);
    document.querySelector('.keyBracketRight').append(spanEngDownBracketRight);
    document.querySelector('.keyBracketRight').append(spanEngUpBracketRight);
    document.querySelector('.keyBracketRight').append(spanEngCapsBracketRight);
    document.querySelector('.keyBracketRight').append(spanEngShiftBracketRight);

    document.querySelector('.keyBracketRight').append(spanRuDownBracketRight);
    document.querySelector('.keyBracketRight').append(spanRuUpBracketRight);
    document.querySelector('.keyBracketRight').append(spanRuCapsBracketRight);
    document.querySelector('.keyBracketRight').append(spanRuShiftBracketRight);
    
    // {{{{Backslach
let keyBackslach = document.createElement('div');
keyBackslach.className = 'key keyBackslach';
    let spanEngDownBackslach = document.createElement('span');
    spanEngDownBackslach.className = 'Backslach_eng_down eng';
    spanEngDownBackslach.innerHTML = String.fromCharCode(92);
    let spanEngUpBackslach = document.createElement('span');
    spanEngUpBackslach.className = 'Backslach_eng_up eng_up';
    spanEngUpBackslach.innerHTML = '|';
    let spanEngCapsBackslach = document.createElement('span');
    spanEngCapsBackslach.className = 'Backslach_eng_caps eng_caps';
    spanEngCapsBackslach.innerHTML = String.fromCharCode(92);
    let spanEngShiftBackslach = document.createElement('span');
    spanEngShiftBackslach.className = 'Backslach_eng_shiftCaps eng_caps_shift';
    spanEngShiftBackslach.innerHTML = '|';

    let spanRuDownBackslach = document.createElement('span');
    spanRuDownBackslach.className = 'Backslach_ru_down ru';
    spanRuDownBackslach.innerHTML = String.fromCharCode(92);
    let spanRuUpBackslach = document.createElement('span');
    spanRuUpBackslach.className = 'Backslach_ru_up ru_up';
    spanRuUpBackslach.innerHTML = '/';
    let spanRuCapsBackslach = document.createElement('span');
    spanRuCapsBackslach.className = 'Backslach_ru_caps ru_caps';
    spanRuCapsBackslach.innerHTML = String.fromCharCode(92);
    let spanRuShiftBackslach = document.createElement('span');
    spanRuShiftBackslach.className = 'Backslach_ru_shiftCaps ru_caps_shift';
    spanRuShiftBackslach.innerHTML = '/';


document.querySelector('.keyRows2').append(keyBackslach);
    document.querySelector('.keyBackslach').append(spanEngDownBackslach);
    document.querySelector('.keyBackslach').append(spanEngUpBackslach);
    document.querySelector('.keyBackslach').append(spanEngCapsBackslach);
    document.querySelector('.keyBackslach').append(spanEngShiftBackslach);

    document.querySelector('.keyBackslach').append(spanRuDownBackslach);
    document.querySelector('.keyBackslach').append(spanRuUpBackslach);
    document.querySelector('.keyBackslach').append(spanRuCapsBackslach);
    document.querySelector('.keyBackslach').append(spanRuShiftBackslach);

    
    // {{{{Del
let keyDel = document.createElement('div');
keyDel.className = 'key keyDel';
    let spanEngDownDel = document.createElement('span');
    spanEngDownDel.className = 'Del_eng_down eng';
    spanEngDownDel.innerHTML = 'Del';
    let spanEngUpDel = document.createElement('span');
    spanEngUpDel.className = 'Del_eng_up eng_up';
    spanEngUpDel.innerHTML = 'Del';
    let spanEngCapsDel = document.createElement('span');
    spanEngCapsDel.className = 'Del_eng_caps eng_caps';
    spanEngCapsDel.innerHTML = 'Del';
    let spanEngShiftDel = document.createElement('span');
    spanEngShiftDel.className = 'Del_eng_shiftCaps eng_caps_shift';
    spanEngShiftDel.innerHTML = 'Del';

    let spanRuDownDel = document.createElement('span');
    spanRuDownDel.className = 'Del_ru_down ru';
    spanRuDownDel.innerHTML = 'Del';
    let spanRuUpDel = document.createElement('span');
    spanRuUpDel.className = 'Del_ru_up ru_up';
    spanRuUpDel.innerHTML = 'Del';
    let spanRuCapsDel = document.createElement('span');
    spanRuCapsDel.className = 'Del_ru_caps ru_caps';
    spanRuCapsDel.innerHTML = 'Del';
    let spanRuShiftDel = document.createElement('span');
    spanRuShiftDel.className = 'Del_ru_shiftCaps ru_caps_shift';
    spanRuShiftDel.innerHTML = 'Del';


document.querySelector('.keyRows2').append(keyDel);
    document.querySelector('.keyDel').append(spanEngDownDel);
    document.querySelector('.keyDel').append(spanEngUpDel);
    document.querySelector('.keyDel').append(spanEngCapsDel);
    document.querySelector('.keyDel').append(spanEngShiftDel);

    document.querySelector('.keyDel').append(spanRuDownDel);
    document.querySelector('.keyDel').append(spanRuUpDel);
    document.querySelector('.keyDel').append(spanRuCapsDel);
    document.querySelector('.keyDel').append(spanRuShiftDel);
    
    // Caps
let keyCapsLock = document.createElement('div');
keyCapsLock.className = 'key keyCapsLock';
    let spanEngDownCapsLock = document.createElement('span');
    spanEngDownCapsLock.className = 'CapsLock_eng_down eng';
    spanEngDownCapsLock.innerHTML = 'Caps Lock';
    let spanEngUpCapsLock = document.createElement('span');
    spanEngUpCapsLock.className = 'CapsLock_eng_up eng_up';
    spanEngUpCapsLock.innerHTML = 'Caps Lock';
    let spanEngCapsCapsLock = document.createElement('span');
    spanEngCapsCapsLock.className = 'CapsLock_eng_caps eng_caps';
    spanEngCapsCapsLock.innerHTML = 'Caps Lock';
    let spanEngShiftCapsLock = document.createElement('span');
    spanEngShiftCapsLock.className = 'CapsLock_eng_shiftCaps eng_caps_shift';
    spanEngShiftCapsLock.innerHTML = 'Caps Lock';

    let spanRuDownCapsLock = document.createElement('span');
    spanRuDownCapsLock.className = 'CapsLock_ru_down ru';
    spanRuDownCapsLock.innerHTML = 'Caps Lock';
    let spanRuUpCapsLock = document.createElement('span');
    spanRuUpCapsLock.className = 'CapsLock_ru_up ru_up';
    spanRuUpCapsLock.innerHTML = 'Caps Lock';
    let spanRuCapsCapsLock = document.createElement('span');
    spanRuCapsCapsLock.className = 'CapsLock_ru_caps ru_caps';
    spanRuCapsCapsLock.innerHTML = 'Caps Lock';
    let spanRuShiftCapsLock = document.createElement('span');
    spanRuShiftCapsLock.className = 'CapsLock_ru_shiftCaps ru_caps_shift';
    spanRuShiftCapsLock.innerHTML = 'Caps Lock';


document.querySelector('.keyRows3').append(keyCapsLock);
    document.querySelector('.keyCapsLock').append(spanEngDownCapsLock);
    document.querySelector('.keyCapsLock').append(spanEngUpCapsLock);
    document.querySelector('.keyCapsLock').append(spanEngCapsCapsLock);
    document.querySelector('.keyCapsLock').append(spanEngShiftCapsLock);

    document.querySelector('.keyCapsLock').append(spanRuDownCapsLock);
    document.querySelector('.keyCapsLock').append(spanRuUpCapsLock);
    document.querySelector('.keyCapsLock').append(spanRuCapsCapsLock);
    document.querySelector('.keyCapsLock').append(spanRuShiftCapsLock);

     // AAAAAAAAAA
let keyA = document.createElement('div');
keyA.className = 'key keyA';
    let spanEngDownA = document.createElement('span');
    spanEngDownA.className = 'A_eng_down eng';
    spanEngDownA.innerHTML = 'a';
    let spanEngUpA = document.createElement('span');
    spanEngUpA.className = 'A_eng_up eng_up';
    spanEngUpA.innerHTML = 'A';
    let spanEngCapsA = document.createElement('span');
    spanEngCapsA.className = 'A_eng_caps eng_caps';
    spanEngCapsA.innerHTML = 'A';
    let spanEngShiftA = document.createElement('span');
    spanEngShiftA.className = 'A_eng_shiftCaps eng_caps_shift';
    spanEngShiftA.innerHTML = 'a';

    let spanRuDownA = document.createElement('span');
    spanRuDownA.className = 'A_ru_down ru';
    spanRuDownA.innerHTML = 'ф';
    let spanRuUpA = document.createElement('span');
    spanRuUpA.className = 'A_ru_up ru_up';
    spanRuUpA.innerHTML = 'Ф';
    let spanRuCapsA = document.createElement('span');
    spanRuCapsA.className = 'A_ru_caps ru_caps';
    spanRuCapsA.innerHTML = 'Ф';
    let spanRuShiftA = document.createElement('span');
    spanRuShiftA.className = 'A_ru_shiftCaps ru_caps_shift';
    spanRuShiftA.innerHTML = 'ф';


document.querySelector('.keyRows3').append(keyA);
    document.querySelector('.keyA').append(spanEngDownA);
    document.querySelector('.keyA').append(spanEngUpA);
    document.querySelector('.keyA').append(spanEngCapsA);
    document.querySelector('.keyA').append(spanEngShiftA);

    document.querySelector('.keyA').append(spanRuDownA);
    document.querySelector('.keyA').append(spanRuUpA);
    document.querySelector('.keyA').append(spanRuCapsA);
    document.querySelector('.keyA').append(spanRuShiftA);

// SSSSSSSSSS
let keyS = document.createElement('div');
keyS.className = 'key keyS';
    let spanEngDownS = document.createElement('span');
    spanEngDownS.className = 'S_eng_down eng';
    spanEngDownS.innerHTML = 's';
    let spanEngUpS = document.createElement('span');
    spanEngUpS.className = 'S_eng_up eng_up';
    spanEngUpS.innerHTML = 'S';
    let spanEngCapsS = document.createElement('span');
    spanEngCapsS.className = 'S_eng_caps eng_caps';
    spanEngCapsS.innerHTML = 'S';
    let spanEngShiftS = document.createElement('span');
    spanEngShiftS.className = 'S_eng_shiftCaps eng_caps_shift';
    spanEngShiftS.innerHTML = 's';

    let spanRuDownS = document.createElement('span');
    spanRuDownS.className = 'S_ru_down ru';
    spanRuDownS.innerHTML = 'ы';
    let spanRuUpS = document.createElement('span');
    spanRuUpS.className = 'S_ru_up ru_up';
    spanRuUpS.innerHTML = 'Ы';
    let spanRuCapsS = document.createElement('span');
    spanRuCapsS.className = 'S_ru_caps ru_caps';
    spanRuCapsS.innerHTML = 'Ы';
    let spanRuShiftS = document.createElement('span');
    spanRuShiftS.className = 'S_ru_shiftCaps ru_caps_shift';
    spanRuShiftS.innerHTML = 'ы';


document.querySelector('.keyRows3').append(keyS);
    document.querySelector('.keyS').append(spanEngDownS);
    document.querySelector('.keyS').append(spanEngUpS);
    document.querySelector('.keyS').append(spanEngCapsS);
    document.querySelector('.keyS').append(spanEngShiftS);

    document.querySelector('.keyS').append(spanRuDownS);
    document.querySelector('.keyS').append(spanRuUpS);
    document.querySelector('.keyS').append(spanRuCapsS);
    document.querySelector('.keyS').append(spanRuShiftS);
    
// DDDDDDDDDD
let keyD = document.createElement('div');
keyD.className = 'key keyD';
    let spanEngDownD = document.createElement('span');
    spanEngDownD.className = 'D_eng_down eng';
    spanEngDownD.innerHTML = 'd';
    let spanEngUpD = document.createElement('span');
    spanEngUpD.className = 'D_eng_up eng_up';
    spanEngUpD.innerHTML = 'D';
    let spanEngCapsD = document.createElement('span');
    spanEngCapsD.className = 'D_eng_caps eng_caps';
    spanEngCapsD.innerHTML = 'D';
    let spanEngShiftD = document.createElement('span');
    spanEngShiftD.className = 'D_eng_shiftCaps eng_caps_shift';
    spanEngShiftD.innerHTML = 'd';

    let spanRuDownD = document.createElement('span');
    spanRuDownD.className = 'D_ru_down ru';
    spanRuDownD.innerHTML = 'в';
    let spanRuUpD = document.createElement('span');
    spanRuUpD.className = 'D_ru_up ru_up';
    spanRuUpD.innerHTML = 'В';
    let spanRuCapsD = document.createElement('span');
    spanRuCapsD.className = 'D_ru_caps ru_caps';
    spanRuCapsD.innerHTML = 'В';
    let spanRuShiftD = document.createElement('span');
    spanRuShiftD.className = 'D_ru_shiftCaps ru_caps_shift';
    spanRuShiftD.innerHTML = 'в';


document.querySelector('.keyRows3').append(keyD);
    document.querySelector('.keyD').append(spanEngDownD);
    document.querySelector('.keyD').append(spanEngUpD);
    document.querySelector('.keyD').append(spanEngCapsD);
    document.querySelector('.keyD').append(spanEngShiftD);

    document.querySelector('.keyD').append(spanRuDownD);
    document.querySelector('.keyD').append(spanRuUpD);
    document.querySelector('.keyD').append(spanRuCapsD);
    document.querySelector('.keyD').append(spanRuShiftD);
    
// FFFFFFFFFF
let keyF = document.createElement('div');
keyF.className = 'key keyF';
    let spanEngDownF = document.createElement('span');
    spanEngDownF.className = 'F_eng_down eng';
    spanEngDownF.innerHTML = 'f';
    let spanEngUpF = document.createElement('span');
    spanEngUpF.className = 'F_eng_up eng_up';
    spanEngUpF.innerHTML = 'F';
    let spanEngCapsF = document.createElement('span');
    spanEngCapsF.className = 'F_eng_caps eng_caps';
    spanEngCapsF.innerHTML = 'F';
    let spanEngShiftF = document.createElement('span');
    spanEngShiftF.className = 'F_eng_shiftCaps eng_caps_shift';
    spanEngShiftF.innerHTML = 'f';

    let spanRuDownF = document.createElement('span');
    spanRuDownF.className = 'F_ru_down ru';
    spanRuDownF.innerHTML = 'а';
    let spanRuUpF = document.createElement('span');
    spanRuUpF.className = 'F_ru_up ru_up';
    spanRuUpF.innerHTML = 'А';
    let spanRuCapsF = document.createElement('span');
    spanRuCapsF.className = 'F_ru_caps ru_caps';
    spanRuCapsF.innerHTML = 'А';
    let spanRuShiftF = document.createElement('span');
    spanRuShiftF.className = 'F_ru_shiftCaps ru_caps_shift';
    spanRuShiftF.innerHTML = 'а';


document.querySelector('.keyRows3').append(keyF);
    document.querySelector('.keyF').append(spanEngDownF);
    document.querySelector('.keyF').append(spanEngUpF);
    document.querySelector('.keyF').append(spanEngCapsF);
    document.querySelector('.keyF').append(spanEngShiftF);

    document.querySelector('.keyF').append(spanRuDownF);
    document.querySelector('.keyF').append(spanRuUpF);
    document.querySelector('.keyF').append(spanRuCapsF);
    document.querySelector('.keyF').append(spanRuShiftF);
    
// GGGGGGGGGG
let keyG = document.createElement('div');
keyG.className = 'key keyG';
    let spanEngDownG = document.createElement('span');
    spanEngDownG.className = 'G_eng_down eng';
    spanEngDownG.innerHTML = 'g';
    let spanEngUpG = document.createElement('span');
    spanEngUpG.className = 'G_eng_up eng_up';
    spanEngUpG.innerHTML = 'G';
    let spanEngCapsG = document.createElement('span');
    spanEngCapsG.className = 'G_eng_caps eng_caps';
    spanEngCapsG.innerHTML = 'G';
    let spanEngShiftG = document.createElement('span');
    spanEngShiftG.className = 'G_eng_shiftCaps eng_caps_shift';
    spanEngShiftG.innerHTML = 'g';

    let spanRuDownG = document.createElement('span');
    spanRuDownG.className = 'G_ru_down ru';
    spanRuDownG.innerHTML = 'п';
    let spanRuUpG = document.createElement('span');
    spanRuUpG.className = 'G_ru_up ru_up';
    spanRuUpG.innerHTML = 'П';
    let spanRuCapsG = document.createElement('span');
    spanRuCapsG.className = 'G_ru_caps ru_caps';
    spanRuCapsG.innerHTML = 'П';
    let spanRuShiftG = document.createElement('span');
    spanRuShiftG.className = 'G_ru_shiftCaps ru_caps_shift';
    spanRuShiftG.innerHTML = 'п';


document.querySelector('.keyRows3').append(keyG);
    document.querySelector('.keyG').append(spanEngDownG);
    document.querySelector('.keyG').append(spanEngUpG);
    document.querySelector('.keyG').append(spanEngCapsG);
    document.querySelector('.keyG').append(spanEngShiftG);

    document.querySelector('.keyG').append(spanRuDownG);
    document.querySelector('.keyG').append(spanRuUpG);
    document.querySelector('.keyG').append(spanRuCapsG);
    document.querySelector('.keyG').append(spanRuShiftG);
    
// HHHHHHHHHH
let keyH = document.createElement('div');
keyH.className = 'key keyH';
    let spanEngDownH = document.createElement('span');
    spanEngDownH.className = 'H_eng_down eng';
    spanEngDownH.innerHTML = 'h';
    let spanEngUpH = document.createElement('span');
    spanEngUpH.className = 'H_eng_up eng_up';
    spanEngUpH.innerHTML = 'H';
    let spanEngCapsH = document.createElement('span');
    spanEngCapsH.className = 'H_eng_caps eng_caps';
    spanEngCapsH.innerHTML = 'H';
    let spanEngShiftH = document.createElement('span');
    spanEngShiftH.className = 'H_eng_shiftCaps eng_caps_shift';
    spanEngShiftH.innerHTML = 'h';

    let spanRuDownH = document.createElement('span');
    spanRuDownH.className = 'H_ru_down ru';
    spanRuDownH.innerHTML = 'р';
    let spanRuUpH = document.createElement('span');
    spanRuUpH.className = 'H_ru_up ru_up';
    spanRuUpH.innerHTML = 'Р';
    let spanRuCapsH = document.createElement('span');
    spanRuCapsH.className = 'H_ru_caps ru_caps';
    spanRuCapsH.innerHTML = 'Р';
    let spanRuShiftH = document.createElement('span');
    spanRuShiftH.className = 'H_ru_shiftCaps ru_caps_shift';
    spanRuShiftH.innerHTML = 'р';


document.querySelector('.keyRows3').append(keyH);
    document.querySelector('.keyH').append(spanEngDownH);
    document.querySelector('.keyH').append(spanEngUpH);
    document.querySelector('.keyH').append(spanEngCapsH);
    document.querySelector('.keyH').append(spanEngShiftH);

    document.querySelector('.keyH').append(spanRuDownH);
    document.querySelector('.keyH').append(spanRuUpH);
    document.querySelector('.keyH').append(spanRuCapsH);
    document.querySelector('.keyH').append(spanRuShiftH);
        
// JJJJJJJJJJ
let keyJ = document.createElement('div');
keyJ.className = 'key keyJ';
    let spanEngDownJ = document.createElement('span');
    spanEngDownJ.className = 'J_eng_down eng';
    spanEngDownJ.innerHTML = 'j';
    let spanEngUpJ = document.createElement('span');
    spanEngUpJ.className = 'J_eng_up eng_up';
    spanEngUpJ.innerHTML = 'J';
    let spanEngCapsJ = document.createElement('span');
    spanEngCapsJ.className = 'J_eng_caps eng_caps';
    spanEngCapsJ.innerHTML = 'J';
    let spanEngShiftJ = document.createElement('span');
    spanEngShiftJ.className = 'J_eng_shiftCaps eng_caps_shift';
    spanEngShiftJ.innerHTML = 'j';

    let spanRuDownJ = document.createElement('span');
    spanRuDownJ.className = 'J_ru_down ru';
    spanRuDownJ.innerHTML = 'о';
    let spanRuUpJ = document.createElement('span');
    spanRuUpJ.className = 'J_ru_up ru_up';
    spanRuUpJ.innerHTML = 'О';
    let spanRuCapsJ = document.createElement('span');
    spanRuCapsJ.className = 'J_ru_caps ru_caps';
    spanRuCapsJ.innerHTML = 'О';
    let spanRuShiftJ = document.createElement('span');
    spanRuShiftJ.className = 'J_ru_shiftCaps ru_caps_shift';
    spanRuShiftJ.innerHTML = 'о';


document.querySelector('.keyRows3').append(keyJ);
    document.querySelector('.keyJ').append(spanEngDownJ);
    document.querySelector('.keyJ').append(spanEngUpJ);
    document.querySelector('.keyJ').append(spanEngCapsJ);
    document.querySelector('.keyJ').append(spanEngShiftJ);

    document.querySelector('.keyJ').append(spanRuDownJ);
    document.querySelector('.keyJ').append(spanRuUpJ);
    document.querySelector('.keyJ').append(spanRuCapsJ);
    document.querySelector('.keyJ').append(spanRuShiftJ);
            
// KKKKKKKKKK
let keyK = document.createElement('div');
keyK.className = 'key keyK';
    let spanEngDownK = document.createElement('span');
    spanEngDownK.className = 'K_eng_down eng';
    spanEngDownK.innerHTML = 'k';
    let spanEngUpK = document.createElement('span');
    spanEngUpK.className = 'K_eng_up eng_up';
    spanEngUpK.innerHTML = 'K';
    let spanEngCapsK = document.createElement('span');
    spanEngCapsK.className = 'K_eng_caps eng_caps';
    spanEngCapsK.innerHTML = 'K';
    let spanEngShiftK = document.createElement('span');
    spanEngShiftK.className = 'K_eng_shiftCaps eng_caps_shift';
    spanEngShiftK.innerHTML = 'k';

    let spanRuDownK = document.createElement('span');
    spanRuDownK.className = 'K_ru_down ru';
    spanRuDownK.innerHTML = 'л';
    let spanRuUpK = document.createElement('span');
    spanRuUpK.className = 'K_ru_up ru_up';
    spanRuUpK.innerHTML = 'Л';
    let spanRuCapsK = document.createElement('span');
    spanRuCapsK.className = 'K_ru_caps ru_caps';
    spanRuCapsK.innerHTML = 'Л';
    let spanRuShiftK = document.createElement('span');
    spanRuShiftK.className = 'K_ru_shiftCaps ru_caps_shift';
    spanRuShiftK.innerHTML = 'л';


document.querySelector('.keyRows3').append(keyK);
    document.querySelector('.keyK').append(spanEngDownK);
    document.querySelector('.keyK').append(spanEngUpK);
    document.querySelector('.keyK').append(spanEngCapsK);
    document.querySelector('.keyK').append(spanEngShiftK);

    document.querySelector('.keyK').append(spanRuDownK);
    document.querySelector('.keyK').append(spanRuUpK);
    document.querySelector('.keyK').append(spanRuCapsK);
    document.querySelector('.keyK').append(spanRuShiftK);
            
// LLLLLLLLLL
let keyL = document.createElement('div');
keyL.className = 'key keyL';
    let spanEngDownL = document.createElement('span');
    spanEngDownL.className = 'L_eng_down eng';
    spanEngDownL.innerHTML = 'l';
    let spanEngUpL = document.createElement('span');
    spanEngUpL.className = 'L_eng_up eng_up';
    spanEngUpL.innerHTML = 'L';
    let spanEngCapsL = document.createElement('span');
    spanEngCapsL.className = 'L_eng_caps eng_caps';
    spanEngCapsL.innerHTML = 'L';
    let spanEngShiftL = document.createElement('span');
    spanEngShiftL.className = 'L_eng_shiftCaps eng_caps_shift';
    spanEngShiftL.innerHTML = 'l';

    let spanRuDownL = document.createElement('span');
    spanRuDownL.className = 'L_ru_down ru';
    spanRuDownL.innerHTML = 'д';
    let spanRuUpL = document.createElement('span');
    spanRuUpL.className = 'L_ru_up ru_up';
    spanRuUpL.innerHTML = 'Д';
    let spanRuCapsL = document.createElement('span');
    spanRuCapsL.className = 'L_ru_caps ru_caps';
    spanRuCapsL.innerHTML = 'Д';
    let spanRuShiftL = document.createElement('span');
    spanRuShiftL.className = 'L_ru_shiftCaps ru_caps_shift';
    spanRuShiftL.innerHTML = 'д';


document.querySelector('.keyRows3').append(keyL);
    document.querySelector('.keyL').append(spanEngDownL);
    document.querySelector('.keyL').append(spanEngUpL);
    document.querySelector('.keyL').append(spanEngCapsL);
    document.querySelector('.keyL').append(spanEngShiftL);

    document.querySelector('.keyL').append(spanRuDownL);
    document.querySelector('.keyL').append(spanRuUpL);
    document.querySelector('.keyL').append(spanRuCapsL);
    document.querySelector('.keyL').append(spanRuShiftL);
    
   

     // SemikolonSemikolonSemikolon\
let keySemikolon = document.createElement('div');
keySemikolon.className = 'key keySemikolon';
    let spanEngDownSemikolon = document.createElement('span');
    spanEngDownSemikolon.className = 'Semikolon_eng_down eng';
    spanEngDownSemikolon.innerHTML = ';';
    let spanEngUpSemikolon = document.createElement('span');
    spanEngUpSemikolon.className = 'Semikolon_eng_up eng_up';
    spanEngUpSemikolon.innerHTML = ':';
    let spanEngCapsSemikolon = document.createElement('span');
    spanEngCapsSemikolon.className = 'Semikolon_eng_caps eng_caps';
    spanEngCapsSemikolon.innerHTML = ';';
    let spanEngShiftSemikolon = document.createElement('span');
    spanEngShiftSemikolon.className = 'Semikolon_eng_shiftCaps eng_caps_shift';
    spanEngShiftSemikolon.innerHTML = ':';

    let spanRuDownSemikolon = document.createElement('span');
    spanRuDownSemikolon.className = 'Semikolon_ru_down ru';
    spanRuDownSemikolon.innerHTML = 'ж';
    let spanRuUpSemikolon = document.createElement('span');
    spanRuUpSemikolon.className = 'Semikolon_ru_up ru_up';
    spanRuUpSemikolon.innerHTML = 'Ж';
    let spanRuCapsSemikolon = document.createElement('span');
    spanRuCapsSemikolon.className = 'Semikolon_ru_caps ru_caps';
    spanRuCapsSemikolon.innerHTML = 'Ж';
    let spanRuShiftSemikolon = document.createElement('span');
    spanRuShiftSemikolon.className = 'Semikolon_ru_shiftCaps ru_caps_shift';
    spanRuShiftSemikolon.innerHTML = 'ж';


document.querySelector('.keyRows3').append(keySemikolon);
    document.querySelector('.keySemikolon').append(spanEngDownSemikolon);
    document.querySelector('.keySemikolon').append(spanEngUpSemikolon);
    document.querySelector('.keySemikolon').append(spanEngCapsSemikolon);
    document.querySelector('.keySemikolon').append(spanEngShiftSemikolon);

    document.querySelector('.keySemikolon').append(spanRuDownSemikolon);
    document.querySelector('.keySemikolon').append(spanRuUpSemikolon);
    document.querySelector('.keySemikolon').append(spanRuCapsSemikolon);
    document.querySelector('.keySemikolon').append(spanRuShiftSemikolon);



 // Quote
 let keyQuote = document.createElement('div');
 keyQuote.className = 'key keyQuote';
     let spanEngDownQuote = document.createElement('span');
     spanEngDownQuote.className = 'Quote_eng_down eng';
     spanEngDownQuote.innerHTML = String.fromCharCode(39);
     let spanEngUpQuote = document.createElement('span');
     spanEngUpQuote.className = 'Quote_eng_up eng_up';
     spanEngUpQuote.innerHTML = String.fromCharCode(34);
     let spanEngCapsQuote = document.createElement('span');
     spanEngCapsQuote.className = 'Quote_eng_caps eng_caps';
     spanEngCapsQuote.innerHTML = String.fromCharCode(39);
     let spanEngShiftQuote = document.createElement('span');
     spanEngShiftQuote.className = 'Quote_eng_shiftCaps eng_caps_shift';
     spanEngShiftQuote.innerHTML = String.fromCharCode(34);
 
     let spanRuDownQuote = document.createElement('span');
     spanRuDownQuote.className = 'Quote_ru_down ru';
     spanRuDownQuote.innerHTML = 'э';
     let spanRuUpQuote = document.createElement('span');
     spanRuUpQuote.className = 'Quote_ru_up ru_up';
     spanRuUpQuote.innerHTML = 'Э';
     let spanRuCapsQuote = document.createElement('span');
     spanRuCapsQuote.className = 'Quote_ru_caps ru_caps';
     spanRuCapsQuote.innerHTML = 'Э';
     let spanRuShiftQuote = document.createElement('span');
     spanRuShiftQuote.className = 'Quote_ru_shiftCaps ru_caps_shift';
     spanRuShiftQuote.innerHTML = 'э';
 
 
 document.querySelector('.keyRows3').append(keyQuote);
     document.querySelector('.keyQuote').append(spanEngDownQuote);
     document.querySelector('.keyQuote').append(spanEngUpQuote);
     document.querySelector('.keyQuote').append(spanEngCapsQuote);
     document.querySelector('.keyQuote').append(spanEngShiftQuote);
 
     document.querySelector('.keyQuote').append(spanRuDownQuote);
     document.querySelector('.keyQuote').append(spanRuUpQuote);
     document.querySelector('.keyQuote').append(spanRuCapsQuote);
     document.querySelector('.keyQuote').append(spanRuShiftQuote);

     
 // Enter
 let keyEnter = document.createElement('div');
 keyEnter.className = 'key keyEnter';
     let spanEngDownEnter = document.createElement('span');
     spanEngDownEnter.className = 'Enter_eng_down eng';
     spanEngDownEnter.innerHTML = 'Enter';
     let spanEngUpEnter = document.createElement('span');
     spanEngUpEnter.className = 'Enter_eng_up eng_up';
     spanEngUpEnter.innerHTML = 'Enter';
     let spanEngCapsEnter = document.createElement('span');
     spanEngCapsEnter.className = 'Enter_eng_caps eng_caps';
     spanEngCapsEnter.innerHTML = 'Enter';
     let spanEngShiftEnter = document.createElement('span');
     spanEngShiftEnter.className = 'Enter_eng_shiftCaps eng_caps_shift';
     spanEngShiftEnter.innerHTML = 'Enter';
 
     let spanRuDownEnter = document.createElement('span');
     spanRuDownEnter.className = 'Enter_ru_down ru';
     spanRuDownEnter.innerHTML = 'Enter';
     let spanRuUpEnter = document.createElement('span');
     spanRuUpEnter.className = 'Enter_ru_up ru_up';
     spanRuUpEnter.innerHTML = 'Enter';
     let spanRuCapsEnter = document.createElement('span');
     spanRuCapsEnter.className = 'Enter_ru_caps ru_caps';
     spanRuCapsEnter.innerHTML = 'Enter';
     let spanRuShiftEnter = document.createElement('span');
     spanRuShiftEnter.className = 'Enter_ru_shiftCaps ru_caps_shift';
     spanRuShiftEnter.innerHTML = 'Enter';
 
 
 document.querySelector('.keyRows3').append(keyEnter);
     document.querySelector('.keyEnter').append(spanEngDownEnter);
     document.querySelector('.keyEnter').append(spanEngUpEnter);
     document.querySelector('.keyEnter').append(spanEngCapsEnter);
     document.querySelector('.keyEnter').append(spanEngShiftEnter);
 
     document.querySelector('.keyEnter').append(spanRuDownEnter);
     document.querySelector('.keyEnter').append(spanRuUpEnter);
     document.querySelector('.keyEnter').append(spanRuCapsEnter);
     document.querySelector('.keyEnter').append(spanRuShiftEnter);


    
      // Shift
let keyShift = document.createElement('div');
keyShift.className = 'key keyShift';
    let spanEngDownShift = document.createElement('span');
    spanEngDownShift.className = 'Shift_eng_down eng';
    spanEngDownShift.innerHTML = 'Shift';
    let spanEngUpShift = document.createElement('span');
    spanEngUpShift.className = 'Shift_eng_up eng_up';
    spanEngUpShift.innerHTML = 'Shift';
    let spanEngCapsShift = document.createElement('span');
    spanEngCapsShift.className = 'Shift_eng_caps eng_caps';
    spanEngCapsShift.innerHTML = 'Shift';
    let spanEngShiftShift = document.createElement('span');
    spanEngShiftShift.className = 'Shift_eng_shiftCaps eng_caps_shift';
    spanEngShiftShift.innerHTML = 'Shift';

    let spanRuDownShift = document.createElement('span');
    spanRuDownShift.className = 'Shift_ru_down ru';
    spanRuDownShift.innerHTML = 'Shift';
    let spanRuUpShift = document.createElement('span');
    spanRuUpShift.className = 'Shift_ru_up ru_up';
    spanRuUpShift.innerHTML = 'Shift';
    let spanRuCapsShift = document.createElement('span');
    spanRuCapsShift.className = 'Shift_ru_caps ru_caps';
    spanRuCapsShift.innerHTML = 'Shift';
    let spanRuShiftShift = document.createElement('span');
    spanRuShiftShift.className = 'Shift_ru_shiftCaps ru_caps_shift';
    spanRuShiftShift.innerHTML = 'Shift';


document.querySelector('.keyRows4').append(keyShift);
    document.querySelector('.keyShift').append(spanEngDownShift);
    document.querySelector('.keyShift').append(spanEngUpShift);
    document.querySelector('.keyShift').append(spanEngCapsShift);
    document.querySelector('.keyShift').append(spanEngShiftShift);

    document.querySelector('.keyShift').append(spanRuDownShift);
    document.querySelector('.keyShift').append(spanRuUpShift);
    document.querySelector('.keyShift').append(spanRuCapsShift);
    document.querySelector('.keyShift').append(spanRuShiftShift);

    
      // ZZZZZZZZZZZZ
let keyZ = document.createElement('div');
keyZ.className = 'key keyZ';
    let spanEngDownZ = document.createElement('span');
    spanEngDownZ.className = 'Z_eng_down eng';
    spanEngDownZ.innerHTML = 'z';
    let spanEngUpZ = document.createElement('span');
    spanEngUpZ.className = 'Z_eng_up eng_up';
    spanEngUpZ.innerHTML = 'Z';
    let spanEngCapsZ = document.createElement('span');
    spanEngCapsZ.className = 'Z_eng_caps eng_caps';
    spanEngCapsZ.innerHTML = 'Z';
    let spanEngShiftZ = document.createElement('span');
    spanEngShiftZ.className = 'Z_eng_shiftCaps eng_caps_shift';
    spanEngShiftZ.innerHTML = 'z';

    let spanRuDownZ = document.createElement('span');
    spanRuDownZ.className = 'Z_ru_down ru';
    spanRuDownZ.innerHTML = 'я';
    let spanRuUpZ = document.createElement('span');
    spanRuUpZ.className = 'Z_ru_up ru_up';
    spanRuUpZ.innerHTML = 'Я';
    let spanRuCapsZ = document.createElement('span');
    spanRuCapsZ.className = 'Z_ru_caps ru_caps';
    spanRuCapsZ.innerHTML = 'Я';
    let spanRuShiftZ = document.createElement('span');
    spanRuShiftZ.className = 'Z_ru_shiftCaps ru_caps_shift';
    spanRuShiftZ.innerHTML = 'я';


document.querySelector('.keyRows4').append(keyZ);
    document.querySelector('.keyZ').append(spanEngDownZ);
    document.querySelector('.keyZ').append(spanEngUpZ);
    document.querySelector('.keyZ').append(spanEngCapsZ);
    document.querySelector('.keyZ').append(spanEngShiftZ);

    document.querySelector('.keyZ').append(spanRuDownZ);
    document.querySelector('.keyZ').append(spanRuUpZ);
    document.querySelector('.keyZ').append(spanRuCapsZ);
    document.querySelector('.keyZ').append(spanRuShiftZ);

     // XXXXXXXXXXXX
let keyX = document.createElement('div');
keyX.className = 'key keyX';
    let spanEngDownX = document.createElement('span');
    spanEngDownX.className = 'X_eng_down eng';
    spanEngDownX.innerHTML = 'x';
    let spanEngUpX = document.createElement('span');
    spanEngUpX.className = 'X_eng_up eng_up';
    spanEngUpX.innerHTML = 'X';
    let spanEngCapsX = document.createElement('span');
    spanEngCapsX.className = 'X_eng_caps eng_caps';
    spanEngCapsX.innerHTML = 'X';
    let spanEngShiftX = document.createElement('span');
    spanEngShiftX.className = 'X_eng_shiftCaps eng_caps_shift';
    spanEngShiftX.innerHTML = 'x';

    let spanRuDownX = document.createElement('span');
    spanRuDownX.className = 'X_ru_down ru';
    spanRuDownX.innerHTML = 'ч';
    let spanRuUpX = document.createElement('span');
    spanRuUpX.className = 'X_ru_up ru_up';
    spanRuUpX.innerHTML = 'Ч';
    let spanRuCapsX = document.createElement('span');
    spanRuCapsX.className = 'X_ru_caps ru_caps';
    spanRuCapsX.innerHTML = 'Ч';
    let spanRuShiftX = document.createElement('span');
    spanRuShiftX.className = 'X_ru_shiftCaps ru_caps_shift';
    spanRuShiftX.innerHTML = 'ч';


document.querySelector('.keyRows4').append(keyX);
    document.querySelector('.keyX').append(spanEngDownX);
    document.querySelector('.keyX').append(spanEngUpX);
    document.querySelector('.keyX').append(spanEngCapsX);
    document.querySelector('.keyX').append(spanEngShiftX);

    document.querySelector('.keyX').append(spanRuDownX);
    document.querySelector('.keyX').append(spanRuUpX);
    document.querySelector('.keyX').append(spanRuCapsX);
    document.querySelector('.keyX').append(spanRuShiftX);

// CCCCCCCCCCCC
let keyC = document.createElement('div');
keyC.className = 'key keyC';
    let spanEngDownC = document.createElement('span');
    spanEngDownC.className = 'C_eng_down eng';
    spanEngDownC.innerHTML = 'c';
    let spanEngUpC = document.createElement('span');
    spanEngUpC.className = 'C_eng_up eng_up';
    spanEngUpC.innerHTML = 'C';
    let spanEngCapsC = document.createElement('span');
    spanEngCapsC.className = 'C_eng_caps eng_caps';
    spanEngCapsC.innerHTML = 'C';
    let spanEngShiftC = document.createElement('span');
    spanEngShiftC.className = 'C_eng_shiftCaps eng_caps_shift';
    spanEngShiftC.innerHTML = 'c';

    let spanRuDownC = document.createElement('span');
    spanRuDownC.className = 'C_ru_down ru';
    spanRuDownC.innerHTML = 'с';
    let spanRuUpC = document.createElement('span');
    spanRuUpC.className = 'C_ru_up ru_up';
    spanRuUpC.innerHTML = 'С';
    let spanRuCapsC = document.createElement('span');
    spanRuCapsC.className = 'C_ru_caps ru_caps';
    spanRuCapsC.innerHTML = 'С';
    let spanRuShiftC = document.createElement('span');
    spanRuShiftC.className = 'C_ru_shiftCaps ru_caps_shift';
    spanRuShiftC.innerHTML = 'с';


document.querySelector('.keyRows4').append(keyC);
    document.querySelector('.keyC').append(spanEngDownC);
    document.querySelector('.keyC').append(spanEngUpC);
    document.querySelector('.keyC').append(spanEngCapsC);
    document.querySelector('.keyC').append(spanEngShiftC);

    document.querySelector('.keyC').append(spanRuDownC);
    document.querySelector('.keyC').append(spanRuUpC);
    document.querySelector('.keyC').append(spanRuCapsC);
    document.querySelector('.keyC').append(spanRuShiftC);

    // VVVVVVVVVVVV
let keyV = document.createElement('div');
keyV.className = 'key keyV';
    let spanEngDownV = document.createElement('span');
    spanEngDownV.className = 'V_eng_down eng';
    spanEngDownV.innerHTML = 'v';
    let spanEngUpV = document.createElement('span');
    spanEngUpV.className = 'V_eng_up eng_up';
    spanEngUpV.innerHTML = 'V';
    let spanEngCapsV = document.createElement('span');
    spanEngCapsV.className = 'V_eng_caps eng_caps';
    spanEngCapsV.innerHTML = 'V';
    let spanEngShiftV = document.createElement('span');
    spanEngShiftV.className = 'V_eng_shiftCaps eng_caps_shift';
    spanEngShiftV.innerHTML = 'v';

    let spanRuDownV = document.createElement('span');
    spanRuDownV.className = 'V_ru_down ru';
    spanRuDownV.innerHTML = 'м';
    let spanRuUpV = document.createElement('span');
    spanRuUpV.className = 'V_ru_up ru_up';
    spanRuUpV.innerHTML = 'М';
    let spanRuCapsV = document.createElement('span');
    spanRuCapsV.className = 'V_ru_caps ru_caps';
    spanRuCapsV.innerHTML = 'М';
    let spanRuShiftV = document.createElement('span');
    spanRuShiftV.className = 'V_ru_shiftCaps ru_caps_shift';
    spanRuShiftV.innerHTML = 'м';


document.querySelector('.keyRows4').append(keyV);
    document.querySelector('.keyV').append(spanEngDownV);
    document.querySelector('.keyV').append(spanEngUpV);
    document.querySelector('.keyV').append(spanEngCapsV);
    document.querySelector('.keyV').append(spanEngShiftV);

    document.querySelector('.keyV').append(spanRuDownV);
    document.querySelector('.keyV').append(spanRuUpV);
    document.querySelector('.keyV').append(spanRuCapsV);
    document.querySelector('.keyV').append(spanRuShiftV);

    // BBBBBBBBBBBB
let keyB = document.createElement('div');
keyB.className = 'key keyB';
    let spanEngDownB = document.createElement('span');
    spanEngDownB.className = 'B_eng_down eng';
    spanEngDownB.innerHTML = 'b';
    let spanEngUpB = document.createElement('span');
    spanEngUpB.className = 'B_eng_up eng_up';
    spanEngUpB.innerHTML = 'B';
    let spanEngCapsB = document.createElement('span');
    spanEngCapsB.className = 'B_eng_caps eng_caps';
    spanEngCapsB.innerHTML = 'B';
    let spanEngShiftB = document.createElement('span');
    spanEngShiftB.className = 'B_eng_shiftCaps eng_caps_shift';
    spanEngShiftB.innerHTML = 'b';

    let spanRuDownB = document.createElement('span');
    spanRuDownB.className = 'B_ru_down ru';
    spanRuDownB.innerHTML = 'и';
    let spanRuUpB = document.createElement('span');
    spanRuUpB.className = 'B_ru_up ru_up';
    spanRuUpB.innerHTML = 'И';
    let spanRuCapsB = document.createElement('span');
    spanRuCapsB.className = 'B_ru_caps ru_caps';
    spanRuCapsB.innerHTML = 'И';
    let spanRuShiftB = document.createElement('span');
    spanRuShiftB.className = 'B_ru_shiftCaps ru_caps_shift';
    spanRuShiftB.innerHTML = 'и';


document.querySelector('.keyRows4').append(keyB);
    document.querySelector('.keyB').append(spanEngDownB);
    document.querySelector('.keyB').append(spanEngUpB);
    document.querySelector('.keyB').append(spanEngCapsB);
    document.querySelector('.keyB').append(spanEngShiftB);

    document.querySelector('.keyB').append(spanRuDownB);
    document.querySelector('.keyB').append(spanRuUpB);
    document.querySelector('.keyB').append(spanRuCapsB);
    document.querySelector('.keyB').append(spanRuShiftB);

    // NNNNNNNNNNNN
let keyN = document.createElement('div');
keyN.className = 'key keyN';
    let spanEngDownN = document.createElement('span');
    spanEngDownN.className = 'N_eng_down eng';
    spanEngDownN.innerHTML = 'n';
    let spanEngUpN = document.createElement('span');
    spanEngUpN.className = 'N_eng_up eng_up';
    spanEngUpN.innerHTML = 'N';
    let spanEngCapsN = document.createElement('span');
    spanEngCapsN.className = 'N_eng_caps eng_caps';
    spanEngCapsN.innerHTML = 'N';
    let spanEngShiftN = document.createElement('span');
    spanEngShiftN.className = 'N_eng_shiftCaps eng_caps_shift';
    spanEngShiftN.innerHTML = 'n';

    let spanRuDownN = document.createElement('span');
    spanRuDownN.className = 'N_ru_down ru';
    spanRuDownN.innerHTML = 'т';
    let spanRuUpN = document.createElement('span');
    spanRuUpN.className = 'N_ru_up ru_up';
    spanRuUpN.innerHTML = 'Т';
    let spanRuCapsN = document.createElement('span');
    spanRuCapsN.className = 'N_ru_caps ru_caps';
    spanRuCapsN.innerHTML = 'Т';
    let spanRuShiftN = document.createElement('span');
    spanRuShiftN.className = 'N_ru_shiftCaps ru_caps_shift';
    spanRuShiftN.innerHTML = 'т';


document.querySelector('.keyRows4').append(keyN);
    document.querySelector('.keyN').append(spanEngDownN);
    document.querySelector('.keyN').append(spanEngUpN);
    document.querySelector('.keyN').append(spanEngCapsN);
    document.querySelector('.keyN').append(spanEngShiftN);

    document.querySelector('.keyN').append(spanRuDownN);
    document.querySelector('.keyN').append(spanRuUpN);
    document.querySelector('.keyN').append(spanRuCapsN);
    document.querySelector('.keyN').append(spanRuShiftN);

     // MMMMMMMMMMMM
let keyM = document.createElement('div');
keyM.className = 'key keyM';
    let spanEngDownM = document.createElement('span');
    spanEngDownM.className = 'M_eng_down eng';
    spanEngDownM.innerHTML = 'm';
    let spanEngUpM = document.createElement('span');
    spanEngUpM.className = 'M_eng_up eng_up';
    spanEngUpM.innerHTML = 'M';
    let spanEngCapsM = document.createElement('span');
    spanEngCapsM.className = 'M_eng_caps eng_caps';
    spanEngCapsM.innerHTML = 'M';
    let spanEngShiftM = document.createElement('span');
    spanEngShiftM.className = 'M_eng_shiftCaps eng_caps_shift';
    spanEngShiftM.innerHTML = 'm';

    let spanRuDownM = document.createElement('span');
    spanRuDownM.className = 'M_ru_down ru';
    spanRuDownM.innerHTML = 'ь';
    let spanRuUpM = document.createElement('span');
    spanRuUpM.className = 'M_ru_up ru_up';
    spanRuUpM.innerHTML = 'Ь';
    let spanRuCapsM = document.createElement('span');
    spanRuCapsM.className = 'M_ru_caps ru_caps';
    spanRuCapsM.innerHTML = 'Ь';
    let spanRuShiftM = document.createElement('span');
    spanRuShiftM.className = 'M_ru_shiftCaps ru_caps_shift';
    spanRuShiftM.innerHTML = 'ь';


document.querySelector('.keyRows4').append(keyM);
    document.querySelector('.keyM').append(spanEngDownM);
    document.querySelector('.keyM').append(spanEngUpM);
    document.querySelector('.keyM').append(spanEngCapsM);
    document.querySelector('.keyM').append(spanEngShiftM);

    document.querySelector('.keyM').append(spanRuDownM);
    document.querySelector('.keyM').append(spanRuUpM);
    document.querySelector('.keyM').append(spanRuCapsM);
    document.querySelector('.keyM').append(spanRuShiftM);

     // CommaCommaComma
let keyComma = document.createElement('div');
keyComma.className = 'key keyComma';
    let spanEngDownComma = document.createElement('span');
    spanEngDownComma.className = 'Comma_eng_down eng';
    spanEngDownComma.innerHTML = ',';
    let spanEngUpComma = document.createElement('span');
    spanEngUpComma.className = 'Comma_eng_up eng_up';
    spanEngUpComma.innerHTML = '<';
    let spanEngCapsComma = document.createElement('span');
    spanEngCapsComma.className = 'Comma_eng_caps eng_caps';
    spanEngCapsComma.innerHTML = ',';
    let spanEngShiftComma = document.createElement('span');
    spanEngShiftComma.className = 'Comma_eng_shiftCaps eng_caps_shift';
    spanEngShiftComma.innerHTML = '<';

    let spanRuDownComma = document.createElement('span');
    spanRuDownComma.className = 'Comma_ru_down ru';
    spanRuDownComma.innerHTML = 'б';
    let spanRuUpComma = document.createElement('span');
    spanRuUpComma.className = 'Comma_ru_up ru_up';
    spanRuUpComma.innerHTML = 'Б';
    let spanRuCapsComma = document.createElement('span');
    spanRuCapsComma.className = 'Comma_ru_caps ru_caps';
    spanRuCapsComma.innerHTML = 'Б';
    let spanRuShiftComma = document.createElement('span');
    spanRuShiftComma.className = 'Comma_ru_shiftCaps ru_caps_shift';
    spanRuShiftComma.innerHTML = 'б';


document.querySelector('.keyRows4').append(keyComma);
    document.querySelector('.keyComma').append(spanEngDownComma);
    document.querySelector('.keyComma').append(spanEngUpComma);
    document.querySelector('.keyComma').append(spanEngCapsComma);
    document.querySelector('.keyComma').append(spanEngShiftComma);

    document.querySelector('.keyComma').append(spanRuDownComma);
    document.querySelector('.keyComma').append(spanRuUpComma);
    document.querySelector('.keyComma').append(spanRuCapsComma);
    document.querySelector('.keyComma').append(spanRuShiftComma);

      // PeriodPeriodPeriod
let keyPeriod = document.createElement('div');
keyPeriod.className = 'key keyPeriod';
    let spanEngDownPeriod = document.createElement('span');
    spanEngDownPeriod.className = 'Period_eng_down eng';
    spanEngDownPeriod.innerHTML = '.';
    let spanEngUpPeriod = document.createElement('span');
    spanEngUpPeriod.className = 'Period_eng_up eng_up';
    spanEngUpPeriod.innerHTML = '>';
    let spanEngCapsPeriod = document.createElement('span');
    spanEngCapsPeriod.className = 'Period_eng_caps eng_caps';
    spanEngCapsPeriod.innerHTML = '.';
    let spanEngShiftPeriod = document.createElement('span');
    spanEngShiftPeriod.className = 'Period_eng_shiftCaps eng_caps_shift';
    spanEngShiftPeriod.innerHTML = '>';

    let spanRuDownPeriod = document.createElement('span');
    spanRuDownPeriod.className = 'Period_ru_down ru';
    spanRuDownPeriod.innerHTML = 'ю';
    let spanRuUpPeriod = document.createElement('span');
    spanRuUpPeriod.className = 'Period_ru_up ru_up';
    spanRuUpPeriod.innerHTML = 'Ю';
    let spanRuCapsPeriod = document.createElement('span');
    spanRuCapsPeriod.className = 'Period_ru_caps ru_caps';
    spanRuCapsPeriod.innerHTML = 'Ю';
    let spanRuShiftPeriod = document.createElement('span');
    spanRuShiftPeriod.className = 'Period_ru_shiftCaps ru_caps_shift';
    spanRuShiftPeriod.innerHTML = 'ю';


document.querySelector('.keyRows4').append(keyPeriod);
    document.querySelector('.keyPeriod').append(spanEngDownPeriod);
    document.querySelector('.keyPeriod').append(spanEngUpPeriod);
    document.querySelector('.keyPeriod').append(spanEngCapsPeriod);
    document.querySelector('.keyPeriod').append(spanEngShiftPeriod);

    document.querySelector('.keyPeriod').append(spanRuDownPeriod);
    document.querySelector('.keyPeriod').append(spanRuUpPeriod);
    document.querySelector('.keyPeriod').append(spanRuCapsPeriod);
    document.querySelector('.keyPeriod').append(spanRuShiftPeriod);

     // SlachSlachSlach
let keySlach = document.createElement('div');
keySlach.className = 'key keySlach';
    let spanEngDownSlach = document.createElement('span');
    spanEngDownSlach.className = 'Slach_eng_down eng';
    spanEngDownSlach.innerHTML = String.fromCharCode(47);
    let spanEngUpSlach = document.createElement('span');
    spanEngUpSlach.className = 'Slach_eng_up eng_up';
    spanEngUpSlach.innerHTML = '?';
    let spanEngCapsSlach = document.createElement('span');
    spanEngCapsSlach.className = 'Slach_eng_caps eng_caps';
    spanEngCapsSlach.innerHTML = String.fromCharCode(47);
    let spanEngShiftSlach = document.createElement('span');
    spanEngShiftSlach.className = 'Slach_eng_shiftCaps eng_caps_shift';
    spanEngShiftSlach.innerHTML = '?';

    let spanRuDownSlach = document.createElement('span');
    spanRuDownSlach.className = 'Slach_ru_down ru';
    spanRuDownSlach.innerHTML = '.';
    let spanRuUpSlach = document.createElement('span');
    spanRuUpSlach.className = 'Slach_ru_up ru_up';
    spanRuUpSlach.innerHTML = ',';
    let spanRuCapsSlach = document.createElement('span');
    spanRuCapsSlach.className = 'Slach_ru_caps ru_caps';
    spanRuCapsSlach.innerHTML = '.';
    let spanRuShiftSlach = document.createElement('span');
    spanRuShiftSlach.className = 'Slach_ru_shiftCaps ru_caps_shift';
    spanRuShiftSlach.innerHTML = ',';


document.querySelector('.keyRows4').append(keySlach);
    document.querySelector('.keySlach').append(spanEngDownSlach);
    document.querySelector('.keySlach').append(spanEngUpSlach);
    document.querySelector('.keySlach').append(spanEngCapsSlach);
    document.querySelector('.keySlach').append(spanEngShiftSlach);

    document.querySelector('.keySlach').append(spanRuDownSlach);
    document.querySelector('.keySlach').append(spanRuUpSlach);
    document.querySelector('.keySlach').append(spanRuCapsSlach);
    document.querySelector('.keySlach').append(spanRuShiftSlach);

  // Up
  let keyUp = document.createElement('div');
  keyUp.className = 'key keyUp';
      let spanEngDownUp = document.createElement('span');
      spanEngDownUp.className = 'UpR_eng_down eng';
      spanEngDownUp.innerHTML = '▲';
      let spanEngUpUp = document.createElement('span');
      spanEngUpUp.className = 'Up_eng_up eng_up';
      spanEngUpUp.innerHTML = '▲';
      let spanEngCapsUp = document.createElement('span');
      spanEngCapsUp.className = 'Up_eng_caps eng_caps';
      spanEngCapsUp.innerHTML = '▲';
      let spanEngShiftUp = document.createElement('span');
      spanEngShiftUp.className = 'Up_eng_shiftCaps eng_caps_shift';
      spanEngShiftUp.innerHTML = '▲';
  
      let spanRuDownUp = document.createElement('span');
      spanRuDownUp.className = 'Up_ru_down ru';
      spanRuDownUp.innerHTML = '▲';
      let spanRuUpUp = document.createElement('span');
      spanRuUpUp.className = 'Up_ru_up ru_up';
      spanRuUpUp.innerHTML = '▲';
      let spanRuCapsUp = document.createElement('span');
      spanRuCapsUp.className = 'Up_ru_caps ru_caps';
      spanRuCapsUp.innerHTML = '▲';
      let spanRuShiftUp = document.createElement('span');
      spanRuShiftUp.className = 'Up_ru_shiftCaps ru_caps_shift';
      spanRuShiftUp.innerHTML = '▲';
  
  
  document.querySelector('.keyRows4').append(keyUp);
      document.querySelector('.keyUp').append(spanEngDownUp);
      document.querySelector('.keyUp').append(spanEngUpUp);
      document.querySelector('.keyUp').append(spanEngCapsUp);
      document.querySelector('.keyUp').append(spanEngShiftUp);
  
      document.querySelector('.keyUp').append(spanRuDownUp);
      document.querySelector('.keyUp').append(spanRuUpUp);
      document.querySelector('.keyUp').append(spanRuCapsUp);
      document.querySelector('.keyUp').append(spanRuShiftUp);

      

      // ShiftR
let keyShiftR = document.createElement('div');
keyShiftR.className = 'key keyShiftR';
    let spanEngDownShiftR = document.createElement('span');
    spanEngDownShiftR.className = 'ShiftRR_eng_down eng';
    spanEngDownShiftR.innerHTML = 'Shift';
    let spanEngUpShiftR = document.createElement('span');
    spanEngUpShiftR.className = 'ShiftR_eng_up eng_up';
    spanEngUpShiftR.innerHTML = 'Shift';
    let spanEngCapsShiftR = document.createElement('span');
    spanEngCapsShiftR.className = 'ShiftR_eng_caps eng_caps';
    spanEngCapsShiftR.innerHTML = 'Shift';
    let spanEngShiftShiftR = document.createElement('span');
    spanEngShiftShiftR.className = 'ShiftR_eng_shiftCaps eng_caps_shift';
    spanEngShiftShiftR.innerHTML = 'Shift';

    let spanRuDownShiftR = document.createElement('span');
    spanRuDownShiftR.className = 'ShiftR_ru_down ru';
    spanRuDownShiftR.innerHTML = 'Shift';
    let spanRuUpShiftR = document.createElement('span');
    spanRuUpShiftR.className = 'ShiftR_ru_up ru_up';
    spanRuUpShiftR.innerHTML = 'Shift';
    let spanRuCapsShiftR = document.createElement('span');
    spanRuCapsShiftR.className = 'ShiftR_ru_caps ru_caps';
    spanRuCapsShiftR.innerHTML = 'Shift';
    let spanRuShiftShiftR = document.createElement('span');
    spanRuShiftShiftR.className = 'ShiftR_ru_shiftCaps ru_caps_shift';
    spanRuShiftShiftR.innerHTML = 'Shift';


document.querySelector('.keyRows4').append(keyShiftR);
    document.querySelector('.keyShiftR').append(spanEngDownShiftR);
    document.querySelector('.keyShiftR').append(spanEngUpShiftR);
    document.querySelector('.keyShiftR').append(spanEngCapsShiftR);
    document.querySelector('.keyShiftR').append(spanEngShiftShiftR);

    document.querySelector('.keyShiftR').append(spanRuDownShiftR);
    document.querySelector('.keyShiftR').append(spanRuUpShiftR);
    document.querySelector('.keyShiftR').append(spanRuCapsShiftR);
    document.querySelector('.keyShiftR').append(spanRuShiftShiftR);

     // Ctrl
let keyCtrl = document.createElement('div');
keyCtrl.className = 'key keyCtrl';
    let spanEngDownCtrl = document.createElement('span');
    spanEngDownCtrl.className = 'Ctrl_eng_down eng';
    spanEngDownCtrl.innerHTML = 'Ctrl';
    let spanEngUpCtrl = document.createElement('span');
    spanEngUpCtrl.className = 'Ctrl_eng_up eng_up';
    spanEngUpCtrl.innerHTML = 'Ctrl';
    let spanEngCapsCtrl = document.createElement('span');
    spanEngCapsCtrl.className = 'Ctrl_eng_caps eng_caps';
    spanEngCapsCtrl.innerHTML = 'Ctrl';
    let spanEngShiftCtrl = document.createElement('span');
    spanEngShiftCtrl.className = 'Ctrl_eng_shiftCaps eng_caps_shift';
    spanEngShiftCtrl.innerHTML = 'Ctrl';

    let spanRuDownCtrl = document.createElement('span');
    spanRuDownCtrl.className = 'Ctrl_ru_down ru';
    spanRuDownCtrl.innerHTML = 'Ctrl';
    let spanRuUpCtrl = document.createElement('span');
    spanRuUpCtrl.className = 'Ctrl_ru_up ru_up';
    spanRuUpCtrl.innerHTML = 'Ctrl';
    let spanRuCapsCtrl = document.createElement('span');
    spanRuCapsCtrl.className = 'Ctrl_ru_caps ru_caps';
    spanRuCapsCtrl.innerHTML = 'Ctrl';
    let spanRuShiftCtrl = document.createElement('span');
    spanRuShiftCtrl.className = 'Ctrl_ru_shiftCaps ru_caps_shift';
    spanRuShiftCtrl.innerHTML = 'Ctrl';


document.querySelector('.keyRows5').append(keyCtrl);
    document.querySelector('.keyCtrl').append(spanEngDownCtrl);
    document.querySelector('.keyCtrl').append(spanEngUpCtrl);
    document.querySelector('.keyCtrl').append(spanEngCapsCtrl);
    document.querySelector('.keyCtrl').append(spanEngShiftCtrl);

    document.querySelector('.keyCtrl').append(spanRuDownCtrl);
    document.querySelector('.keyCtrl').append(spanRuUpCtrl);
    document.querySelector('.keyCtrl').append(spanRuCapsCtrl);
    document.querySelector('.keyCtrl').append(spanRuShiftCtrl);

     // Win
let keyWin = document.createElement('div');
keyWin.className = 'key keyWin';
    let spanEngDownWin = document.createElement('span');
    spanEngDownWin.className = 'WinR_eng_down eng';
    spanEngDownWin.innerHTML = 'Win';
    let spanEngUpWin = document.createElement('span');
    spanEngUpWin.className = 'Win_eng_up eng_up';
    spanEngUpWin.innerHTML = 'Win';
    let spanEngCapsWin = document.createElement('span');
    spanEngCapsWin.className = 'Win_eng_caps eng_caps';
    spanEngCapsWin.innerHTML = 'Win';
    let spanEngShiftWin = document.createElement('span');
    spanEngShiftWin.className = 'Win_eng_shiftCaps eng_caps_shift';
    spanEngShiftWin.innerHTML = 'Win';

    let spanRuDownWin = document.createElement('span');
    spanRuDownWin.className = 'Win_ru_down ru';
    spanRuDownWin.innerHTML = 'Win';
    let spanRuUpWin = document.createElement('span');
    spanRuUpWin.className = 'Win_ru_up ru_up';
    spanRuUpWin.innerHTML = 'Win';
    let spanRuCapsWin = document.createElement('span');
    spanRuCapsWin.className = 'Win_ru_caps ru_caps';
    spanRuCapsWin.innerHTML = 'Win';
    let spanRuShiftWin = document.createElement('span');
    spanRuShiftWin.className = 'Win_ru_shiftCaps ru_caps_shift';
    spanRuShiftWin.innerHTML = 'Win';


document.querySelector('.keyRows5').append(keyWin);
    document.querySelector('.keyWin').append(spanEngDownWin);
    document.querySelector('.keyWin').append(spanEngUpWin);
    document.querySelector('.keyWin').append(spanEngCapsWin);
    document.querySelector('.keyWin').append(spanEngShiftWin);

    document.querySelector('.keyWin').append(spanRuDownWin);
    document.querySelector('.keyWin').append(spanRuUpWin);
    document.querySelector('.keyWin').append(spanRuCapsWin);
    document.querySelector('.keyWin').append(spanRuShiftWin);

      // Alt
let keyAlt = document.createElement('div');
keyAlt.className = 'key keyAlt';
    let spanEngDownAlt = document.createElement('span');
    spanEngDownAlt.className = 'AltR_eng_down eng';
    spanEngDownAlt.innerHTML = 'Alt';
    let spanEngUpAlt = document.createElement('span');
    spanEngUpAlt.className = 'Alt_eng_up eng_up';
    spanEngUpAlt.innerHTML = 'Alt';
    let spanEngCapsAlt = document.createElement('span');
    spanEngCapsAlt.className = 'Alt_eng_caps eng_caps';
    spanEngCapsAlt.innerHTML = 'Alt';
    let spanEngShiftAlt = document.createElement('span');
    spanEngShiftAlt.className = 'Alt_eng_shiftCaps eng_caps_shift';
    spanEngShiftAlt.innerHTML = 'Alt';

    let spanRuDownAlt = document.createElement('span');
    spanRuDownAlt.className = 'Alt_ru_down ru';
    spanRuDownAlt.innerHTML = 'Alt';
    let spanRuUpAlt = document.createElement('span');
    spanRuUpAlt.className = 'Alt_ru_up ru_up';
    spanRuUpAlt.innerHTML = 'Alt';
    let spanRuCapsAlt = document.createElement('span');
    spanRuCapsAlt.className = 'Alt_ru_caps ru_caps';
    spanRuCapsAlt.innerHTML = 'Alt';
    let spanRuShiftAlt = document.createElement('span');
    spanRuShiftAlt.className = 'Alt_ru_shiftCaps ru_caps_shift';
    spanRuShiftAlt.innerHTML = 'Alt';


document.querySelector('.keyRows5').append(keyAlt);
    document.querySelector('.keyAlt').append(spanEngDownAlt);
    document.querySelector('.keyAlt').append(spanEngUpAlt);
    document.querySelector('.keyAlt').append(spanEngCapsAlt);
    document.querySelector('.keyAlt').append(spanEngShiftAlt);

    document.querySelector('.keyAlt').append(spanRuDownAlt);
    document.querySelector('.keyAlt').append(spanRuUpAlt);
    document.querySelector('.keyAlt').append(spanRuCapsAlt);
    document.querySelector('.keyAlt').append(spanRuShiftAlt);

      // Space
let keySpace = document.createElement('div');
keySpace.className = 'key keySpace';
    let spanEngDownSpace = document.createElement('span');
    spanEngDownSpace.className = 'SpaceR_eng_down eng';
    spanEngDownSpace.innerHTML = 'Space';
    let spanEngUpSpace = document.createElement('span');
    spanEngUpSpace.className = 'Space_eng_up eng_up';
    spanEngUpSpace.innerHTML = 'Space';
    let spanEngCapsSpace = document.createElement('span');
    spanEngCapsSpace.className = 'Space_eng_caps eng_caps';
    spanEngCapsSpace.innerHTML = 'Space';
    let spanEngShiftSpace = document.createElement('span');
    spanEngShiftSpace.className = 'Space_eng_shiftCaps eng_caps_shift';
    spanEngShiftSpace.innerHTML = 'Space';

    let spanRuDownSpace = document.createElement('span');
    spanRuDownSpace.className = 'Space_ru_down ru';
    spanRuDownSpace.innerHTML = 'Space';
    let spanRuUpSpace = document.createElement('span');
    spanRuUpSpace.className = 'Space_ru_up ru_up';
    spanRuUpSpace.innerHTML = 'Space';
    let spanRuCapsSpace = document.createElement('span');
    spanRuCapsSpace.className = 'Space_ru_caps ru_caps';
    spanRuCapsSpace.innerHTML = 'Space';
    let spanRuShiftSpace = document.createElement('span');
    spanRuShiftSpace.className = 'Space_ru_shiftCaps ru_caps_shift';
    spanRuShiftSpace.innerHTML = 'Space';


document.querySelector('.keyRows5').append(keySpace);
    document.querySelector('.keySpace').append(spanEngDownSpace);
    document.querySelector('.keySpace').append(spanEngUpSpace);
    document.querySelector('.keySpace').append(spanEngCapsSpace);
    document.querySelector('.keySpace').append(spanEngShiftSpace);

    document.querySelector('.keySpace').append(spanRuDownSpace);
    document.querySelector('.keySpace').append(spanRuUpSpace);
    document.querySelector('.keySpace').append(spanRuCapsSpace);
    document.querySelector('.keySpace').append(spanRuShiftSpace);

     // AltR
let keyAltR = document.createElement('div');
keyAltR.className = 'key keyAltR';
    let spanEngDownAltR = document.createElement('span');
    spanEngDownAltR.className = 'AltRR_eng_down eng';
    spanEngDownAltR.innerHTML = 'Alt';
    let spanEngUpAltR = document.createElement('span');
    spanEngUpAltR.className = 'AltR_eng_up eng_up';
    spanEngUpAltR.innerHTML = 'Alt';
    let spanEngCapsAltR = document.createElement('span');
    spanEngCapsAltR.className = 'AltR_eng_caps eng_caps';
    spanEngCapsAltR.innerHTML = 'Alt';
    let spanEngShiftAltR = document.createElement('span');
    spanEngShiftAltR.className = 'AltR_eng_shiftCaps eng_caps_shift';
    spanEngShiftAltR.innerHTML = 'Alt';

    let spanRuDownAltR = document.createElement('span');
    spanRuDownAltR.className = 'AltR_ru_down ru';
    spanRuDownAltR.innerHTML = 'Alt';
    let spanRuUpAltR = document.createElement('span');
    spanRuUpAltR.className = 'AltR_ru_up ru_up';
    spanRuUpAltR.innerHTML = 'Alt';
    let spanRuCapsAltR = document.createElement('span');
    spanRuCapsAltR.className = 'AltR_ru_caps ru_caps';
    spanRuCapsAltR.innerHTML = 'Alt';
    let spanRuShiftAltR = document.createElement('span');
    spanRuShiftAltR.className = 'AltR_ru_shiftCaps ru_caps_shift';
    spanRuShiftAltR.innerHTML = 'Alt';


document.querySelector('.keyRows5').append(keyAltR);
    document.querySelector('.keyAltR').append(spanEngDownAltR);
    document.querySelector('.keyAltR').append(spanEngUpAltR);
    document.querySelector('.keyAltR').append(spanEngCapsAltR);
    document.querySelector('.keyAltR').append(spanEngShiftAltR);

    document.querySelector('.keyAltR').append(spanRuDownAltR);
    document.querySelector('.keyAltR').append(spanRuUpAltR);
    document.querySelector('.keyAltR').append(spanRuCapsAltR);
    document.querySelector('.keyAltR').append(spanRuShiftAltR);


      // Left
let keyLeft = document.createElement('div');
keyLeft.className = 'key keyLeft';
    let spanEngDownLeft = document.createElement('span');
    spanEngDownLeft.className = 'LeftR_eng_down eng';
    spanEngDownLeft.innerHTML = '◄';
    let spanEngUpLeft = document.createElement('span');
    spanEngUpLeft.className = 'Left_eng_up eng_up';
    spanEngUpLeft.innerHTML = '◄';
    let spanEngCapsLeft = document.createElement('span');
    spanEngCapsLeft.className = 'Left_eng_caps eng_caps';
    spanEngCapsLeft.innerHTML = '◄';
    let spanEngShiftLeft = document.createElement('span');
    spanEngShiftLeft.className = 'Left_eng_shiftCaps eng_caps_shift';
    spanEngShiftLeft.innerHTML = '◄';

    let spanRuDownLeft = document.createElement('span');
    spanRuDownLeft.className = 'Left_ru_down ru';
    spanRuDownLeft.innerHTML = '◄';
    let spanRuUpLeft = document.createElement('span');
    spanRuUpLeft.className = 'Left_ru_up ru_up';
    spanRuUpLeft.innerHTML = '◄';
    let spanRuCapsLeft = document.createElement('span');
    spanRuCapsLeft.className = 'Left_ru_caps ru_caps';
    spanRuCapsLeft.innerHTML = '◄';
    let spanRuShiftLeft = document.createElement('span');
    spanRuShiftLeft.className = 'Left_ru_shiftCaps ru_caps_shift';
    spanRuShiftLeft.innerHTML = '◄';


document.querySelector('.keyRows5').append(keyLeft);
    document.querySelector('.keyLeft').append(spanEngDownLeft);
    document.querySelector('.keyLeft').append(spanEngUpLeft);
    document.querySelector('.keyLeft').append(spanEngCapsLeft);
    document.querySelector('.keyLeft').append(spanEngShiftLeft);

    document.querySelector('.keyLeft').append(spanRuDownLeft);
    document.querySelector('.keyLeft').append(spanRuUpLeft);
    document.querySelector('.keyLeft').append(spanRuCapsLeft);
    document.querySelector('.keyLeft').append(spanRuShiftLeft);


     // Dovn
let keyDovn = document.createElement('div');
keyDovn.className = 'key keyDovn';
    let spanEngDownDovn = document.createElement('span');
    spanEngDownDovn.className = 'DovnR_eng_down eng';
    spanEngDownDovn.innerHTML = '▼';
    let spanEngUpDovn = document.createElement('span');
    spanEngUpDovn.className = 'Dovn_eng_up eng_up';
    spanEngUpDovn.innerHTML = '▼';
    let spanEngCapsDovn = document.createElement('span');
    spanEngCapsDovn.className = 'Dovn_eng_caps eng_caps';
    spanEngCapsDovn.innerHTML = '▼';
    let spanEngShiftDovn = document.createElement('span');
    spanEngShiftDovn.className = 'Dovn_eng_shiftCaps eng_caps_shift';
    spanEngShiftDovn.innerHTML = '▼';

    let spanRuDownDovn = document.createElement('span');
    spanRuDownDovn.className = 'Dovn_ru_down ru';
    spanRuDownDovn.innerHTML = '▼';
    let spanRuUpDovn = document.createElement('span');
    spanRuUpDovn.className = 'Dovn_ru_up ru_up';
    spanRuUpDovn.innerHTML = '▼';
    let spanRuCapsDovn = document.createElement('span');
    spanRuCapsDovn.className = 'Dovn_ru_caps ru_caps';
    spanRuCapsDovn.innerHTML = '▼';
    let spanRuShiftDovn = document.createElement('span');
    spanRuShiftDovn.className = 'Dovn_ru_shiftCaps ru_caps_shift';
    spanRuShiftDovn.innerHTML = '▼';


document.querySelector('.keyRows5').append(keyDovn);
    document.querySelector('.keyDovn').append(spanEngDownDovn);
    document.querySelector('.keyDovn').append(spanEngUpDovn);
    document.querySelector('.keyDovn').append(spanEngCapsDovn);
    document.querySelector('.keyDovn').append(spanEngShiftDovn);

    document.querySelector('.keyDovn').append(spanRuDownDovn);
    document.querySelector('.keyDovn').append(spanRuUpDovn);
    document.querySelector('.keyDovn').append(spanRuCapsDovn);
    document.querySelector('.keyDovn').append(spanRuShiftDovn);

      // Recht
let keyRecht = document.createElement('div');
keyRecht.className = 'key keyRecht';
    let spanEngDownRecht = document.createElement('span');
    spanEngDownRecht.className = 'RechtR_eng_down eng';
    spanEngDownRecht.innerHTML = '►';
    let spanEngUpRecht = document.createElement('span');
    spanEngUpRecht.className = 'Recht_eng_up eng_up';
    spanEngUpRecht.innerHTML = '►';
    let spanEngCapsRecht = document.createElement('span');
    spanEngCapsRecht.className = 'Recht_eng_caps eng_caps';
    spanEngCapsRecht.innerHTML = '►';
    let spanEngShiftRecht = document.createElement('span');
    spanEngShiftRecht.className = 'Recht_eng_shiftCaps eng_caps_shift';
    spanEngShiftRecht.innerHTML = '►';

    let spanRuDownRecht = document.createElement('span');
    spanRuDownRecht.className = 'Recht_ru_down ru';
    spanRuDownRecht.innerHTML = '►';
    let spanRuUpRecht = document.createElement('span');
    spanRuUpRecht.className = 'Recht_ru_up ru_up';
    spanRuUpRecht.innerHTML = '►';
    let spanRuCapsRecht = document.createElement('span');
    spanRuCapsRecht.className = 'Recht_ru_caps ru_caps';
    spanRuCapsRecht.innerHTML = '►';
    let spanRuShiftRecht = document.createElement('span');
    spanRuShiftRecht.className = 'Recht_ru_shiftCaps ru_caps_shift';
    spanRuShiftRecht.innerHTML = '►';


document.querySelector('.keyRows5').append(keyRecht);
    document.querySelector('.keyRecht').append(spanEngDownRecht);
    document.querySelector('.keyRecht').append(spanEngUpRecht);
    document.querySelector('.keyRecht').append(spanEngCapsRecht);
    document.querySelector('.keyRecht').append(spanEngShiftRecht);

    document.querySelector('.keyRecht').append(spanRuDownRecht);
    document.querySelector('.keyRecht').append(spanRuUpRecht);
    document.querySelector('.keyRecht').append(spanRuCapsRecht);
    document.querySelector('.keyRecht').append(spanRuShiftRecht);


     // CtrlR
let keyCtrlR = document.createElement('div');
keyCtrlR.className = 'key keyCtrlR';
    let spanEngDownCtrlR = document.createElement('span');
    spanEngDownCtrlR.className = 'CtrlR_eng_down eng';
    spanEngDownCtrlR.innerHTML = 'Ctrl';
    let spanEngUpCtrlR = document.createElement('span');
    spanEngUpCtrlR.className = 'CtrlR_eng_up eng_up';
    spanEngUpCtrlR.innerHTML = 'Ctrl';
    let spanEngCapsCtrlR = document.createElement('span');
    spanEngCapsCtrlR.className = 'CtrlR_eng_caps eng_caps';
    spanEngCapsCtrlR.innerHTML = 'Ctrl';
    let spanEngShiftCtrlR = document.createElement('span');
    spanEngShiftCtrlR.className = 'CtrlR_eng_shiftCaps eng_caps_shift';
    spanEngShiftCtrlR.innerHTML = 'Ctrl';

    let spanRuDownCtrlR = document.createElement('span');
    spanRuDownCtrlR.className = 'CtrlR_ru_down ru';
    spanRuDownCtrlR.innerHTML = 'Ctrl';
    let spanRuUpCtrlR = document.createElement('span');
    spanRuUpCtrlR.className = 'CtrlR_ru_up ru_up';
    spanRuUpCtrlR.innerHTML = 'Ctrl';
    let spanRuCapsCtrlR = document.createElement('span');
    spanRuCapsCtrlR.className = 'CtrlR_ru_caps ru_caps';
    spanRuCapsCtrlR.innerHTML = 'Ctrl';
    let spanRuShiftCtrlR = document.createElement('span');
    spanRuShiftCtrlR.className = 'CtrlR_ru_shiftCaps ru_caps_shift';
    spanRuShiftCtrlR.innerHTML = 'Ctrl';


document.querySelector('.keyRows5').append(keyCtrlR);
    document.querySelector('.keyCtrlR').append(spanEngDownCtrlR);
    document.querySelector('.keyCtrlR').append(spanEngUpCtrlR);
    document.querySelector('.keyCtrlR').append(spanEngCapsCtrlR);
    document.querySelector('.keyCtrlR').append(spanEngShiftCtrlR);

    document.querySelector('.keyCtrlR').append(spanRuDownCtrlR);
    document.querySelector('.keyCtrlR').append(spanRuUpCtrlR);
    document.querySelector('.keyCtrlR').append(spanRuCapsCtrlR);
    document.querySelector('.keyCtrlR').append(spanRuShiftCtrlR);



let ArrEng = document.querySelectorAll('.eng');
let ArrEngUp = document.querySelectorAll('.eng_up');
let ArrEngCaps = document.querySelectorAll('.eng_caps');
let ArrEngCapsShift = document.querySelectorAll('.eng_caps_shift');

let ArrRu = document.querySelectorAll('.ru');
let ArrRuUp = document.querySelectorAll('.ru_up');
let ArrRuCaps = document.querySelectorAll('.ru_caps');
let ArrRuCapsShift = document.querySelectorAll('.ru_caps_shift');


let lang = localStorage.getItem('a_saved') || 'eng';
let caps = 'nocaps';
if (lang === 'eng') {
for (let item of ArrEng) {
    item.classList.add('hidden')
}
} else {
    for (let item of ArrRu) {
        item.classList.add('hidden')
    }
}
document.querySelector('.keyWrap').addEventListener('selectstart', (event) => {
event.preventDefault();
});
//смена языка
document.addEventListener('keydown', (event => {
    if (event.code == 'ControlLeft') {
        if (event.getModifierState('Alt')) {
            if (lang === 'eng') {
                if (caps === 'nocaps') {
                    for (let item of ArrEng) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrRu) {
                        item.classList.add('hidden')
                    }
                } else {
                    for (let item of ArrEngCaps) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrRuCaps) {
                        item.classList.add('hidden')
                    }
                }
                lang = 'ru'
            } else {
                if (caps === 'nocaps') {
                    for (let item of ArrRu) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrEng) {
                        item.classList.add('hidden')
                    }
                } else {
                    for (let item of ArrRuCaps) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrEngCaps) {
                        item.classList.add('hidden')
                    }
                }
                lang = 'eng'
            }
    }}
    localStorage.setItem('a_saved', lang);
                }));

document.addEventListener('keydown', (event => {
    if (event.code == 'AltLeft') {
        if (event.getModifierState('Control')) {
            if (lang === 'eng') {
                if (caps === 'nocaps') {
                    for (let item of ArrEng) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrRu) {
                        item.classList.add('hidden')
                    }
                } else {
                    for (let item of ArrEngCaps) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrRuCaps) {
                        item.classList.add('hidden')
                    }
                }
                lang = 'ru'
            } else {
                if (caps === 'nocaps') {
                    for (let item of ArrRu) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrEng) {
                        item.classList.add('hidden')
                    }
                } else {
                    for (let item of ArrRuCaps) {
                        item.classList.remove('hidden')
                    }
                    for (let item of ArrEngCaps) {
                        item.classList.add('hidden')
                    }
                }
                lang = 'eng'
            }
    }}
    localStorage.setItem('a_saved', lang);
                }));
document.addEventListener('keydown', event => {
    if (event.code === 'CapsLock') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            for (let item of ArrEng) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEngCaps) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.add('klickkey');
            caps = 'caps';
        } else {
            for (let item of ArrEngCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEng) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.remove('klickkey');
            caps = 'nocaps';
        }
    } else {
        if (caps === 'nocaps') {
            for (let item of ArrRu) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRuCaps) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.add('klickkey');
            caps = 'caps'
        } else {
            for (let item of ArrRuCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRu) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.remove('klickkey');
            caps ='nocaps'
        }
    }
}
}
);


//Shift
document.addEventListener('keydown', event => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            for (let item of ArrEng) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEngUp) {
                item.classList.add('hidden')
            }
        } else {
            for (let item of ArrEngCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEngCapsShift) {
                item.classList.add('hidden')
            }
        }
    } else {
        if (caps === 'nocaps') {
            for (let item of ArrRu) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRuUp) {
                item.classList.add('hidden')
            }
        } else {
            for (let item of ArrRuCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRuCapsShift) {
                item.classList.add('hidden')
            }
        }
    }
}
}
);
document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
        if (lang === 'eng') {
            if (caps === 'nocaps') {
                for (let item of ArrEngUp) {
                    item.classList.remove('hidden')
                }
                for (let item of ArrEng) {
                    item.classList.add('hidden')
                }
            } else {
                for (let item of ArrEngCapsShift) {
                    item.classList.remove('hidden')
                }
                for (let item of ArrEngCaps) {
                    item.classList.add('hidden')
                }
            }
        } else {
            if (caps === 'nocaps') {
                for (let item of ArrRuUp) {
                    item.classList.remove('hidden')
                }
                for (let item of ArrRu) {
                    item.classList.add('hidden')
                }
            } else {
                for (let item of ArrRuCapsShift) {
                    item.classList.remove('hidden')
                }
                for (let item of ArrRuCaps) {
                    item.classList.add('hidden')
                }
            }
        }
}
}
)

//печатать
document.addEventListener('keydown', (event)=>{
    event.preventDefault();
if (event.code === 'Backquote') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '~';
            } else {
                document.querySelector('.Inner').value += '`';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '~';
            } else {
                document.querySelector('.Inner').value += '`';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ё';
            } else {
                document.querySelector('.Inner').value += 'ё';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ё';
            } else {
                document.querySelector('.Inner').value += 'Ё';
            }
        }
    }
    document.querySelector('.keyBackquote').classList.add('klickkey');
}
if (event.code === 'Digit1') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        }
    }
    document.querySelector('.keyInner1').classList.add('klickkey');
}
if (event.code === 'Digit2') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '2';
            } else {
                document.querySelector('.Inner').value += '@';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '@';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '"';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '"';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        }
    }
    document.querySelector('.keyInner2').classList.add('klickkey');
}
if (event.code === 'Digit3') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '#';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '#';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '№';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '№';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        }
    }
    document.querySelector('.keyInner3').classList.add('klickkey');
}
if (event.code === 'Digit4') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '$';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '$';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ';';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ';';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        }
    }
    document.querySelector('.keyInner4').classList.add('klickkey');
}
if (event.code === 'Digit5') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        }
    }
    document.querySelector('.keyInner5').classList.add('klickkey');
}
if (event.code === 'Digit6') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '^';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '^';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        }
    }
    document.querySelector('.keyInner6').classList.add('klickkey');
}
if (event.code === 'Digit7') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '&';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '&';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        }
    }
    document.querySelector('.keyInner7').classList.add('klickkey');
}
if (event.code === 'Digit8') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        }
    }
    document.querySelector('.keyInner8').classList.add('klickkey');
}
if (event.code === 'Digit9') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        }
    }
    document.querySelector('.keyInner9').classList.add('klickkey');
}
if (event.code === 'Digit0') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        }
    }
    document.querySelector('.keyInner0').classList.add('klickkey');
}
if (event.code === 'Minus') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        }
    }
    document.querySelector('.keyInnerDefis').classList.add('klickkey');
}
if (event.code === 'Equal') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        }
    }
    document.querySelector('.keyInnerRavno').classList.add('klickkey');
}
if (event.code === 'Backspace') {
    document.querySelector('.Inner').value = 
    document.querySelector('.Inner').value.slice(0, document.querySelector('.Inner').value.length - 1);
                // document.querySelector('.Inner').value.splice(document.querySelector('.Inner').value.length - 1, 1);
          
    document.querySelector('.keyInnerBackspace').classList.add('klickkey');
}
if (event.code === 'Tab') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        }
    }
    document.querySelector('.keyTab').classList.add('klickkey');
}
if (event.code === 'KeyQ') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Q';
            } else {
                document.querySelector('.Inner').value += 'q';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'q';
            } else {
                document.querySelector('.Inner').value += 'Q';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Й';
            } else {
                document.querySelector('.Inner').value += 'й';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'й';
            } else {
                document.querySelector('.Inner').value += 'Й';
            }
        }
    }
    document.querySelector('.keyQ').classList.add('klickkey');
}
if (event.code === 'KeyW') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'W';
            } else {
                document.querySelector('.Inner').value += 'w';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'w';
            } else {
                document.querySelector('.Inner').value += 'W';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ц';
            } else {
                document.querySelector('.Inner').value += 'ц';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ц';
            } else {
                document.querySelector('.Inner').value += 'Ц';
            }
        }
    }
    document.querySelector('.keyW').classList.add('klickkey');
}
if (event.code === 'KeyE') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'E';
            } else {
                document.querySelector('.Inner').value += 'e';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'e';
            } else {
                document.querySelector('.Inner').value += 'E';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'У';
            } else {
                document.querySelector('.Inner').value += 'у';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'у';
            } else {
                document.querySelector('.Inner').value += 'У';
            }
        }
    }
    document.querySelector('.keyE').classList.add('klickkey');
}
if (event.code === 'KeyR') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'R';
            } else {
                document.querySelector('.Inner').value += 'r';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'r';
            } else {
                document.querySelector('.Inner').value += 'R';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'К';
            } else {
                document.querySelector('.Inner').value += 'к';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'к';
            } else {
                document.querySelector('.Inner').value += 'К';
            }
        }
    }
    document.querySelector('.keyR').classList.add('klickkey');
}
if (event.code === 'KeyT') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'T';
            } else {
                document.querySelector('.Inner').value += 't';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 't';
            } else {
                document.querySelector('.Inner').value += 'T';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Е';
            } else {
                document.querySelector('.Inner').value += 'е';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'е';
            } else {
                document.querySelector('.Inner').value += 'Е';
            }
        }
    }
    document.querySelector('.keyT').classList.add('klickkey');
}
if (event.code === 'KeyY') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Y';
            } else {
                document.querySelector('.Inner').value += 'y';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'y';
            } else {
                document.querySelector('.Inner').value += 'Y';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Н';
            } else {
                document.querySelector('.Inner').value += 'н';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'н';
            } else {
                document.querySelector('.Inner').value += 'н';
            }
        }
    }
    document.querySelector('.keyY').classList.add('klickkey');
}
if (event.code === 'KeyU') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'U';
            } else {
                document.querySelector('.Inner').value += 'u';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'u';
            } else {
                document.querySelector('.Inner').value += 'U';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Г';
            } else {
                document.querySelector('.Inner').value += 'г';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'г';
            } else {
                document.querySelector('.Inner').value += 'Г';
            }
        }
    }
    document.querySelector('.keyU').classList.add('klickkey');
}
if (event.code === 'KeyI') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'I';
            } else {
                document.querySelector('.Inner').value += 'i';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'i';
            } else {
                document.querySelector('.Inner').value += 'I';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ш';
            } else {
                document.querySelector('.Inner').value += 'ш';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ш';
            } else {
                document.querySelector('.Inner').value += 'Ш';
            }
        }
    }
    document.querySelector('.keyI').classList.add('klickkey');
}
if (event.code === 'KeyO') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'O';
            } else {
                document.querySelector('.Inner').value += 'o';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'o';
            } else {
                document.querySelector('.Inner').value += 'O';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Щ';
            } else {
                document.querySelector('.Inner').value += 'щ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'щ';
            } else {
                document.querySelector('.Inner').value += 'Щ';
            }
        }
    }
    document.querySelector('.keyO').classList.add('klickkey');
}
if (event.code === 'KeyP') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'P';
            } else {
                document.querySelector('.Inner').value += 'p';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'p';
            } else {
                document.querySelector('.Inner').value += 'P';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'З';
            } else {
                document.querySelector('.Inner').value += 'з';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'з';
            } else {
                document.querySelector('.Inner').value += 'З';
            }
        }
    }
    document.querySelector('.keyP').classList.add('klickkey');
}
if (event.code === 'BracketLeft') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '{';
            } else {
                document.querySelector('.Inner').value += '[';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '{';
            } else {
                document.querySelector('.Inner').value += '[';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Х';
            } else {
                document.querySelector('.Inner').value += 'х';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'х';
            } else {
                document.querySelector('.Inner').value += 'Х';
            }
        }
    }
    document.querySelector('.keyBracketLeft').classList.add('klickkey');
}
if (event.code === 'BracketRight') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '}';
            } else {
                document.querySelector('.Inner').value += ']';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '}';
            } else {
                document.querySelector('.Inner').value += ']';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ъ';
            } else {
                document.querySelector('.Inner').value += 'ъ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ъ';
            } else {
                document.querySelector('.Inner').value += 'Ъ';
            }
        }
    }
    document.querySelector('.keyBracketRight').classList.add('klickkey');
}
if (event.code === 'Backslash') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '|';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '|';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '/';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '/';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        }
    }
    document.querySelector('.keyBackslach').classList.add('klickkey');
}
if (event.code === 'Delete') {
    document.querySelector('.keyDel').classList.add('klickkey');
}
if (event.code === 'KeyA') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'A';
            } else {
                document.querySelector('.Inner').value += 'a';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'a';
            } else {
                document.querySelector('.Inner').value += 'A';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ф';
            } else {
                document.querySelector('.Inner').value += 'ф';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ф';
            } else {
                document.querySelector('.Inner').value += 'Ф';
            }
        }
    }
    document.querySelector('.keyA').classList.add('klickkey');
}
if (event.code === 'KeyS') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'S';
            } else {
                document.querySelector('.Inner').value += 's';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 's';
            } else {
                document.querySelector('.Inner').value += 'S';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ы';
            } else {
                document.querySelector('.Inner').value += 'ы';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ы';
            } else {
                document.querySelector('.Inner').value += 'Ы';
            }
        }
    }
    document.querySelector('.keyS').classList.add('klickkey');
}
if (event.code === 'KeyD') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'D';
            } else {
                document.querySelector('.Inner').value += 'd';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'd';
            } else {
                document.querySelector('.Inner').value += 'D';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'В';
            } else {
                document.querySelector('.Inner').value += 'в';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'в';
            } else {
                document.querySelector('.Inner').value += 'В';
            }
        }
    }
    document.querySelector('.keyD').classList.add('klickkey');
}
if (event.code === 'KeyF') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'F';
            } else {
                document.querySelector('.Inner').value += 'f';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'f';
            } else {
                document.querySelector('.Inner').value += 'F';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'А';
            } else {
                document.querySelector('.Inner').value += 'а';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'а';
            } else {
                document.querySelector('.Inner').value += 'А';
            }
        }
    }
    document.querySelector('.keyF').classList.add('klickkey');
}
if (event.code === 'KeyG') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'G';
            } else {
                document.querySelector('.Inner').value += 'g';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'g';
            } else {
                document.querySelector('.Inner').value += 'G';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'П';
            } else {
                document.querySelector('.Inner').value += 'п';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'п';
            } else {
                document.querySelector('.Inner').value += 'П';
            }
        }
    }
    document.querySelector('.keyG').classList.add('klickkey');
}
if (event.code === 'KeyH') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'H';
            } else {
                document.querySelector('.Inner').value += 'h';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'h';
            } else {
                document.querySelector('.Inner').value += 'H';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Р';
            } else {
                document.querySelector('.Inner').value += 'р';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'р';
            } else {
                document.querySelector('.Inner').value += 'Р';
            }
        }
    }
    document.querySelector('.keyH').classList.add('klickkey');
}
if (event.code === 'KeyJ') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'J';
            } else {
                document.querySelector('.Inner').value += 'j';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'j';
            } else {
                document.querySelector('.Inner').value += 'J';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'О';
            } else {
                document.querySelector('.Inner').value += 'о';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'о';
            } else {
                document.querySelector('.Inner').value += 'О';
            }
        }
    }
    document.querySelector('.keyJ').classList.add('klickkey');
}
if (event.code === 'KeyK') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'K';
            } else {
                document.querySelector('.Inner').value += 'k';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'k';
            } else {
                document.querySelector('.Inner').value += 'K';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Л';
            } else {
                document.querySelector('.Inner').value += 'л';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'л';
            } else {
                document.querySelector('.Inner').value += 'Л';
            }
        }
    }
    document.querySelector('.keyK').classList.add('klickkey');
}
if (event.code === 'KeyL') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'L';
            } else {
                document.querySelector('.Inner').value += 'l';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'l';
            } else {
                document.querySelector('.Inner').value += 'L';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Д';
            } else {
                document.querySelector('.Inner').value += 'д';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'д';
            } else {
                document.querySelector('.Inner').value += 'Д';
            }
        }
    }
    document.querySelector('.keyL').classList.add('klickkey');
}
if (event.code === 'Semicolon') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += ';';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += ';';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ж';
            } else {
                document.querySelector('.Inner').value += 'ж';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ж';
            } else {
                document.querySelector('.Inner').value += 'Ж';
            }
        }
    }
    document.querySelector('.keySemikolon').classList.add('klickkey');
}
if (event.code === 'Quote') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += String.fromCharCode(34);
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(39);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += String.fromCharCode(34);
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(39);
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Э';
            } else {
                document.querySelector('.Inner').value += 'э';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'э';
            } else {
                document.querySelector('.Inner').value += 'Э';
            }
        }
    }
    document.querySelector('.keyQuote').classList.add('klickkey');
}
if (event.code === 'Enter') {
    document.querySelector('.Inner').value += '\n';
    document.querySelector('.keyEnter').classList.add('klickkey');
}
if (event.code === 'ShiftLeft') {
    document.querySelector('.keyShift').classList.add('klickkey');
}
if (event.code === 'ShiftRight') {
    document.querySelector('.keyShiftR').classList.add('klickkey');
}
if (event.code === 'ControlLeft') {
    document.querySelector('.keyCtrl').classList.add('klickkey');
}
if (event.code === 'MetaLeft') {
    document.querySelector('.keyWin').classList.add('klickkey');
}
if (event.code === 'AltLeft') {
    document.querySelector('.keyAlt').classList.add('klickkey');
}
if (event.code === 'Space') {
    document.querySelector('.Inner').value += ' ';
    document.querySelector('.keySpace').classList.add('klickkey');
}
if (event.code === 'AltRight') {
    document.querySelector('.keyAltR').classList.add('klickkey');
}
if (event.code === 'ControlRight') {
    document.querySelector('.keyCtrlR').classList.add('klickkey');
}
if (event.code === 'KeyZ') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Z';
            } else {
                document.querySelector('.Inner').value += 'z';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'z';
            } else {
                document.querySelector('.Inner').value += 'Z';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Я';
            } else {
                document.querySelector('.Inner').value += 'я';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'я';
            } else {
                document.querySelector('.Inner').value += 'Я';
            }
        }
    }
    document.querySelector('.keyZ').classList.add('klickkey');
}
if (event.code === 'KeyX') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'X';
            } else {
                document.querySelector('.Inner').value += 'x';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'x';
            } else {
                document.querySelector('.Inner').value += 'X';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ч';
            } else {
                document.querySelector('.Inner').value += 'ч';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ч';
            } else {
                document.querySelector('.Inner').value += 'Ч';
            }
        }
    }
    document.querySelector('.keyX').classList.add('klickkey');
}
if (event.code === 'KeyC') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'C';
            } else {
                document.querySelector('.Inner').value += 'c';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'c';
            } else {
                document.querySelector('.Inner').value += 'C';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'С';
            } else {
                document.querySelector('.Inner').value += 'с';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'с';
            } else {
                document.querySelector('.Inner').value += 'С';
            }
        }
    }
    document.querySelector('.keyC').classList.add('klickkey');
}
if (event.code === 'KeyV') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'V';
            } else {
                document.querySelector('.Inner').value += 'v';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'v';
            } else {
                document.querySelector('.Inner').value += 'V';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'М';
            } else {
                document.querySelector('.Inner').value += 'м';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'м';
            } else {
                document.querySelector('.Inner').value += 'М';
            }
        }
    }
    document.querySelector('.keyV').classList.add('klickkey');
}
if (event.code === 'KeyB') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'B';
            } else {
                document.querySelector('.Inner').value += 'b';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'b';
            } else {
                document.querySelector('.Inner').value += 'B';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'И';
            } else {
                document.querySelector('.Inner').value += 'и';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'и';
            } else {
                document.querySelector('.Inner').value += 'И';
            }
        }
    }
    document.querySelector('.keyB').classList.add('klickkey');
}
if (event.code === 'KeyN') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'N';
            } else {
                document.querySelector('.Inner').value += 'n';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'n';
            } else {
                document.querySelector('.Inner').value += 'N';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Т';
            } else {
                document.querySelector('.Inner').value += 'т';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'т';
            } else {
                document.querySelector('.Inner').value += 'Т';
            }
        }
    }
    document.querySelector('.keyN').classList.add('klickkey');
}
if (event.code === 'KeyM') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'M';
            } else {
                document.querySelector('.Inner').value += 'm';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'm';
            } else {
                document.querySelector('.Inner').value += 'M';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ь';
            } else {
                document.querySelector('.Inner').value += 'ь';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ь';
            } else {
                document.querySelector('.Inner').value += 'Ь';
            }
        }
    }
    document.querySelector('.keyM').classList.add('klickkey');
}
if (event.code === 'Comma') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '<';
            } else {
                document.querySelector('.Inner').value += ',';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '<';
            } else {
                document.querySelector('.Inner').value += ',';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Б';
            } else {
                document.querySelector('.Inner').value += 'б';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'б';
            } else {
                document.querySelector('.Inner').value += 'Б';
            }
        }
    }
    document.querySelector('.keyComma').classList.add('klickkey');
}
if (event.code === 'Period') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '>';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '>';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ю';
            } else {
                document.querySelector('.Inner').value += 'ю';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ю';
            } else {
                document.querySelector('.Inner').value += 'Ю';
            }
        }
    }
    document.querySelector('.keyPeriod').classList.add('klickkey');
}
if (event.code === 'Slash') {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '/';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '/';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ',';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ',';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        }
    }
    document.querySelector('.keySlach').classList.add('klickkey');
}
if (event.code === 'ArrowLeft') {
    document.querySelector('.Inner').value += '◄';
    document.querySelector('.keyLeft').classList.add('klickkey');
}
if (event.code === 'ArrowUp') {
    document.querySelector('.Inner').value += '▲';
    document.querySelector('.keyUp').classList.add('klickkey');
}
if (event.code === 'ArrowDown') {
    document.querySelector('.Inner').value += '▼';
    document.querySelector('.keyDovn').classList.add('klickkey');
}
if (event.code === 'ArrowRight') {
    document.querySelector('.Inner').value += '►';
    document.querySelector('.keyRecht').classList.add('klickkey');
}
});
document.addEventListener('keyup', (event)=>{
if (event.code === 'Backquote') {
document.querySelector('.keyBackquote').classList.remove('klickkey');}
if (event.code === 'Digit1') {
document.querySelector('.keyInner1').classList.remove('klickkey');}
if (event.code === 'Digit2') {
document.querySelector('.keyInner2').classList.remove('klickkey');}
if (event.code === 'Digit3') {
document.querySelector('.keyInner3').classList.remove('klickkey');}
if (event.code === 'Digit4') {
document.querySelector('.keyInner4').classList.remove('klickkey');}
if (event.code === 'Digit5') {
document.querySelector('.keyInner5').classList.remove('klickkey');}
if (event.code === 'Digit6') {
document.querySelector('.keyInner6').classList.remove('klickkey');}
if (event.code === 'Digit7') {
document.querySelector('.keyInner7').classList.remove('klickkey');}
if (event.code === 'Digit8') {
document.querySelector('.keyInner8').classList.remove('klickkey');}
if (event.code === 'Digit9') {
document.querySelector('.keyInner9').classList.remove('klickkey');}
if (event.code === 'Digit0') {
document.querySelector('.keyInner0').classList.remove('klickkey');}
if (event.code === 'Minus') {
document.querySelector('.keyInnerDefis').classList.remove('klickkey');}
if (event.code === 'Equal') {
document.querySelector('.keyInnerRavno').classList.remove('klickkey');}
if (event.code === 'Backspace') {
document.querySelector('.keyInnerBackspace').classList.remove('klickkey');}
if (event.code === 'Tab') {
document.querySelector('.keyTab').classList.remove('klickkey');}
if (event.code === 'KeyQ') {
document.querySelector('.keyQ').classList.remove('klickkey');}
if (event.code === 'KeyW') {
document.querySelector('.keyW').classList.remove('klickkey');}
if (event.code === 'KeyE') {
document.querySelector('.keyE').classList.remove('klickkey');}
if (event.code === 'KeyR') {
document.querySelector('.keyR').classList.remove('klickkey');}
if (event.code === 'KeyT') {
document.querySelector('.keyT').classList.remove('klickkey');}
if (event.code === 'KeyY') {
document.querySelector('.keyY').classList.remove('klickkey');}
if (event.code === 'KeyU') {
document.querySelector('.keyU').classList.remove('klickkey');}
if (event.code === 'KeyI') {
document.querySelector('.keyI').classList.remove('klickkey');}
if (event.code === 'KeyO') {
document.querySelector('.keyO').classList.remove('klickkey');}
if (event.code === 'KeyP') {
document.querySelector('.keyP').classList.remove('klickkey');}
if (event.code === 'BracketLeft') {
document.querySelector('.keyBracketLeft').classList.remove('klickkey');}
if (event.code === 'BracketRight') {
document.querySelector('.keyBracketRight').classList.remove('klickkey');}
if (event.code === 'Backslash') {
document.querySelector('.keyBackslach').classList.remove('klickkey');}
if (event.code === 'Delete') {
document.querySelector('.keyDel').classList.remove('klickkey');}
if (event.code === 'KeyA') {
document.querySelector('.keyA').classList.remove('klickkey');}
if (event.code === 'KeyS') {
document.querySelector('.keyS').classList.remove('klickkey');}
if (event.code === 'KeyD') {
document.querySelector('.keyD').classList.remove('klickkey');}
if (event.code === 'KeyF') {
document.querySelector('.keyF').classList.remove('klickkey');}
if (event.code === 'KeyG') {
document.querySelector('.keyG').classList.remove('klickkey');}
if (event.code === 'KeyH') {
document.querySelector('.keyH').classList.remove('klickkey');}
if (event.code === 'KeyJ') {
document.querySelector('.keyJ').classList.remove('klickkey');}
if (event.code === 'KeyK') {
document.querySelector('.keyK').classList.remove('klickkey');}
if (event.code === 'KeyL') {
document.querySelector('.keyL').classList.remove('klickkey');}
if (event.code === 'Semicolon') {
document.querySelector('.keySemikolon').classList.remove('klickkey');}
if (event.code === 'Quote') {
document.querySelector('.keyQuote').classList.remove('klickkey');}
if (event.code === 'Enter') {
document.querySelector('.keyEnter').classList.remove('klickkey');}
if (event.code === 'ShiftLeft') {
document.querySelector('.keyShift').classList.remove('klickkey');}
if (event.code === 'KeyZ') {
document.querySelector('.keyZ').classList.remove('klickkey');}
if (event.code === 'KeyX') {
document.querySelector('.keyX').classList.remove('klickkey');}
if (event.code === 'KeyC') {
document.querySelector('.keyC').classList.remove('klickkey');}
if (event.code === 'KeyV') {
document.querySelector('.keyV').classList.remove('klickkey');}
if (event.code === 'KeyB') {
document.querySelector('.keyB').classList.remove('klickkey');}
if (event.code === 'KeyN') {
document.querySelector('.keyN').classList.remove('klickkey');}
if (event.code === 'KeyM') {
document.querySelector('.keyM').classList.remove('klickkey');}
if (event.code === 'Comma') {
document.querySelector('.keyComma').classList.remove('klickkey');}
if (event.code === 'Period') {
document.querySelector('.keyPeriod').classList.remove('klickkey');}
if (event.code === 'Slash') {
document.querySelector('.keySlach').classList.remove('klickkey');}
if (event.code === 'ShiftRight') {
document.querySelector('.keyShiftR').classList.remove('klickkey');}
if (event.code === 'ArrowUp') {
document.querySelector('.keyUp').classList.remove('klickkey');}
if (event.code === 'ArrowLeft') {
document.querySelector('.keyLeft').classList.remove('klickkey');}
if (event.code === 'ArrowDown') {
document.querySelector('.keyDovn').classList.remove('klickkey');}
if (event.code === 'ArrowRight') {
document.querySelector('.keyRecht').classList.remove('klickkey');}
if (event.code === 'ControlLeft') {
document.querySelector('.keyCtrl').classList.remove('klickkey');}
if (event.code === 'MetaLeft') {
document.querySelector('.keyWin').classList.remove('klickkey');}
if (event.code === 'AltLeft') {
document.querySelector('.keyAlt').classList.remove('klickkey');}
if (event.code === 'Space') {
document.querySelector('.keySpace').classList.remove('klickkey');}
if (event.code === 'AltRight') {
document.querySelector('.keyAltR').classList.remove('klickkey');}
if (event.code === 'ControlRight') {
document.querySelector('.keyCtrlR').classList.remove('klickkey');}
});

document.querySelector('.keyBackquote').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '~';
            } else {
                document.querySelector('.Inner').value += '`';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '~';
            } else {
                document.querySelector('.Inner').value += '`';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ё';
            } else {
                document.querySelector('.Inner').value += 'ё';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ё';
            } else {
                document.querySelector('.Inner').value += 'Ё';
            }
        }
    }
    document.querySelector('.keyBackquote').classList.add('klickkey');
});
document.querySelector('.keyInner1').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '!';
            } else {
                document.querySelector('.Inner').value += '1';
            }
        }
    }
    document.querySelector('.keyInner1').classList.add('klickkey');
});
document.querySelector('.keyInner2').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '@';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '@';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '"';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '"';
            } else {
                document.querySelector('.Inner').value += '2';
            }
        }
    }
    document.querySelector('.keyInner2').classList.add('klickkey');
});
document.querySelector('.keyInner3').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '#';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '#';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '№';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '№';
            } else {
                document.querySelector('.Inner').value += '3';
            }
        }
    }
    document.querySelector('.keyInner3').classList.add('klickkey');
});
document.querySelector('.keyInner4').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '$';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '$';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ';';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ';';
            } else {
                document.querySelector('.Inner').value += '4';
            }
        }
    }
    document.querySelector('.keyInner4').classList.add('klickkey');
});
document.querySelector('.keyInner5').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '%';
            } else {
                document.querySelector('.Inner').value += '5';
            }
        }
    }
    document.querySelector('.keyInner5').classList.add('klickkey');
});

document.querySelector('.keyInner6').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '^';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '^';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += '6';
            }
        }
    }
    document.querySelector('.keyInner6').classList.add('klickkey');
});

document.querySelector('.keyInner7').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '&';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '&';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '7';
            }
        }
    }
    document.querySelector('.keyInner7').classList.add('klickkey');
});
document.querySelector('.keyInner8').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '*';
            } else {
                document.querySelector('.Inner').value += '8';
            }
        }
    }
    document.querySelector('.keyInner8').classList.add('klickkey');
});
document.querySelector('.keyInner9').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '(';
            } else {
                document.querySelector('.Inner').value += '9';
            }
        }
    }
    document.querySelector('.keyInner9').classList.add('klickkey');
});
document.querySelector('.keyInner0').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ')';
            } else {
                document.querySelector('.Inner').value += '0';
            }
        }
    }
    document.querySelector('.keyInner0').classList.add('klickkey');
});
document.querySelector('.keyInnerDefis').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '_';
            } else {
                document.querySelector('.Inner').value += '-';
            }
        }
    }
    document.querySelector('.keyInnerDefis').classList.add('klickkey');
});
document.querySelector('.keyInnerRavno').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '+';
            } else {
                document.querySelector('.Inner').value += '=';
            }
        }
    }
    document.querySelector('.keyInnerRavno').classList.add('klickkey');
});
document.querySelector('.keyInnerBackspace').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value = 
    document.querySelector('.Inner').value.slice(0, document.querySelector('.Inner').value.length - 1);
    document.querySelector('.keyInnerBackspace').classList.add('klickkey');

});
document.querySelector('.keyTab').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '      ';
            } else {
                document.querySelector('.Inner').value += '      ';
            }
        }
    }
    document.querySelector('.keyTab').classList.add('klickkey');
});
document.querySelector('.keyQ').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Q';
            } else {
                document.querySelector('.Inner').value += 'q';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'q';
            } else {
                document.querySelector('.Inner').value += 'Q';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Й';
            } else {
                document.querySelector('.Inner').value += 'й';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'й';
            } else {
                document.querySelector('.Inner').value += 'Й';
            }
        }
    }
    document.querySelector('.keyQ').classList.add('klickkey');
});
document.querySelector('.keyW').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'W';
            } else {
                document.querySelector('.Inner').value += 'w';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'w';
            } else {
                document.querySelector('.Inner').value += 'W';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ц';
            } else {
                document.querySelector('.Inner').value += 'ц';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ц';
            } else {
                document.querySelector('.Inner').value += 'Ц';
            }
        }
    }
    document.querySelector('.keyW').classList.add('klickkey');
});
document.querySelector('.keyE').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'E';
            } else {
                document.querySelector('.Inner').value += 'e';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'e';
            } else {
                document.querySelector('.Inner').value += 'E';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'У';
            } else {
                document.querySelector('.Inner').value += 'у';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'у';
            } else {
                document.querySelector('.Inner').value += 'У';
            }
        }
    }
    document.querySelector('.keyE').classList.add('klickkey');
});
document.querySelector('.keyR').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'R';
            } else {
                document.querySelector('.Inner').value += 'r';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'r';
            } else {
                document.querySelector('.Inner').value += 'R';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'К';
            } else {
                document.querySelector('.Inner').value += 'к';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'к';
            } else {
                document.querySelector('.Inner').value += 'К';
            }
        }
    }
    document.querySelector('.keyR').classList.add('klickkey');
});
document.querySelector('.keyT').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'T';
            } else {
                document.querySelector('.Inner').value += 't';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 't';
            } else {
                document.querySelector('.Inner').value += 'T';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Е';
            } else {
                document.querySelector('.Inner').value += 'е';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'е';
            } else {
                document.querySelector('.Inner').value += 'Е';
            }
        }
    }
    document.querySelector('.keyT').classList.add('klickkey');
});
document.querySelector('.keyY').addEventListener('mousedown', (event) => { if (lang === 'eng') {
    if (caps === 'nocaps') {
        if (event.getModifierState('Shift')) {
            document.querySelector('.Inner').value += 'Y';
        } else {
            document.querySelector('.Inner').value += 'y';
        }
    } else {
        if (event.getModifierState('Shift')) {
            document.querySelector('.Inner').value += 'y';
        } else {
            document.querySelector('.Inner').value += 'Y';
        }
    }
} else {
    if (caps === 'nocaps') {
        if (event.getModifierState('Shift')) {
            document.querySelector('.Inner').value += 'Н';
        } else {
            document.querySelector('.Inner').value += 'н';
        }
    } else {
        if (event.getModifierState('Shift')) {
            document.querySelector('.Inner').value += 'н';
        } else {
            document.querySelector('.Inner').value += 'н';
        }
    }
}
document.querySelector('.keyY').classList.add('klickkey');
});
document.querySelector('.keyU').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'U';
            } else {
                document.querySelector('.Inner').value += 'u';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'u';
            } else {
                document.querySelector('.Inner').value += 'U';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Г';
            } else {
                document.querySelector('.Inner').value += 'г';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'г';
            } else {
                document.querySelector('.Inner').value += 'Г';
            }
        }
    }
    document.querySelector('.keyU').classList.add('klickkey');
});
document.querySelector('.keyI').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'I';
            } else {
                document.querySelector('.Inner').value += 'i';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'i';
            } else {
                document.querySelector('.Inner').value += 'I';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ш';
            } else {
                document.querySelector('.Inner').value += 'ш';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ш';
            } else {
                document.querySelector('.Inner').value += 'Ш';
            }
        }
    }
    document.querySelector('.keyI').classList.add('klickkey');
});
document.querySelector('.keyO').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'O';
            } else {
                document.querySelector('.Inner').value += 'o';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'o';
            } else {
                document.querySelector('.Inner').value += 'O';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Щ';
            } else {
                document.querySelector('.Inner').value += 'щ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'щ';
            } else {
                document.querySelector('.Inner').value += 'Щ';
            }
        }
    }
    document.querySelector('.keyO').classList.add('klickkey');
});
document.querySelector('.keyP').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'P';
            } else {
                document.querySelector('.Inner').value += 'p';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'p';
            } else {
                document.querySelector('.Inner').value += 'P';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'З';
            } else {
                document.querySelector('.Inner').value += 'з';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'з';
            } else {
                document.querySelector('.Inner').value += 'З';
            }
        }
    }
    document.querySelector('.keyP').classList.add('klickkey');
});
document.querySelector('.keyBracketLeft').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '{';
            } else {
                document.querySelector('.Inner').value += '[';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '{';
            } else {
                document.querySelector('.Inner').value += '[';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Х';
            } else {
                document.querySelector('.Inner').value += 'х';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'х';
            } else {
                document.querySelector('.Inner').value += 'Х';
            }
        }
    }
    document.querySelector('.keyBracketLeft').classList.add('klickkey');
});
document.querySelector('.keyBracketRight').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '}';
            } else {
                document.querySelector('.Inner').value += ']';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '}';
            } else {
                document.querySelector('.Inner').value += ']';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ъ';
            } else {
                document.querySelector('.Inner').value += 'ъ';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ъ';
            } else {
                document.querySelector('.Inner').value += 'Ъ';
            }
        }
    }
    document.querySelector('.keyBracketRight').classList.add('klickkey');
});
document.querySelector('.keyBackslach').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '|';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '|';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '/';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '/';
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(92);
            }
        }
    }
    document.querySelector('.keyBackslach').classList.add('klickkey');
});
document.querySelector('.keyDel').addEventListener('mousedown', () => {
    document.querySelector('.keyDel').classList.add('klickkey');
});
document.querySelector('.keyA').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'A';
            } else {
                document.querySelector('.Inner').value += 'a';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'a';
            } else {
                document.querySelector('.Inner').value += 'A';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ф';
            } else {
                document.querySelector('.Inner').value += 'ф';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ф';
            } else {
                document.querySelector('.Inner').value += 'Ф';
            }
        }
    }
    document.querySelector('.keyA').classList.add('klickkey');
});
document.querySelector('.keyS').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'S';
            } else {
                document.querySelector('.Inner').value += 's';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 's';
            } else {
                document.querySelector('.Inner').value += 'S';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ы';
            } else {
                document.querySelector('.Inner').value += 'ы';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ы';
            } else {
                document.querySelector('.Inner').value += 'Ы';
            }
        }
    }
    document.querySelector('.keyS').classList.add('klickkey');
});
document.querySelector('.keyD').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'D';
            } else {
                document.querySelector('.Inner').value += 'd';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'd';
            } else {
                document.querySelector('.Inner').value += 'D';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'В';
            } else {
                document.querySelector('.Inner').value += 'в';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'в';
            } else {
                document.querySelector('.Inner').value += 'В';
            }
        }
    }
    document.querySelector('.keyD').classList.add('klickkey');
});
document.querySelector('.keyF').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'F';
            } else {
                document.querySelector('.Inner').value += 'f';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'f';
            } else {
                document.querySelector('.Inner').value += 'F';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'А';
            } else {
                document.querySelector('.Inner').value += 'а';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'а';
            } else {
                document.querySelector('.Inner').value += 'А';
            }
        }
    }
    document.querySelector('.keyF').classList.add('klickkey');
});
document.querySelector('.keyG').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'G';
            } else {
                document.querySelector('.Inner').value += 'g';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'g';
            } else {
                document.querySelector('.Inner').value += 'G';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'П';
            } else {
                document.querySelector('.Inner').value += 'п';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'п';
            } else {
                document.querySelector('.Inner').value += 'П';
            }
        }
    }
    document.querySelector('.keyG').classList.add('klickkey');
});
document.querySelector('.keyH').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'H';
            } else {
                document.querySelector('.Inner').value += 'h';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'h';
            } else {
                document.querySelector('.Inner').value += 'H';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Р';
            } else {
                document.querySelector('.Inner').value += 'р';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'р';
            } else {
                document.querySelector('.Inner').value += 'Р';
            }
        }
    }
    document.querySelector('.keyH').classList.add('klickkey');
});
document.querySelector('.keyJ').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'J';
            } else {
                document.querySelector('.Inner').value += 'j';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'j';
            } else {
                document.querySelector('.Inner').value += 'J';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'О';
            } else {
                document.querySelector('.Inner').value += 'о';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'о';
            } else {
                document.querySelector('.Inner').value += 'О';
            }
        }
    }
    document.querySelector('.keyJ').classList.add('klickkey');
});
document.querySelector('.keyK').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'K';
            } else {
                document.querySelector('.Inner').value += 'k';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'k';
            } else {
                document.querySelector('.Inner').value += 'K';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Л';
            } else {
                document.querySelector('.Inner').value += 'л';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'л';
            } else {
                document.querySelector('.Inner').value += 'Л';
            }
        }
    }
    document.querySelector('.keyK').classList.add('klickkey');
});
document.querySelector('.keyL').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'L';
            } else {
                document.querySelector('.Inner').value += 'l';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'l';
            } else {
                document.querySelector('.Inner').value += 'L';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Д';
            } else {
                document.querySelector('.Inner').value += 'д';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'д';
            } else {
                document.querySelector('.Inner').value += 'Д';
            }
        }
    }
    document.querySelector('.keyL').classList.add('klickkey');
});
document.querySelector('.keySemikolon').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += ';';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ':';
            } else {
                document.querySelector('.Inner').value += ';';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ж';
            } else {
                document.querySelector('.Inner').value += 'ж';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ж';
            } else {
                document.querySelector('.Inner').value += 'Ж';
            }
        }
    }
    document.querySelector('.keySemikolon').classList.add('klickkey');
});
document.querySelector('.keyQuote').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += String.fromCharCode(34);
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(39);
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += String.fromCharCode(34);
            } else {
                document.querySelector('.Inner').value += String.fromCharCode(39);
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Э';
            } else {
                document.querySelector('.Inner').value += 'э';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'э';
            } else {
                document.querySelector('.Inner').value += 'Э';
            }
        }
    }
    document.querySelector('.keyQuote').classList.add('klickkey');
});
document.querySelector('.keyEnter').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += '\n';
    document.querySelector('.keyEnter').classList.add('klickkey');
});
document.querySelector('.keyShift').addEventListener('mousedown', () => {
    document.querySelector('.keyShift').classList.add('klickkey');
});
document.querySelector('.keyShiftR').addEventListener('mousedown', () => {
    document.querySelector('.keyShiftR').classList.add('klickkey');
});
document.querySelector('.keyCtrl').addEventListener('mousedown', () => {
    document.querySelector('.keyCtrl').classList.add('klickkey');
});
document.querySelector('.keyWin').addEventListener('mousedown', () => {
    document.querySelector('.keyWin').classList.add('klickkey');
});
document.querySelector('.keyAlt').addEventListener('mousedown', () => {
    document.querySelector('.keyAlt').classList.add('klickkey');
});
document.querySelector('.keySpace').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += ' ';
    document.querySelector('.keySpace').classList.add('klickkey');
});
document.querySelector('.keyAltR').addEventListener('mousedown', () => {
    document.querySelector('.keyAltR').classList.add('klickkey');
});
document.querySelector('.keyCtrlR').addEventListener('mousedown', () => {
    document.querySelector('.keyCtrlR').classList.add('klickkey');
});
document.querySelector('.keyZ').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Z';
            } else {
                document.querySelector('.Inner').value += 'z';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'z';
            } else {
                document.querySelector('.Inner').value += 'Z';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Я';
            } else {
                document.querySelector('.Inner').value += 'я';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'я';
            } else {
                document.querySelector('.Inner').value += 'Я';
            }
        }
    }
    document.querySelector('.keyZ').classList.add('klickkey');
});
document.querySelector('.keyX').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'X';
            } else {
                document.querySelector('.Inner').value += 'x';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'x';
            } else {
                document.querySelector('.Inner').value += 'X';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ч';
            } else {
                document.querySelector('.Inner').value += 'ч';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ч';
            } else {
                document.querySelector('.Inner').value += 'Ч';
            }
        }
    }
    document.querySelector('.keyX').classList.add('klickkey');
});
document.querySelector('.keyC').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'C';
            } else {
                document.querySelector('.Inner').value += 'c';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'c';
            } else {
                document.querySelector('.Inner').value += 'C';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'С';
            } else {
                document.querySelector('.Inner').value += 'с';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'с';
            } else {
                document.querySelector('.Inner').value += 'С';
            }
        }
    }
    document.querySelector('.keyC').classList.add('klickkey');
});
document.querySelector('.keyV').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'V';
            } else {
                document.querySelector('.Inner').value += 'v';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'v';
            } else {
                document.querySelector('.Inner').value += 'V';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'М';
            } else {
                document.querySelector('.Inner').value += 'м';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'м';
            } else {
                document.querySelector('.Inner').value += 'М';
            }
        }
    }
    document.querySelector('.keyV').classList.add('klickkey');
});
document.querySelector('.keyB').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'B';
            } else {
                document.querySelector('.Inner').value += 'b';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'b';
            } else {
                document.querySelector('.Inner').value += 'B';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'И';
            } else {
                document.querySelector('.Inner').value += 'и';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'и';
            } else {
                document.querySelector('.Inner').value += 'И';
            }
        }
    }
    document.querySelector('.keyB').classList.add('klickkey');
});
document.querySelector('.keyN').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'N';
            } else {
                document.querySelector('.Inner').value += 'n';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'n';
            } else {
                document.querySelector('.Inner').value += 'N';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Т';
            } else {
                document.querySelector('.Inner').value += 'т';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'т';
            } else {
                document.querySelector('.Inner').value += 'Т';
            }
        }
    }
    document.querySelector('.keyN').classList.add('klickkey');
});
document.querySelector('.keyM').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'M';
            } else {
                document.querySelector('.Inner').value += 'm';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'm';
            } else {
                document.querySelector('.Inner').value += 'M';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ь';
            } else {
                document.querySelector('.Inner').value += 'ь';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ь';
            } else {
                document.querySelector('.Inner').value += 'Ь';
            }
        }
    }
    document.querySelector('.keyM').classList.add('klickkey');
});
document.querySelector('.keyComma').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '<';
            } else {
                document.querySelector('.Inner').value += ',';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '<';
            } else {
                document.querySelector('.Inner').value += ',';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Б';
            } else {
                document.querySelector('.Inner').value += 'б';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'б';
            } else {
                document.querySelector('.Inner').value += 'Б';
            }
        }
    }
    document.querySelector('.keyComma').classList.add('klickkey');
});
document.querySelector('.keyPeriod').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '>';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '>';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'Ю';
            } else {
                document.querySelector('.Inner').value += 'ю';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += 'ю';
            } else {
                document.querySelector('.Inner').value += 'Ю';
            }
        }
    }
    document.querySelector('.keyPeriod').classList.add('klickkey');
});
document.querySelector('.keySlach').addEventListener('mousedown', (event) => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '/';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += '?';
            } else {
                document.querySelector('.Inner').value += '/';
            }
        }
    } else {
        if (caps === 'nocaps') {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ',';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        } else {
            if (event.getModifierState('Shift')) {
                document.querySelector('.Inner').value += ',';
            } else {
                document.querySelector('.Inner').value += '.';
            }
        }
    }
    document.querySelector('.keySlach').classList.add('klickkey');
});
document.querySelector('.keyLeft').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += '◄';
    document.querySelector('.keyLeft').classList.add('klickkey');
});
document.querySelector('.keyUp').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += '▲';
    document.querySelector('.keyUp').classList.add('klickkey');
});
document.querySelector('.keyDovn').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += '▼';
    document.querySelector('.keyDovn').classList.add('klickkey');
});
document.querySelector('.keyRecht').addEventListener('mousedown', () => {
    document.querySelector('.Inner').value += '►';
    document.querySelector('.keyRecht').classList.add('klickkey');
});
document.querySelector('.keyCapsLock').addEventListener('mousedown', () => {
    if (lang === 'eng') {
        if (caps === 'nocaps') {
            for (let item of ArrEng) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEngCaps) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.add('klickkey');
            caps = 'caps';
        } else {
            for (let item of ArrEngCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrEng) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.remove('klickkey');
            caps = 'nocaps';
        }
    } else {
        if (caps === 'nocaps') {
            for (let item of ArrRu) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRuCaps) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.add('klickkey');
            caps = 'caps'
        } else {
            for (let item of ArrRuCaps) {
                item.classList.remove('hidden')
            }
            for (let item of ArrRu) {
                item.classList.add('hidden')
            }
            document.querySelector('.keyCapsLock').classList.remove('klickkey');
            caps ='nocaps'
        }
    }
});


document.addEventListener('mouseup', () => {
    document.querySelector('.keyBackquote').classList.remove('klickkey');
    document.querySelector('.keyInner1').classList.remove('klickkey');
    document.querySelector('.keyInner2').classList.remove('klickkey');
    document.querySelector('.keyInner3').classList.remove('klickkey');
    document.querySelector('.keyInner4').classList.remove('klickkey');
    document.querySelector('.keyInner5').classList.remove('klickkey');
    document.querySelector('.keyInner6').classList.remove('klickkey');
    document.querySelector('.keyInner7').classList.remove('klickkey');
    document.querySelector('.keyInner8').classList.remove('klickkey');
    document.querySelector('.keyInner9').classList.remove('klickkey');
    document.querySelector('.keyInner0').classList.remove('klickkey');
    document.querySelector('.keyInnerDefis').classList.remove('klickkey');
    document.querySelector('.keyInnerRavno').classList.remove('klickkey');
    document.querySelector('.keyInnerBackspace').classList.remove('klickkey');
    document.querySelector('.keyTab').classList.remove('klickkey');
    document.querySelector('.keyQ').classList.remove('klickkey');
    document.querySelector('.keyW').classList.remove('klickkey');
    document.querySelector('.keyE').classList.remove('klickkey');
    document.querySelector('.keyR').classList.remove('klickkey');
    document.querySelector('.keyT').classList.remove('klickkey');
    document.querySelector('.keyY').classList.remove('klickkey');
    document.querySelector('.keyU').classList.remove('klickkey');
    document.querySelector('.keyI').classList.remove('klickkey');
    document.querySelector('.keyO').classList.remove('klickkey');
    document.querySelector('.keyP').classList.remove('klickkey');
    document.querySelector('.keyBracketLeft').classList.remove('klickkey');
    document.querySelector('.keyBracketRight').classList.remove('klickkey');
    document.querySelector('.keyBackslach').classList.remove('klickkey');
    document.querySelector('.keyDel').classList.remove('klickkey');
    document.querySelector('.keyA').classList.remove('klickkey');
    document.querySelector('.keyS').classList.remove('klickkey');
    document.querySelector('.keyD').classList.remove('klickkey');
    document.querySelector('.keyF').classList.remove('klickkey');
    document.querySelector('.keyG').classList.remove('klickkey');
    document.querySelector('.keyH').classList.remove('klickkey');
    document.querySelector('.keyJ').classList.remove('klickkey');
    document.querySelector('.keyK').classList.remove('klickkey');
    document.querySelector('.keyL').classList.remove('klickkey');
    document.querySelector('.keySemikolon').classList.remove('klickkey');
    document.querySelector('.keyQuote').classList.remove('klickkey');
    document.querySelector('.keyEnter').classList.remove('klickkey');
    document.querySelector('.keyShift').classList.remove('klickkey');
    document.querySelector('.keyZ').classList.remove('klickkey');
    document.querySelector('.keyX').classList.remove('klickkey');
    document.querySelector('.keyC').classList.remove('klickkey');
    document.querySelector('.keyV').classList.remove('klickkey');
    document.querySelector('.keyB').classList.remove('klickkey');
    document.querySelector('.keyN').classList.remove('klickkey');
    document.querySelector('.keyM').classList.remove('klickkey');
    document.querySelector('.keyComma').classList.remove('klickkey');
    document.querySelector('.keyPeriod').classList.remove('klickkey');
    document.querySelector('.keySlach').classList.remove('klickkey');
    document.querySelector('.keyShiftR').classList.remove('klickkey');
    document.querySelector('.keyUp').classList.remove('klickkey');
    document.querySelector('.keyLeft').classList.remove('klickkey');
    document.querySelector('.keyDovn').classList.remove('klickkey');
    document.querySelector('.keyRecht').classList.remove('klickkey');
    document.querySelector('.keyCtrl').classList.remove('klickkey');
    document.querySelector('.keyWin').classList.remove('klickkey');
    document.querySelector('.keyAlt').classList.remove('klickkey');
    document.querySelector('.keySpace').classList.remove('klickkey');
    document.querySelector('.keyAltR').classList.remove('klickkey');
    document.querySelector('.keyCtrlR').classList.remove('klickkey');
})
// document.querySelector('.keyBackquote')
//String.fromCharCode(92);


        // document.addEventListener('keyup', (event => {
        //     alert(event.code)
        // }));
    
    

