let a=[],b=0,c,d,e=1,f,g

function onclick(){
    a=input.value
    c=a[0]
    g=a[0]
    d=a.length-1
    while(b<=d){
        if(a[b]>a[e]){
            c=a[b]
        }else if(a[b]<a[e]){
            g=a[b]
        }
        b++
    }
    document.write("result max:"+ c +"<br>"+ "result min:"+ g)
}


var button=document.getElementById('b1')
button.addEventListener('click',onclick)