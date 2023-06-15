var b=0;
var c="";




function add()
{
    if(c.length!=0)
    {
        c=c+"+";
    }
    
    var a=parseInt(document.getElementById("n1").value);
    c=c+a
    
    b=a+b;
    document.getElementById("res").textContent=b;
    document.getElementById("n1").value="null";

}
function sub()
{
    if(c.length!=0)
    {
        c=c+"-";
    }
    var a=parseInt(document.getElementById("n1").value);
    c=c+a;
    
    b=b-a;
    document.getElementById("res").textContent=b;
    document.getElementById("n1").value="null";
}
function mul()
{
    if(c.length!=0)
    {
        c=c+"*";
    }
    var a=parseInt(document.getElementById("n1").value);
    c=c+a;
    b=b*a;
    document.getElementById("res").textContent=b;
    

    document.getElementById("n1").value="null";
}
function div()
{
    if(c.length!=0)
    {
        c=c+"/";
    }
    var a=parseInt(document.getElementById("n1").value);
    c=c+a;
    

    b=b/a;
    document.getElementById("res").textContent=b;
    document.getElementById("n1").value="null";
}
function equal()
{
    document.getElementById("exp").textContent=c;
}
