<?php

$html = '
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style>
body, p { direction: ltr; font-family: \'DejaVu Sans\';}
</style>
';

$html .=$_POST['bodyHtml'];
//==============================================================
//==============================================================
//==============================================================

include("mpdf.php");

$mpdf=new mPDF('c'); 
$mpdf=new mPDF('hy-HY','A4',9,'dejavusans');
$mpdf->allow_charset_conversion=true; 
$mpdf->WriteHTML($html);
$mpdf->Output();
exit;

//==============================================================
//==============================================================
//==============================================================


?>