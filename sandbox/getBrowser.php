<?php
echo "

<html>
<head>

function getBrowser()
{
	var x = navigator.appName;
    if (x == 'Microsoft Internet Explorer')
	{
		'Thank you for contacting us, we'll be in touch shortly.<br/><br/>
		Return to Logan Photography and Design by clicking <a href='../../ie_index.html'>here</a>';
	}
	else
	{
		'Thank you for contacting us, we'll be in touch shortly.<br/><br/>
		Return to Logan Photography and Design by clicking <a href='../..'>here</a>';		
	}
}

</head>


<body onload='getBrowser()'>


</body>
</html>";
?>